import { ReactChildren } from '../types/common';

const Container: React.FC<ReactChildren> = ({ children }) => {
    return <div className="h-screen w-screen relative flex flex-col">{children}</div>;
};

export default Container;
