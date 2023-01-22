import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';
import Loading from './Loading';

type Props = {
    children?: React.ReactNode;
};

const PrivateRoute: React.FC<Props> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/');
        }
    });

    return isAuthenticated ? <>{children}</> : <Loading />;
};

export default PrivateRoute;
