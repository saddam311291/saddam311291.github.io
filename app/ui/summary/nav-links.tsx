'use client';
import {
  LinkIcon,
  PhoneIcon,
  ClipboardIcon
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/saddam311291', icon: LinkIcon , copyText: 'https://www.linkedin.com/in/saddam311291/'},
  { name: 'GitHub', href: 'https://github.com/saddam311291', icon: LinkIcon , copyText: 'https://github.com/saddam311291/' },
  { name: 'Profile', href: 'https://saddam311291.github.io/',  icon: LinkIcon, copyText: 'https://saddam311291.github.io/' },
  { name: 'E-mail ', href: 'mailto:saddam@example.com', icon: LinkIcon, copyText: 'saddam311291@gmail.com' },
  { name: 'Phone  ', href: 'tel:+8801715480371', icon: PhoneIcon, copyText: '+8801715480371' }
];

export default function NavLinks() {
  const pathname = usePathname();
  const [copied, setCopied] = useState<number | null>(null);

  function handleCopy(text: string, index: number): void {
    navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000); // Reset copy state after 2 seconds
  }

  return (
    <>
      {links.map((link, index) => {
        const LinkIcon = link.icon;
        return (
          <div key={link.name} className="flex items-center justify-between gap-2">
            <a
              href={link.href}
              className={clsx(
                'flex h-[40px] grow items-center justify-center gap-2 rounded-md p-0 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-4 md:px-4',
                {
                  'bg-sky-100 text-blue-600': pathname === link.href,
                },
              )}
              target={link.href.startsWith('http') ? '_blank' : '_self'} // Open external links in a new tab
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined} // Security best practices for external links
            >
              <LinkIcon className="w-6" />
              <p className="block">{link.name}</p>
            </a>
            {link.copyText && (
              <div className="flex items-center">
                <ClipboardIcon
                  className="w-6 cursor-pointer hover:text-blue-600"
                  onClick={() => handleCopy(link.copyText, index)}
                  title="Copy"
                />
                {copied === index && <span className="text-green-600 ml-2">Copied!</span>}
              </div>
            )}
          </div>
        );
      })}
    </>
  );
}
