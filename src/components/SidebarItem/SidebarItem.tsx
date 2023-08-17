import React from 'react';
import { Link } from 'react-router-dom';

interface SidebarItemProps {
  label: string;
  active?: boolean;
  href: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ label, active, href }) => (
  <Link
    to={href}
    className={`text-md curasor-pointer flex h-auto w-full flex-row items-center gap-x-4 py-1 font-medium text-neutral-400 transition hover:text-white ${
      active && 'text-white'
    }`}
  >
    <p className='w-full truncate'>{label}</p>
  </Link>
);
