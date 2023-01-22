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

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/');
        } else if (router.pathname === '/') {
            router.push('/dashboard');
        }
    });

    if (isLoading) {
        return <Loading />;
    }

    return <>{children}</>;
};

export default PrivateRoute;
