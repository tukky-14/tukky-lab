import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainContents from '../components/MainContents';
import PrivateRoute from '../components/PrivateRoute';

export default function QR() {
    return (
        <PrivateRoute>
            <Header />
            <MainContents title="QR"></MainContents>
            <Footer />
        </PrivateRoute>
    );
}
