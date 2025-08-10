import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the structure of a publication based on the frontmatter
export interface Publication {
  slug: string;
  title: string;
  authors: string[];
  year: number;
  venue: string;
  doi?: string;
  links: {
    paper?: string;
    code?: string;
    demo?: string;
    bibtex?: string;
  };
  highlight?: boolean;
  content: string;
}

const publicationsDirectory = path.join(process.cwd(), 'content/publications');

export function getAllPublications(): Publication[] {
  // Get file names under /content/publications
  const fileNames = fs.readdirSync(publicationsDirectory);

  const allPublicationsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName): Publication => {
      // Remove ".mdx" from file name to get slug
      const slug = fileName.replace(/\.mdx$/, '');

      // Read markdown file as string
      const fullPath = path.join(publicationsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);

      // TODO: Add Zod validation here

      return {
        slug,
        content,
        ...(data as {
          title: string;
          authors: string[];
          year: number;
          venue: string;
          doi?: string;
          links: {
            paper?: string;
            code?: string;
            demo?: string;
            bibtex?: string;
          };
          highlight?: boolean;
        }),
      };
    });

  // Sort publications by year descending
  return allPublicationsData.sort((a, b) => {
    if (a.year < b.year) {
      return 1;
    } else {
      return -1;
    }
  });
}
