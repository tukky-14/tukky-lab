import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { useAuth } from '../hooks/useAuth';
import AccountIcon from './HeaderMenu';

export default function Header() {
    const { isAuthenticated } = useAuth();
    const titlePosition = isAuthenticated ? 'justify-left' : 'justify-center';

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <div className={`w-full flex ${titlePosition}`}>
                        <img
                            className="w-6 sm:w-8 h-6 sm:h-8"
                            src="/icon.png"
                            alt="フラスコの画像"
                        />
                        <p className="sm:text-3xl">Tukky Lab</p>
                    </div>
                    {isAuthenticated && <AccountIcon />}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
