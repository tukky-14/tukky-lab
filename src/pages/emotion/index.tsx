import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';
import Emotions from './Emotions';
import getEmotions from './getEmotions';

export default function Emotion() {
    const [isLoading, setIsLoading] = useState(false);
    const [imageData, setImageData] = useState('');
    const [imageSrc, setImageSrc] = useState('');
    const [emotions, setEmotions] = useState([
        { type: '穏やか', confidence: '0%' },
        { type: '混乱', confidence: '0%' },
        { type: '驚き', confidence: '0%' },
        { type: '恐れ', confidence: '0%' },
        { type: '悲しみ', confidence: '0%' },
        { type: '怒り', confidence: '0%' },
        { type: '幸せ', confidence: '0%' },
        { type: 'うんざり', confidence: '0%' },
    ]);

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
            if (!imageSrc) {
                alert('送信するファイルがありません。');
                return;
            }
            setIsLoading(true);

            const result = await getEmotions(imageSrc);
            console.log('result:', result);
            const newEmotion = emotions.map((emotion: { type: string; confidence: string }, index: number) => {
                return { ...emotion, confidence: `${result[index].Confidence.toFixed(2)}%` };
            });
            console.log('newEmotion:', newEmotion);
            setEmotions(newEmotion);

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    return (
        <PrivateRoute>
            <Loading open={isLoading} />
            <Header />
            <MainContents title="感情分析">
                <div className="sm:flex mt-2 mr-2 -ml-2 sm:ml-0">
                    <div className="mb-2">
                        <Box sx={{ width: 300, height: 300, border: 'thin solid black' }}>
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
                    <Emotions emotions={emotions} />
                </div>
            </MainContents>
            <Footer />
        </PrivateRoute>
    );
}
