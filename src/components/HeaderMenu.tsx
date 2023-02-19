import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from 'next/router';
import * as React from 'react';
import { useAuth } from '../hooks/useAuth';
import Loading from './Loading';

export default function AccountIcon() {
    const { isLoading, username, signOut, isAuthenticated } = useAuth();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const router = useRouter();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSignInClick = () => {
        router.push('/login');
    };

    const handleSignOutClick = () => {
        const answer = confirm('本当にログアウトしますか？');
        if (!answer) {
            return;
        }
        signOut();
    };

    if (isLoading) {
        <Loading open={isLoading} />;
    }

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ color: 'white', width: '12rem', display: 'flex', justifyContent: 'flex-end' }}
            >
                <AccountCircleIcon />
                <p className="text-sm sm:text-base ml-1">{username || 'John Doe'}</p>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {/* <MenuItem onClick={handleClose}>マイアカウント</MenuItem> */}
                {isAuthenticated ? (
                    <MenuItem onClick={handleSignOutClick}>ログアウト</MenuItem>
                ) : (
                    <MenuItem onClick={handleSignInClick}>ログイン</MenuItem>
                )}
            </Menu>
        </div>
    );
}
