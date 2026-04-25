import Link from 'next/link';

export const NavBar = () => {
  return (
    <div className="bg-accent/20 border-(foreground/30) absolute top-5 left-1/2 z-50 -translate-x-1/2 rounded-full border px-4 py-2 backdrop-blur-sm">
      <nav className="flex flex-row gap-4">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </div>
  );
};
