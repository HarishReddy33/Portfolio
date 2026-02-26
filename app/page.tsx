export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">

        {/* Header */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Harish Reddy Chada</h1>
          <p className="text-lg text-gray-600">
            Lean Six Sigma Green Belt | Industrial Engineer | Continuous Improvement
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              className="px-4 py-2 bg-black text-white rounded-xl shadow"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your.email@gmail.com"
              className="px-4 py-2 border rounded-xl shadow"
            >
              Contact Me
            </a>
          </div>
        </section>

        {/* About */}
        <section className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            I am a Lean Six Sigma Green Belt–certified Industrial Engineer with over 5 years of experience
            improving throughput, quality, and efficiency in high-volume manufacturing environments.
            I specialize in time studies, line balancing, value stream mapping, layout optimization,
            and KPI dashboards using Excel and Power BI.
          </p>
        </section>

        {/* Skills */}
        <section className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-6">Core Competencies</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "Lean Six Sigma (DMAIC)",
              "Time & Motion Studies",
              "Line Balancing",
              "Value Stream Mapping",
              "OEE Improvement",
              "SPC (Cp, Cpk)",
              "PFMEA",
              "5S & Kaizen",
              "Power BI Dashboards",
            ].map((skill) => (
              <div key={skill} className="bg-gray-100 p-4 rounded-xl text-sm">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold">Production Intern – Polaris Industries</h3>
              <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                <li>Conducted time studies and improved line balance.</li>
                <li>Reduced waste using VSM and layout redesign.</li>
                <li>Developed KPI dashboards for cycle time and FPY tracking.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold">Lead Design Engineer – Tech Mahindra</h3>
              <ul className="list-disc pl-6 text-gray-700 mt-2 space-y-1">
                <li>Applied DFMA principles to improve manufacturability.</li>
                <li>Led RCA using 5 Whys and 8D methodology.</li>
                <li>Improved product quality and reduced rework.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm pt-8">
          © {new Date().getFullYear()} Harish Reddy Chada
        </footer>

      </div>
    </main>
  );
}