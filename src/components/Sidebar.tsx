import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { sidebarOpenState } from '../globalStates/sidebarAtom';
import { SidebarProps } from '../types/common';
import { SidebarData } from './SidebarData';

const Sidebar = () => {
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
            <aside className={`hidden sm:block ${sideberOpen ? 'w-1/6' : 'w-14'} bg-blue-100 flex flex-col relative`}>
                <button className="hidden sm:inline w-14 py-2 pl-4 text-left hover:bg-white" onClick={handleMenuClick}>
                    <MenuIcon />
                </button>
                {SidebarData.map((data: SidebarProps, index: number) => (
                    <Link href={data.link} className="py-2 pl-4 flex items-center hover:bg-white" key={index}>
                        {data.icon}
                        {sideberOpen && <span className="hidden sm:inline pl-3 text-sm lg:text-base">{data.title}</span>}
                    </Link>
                ))}
                {sideberOpen && (
                    <p className="hidden sm:block w-full text-center sm:text-left sm:ml-4 leading-6 text-xs absolute bottom-0">
                        &copy; 2023 tukky
                    </p>
                )}
            </aside>
            <button
                className="sm:hidden absolute bottom-2 left-2 p-2 rounded-full z-10 bg-blue-500"
                onClick={handleMobileMenuClick}
            >
                <MenuIcon fontSize="large" sx={{ color: 'white' }} />
            </button>
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <div className="flex flex-col h-full bg-gray-600 text-white overflow-scroll">
                    {SidebarData.map((data: SidebarProps, index: number) => (
                        <Link href={data.link} className="py-2 pl-2 flex items-center border-b border-gray-500" key={index}>
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
