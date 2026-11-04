import LeadForm from "./components/LeadForm";

const points = [
  { title: "Fast pages", body: "Server rendered by default, so the page paints quickly on a slow phone." },
  { title: "Clear next step", body: "One goal per page and one form, so visitors know what to do." },
  { title: "Measured", body: "Every form submit is a countable event you can track and improve." },
];

const faqs = [
  { q: "What does the audit cover?", a: "Page speed, mobile layout, search basics and how clearly the page asks for the next step." },
  { q: "Is it really free?", a: "Yes. You get a short written report, and you decide what to do with it." },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-20">
      <section className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-700">Sample landing page</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">Get a free website and SEO audit</h1>
          <p className="mt-4 text-lg text-slate-700">
            Send us your site. We send back a short report on speed, mobile layout and search basics, with the three fixes worth doing first.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p.title}>
                <h2 className="font-semibold">{p.title}</h2>
                <p className="text-slate-700">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <LeadForm />
        </div>
      </section>
      <section className="mt-16">
        <h2 className="text-2xl font-bold">Questions</h2>
        <dl className="mt-4 space-y-4">
          {faqs.map((f) => (
            <div key={f.q}>
              <dt className="font-semibold">{f.q}</dt>
              <dd className="text-slate-700">{f.a}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
