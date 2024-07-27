
import styles from '@/app/ui/home.module.css';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { lusitana } from './ui/fonts';
import SideNav from "@/app/ui/sidebar/sidenav";

export default function Page() {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
    <div className="w-full flex-none md:w-64">
      <SideNav/>
    </div>
    <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
      <p>summary</p>
    </div>
  </div>
  );
}
