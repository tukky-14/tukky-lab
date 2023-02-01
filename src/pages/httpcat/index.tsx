import axios from 'axios';
import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';
import { API_ENDPOINT } from '../../constants/api';

export default function HttpCat() {
    const [httpCodes, setHttpCodes] = useState([
        { code: '100', display: false },
        { code: '101', display: false },
        { code: '102', display: false },
        { code: '103', display: false },
        { code: '200', display: false },
        { code: '201', display: false },
        { code: '202', display: false },
        { code: '203', display: false },
        { code: '204', display: false },
        { code: '206', display: false },
        { code: '207', display: false },
        { code: '300', display: false },
        { code: '301', display: false },
        { code: '302', display: false },
        { code: '303', display: false },
        { code: '304', display: false },
        { code: '305', display: false },
        { code: '307', display: false },
        { code: '308', display: false },
        { code: '400', display: false },
        { code: '401', display: false },
        { code: '402', display: false },
        { code: '403', display: false },
        { code: '404', display: false },
        { code: '405', display: false },
        { code: '406', display: false },
        { code: '407', display: false },
        { code: '408', display: false },
        { code: '409', display: false },
        { code: '410', display: false },
        { code: '411', display: false },
        { code: '412', display: false },
        { code: '413', display: false },
        { code: '414', display: false },
        { code: '415', display: false },
        { code: '416', display: false },
        { code: '417', display: false },
        { code: '418', display: false },
        { code: '420', display: false },
        { code: '421', display: false },
        { code: '422', display: false },
        { code: '423', display: false },
        { code: '424', display: false },
        { code: '425', display: false },
        { code: '426', display: false },
        { code: '429', display: false },
        { code: '431', display: false },
        { code: '444', display: false },
        { code: '450', display: false },
        { code: '451', display: false },
        { code: '497', display: false },
        { code: '498', display: false },
        { code: '499', display: false },
        { code: '500', display: false },
        { code: '501', display: false },
        { code: '502', display: false },
        { code: '503', display: false },
        { code: '506', display: false },
        { code: '507', display: false },
        { code: '508', display: false },
        { code: '509', display: false },
        { code: '510', display: false },
        { code: '511', display: false },
        { code: '521', display: false },
        { code: '522', display: false },
        { code: '523', display: false },
        { code: '525', display: false },
        { code: '599', display: false },
    ]);

    const handleButtonClick = async (event: any) => {
        const httpCode = event.target.innerHTML;
        const newHttpCodes = httpCodes.map((obj: { code: string; display: boolean }) => {
            if (obj.code === httpCode) {
                return { code: obj.code, display: true };
            }
            return { code: obj.code, display: false };
        });
        setHttpCodes(newHttpCodes);
    };

    return (
        <PrivateRoute>
            <Header />
            <MainContents title="HTTP猫">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mr-6 mt-2 mb-10">
                    {httpCodes.map((obj: { code: string; display: boolean }, index: number) => (
                        <>
                            <button
                                hidden={obj.display}
                                className="border text-center text-2xl h-60 bg-gray-100 hover:bg-gray-300"
                                onClick={handleButtonClick}
                                key={index}
                            >
                                {obj.code}
                            </button>
                            {obj.display && (
                                <img
                                    className="h-60 block m-auto"
                                    src={`${API_ENDPOINT.HTTP_CAT}${obj.code}.jpg`}
                                    alt="HTTPステータスを例えた猫の画像"
                                />
                            )}
                        </>
                    ))}
                </div>
            </MainContents>
        </PrivateRoute>
    );
}
