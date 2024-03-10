import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as CiIcons from 'react-icons/ci';
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome color="black"/>,
    cName: 'nav-text'
  },
  {
    title: 'Drug Info Search',
    path: '/DrugInfo',
    icon: <FaIcons.FaSearch color="black" />,
    
    cName: 'nav-text'
  },
  {
    title: 'Reminders',
    path: '/Remind',
    icon: <FaIcons.FaCalendarCheck color="black"/>,
    cName: 'nav-text'
  },
  {
    title: 'Drug Usage',
    path: '/DrugUsage',
    icon: <CiIcons.CiPill color="black"/>,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/Settings',
    icon: <IoIcons.IoMdSettings  color="black"/>,
    cName: 'nav-text'
  },
 
];