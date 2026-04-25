import Link from 'next/link';
import Icon from './icon';

export const NavBar = () => {
  return (
    <div className="bg-accent/20 border-(foreground/30) absolute top-5 left-1/2 z-50 -translate-x-1/2 rounded-full border px-4 py-2 backdrop-blur-sm">
      <nav className="flex flex-row items-center gap-4">
        {/* navigation links */}
        <div className="flex flex-row items-center gap-4">
          <Link href="#home" className="inline-flex items-center leading-none">
            Home
          </Link>
          <Link href="#about" className="inline-flex items-center leading-none">
            About
          </Link>
          <Link
            href="#projects"
            className="inline-flex items-center leading-none"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center leading-none"
          >
            Contact
          </Link>
        </div>
        {/* divider */}
        <div className="h-4 w-px self-center bg-white"></div>
        {/* social media links */}
        <div className="flex flex-row items-center justify-center gap-4">
          <Link
            href="https://github.com/RaptorAssassin"
            target="_blank"
            className="inline-flex items-center justify-center leading-none"
          >
            <Icon src="/icons/github.svg" tooltip="GitHub" size={24} />
          </Link>
          <Link
            href="https://x.com/raptor_dev_"
            target="_blank"
            className="inline-flex items-center justify-center leading-none"
          >
            <Icon src="/icons/x.svg" tooltip="X" size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/karl-albrecht-6a1059379/"
            target="_blank"
            className="inline-flex items-center justify-center leading-none"
          >
            <Icon src="/icons/linkedin.svg" tooltip="LinkedIn" size={24} />
          </Link>
          <Link
            href="https://leetcode.com/u/RaptorDev/"
            target="_blank"
            className="inline-flex items-center justify-center leading-none"
          >
            <Icon src="/icons/leetcode.svg" tooltip="LeetCode" size={24} />
          </Link>
        </div>
      </nav>
    </div>
  );
};
