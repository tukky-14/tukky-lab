import DashboardIcon from '@mui/icons-material/Dashboard';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import MenuIcon from '@mui/icons-material/Menu';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import Link from 'next/link';
import React, { useState } from 'react';

const Sidebar = () => {
    const [openSidebar, setOpenSideber] = useState(true);
    const [sidebarSize, setSidebarSize] = useState('w-1/6');

    const handleMenuiconClick = () => {
        setOpenSideber(!openSidebar);
        setSidebarSize(openSidebar ? 'w-1/6' : 'w-12');
    };

    return (
        <aside className={`${sidebarSize} bg-gray-200 flex flex-col`}>
            <button className="py-2 pl-3 text-left hover:bg-white" onClick={handleMenuiconClick}>
                <MenuIcon />
            </button>
            <Link href="/dashboard" className="py-2 pl-3 flex items-center hover:bg-white">
                <DashboardIcon />
                {!openSidebar && <span className="pl-2">ダッシュボード</span>}
            </Link>
            <Link href="/faceid" className="py-2 pl-3 flex items-center hover:bg-white">
                <SentimentSatisfiedAltIcon />
                {!openSidebar && <span className="pl-2">顔認証</span>}
            </Link>
            <Link href="/faceid" className="py-2 pl-3 flex items-center hover:bg-white">
                <DocumentScannerIcon />
                {!openSidebar && <span className="pl-2">OCR</span>}
            </Link>
            <Link href="/faceid" className="py-2 pl-3 flex items-center hover:bg-white">
                <QrCodeScannerIcon />
                {!openSidebar && <span className="pl-2">QR</span>}
            </Link>
            <Link href="/faceid" className="py-2 pl-3 flex items-center hover:bg-white">
                <SpeakerNotesIcon />
                {!openSidebar && <span className="pl-2">ランダム名言</span>}
            </Link>
        </aside>
    );
};

export default Sidebar;
