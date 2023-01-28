import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useState } from 'react';
import { SidebarData } from './SidebarData';

const Sidebar = () => {
    const [openSidebar, setOpenSideber] = useState(true);
    const [sidebarSize, setSidebarSize] = useState('w-1/6');

    const handleMenuIconClick = () => {
        setOpenSideber(!openSidebar);
        setSidebarSize(!openSidebar ? 'w-1/6' : 'w-14');
    };

    return (
        <aside className={`${sidebarSize} bg-blue-100 flex flex-col`}>
            <button className="hidden sm:inline py-2 pl-4 text-left hover:bg-white" onClick={handleMenuIconClick}>
                <MenuIcon />
            </button>
            {SidebarData.map((data: { title: string; icon: any; link: string }, index: number) => (
                <Link href={data.link} className="py-2 pl-4 flex items-center hover:bg-white" key={index}>
                    {data.icon}
                    {openSidebar && <span className="hidden sm:inline pl-3">{data.title}</span>}
                </Link>
            ))}
        </aside>
    );
};

export default Sidebar;
