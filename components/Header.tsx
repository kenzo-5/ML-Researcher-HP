import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-secondary bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-3xl items-center px-4 md:px-6">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">
              研究者氏名
            </span>
          </Link>
        </div>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link
            href="/publications"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Publications
          </Link>
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Code
          </a>
          <a
            href="mailto:your-email@example.com"
            className="text-foreground/60 transition-colors hover:text-foreground/80"
          >
            Contact
          </a>
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
          {/* Theme Toggle will go here */}
        </div>
      </div>
    </header>
  );
}
