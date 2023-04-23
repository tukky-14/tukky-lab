import Sidebar from './Sidebar';

type Props = {
    title: string;
    children?: React.ReactNode;
};

const MainContents: React.FC<Props> = (props) => {
    const { children, title } = props;

    return (
        <section className="w-full h-[calc(100%_-_16rem)] flex flex-1 bg-gray-50">
            <Sidebar />
            <main className="flex-1 pt-6 pl-4 overflow-scroll">
                <p className="text-xl">{title}</p>
                {children}
            </main>
        </section>
    );
};

export default MainContents;
