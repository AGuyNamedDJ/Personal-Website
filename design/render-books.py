import bpy, math, os
from mathutils import Vector
from pathlib import Path
ROOT=Path(__file__).resolve().parents[1]
bpy.ops.object.select_all(action='SELECT');bpy.ops.object.delete(use_global=False)
scene=bpy.context.scene
scene.render.engine='CYCLES';scene.cycles.samples=96;scene.cycles.use_denoising=True
scene.render.resolution_x=1600;scene.render.resolution_y=1000;scene.render.resolution_percentage=100
scene.render.image_settings.file_format='PNG';scene.render.film_transparent=True
scene.world.color=(.65,.65,.65)
scene.view_settings.view_transform='AgX'
def mat(name,color,rough=.45):
 m=bpy.data.materials.new(name);m.diffuse_color=(*color,1);m.use_nodes=True;m.node_tree.nodes.get('Principled BSDF').inputs['Base Color'].default_value=(*color,1);m.node_tree.nodes.get('Principled BSDF').inputs['Roughness'].default_value=rough;return m
paper=mat('Ivory paper',(0.84,.82,.74),.8);floor=mat('Studio warm grey',(.79,.77,.72),.66)
def cube(name,loc,scale,material,parent=None,bevel=.015):
 bpy.ops.mesh.primitive_cube_add(size=1,location=loc);o=bpy.context.object;o.name=name;o.dimensions=scale;bpy.ops.object.transform_apply(location=False,rotation=False,scale=True);o.data.materials.append(material)
 if bevel:mod=o.modifiers.new('Soft binding edges','BEVEL');mod.width=bevel;mod.segments=3;o.modifiers.new('Weighted normals','WEIGHTED_NORMAL')
 if parent:o.parent=parent
 return o
spec=[('CB1.png',(268,196,490,656),(-1.72,.32,.02),-16,(.008,.035,.14)),('CB2.png',(277,211,468,625),(0,-.27,.16),2,(.21,.035,.008)),('TLI.png',(283,212,457,612),(1.72,.43,.06),16,(.71,.64,.48))]
for i,(file,crop,loc,turn,color) in enumerate(spec):
 group=bpy.data.objects.new('Book '+str(i),None);scene.collection.objects.link(group)
 binding=mat('Binding '+str(i),color,.4);w=1.8;h=2.4;depth=.25
 cube('Page block',(0,0,h/2),(w-.045,depth,h-.055),paper,group)
 cube('Back cover',(0,depth/2+.025,h/2),(w,.04,h),binding,group)
 cube('Front cover',(0,-depth/2-.025,h/2),(w,.04,h),binding,group)
 cube('Spine',(-w/2+.02,0,h/2),(.055,depth+.08,h),binding,group)
 # Fine page edges catch the light as geometry, rather than a painted shadow.
 for p in range(22):cube('Paper edge',(w/2-.012,-depth/2+p*depth/22,h/2),(.008,.002,h-.07),mat('Edge'+str(i)+'_'+str(p),(.58,.55,.49),.9),group,0)
 cover=bpy.data.materials.new('Original cover '+file);cover.use_nodes=True;n=cover.node_tree.nodes;l=cover.node_tree.links;bs=n.get('Principled BSDF');bs.inputs['Roughness'].default_value=.43
 image=n.new('ShaderNodeTexImage');image.image=bpy.data.images.load(str(ROOT/'public/assets/images'/file));image.interpolation='Linear';l.new(image.outputs['Color'],bs.inputs['Base Color'])
 uv=n.new('ShaderNodeTexCoord');scale=n.new('ShaderNodeVectorMath');scale.operation='MULTIPLY_ADD';x,y,cw,ch=crop;scale.inputs[1].default_value=(cw/1024,ch/1024,1);scale.inputs[2].default_value=(x/1024,(1024-y-ch)/1024,0);l.new(uv.outputs['UV'],scale.inputs[0]);l.new(scale.outputs['Vector'],image.inputs['Vector'])
 bpy.ops.mesh.primitive_plane_add(size=1,location=(0,-depth/2-.046,h/2));o=bpy.context.object;o.name='Printed cover '+str(i);o.rotation_euler[0]=math.radians(90);o.scale=(w-.018,h-.018,1);o.data.materials.append(cover);o.parent=group
 group.location=loc;group.rotation_euler=(0,math.radians(-3 if i!=1 else 0),math.radians(turn))
ground=cube('Ground',(0,0,-.12),(200,200,.2),floor,None,.0)
ground.is_shadow_catcher=True
def aim(o,at):o.rotation_euler=(Vector(at)-o.location).to_track_quat('-Z','Y').to_euler()
def light(name,loc,power,size):
 bpy.ops.object.light_add(type='AREA',location=loc);o=bpy.context.object;o.name=name;o.data.energy=power;o.data.shape='DISK';o.data.size=size;aim(o,(0,0,1))
light('Large softbox',(-3,-4,7),650,6);light('Warm rim',(4,2,5),700,4);light('Front fill',(2,-6,3),200,4)
bpy.ops.object.camera_add(location=(3.4,-11,4.6));camera=bpy.context.object;camera.data.lens=52;scene.camera=camera;aim(camera,(0,0,1.25))
scene.render.filepath=str(ROOT/'public/assets/editorial/books/collection.png')
bpy.ops.file.pack_all()
bpy.ops.wm.save_as_mainfile(filepath=str(ROOT/'design/books.blend'))
bpy.ops.render.render(write_still=True)
