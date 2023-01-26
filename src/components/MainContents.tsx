import React from 'react';
import Sidebar from './Sidebar';

type Props = {
    title: string;
    children?: React.ReactNode;
};

const MainContents: React.FC<Props> = (props) => {
    const { children, title } = props;

    return (
        <section className="w-full h-full flex flex-1 bg-gray-50 overflow-scroll">
            <Sidebar />
            <main className="flex-1 pt-6 pl-4">
                <p className="text-xl">{title}</p>
                {children}
            </main>
        </section>
    );
};

export default MainContents;
