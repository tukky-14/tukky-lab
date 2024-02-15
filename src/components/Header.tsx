import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import { useRouter } from 'next/router';

import AccountIcon from './HeaderMenu';

export default function Header() {
    const router = useRouter();
    const publicPathList = ['/login', '/signup', '/signup-confirm'];
    const titlePosition = publicPathList.includes(router.pathname) ? 'justify-center' : 'justify-left';

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Link className={`w-full flex ${titlePosition}`} href="/">
                        <img alt="フラスコの画像" className="w-6 sm:w-8 h-6 sm:h-8" src="/icon.png" />
                        <p className="sm:text-3xl">Tukky Lab</p>
                    </Link>
                    {!publicPathList.includes(router.pathname) && <AccountIcon />}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
