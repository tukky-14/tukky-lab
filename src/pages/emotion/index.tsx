/* eslint @typescript-eslint/no-explicit-any: off */
import { Box, Button } from '@mui/material';
import { useState } from 'react';

import API from '../../awsConfig/api';
import Emotions from '../../components/Emotions';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';
import { EmotionType } from '../../types/emotion';

export default function Emotion() {
    const [isLoading, setIsLoading] = useState(false);
    const [imageData, setImageData] = useState('');
    const [imageSrc, setImageSrc] = useState('');
    const [emotions, setEmotions] = useState([
        { type: '', confidence: '0%' },
        { type: '', confidence: '0%' },
        { type: '', confidence: '0%' },
        { type: '', confidence: '0%' },
        { type: '', confidence: '0%' },
        { type: '', confidence: '0%' },
        { type: '', confidence: '0%' },
        { type: '', confidence: '0%' },
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

            const putApiInit = {
                headers: {},
                body: {
                    imageSrc,
                },
            };
            const { body } = await API.put('dev', '/emotion', putApiInit);
            if (!Object.keys(body.FaceDetails).length) {
                alert('顔の検出に失敗しました。');
                setIsLoading(false);
                return;
            }

            const results = body.FaceDetails[0].Emotions;
            const newEmotions = emotions.map((emotion: EmotionType, index: number) => {
                switch (results[index].Type) {
                    case 'CALM':
                        return { type: '穏やか', confidence: `${results[index].Confidence.toFixed(2)}%` };
                    case 'CONFUSED':
                        return { type: '混乱', confidence: `${results[index].Confidence.toFixed(2)}%` };
                    case 'SURPRISED':
                        return { type: '驚き', confidence: `${results[index].Confidence.toFixed(2)}%` };
                    case 'FEAR':
                        return { type: '恐れ', confidence: `${results[index].Confidence.toFixed(2)}%` };
                    case 'SAD':
                        return { type: '悲しみ', confidence: `${results[index].Confidence.toFixed(2)}%` };
                    case 'DISGUSTED':
                        return { type: 'うんざり', confidence: `${results[index].Confidence.toFixed(2)}%` };
                    case 'ANGRY':
                        return { type: '怒り', confidence: `${results[index].Confidence.toFixed(2)}%` };
                    case 'HAPPY':
                        return { type: '幸せ', confidence: `${results[index].Confidence.toFixed(2)}%` };
                    default:
                        return { type: '穏やか', confidence: `${results[index].Confidence.toFixed(2)}%` };
                }
            });
            setEmotions(newEmotions);

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
                        {!imageData && <Box sx={{ width: 300, height: 300, border: 'thin solid black' }}></Box>}
                        {imageData && <img className="w-[300px] h-[300px] m-auto" src={imageData} />}
                        <input
                            accept="image/*"
                            className="block w-full my-2"
                            id="fileUpload"
                            name="textCapture"
                            onChange={handleFileSelectClick}
                            type="file"
                        />
                        <div className="w-full mt-4 flex justify-center">
                            <Button className="w-full sm:w-2/3" onClick={handleAnalysisClick} variant="contained">
                                分析
                            </Button>
                        </div>
                    </div>
                    <Emotions emotions={emotions} />
                </div>
            </MainContents>
        </PrivateRoute>
    );
}
