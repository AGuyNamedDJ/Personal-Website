const entries = [
  {
    year: 2028,
    title: "Doctor of Pharmacy",
    detail: "Expected May 2028, Chicago State University",
  },
  {
    year: 2026,
    title: "Pharmacy Intern, UChicago Medicine",
    detail:
      "Discharge Medication Program and outpatient pharmacy, supporting transitions of care, medication access, compounding, and pharmacy operations.",
  },
  {
    year: 2025,
    title: "Astellas Bridge to Industry",
    detail:
      "Selected for mentorship across translational medicine, applied safety, quality, biomarkers, and drug development.",
  },
  {
    year: 2025,
    title: "Master of Science in Biological Sciences",
    detail:
      "Completed computational biology research in bioinformatics and molecular modeling at Mississippi College.",
  },
  {
    year: 2025,
    title: "Founded NaS",
    detail:
      "Established the scientific and technical direction for a precision-medicine company focused on better therapeutic decisions.",
  },
  {
    year: 2023,
    title: "Software Engineer, Scale AI",
    detail:
      "Worked on technical evaluation, safety, search quality, and software systems through January 2025.",
  },
  {
    year: 2022,
    title: "Software Engineering",
    detail:
      "Completed full-stack development, algorithms, and systems design training at the University of Illinois Chicago.",
  },
  {
    year: 2018,
    title: "Bachelor of Science in Biology",
    detail: "Jackson State University.",
  },
];

export default function TimelineRibbonClient() {
  return (
    <ol className="space-y-0 border-l border-[#D2C2AA]">
      {entries.map((entry) => (
        <li
          key={`${entry.year}-${entry.title}`}
          className="relative grid gap-2 border-b border-[#E6DDD0] py-7 pl-8 md:grid-cols-[110px_1fr] md:gap-6"
        >
          <span className="absolute -left-2 top-9 h-4 w-4 rounded-full border-4 border-white bg-[#7A5B3A]" />
          <p className="text-sm font-semibold text-[#7A5B3A]">{entry.year}</p>
          <div>
            <h3 className="text-lg font-semibold text-[#241408]">
              {entry.title}
            </h3>
            <p className="mt-1 leading-relaxed text-neutral-700">
              {entry.detail}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}
