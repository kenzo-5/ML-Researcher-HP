import { getAllPublications } from '@/lib/publications';
import { PublicationCard } from '@/components/PublicationCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Publications",
  description: "A list of publications by Researcher Name.",
};

export default function PublicationsPage() {
  const publications = getAllPublications();

  const groupedByYear = publications.reduce<Record<number, typeof publications>>((acc, pub) => {
    const year = pub.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(pub);
    return acc;
  }, {});

  const years = Object.keys(groupedByYear).map(Number).sort((a, b) => b - a);

  return (
    <main className="container mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <header className="mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
          Publications
        </h1>
        <p className="mt-3 text-muted-foreground">
          Here is a list of my academic publications. For more details, please visit the provided links.
        </p>
      </header>
      <div className="space-y-12">
        {years.map((year) => (
          <section key={year} className="relative">
            <h2 className="sticky top-14 z-10 bg-background/80 py-2 text-2xl font-semibold backdrop-blur-sm">
              {year}
            </h2>
            <div className="relative space-y-8 border-l-2 border-dashed border-border pt-4">
              {groupedByYear[year].map((publication) => (
                <PublicationCard key={publication.slug} publication={publication} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
