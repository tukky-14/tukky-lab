import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import PrivateRoute from '../components/PrivateRoute';
import Sidebar from '../components/Sidebar';

export default function QR() {
    return (
        <PrivateRoute>
            <Header />
            <section className="w-full h-full flex flex-1">
                <Sidebar />
                <main className="bg-gray-50 flex-1"></main>
            </section>
            <Footer />
        </PrivateRoute>
    );
}
