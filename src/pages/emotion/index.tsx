import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';

export default function Emotion() {
    return (
        <PrivateRoute>
            <Header />
            <MainContents title="感情分析"></MainContents>
            <Footer />
        </PrivateRoute>
    );
}
