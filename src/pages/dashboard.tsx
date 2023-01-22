import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PrivateRoute from '../components/PrivateRoute';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
    return (
        <PrivateRoute>
            <Header />
            <section className="w-full h-full flex flex-1">
                <Sidebar />
                <main className="bg-yellow-200 w-5/6"></main>
            </section>
            <Footer />
        </PrivateRoute>
    );
}
