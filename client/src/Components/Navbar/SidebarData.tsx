import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

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
    icon: <IoIcons.IoIosPaper color="black" />,
    
    cName: 'nav-text'
  },
  {
    title: 'Reminders',
    path: '/Remind',
    icon: <FaIcons.FaCartPlus color="black"/>,
    cName: 'nav-text'
  },
  {
    title: 'Drug Usage',
    path: '/DrugUsage',
    icon: <IoIcons.IoMdPeople color="black"/>,
    cName: 'nav-text'
  },
  {
    title: 'Settings',
    path: '/Settings',
    icon: <FaIcons.FaEnvelopeOpenText color="black"/>,
    cName: 'nav-text'
  },
 
];