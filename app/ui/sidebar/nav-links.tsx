'use client';
import {
  UserGroupIcon,
  HomeModernIcon,
  DocumentDuplicateIcon,
  AcademicCapIcon,
  InboxIcon,
  CameraIcon,
  ServerStackIcon,
  PaperClipIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'About', href: '/', icon: UserIcon },
  { name: 'Employment History', href: '/pages/experience', icon: DocumentDuplicateIcon },
  { name: 'Portfolio', href: '/pages/portfolio',  icon: UserGroupIcon, },
  { name: 'Education', href: '/pages/education', icon: AcademicCapIcon, },
  { name: 'Skills & Certification', href: '/pages/skills', icon: ServerStackIcon },
  { name: 'Contact ', href: '/pages/contact', icon: InboxIcon },
   
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-200 p-0 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )
          }
            > <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })
      }
    </>
  );
}
