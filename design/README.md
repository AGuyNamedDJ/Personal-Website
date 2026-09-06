# Dalron Robertson — site redesign

The complete site uses a shared black, soft-white, silver, and champagne system. Science, writing, biography, and personal photography have distinct compositions within that system. Motion follows normal scrolling; photography uses manual dots and a keyboard-accessible viewer. Reduced-motion preferences disable the movement. The website never starts playback automatically.

## Visual assets

- `public/assets/editorial/scientific-form.webp`: retired conceptual artwork from the earlier design, retained with its original PNG for provenance. It is no longer used on the website or social preview.
- `public/assets/editorial/books/collection.webp`: Blender studio render using Dalron's three existing cover designs. The lossless PNG is retained beside it.
- `design/books.blend`: editable Blender scene with the original cover textures packed into the file.
- `design/render-books.py`: reproducible scene construction. Run `blender -b --factory-startup --python design/render-books.py` from any directory with Blender 5.2. It uses Cycles, 96 samples, transparent background, a shadow-catching ground, modeled bindings and paper edges, and three softboxes. Render conversion uses Sharp, already present through Next.js.
- All portraits and journal photos continue to use the site's existing public S3 library. Gallery-specific photographer credit is preserved. No generated personal photographs are used.

## Scientific-art prompt

Use case: stylized-concept. Asset type: premium scientific editorial website hero, landscape 3:2. Create an exceptionally art-directed photorealistic CGI macro image inspired by sophisticated industrial design photography. One exquisite twisting ribbon of translucent smoke-black glass and brushed titanium, like a folded molecular surface, with a warm amber light glowing softly through one inner edge. Form is a complex sinuous organically folded biomolecular sculpture, sculptural and precise, with fine layered lamellae and subtle microstructure, not a DNA helix, no spheres, no circuit boards. Object occupies right 70 percent and lower two thirds of frame, immense, close cropped by right and lower edge. Background absolute near-black #070708 seamlessly, lots of completely black negative space in upper-left 35 percent. Cinematic horizontal amber rim light, rich deep blacks and subtle spectral silver highlights, physically based materials, extreme clarity, like a carefully composed luxury product macro photographed on a 100mm lens. Restrained, almost monochrome warm silver and black with just amber internally. No text, typography, logos, watermarks, UI, people or laboratories. This is conceptual research artwork, not a scientific diagram. Deliver 1536x1024 or larger landscape.

## Validation

Run `npm run build` for the complete production route build. Run `node --experimental-default-type=module --test tests/album-loader.test.mjs` on Node 22 for shared gallery-loader tests (real filename formats, pagination, version pairing, special characters, failed requests, and repeated-token protection).

Main routes: `/`, `/work`, `/writing`, `/about`, `/life`. The redesign also covers all eight existing `/creative-studio/...` albums, both legal pages, the HTML and XML sitemaps, the missing-page view, and the generated social preview at `/opengraph-image`. Legal policy text is preserved.

## Photography refinement

Home uses a Chicago architectural photograph and a smiling graduation portrait; Life uses a separate river-at-dusk photograph. Work opens with typography rather than abstract artwork. The page photographs and featured carousel selections are assigned in `src/lib/editorial-images.js` so the core pages do not repeat photographs. The About and Writing page designs are preserved. Album listings naturally retain the photographs within their full collections.
