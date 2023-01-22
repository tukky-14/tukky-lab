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
                    <div className={`w-full flex text-3xl ${titlePosition}`}>
                        <img className="w-8 h-8" src="/icon.png" alt="フラスコの画像" />
                        <p>Experiment Project</p>
                    </div>
                    {isAuthenticated && <AccountIcon />}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
