import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PrivateRoute from '../components/PrivateRoute';
import Sidebar from '../components/Sidebar';

export default function Home() {
    return (
        <PrivateRoute>
            <Header />
            <section className="w-full h-full flex flex-1 bg-gray-50">
                <Sidebar />
                <main className="flex-1 pt-6 pl-4">
                    <p className="text-xl">ホーム</p>
                    このサイトは学習した内容をアウトプットする実験用として作成しています。
                </main>
            </section>
            <Footer />
        </PrivateRoute>
    );
}
