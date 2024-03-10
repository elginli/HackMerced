import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as CiIcons from 'react-icons/ci';
import * as RiIcons from 'react-icons/ri';
export const SidebarData = [
  {
    title: 'Home',
    path: '/Home',
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
    title: 'Drug Usage',
    path: '/DrugUsage',
    icon: <CiIcons.CiPill color="black"/>,
    cName: 'nav-text'
  },
  {
    title: 'How to keep track',
    path: '/Routine',
    icon: <RiIcons.RiHealthBookFill  color="black"/>,
    cName: 'nav-text'
  },
  {
    title: 'How to help with Overdose',
    path: '/Naloxone',
    icon: <FaIcons.FaHospital  color="black"/>,
    cName: 'nav-text'
  },
 
  
 
];