import React from 'react';
import Header from '../components/Header';
import PrivateRoute from '../components/PrivateRoute';

export default function Dashboard() {
    return (
        <PrivateRoute>
            <Header />
            <section className="w-full h-full flex flex-1">
                <aside className="bg-green-200 w-1/5 flex flex-col flex-1">サイドバー</aside>
                <main className="bg-yellow-200 w-4/5">メイン</main>
            </section>
            <p className="bg-gray-200 w-full leading-6 absolute bottom-0 text-center text-sm">
                &copy; 2023 tukky
            </p>
        </PrivateRoute>
    );
}
