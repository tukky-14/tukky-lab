import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import { useAuth } from '../hooks/useAuth';
import AccountIcon from './HeaderMenu';

export default function Header() {
    const { isAuthenticated } = useAuth();
    const textPosition = isAuthenticated ? 'text-left' : 'text-center';

    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <div className={`w-full text-3xl ${textPosition}`}>Experiment Project</div>
                    {isAuthenticated && <AccountIcon />}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
