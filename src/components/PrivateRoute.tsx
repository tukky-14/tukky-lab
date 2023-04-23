import { useRouter } from 'next/router';
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

    return <>{children}</>;
};

export default PrivateRoute;
