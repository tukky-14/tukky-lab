import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../hooks/useAuth';
import AccountIcon from './HeaderMenu';

export default function Header() {
    const router = useRouter();
    const publicPathList = ['/login', '/signup', '/signup-confirm'];
    const titlePosition = publicPathList.includes(router.pathname) ? 'justify-center' : 'justify-left';

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Link href="/" className={`w-full flex ${titlePosition}`}>
                        <img className="w-6 sm:w-8 h-6 sm:h-8" src="/icon.png" alt="フラスコの画像" />
                        <p className="sm:text-3xl">Tukky Lab</p>
                    </Link>
                    {!publicPathList.includes(router.pathname) && <AccountIcon />}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
