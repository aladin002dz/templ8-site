/** Shared shell for /terms, /privacy, /refund and /contact. */
export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string;
  /** Plain-language date, e.g. "20 September 2026". */
  updated?: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <article className="mx-auto max-w-2xl px-5 py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-slate-100">
        {title}
      </h1>

      {updated && (
        <p className="mt-3 text-sm text-slate-500 dark:text-slate-500">
          Last updated: {updated}
        </p>
      )}

      {intro && (
        <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">
          {intro}
        </p>
      )}

      <div className="mt-10 space-y-10">{children}</div>
    </article>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        {heading}
      </h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {children}
      </div>
    </section>
  );
}

export function LegalList({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2 pl-5">
      {items.map((item, index) => (
        <li key={index} className="list-disc">
          {item}
        </li>
      ))}
    </ul>
  );
}
