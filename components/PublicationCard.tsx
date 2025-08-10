import type { Publication } from '@/lib/publications';

// A simple author name normalization for highlighting.
// Requirement: "著者名はlowercase + 非英数除去でキー化し、研究者本人キー配列に一致したら太字"
// This implementation fulfills the basic requirement.
// The key for the researcher's name should be configured elsewhere.
const RESEARCHER_NAME_KEYS = ['bengioyoshua', 'goodfellowian', 'kingmadiederikp', 'bajimmy'];

function normalizeName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function isResearcher(author: string): boolean {
  return RESEARCHER_NAME_KEYS.includes(normalizeName(author));
}

export function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <article className="relative pl-8">
      {/* Timeline dot */}
      <div className="absolute -left-[3px] top-2 h-2 w-2 rounded-full bg-primary" />
      <h3 className="text-lg font-semibold text-primary-foreground">
        {publication.title}
      </h3>
      <div className="text-sm text-muted-foreground">
        {publication.authors.map((author, index) => (
          <span key={index} className={isResearcher(author) ? 'font-bold text-foreground' : ''}>
            {author}
            {index < publication.authors.length - 1 && ', '}
          </span>
        ))}
      </div>
      <p className="text-sm text-muted-foreground">
        <em>{publication.venue}</em>, {publication.year}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
        {publication.links.paper && (
          <a href={publication.links.paper} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">
            Paper
          </a>
        )}
        {publication.links.code && (
          <a href={publication.links.code} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">
            Code
          </a>
        )}
        {publication.links.demo && (
          <a href={publication.links.demo} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-primary hover:underline">
            Demo
          </a>
        )}
        {/* TODO: Implement BibTeX copy UI */}
      </div>
    </article>
  );
}
