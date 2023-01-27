import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import API from '../../aws-config/api';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';

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

export default function Emotion() {
    const [isLoading, setIsLoading] = useState(false);
    const [imageData, setImageData] = useState('');
    const [imageSrc, setImageSrc] = useState('');

    const handleFileSelectClick = (event: any) => {
        if (event.target.files?.length === 0) {
            return;
        }

        const reader = new FileReader();
        reader.onload = (e: any) => {
            setImageData(e.target?.result);
            setImageSrc(e.target?.result.split(',')[1]);
        };
        reader.readAsDataURL(event.target?.files[0]);
    };

    const handleAnalysisClick = async () => {
        try {
            setIsLoading(true);

            if (!imageSrc) {
                alert('送信するファイルがありません。');
                return;
            }

            const putApiInit = {
                headers: {},
                queryStringParameters: {
                    imageSrc,
                },
            };
            // const { body } = await API.put('dev', '/emotion', getApiInit);
            // if (!Object.keys(body).length) {
            //     alert('データは取得できませんでした');
            //     setIsLoading(false);
            //     return;
            // }

            console.log(imageSrc);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <PrivateRoute>
            <Header />
            <MainContents title="感情分析">
                <div className="sm:flex">
                    <div className="mb-2">
                        <Box sx={{ width: 300, height: 400, border: 'thin solid black' }}>
                            {imageData && <img className="m-auto" src={imageData} />}
                        </Box>
                        <input
                            id="fileUpload"
                            className="block w-full my-2"
                            name="textCapture"
                            type="file"
                            accept="image/*"
                            onChange={handleFileSelectClick}
                        />
                        <Button variant="contained" onClick={handleAnalysisClick}>
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
