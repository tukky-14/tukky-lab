import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import Link from 'next/link';
import React, { useState } from 'react';

const Sidebar = () => {
    const [openSidebar, setOpenSideber] = useState(true);
    const [sidebarSize, setSidebarSize] = useState('w-1/6');

    const handleMenuIconClick = () => {
        setOpenSideber(!openSidebar);
        setSidebarSize(!openSidebar ? 'w-1/6' : 'w-14');
    };

    return (
        <aside className={`${sidebarSize} bg-blue-100 flex flex-col`}>
            <button
                className="hidden sm:inline py-2 pl-4 text-left hover:bg-white"
                onClick={handleMenuIconClick}
            >
                <MenuIcon />
            </button>
            <Link href="/home" className="py-2 pl-4 flex items-center hover:bg-white">
                <HomeIcon />
                {openSidebar && <span className="hidden sm:inline pl-3">ホーム</span>}
            </Link>
            <Link href="/quotes" className="py-2 pl-4 flex items-center hover:bg-white">
                <SpeakerNotesIcon />
                {openSidebar && <span className="hidden sm:inline pl-3">ランダム名言</span>}
            </Link>
            <Link href="/articles" className="py-2 pl-4 flex items-center hover:bg-white">
                <NewspaperIcon />
                {openSidebar && <span className="hidden sm:inline pl-3">記事検索</span>}
            </Link>
            <Link href="/emotion" className="py-2 pl-4 flex items-center hover:bg-white">
                <SentimentSatisfiedAltIcon />
                {openSidebar && <span className="hidden sm:inline pl-3">感情分析</span>}
            </Link>
            <Link href="/ocr" className="py-2 pl-4 flex items-center hover:bg-white">
                <DocumentScannerIcon />
                {openSidebar && <span className="hidden sm:inline pl-3">OCR</span>}
            </Link>
            <Link href="/qr" className="py-2 pl-4 flex items-center hover:bg-white">
                <QrCodeScannerIcon />
                {openSidebar && <span className="hidden sm:inline pl-3">QR</span>}
            </Link>
        </aside>
    );
};

export default Sidebar;
