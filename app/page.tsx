export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-14 space-y-16">

        {/* HERO */}
        <section className="rounded-3xl border border-white/10 bg-white/5 p-10">
          <p className="text-sm text-white/70">
            Industrial Engineer • Lean Six Sigma Green Belt
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold">
            Harish Reddy Chada
          </h1>

          <p className="mt-4 text-white/80 max-w-2xl leading-relaxed">
            I improve manufacturing throughput, quality, and operational flow
            using time studies, line balancing, value stream mapping,
            and KPI dashboards (Excel & Power BI).
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/harish-reddy-chada"
              target="_blank"
              className="rounded-2xl bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-3 text-sm font-semibold text-slate-950"
            >
              LinkedIn
            </a>

            <a
              href="mailto:harishreddychada33@gmail.com"
              className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold hover:bg-white/5"
            >
              Email
            </a>

            <a
              href="/Harish_Reddy_Chada_Resume.pdf"
              target="_blank"
              className="rounded-2xl border border-white/15 px-5 py-3 text-sm font-semibold hover:bg-white/5"
            >
              Download Resume
            </a>
          </div>
        </section>

        {/* PROFESSIONAL SUMMARY */}
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-extrabold">Professional Summary</h2>
          <p className="mt-4 text-white/80 leading-relaxed">
            Lean Six Sigma Green Belt Industrial Engineer with 5+ years of
            experience in high-volume manufacturing environments. Skilled in
            time studies, line balancing, VSM-driven improvements, PFMEA,
            and building data-driven dashboards to drive sustainable
            continuous improvement.
          </p>
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-2xl font-extrabold mb-6">Core Skills</h2>

          <div className="grid gap-5 md:grid-cols-3">
            {[
              "DMAIC / VSM / 5S / Kaizen",
              "Time Study & Line Balancing",
              "SPC (Cp, Cpk) & MSA",
              "PFMEA & Control Plans",
              "Excel & Power BI Dashboards",
              "OEE / Scrap / FPY Improvement",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm hover:bg-white/10 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-extrabold">Experience</h2>

          <div className="mt-8 space-y-8 text-sm text-white/80">

            <div>
              <h3 className="font-bold text-lg text-white">
                Production Intern — Polaris Industries
              </h3>
              <p className="text-xs text-white/60">Roseau, MN</p>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>Conducted time studies to improve line balance and workflow efficiency.</li>
                <li>Implemented VSM improvements reducing non-value-added activities.</li>
                <li>Built KPI dashboards tracking cycle time, scrap %, and FPY.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg text-white">
                Lead Design Engineer — Tech Mahindra
              </h3>
              <p className="text-xs text-white/60">2019 – 2023</p>
              <ul className="mt-3 list-disc pl-5 space-y-2">
                <li>Applied DFMA to enhance manufacturability.</li>
                <li>Led root cause analysis using 5 Whys and 8D.</li>
                <li>Supported APQP and PPAP documentation.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-extrabold">Certifications</h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-bold">Lean Six Sigma Green Belt</h3>
              <p className="mt-2 text-sm text-white/70">
                Certified Green Belt with applied DMAIC project experience.
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 p-6 border border-white/10">
              <h3 className="font-bold">
                MS in Technology (Industrial Management)
              </h3>
              <p className="mt-2 text-sm text-white/70">
                University of Central Missouri — Summer 2025
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-extrabold">Contact</h2>
          <div className="mt-4 text-sm text-white/80 space-y-2">
            <p>Email: harishreddychada33@gmail.com</p>
            <p>LinkedIn: https://www.linkedin.com/in/harish-reddy-chada</p>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="text-center text-xs text-white/50 pt-10">
          © {new Date().getFullYear()} Harish Reddy Chada
        </footer>

      </div>
    </main>
  );
}