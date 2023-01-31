import axios from 'axios';
import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';
import { API_ENDPOINT } from '../../constants/api';

export default function HttpCat() {
    const [catImage, setCatImage] = useState('');
    // prettier-ignore
    const httpCodes = [
        '100', '101', '102', '103', '200', '201', '202', '203', '204', '206', '207',
        '300', '301', '302', '303', '304', '305', '307', '308', '400',
    ];

    const handleButtonClick = async (event: any) => {
        const httpCode = event.target.innerHTML;
        setCatImage(`${API_ENDPOINT.HTTP_CAT}${httpCode}.jpg`);
    };

    return (
        <PrivateRoute>
            <Header />
            <MainContents title="HTTP猫">
                <div className="grid grid-cols-8 gap-4 mr-6 mt-2">
                    {httpCodes.map((code: string, index: number) => (
                        <button className="border text-center py-4 bg-gray-100" onClick={handleButtonClick} key={index}>
                            {code}
                        </button>
                    ))}
                </div>
                {catImage && <img className="w-1/3 h-80 mt-4" src={catImage} alt="HTTPステータスを例えた猫の画像" />}
            </MainContents>
            <Footer />
        </PrivateRoute>
    );
}
