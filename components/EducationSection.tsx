export function EducationSection() {
  return (
    <section id="education" className="section-padding bg-muted/30">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[minmax(0,1.4fr),minmax(0,1.1fr)] items-start">
        <div>
          <p className="text-sm font-medium tracking-widest uppercase text-primary mb-3">
            Education
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
            Academic background
          </h2>
          <div className="space-y-5 text-sm text-muted-foreground">
            <div>
              <div className="flex items-baseline justify-between gap-2">
                <p className="font-medium text-foreground">Texas A&amp;M University</p>
                <p className="text-xs">Aug 2025 – Dec 2026 (expected)</p>
              </div>
              <p className="text-sm">Master&apos;s of Science in Data Science</p>
              <p className="text-xs mt-1">CGPA: 3.75/4.00 . College Station, Texas, USA</p>
            </div>
            <div>
              <div className="flex items-baseline justify-between gap-2">
                <p className="font-medium text-foreground">CVR College of Engineering</p>
                <p className="text-xs">2021 – 2025</p>
              </div>
              <p className="text-sm">
                B.Tech in Computer Science Engineering (Data Science)
              </p>
              <p className="text-xs mt-1">CGPA: 4.00 / 4.00 · Hyderabad, Telangana</p>
            </div>
          </div>
        </div>

        <div
          id="certifications"
          className="rounded-2xl bg-card p-6 text-sm text-muted-foreground border border-border"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">
            Certifications
          </p>
          <ul className="space-y-2">
            <li>AWS Academy Machine Learning Foundations</li>
            <li>Python – HackerRank</li>
            <li>Salesforce Virtual Internship</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
