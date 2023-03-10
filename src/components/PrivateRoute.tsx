import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import Loading from './Loading';

type ReactChildren = {
    children?: React.ReactNode;
};

const PrivateRoute: React.FC<ReactChildren> = ({ children }) => {
    const { isLoading, isAuthenticated } = useAuth();
    const router = useRouter();

    if (isLoading) {
        return <Loading open={true} />;
    }

    // if (!isAuthenticated && router.pathname !== '/') {
    //     router.push('/');
    // }

    // if (isAuthenticated && router.pathname === '/') {
    //     router.push('/home');
    // }

    return <>{children}</>;
};

export default PrivateRoute;
