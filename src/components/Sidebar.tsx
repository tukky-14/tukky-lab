import DashboardIcon from '@mui/icons-material/Dashboard';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import MenuIcon from '@mui/icons-material/Menu';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <aside className="bg-gray-200 w-1/6 flex flex-col flex-1">
            <button className="py-2 pl-3 text-left hover:bg-white">
                <MenuIcon />
            </button>
            <Link href="/dashboard" className="py-2 pl-3 flex items-center hover:bg-white">
                <DashboardIcon />
                <span className="pl-2">ダッシュボード</span>
            </Link>
            <Link href="/faceid" className="py-2 pl-3 flex items-center hover:bg-white">
                <SentimentSatisfiedAltIcon />
                <span className="pl-2">顔認証</span>
            </Link>
            <Link href="/faceid" className="py-2 pl-3 flex items-center hover:bg-white">
                <DocumentScannerIcon />
                <span className="pl-2">OCR</span>
            </Link>
            <Link href="/faceid" className="py-2 pl-3 flex items-center hover:bg-white">
                <QrCodeScannerIcon />
                <span className="pl-2">QR</span>
            </Link>
            <Link href="/faceid" className="py-2 pl-3 flex items-center hover:bg-white">
                <SpeakerNotesIcon />
                <span className="pl-2">ランダム名言</span>
            </Link>
        </aside>
    );
};

export default Sidebar;
