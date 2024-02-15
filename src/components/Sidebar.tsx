import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { sidebarOpenState } from '../globalStates/sidebarAtom';
import { SidebarProps } from '../types/common';

import { SidebarData } from './SidebarData';

const Sidebar = () => {
    const { pathname } = useRouter();
    const [sideberOpen, setSidebarOpen] = useRecoilState(sidebarOpenState);
    const [open, setOpen] = useState(false);

    const handleMenuClick = () => {
        setSidebarOpen(!sideberOpen);
    };

    const handleMobileMenuClick = () => {
        setOpen(true);
    };

    return (
        <>
            <aside className={`hidden sm:flex bg-blue-100 flex-col relative overflow-auto ${sideberOpen ? 'w-1/6' : 'w-14'}`}>
                <button className="hidden sm:inline w-14 py-2 pl-4 text-left hover:bg-white" onClick={handleMenuClick}>
                    <MenuIcon />
                </button>
                {SidebarData.map((data: SidebarProps, index: number) => (
                    <Link
                        className={`py-2 pl-4 flex items-center hover:bg-white duration-200 ${
                            pathname === data.link && 'bg-white'
                        }`}
                        href={data.link}
                        key={index}
                    >
                        {data.icon}
                        {sideberOpen && <span className="hidden sm:inline pl-3 text-sm lg:text-base">{data.title}</span>}
                    </Link>
                ))}
            </aside>
            <button className="sm:hidden fixed bottom-6 right-6 p-2 rounded-full z-10 bg-blue-500" onClick={handleMobileMenuClick}>
                <MenuIcon fontSize="large" sx={{ color: 'white' }} />
            </button>
            <Drawer anchor="right" onClose={() => setOpen(false)} open={open}>
                <div className="flex flex-col h-full bg-gray-600 text-white overflow-scroll">
                    {SidebarData.map((data: SidebarProps, index: number) => (
                        <Link className="py-2 pl-2 flex items-center border-b border-gray-500" href={data.link} key={index}>
                            {data.icon}
                            {sideberOpen && <span className="inline px-4 text-xs lg:text-base">{data.title}</span>}
                        </Link>
                    ))}
                </div>
            </Drawer>
        </>
    );
};

export default Sidebar;
