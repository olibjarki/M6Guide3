import Link from "next/link";

type SidebarProps = {
  pageTitle: string;
};

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/articles" },
  { label: "About", href: "/about" },
];

export function Sidebar({ pageTitle }: SidebarProps) {
  return (
    <>
      {/* Mobile: top bar */}
      <aside className="md:hidden fixed top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4 bg-emerald-200">
        <span className="font-kalam text-2xl font-bold">{pageTitle}</span>
        <nav className="flex flex-row gap-4 text-base">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Desktop: left sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 h-screen w-64 flex-col gap-8 p-10">
        <span className="font-kalam text-4xl font-bold">{pageTitle}</span>
        <nav className="flex flex-col gap-4 text-lg">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:underline">
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
