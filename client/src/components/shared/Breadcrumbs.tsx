import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <ol className="flex items-center flex-wrap gap-2 text-sm">
        <li className="flex items-center">
          <Link href="/">
            <a className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              <span>Home</span>
            </a>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.href} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              {isLast ? (
                <span className="text-foreground font-medium" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link href={item.href}>
                  <a className="text-muted-foreground hover:text-foreground transition-colors">
                    {item.name}
                  </a>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
