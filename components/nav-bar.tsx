'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Icon from './icon';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Learning Journey', id: 'learning-journey' },
    { name: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el)
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    setIsOpen(false);
  };

  const socialItems = [
    {
      href: 'https://github.com/RaptorAssassin',
      tooltip: 'GitHub',
      src: '/icons/github.svg',
    },
    { href: 'https://x.com/raptor_dev_', tooltip: 'X', src: '/icons/x.svg' },
    {
      href: 'https://www.linkedin.com/in/karl-albrecht-6a1059379/',
      tooltip: 'LinkedIn',
      src: '/icons/linkedin.svg',
    },
    {
      href: 'https://leetcode.com/u/RaptorDev/',
      tooltip: 'LeetCode',
      src: '/icons/leetcode.svg',
    },
  ];

  const renderMenuLinks = (mobile?: boolean) =>
    menuItems.map((item) => (
      <button
        key={item.name}
        type="button"
        onClick={() => scrollToSection(item.id)}
        className={[
          'inline-flex items-center leading-none transition hover:opacity-80',
          mobile ? 'text-lg font-semibold sm:text-xl' : 'text-base',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {item.name}
      </button>
    ));

  const renderSocialLinks = (iconSize: number) =>
    socialItems.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        target="_blank"
        className="inline-flex items-center justify-center leading-none"
      >
        <Icon src={item.src} tooltip={item.tooltip} size={iconSize} />
      </Link>
    ));

  const shellClasses = isOpen
    ? 'bg-white/20 border-(foreground/30) absolute top-5 right-4 left-auto z-50 w-[calc(100vw-2rem)] max-w-2xl rounded-2xl border px-4 py-2 backdrop-blur-sm md:left-1/2 md:right-auto md:w-auto md:-translate-x-1/2 md:max-w-none md:rounded-full'
    : 'absolute top-5 right-4 left-auto z-50 w-auto rounded-full border-0 bg-transparent px-0 py-0 backdrop-blur-none md:left-1/2 md:right-auto md:-translate-x-1/2 md:bg-white/20 md:border-(foreground/30) md:w-auto md:max-w-none md:rounded-full md:border md:px-4 md:py-2 md:backdrop-blur-sm';

  return (
    <div className={shellClasses}>
      <nav className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
        {/* Menu/X Button */}
        <div className="flex w-full items-center justify-end md:hidden">
          <button
            type="button"
            aria-controls="mobile-nav-panel"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/15"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        <div className="hidden flex-row items-center gap-4 md:flex">
          {renderMenuLinks(false)}
        </div>

        <div className="hidden h-4 w-px self-center bg-white md:block"></div>

        <div className="hidden flex-row items-center justify-center gap-4 md:flex">
          {renderSocialLinks(24)}
        </div>

        {isOpen ? (
          <div
            id="mobile-nav-panel"
            className="flex flex-col gap-4 border-t border-white/15 pt-3 md:hidden"
          >
            <div className="flex flex-col gap-3">{renderMenuLinks(true)}</div>

            <div className="h-px w-full bg-white/40"></div>

            <div className="flex flex-row items-center gap-2">
              {renderSocialLinks(22)}
            </div>
          </div>
        ) : null}
      </nav>
    </div>
  );
};
