import { useAuth } from '../hooks/use-auth';

type Props = {
    children?: React.ReactNode;
};

const PrivateRoute: React.FC<Props> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <>{children}</> : <></>;
};

export default PrivateRoute;
