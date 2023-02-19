import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { sidebarOpenState } from '../globalStates/sidebarAtom';
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
                {SidebarData.map((data: { title: string; icon: any; link: string }, index: number) => (
                    <Link href={data.link} className="py-2 pl-4 flex items-center hover:bg-white" key={index}>
                        {data.icon}
                        {sideberOpen && <span className="hidden sm:inline pl-3 text-sm lg:text-base">{data.title}</span>}
                    </Link>
                ))}
                {sideberOpen && (
                    <p className="hidden sm:block w-full text-center sm:text-left sm:ml-4 leading-6 text-sm absolute bottom-0">
                        &copy; 2023 tukky
                    </p>
                )}
            </aside>
            <button className="sm:hidden absolute bottom-0 left-0 p-2 z-10 bg-blue-500" onClick={handleMobileMenuClick}>
                <MenuIcon fontSize="large" />
            </button>
            <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
                <div className="px-4 pt-12 flex flex-col gap-2 h-full bg-gray-600 text-white">
                    {SidebarData.map((data: { title: string; icon: any; link: string }, index: number) => (
                        <Link href={data.link} className="py-2 pl-4 flex items-center hover:bg-white" key={index}>
                            {data.icon}
                            {sideberOpen && <span className="inline pl-3 text-sm lg:text-base">{data.title}</span>}
                        </Link>
                    ))}
                </div>
                <button className="sm:hidden absolute bottom-0 left-0 p-2 z-10 text-white" onClick={() => setOpen(false)}>
                    <CloseIcon fontSize="large" />
                </button>
            </Drawer>
        </>
    );
};

export default Sidebar;
