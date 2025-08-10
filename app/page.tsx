import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 md:px-6">
      <section className="flex min-h-[calc(100dvh-8rem)] flex-col justify-center py-12 md:py-24">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            研究者氏名
          </h1>
          <p className="max-w-[600px] text-muted-foreground md:text-xl">
            Text-to-MotionとVision-Language Model (VLM) の境界を探求する、没入型インタラクション研究者。
          </p>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href="/publications"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Publications
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-md border border-secondary bg-transparent px-8 text-sm font-medium shadow-sm transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            GitHub
          </a>
          <a
            href="mailto:contact@example.com"
            className="inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium transition-colors hover:bg-secondary/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Email
          </a>
        </div>
      </section>
      {/* Featured Works section will go here later */}
    </main>
  );
}
