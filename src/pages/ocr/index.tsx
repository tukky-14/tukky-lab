/* eslint @typescript-eslint/no-explicit-any: off */
import { Button } from '@mui/material';
import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';
import API from '../../aws-config/api';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';

const videoConstraints = {
    width: 300,
    height: 400,
    facingMode: 'environment',
};

export default function OCR() {
    const webcamRef = useRef<any>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [ocrText, setOcrText] = useState([]);

    const handleAnalysisClick = async () => {
        try {
            const [, screenshot] = webcamRef.current.getScreenshot().split(',');
            setIsLoading(true);

            const putApiInit = {
                headers: {},
                body: {
                    imageSrc: screenshot,
                },
            };
            const { body } = await API.put('dev', '/ocr', putApiInit);
            if (!Object.keys(body.TextDetections).length) {
                alert('文字の検出に失敗しました。');
                setIsLoading(false);
                return;
            }
            const newOcrText = body.TextDetections.map((text: any) => {
                if (text.Type === 'LINE') {
                    return text.DetectedText;
                }
                return '';
            }).filter((v: string) => v);
            setOcrText(newOcrText);

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
            <MainContents title="OCR">
                <div className="sm:flex gap-4 mt-2 mr-2 -ml-2 sm:ml-0">
                    <div className="mb-2">
                        <Webcam
                            audio={false}
                            className="m-auto"
                            ref={webcamRef}
                            screenshotFormat="image/jpeg"
                            videoConstraints={videoConstraints}
                        />
                        <div className="w-full mt-4 flex justify-center">
                            <Button className="w-full sm:w-2/3" onClick={handleAnalysisClick} variant="contained">
                                分析
                            </Button>
                        </div>
                    </div>
                    <div className="w-[300px] h-[465px] m-auto sm:m-0">
                        <h3 className="mb-1 text-center w-full">【分析結果】</h3>
                        <div className="w-full h-4/5 bg-gray-100 rounded border p-2 overflow-scroll">
                            {ocrText.map((text: string, index: number) => (
                                <p key={index}>{text}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </MainContents>
        </PrivateRoute>
    );
}
