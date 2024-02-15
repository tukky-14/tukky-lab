import { useAuth } from '../hooks/useAuth';
import { ReactChildren } from '../types/common';

import Loading from './Loading';

const PrivateRoute: React.FC<ReactChildren> = ({ children }) => {
    const { isLoading } = useAuth();

    if (isLoading) {
        return <Loading open={true} />;
    }

    return <>{children}</>;
};

export default PrivateRoute;
