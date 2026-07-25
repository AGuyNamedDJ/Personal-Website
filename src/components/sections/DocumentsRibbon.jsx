import Image from "next/image";

const documents = [
  {
    label: "Résumé",
    preview: "/assets/images/ResumePreview.png",
    href: "/files/DJR-Resume.pdf",
  },
  {
    label: "Curriculum Vitae",
    preview: "/assets/images/CVPreview.png",
    href: "/files/DJR-CurriculumVitae.pdf",
  },
];

export default function DocumentsRibbon() {
  return (
    <section className="px-6 pb-24 pt-12 sm:px-10 md:pb-32">
      <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
        {documents.map((document) => (
          <article
            key={document.label}
            className="overflow-hidden rounded-3xl border border-[#D2C2AA] bg-white shadow-sm"
          >
            <div className="relative aspect-[4/3] bg-[#F4EFE7]">
              <Image
                src={document.preview}
                alt={`${document.label} preview`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain p-5"
              />
            </div>
            <div className="flex items-center justify-between gap-4 p-6">
              <h3 className="text-xl font-semibold text-[#241408]">
                {document.label}
              </h3>
              <div className="flex gap-4 text-sm font-semibold">
                <a href={document.href} target="_blank" rel="noopener noreferrer">
                  View
                </a>
                <a href={document.href} download>
                  Download
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
