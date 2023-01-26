import { Box, Button } from '@mui/material';
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';

export default function Emotion() {
    const handleButtonClick = () => {
        console.log('click');
    };

    const rows: any = [
        { type: '穏やか', rate: '50%' },
        { type: '混乱', rate: '50%' },
        { type: '驚き', rate: '50%' },
        { type: '恐れ', rate: '50%' },
        { type: '悲しみ', rate: '50%' },
        { type: 'うんざり', rate: '50%' },
        { type: '怒り', rate: '50%' },
        { type: '幸せ', rate: '50%' },
    ];

    return (
        <PrivateRoute>
            <Header />
            <MainContents title="感情分析">
                <div className="sm:flex">
                    <div className="mb-2">
                        <Box sx={{ width: 300, height: 400, border: 'thin solid black' }}></Box>
                        <input
                            className="block w-full my-2"
                            name="textCapture"
                            type="file"
                            accept="image/*"
                            // onChange={handleClickFileSelect}
                        />
                        <Button variant="contained" onClick={handleButtonClick}>
                            分析
                        </Button>
                    </div>
                    <div className="w-full sm:w-1/4 mb-2 rounded">
                        <p className="mb-1">【分析結果】</p>
                        {rows.map((row: any, index: number) => (
                            <div className="w-full flex" key={index}>
                                <p className="w-1/2 border border-solid	 bg-gray-100">{row.type}</p>
                                <p className="w-1/2 border">{row.rate}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </MainContents>
            <Footer />
        </PrivateRoute>
    );
}
