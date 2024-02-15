/* eslint @typescript-eslint/no-explicit-any: off */
import { Button } from '@mui/material';
import axios from 'axios';
import React, { useLayoutEffect, useState } from 'react';

import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';
import { API_ENDPOINT } from '../../constants/api';

export default function NextMCU() {
    const [isLoading, setIsLoading] = useState(false);
    const [movieData, setMovieData] = useState<any>({});
    const [translateText, setTranslateText] = useState('');

    useLayoutEffect(() => {
        (async () => {
            setIsLoading(true);
            const { data } = await axios.get(API_ENDPOINT.NEXT_MCU);
            setMovieData(data);
            setIsLoading(false);
        })();
    }, []);

    const handleTranslateClick = async () => {
        try {
            if (translateText) {
                return;
            }
            setIsLoading(true);
            const { data } = await axios.get(`${API_ENDPOINT.GOOGLE_TRANSLATE}?text=${movieData.overview}&source=en&target=ja`);
            setTranslateText(data.text);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error(error);
        }
    };

    return (
        <PrivateRoute>
            <Loading open={isLoading} />
            <Header />
            <MainContents title="MCU次回作">
                {!isLoading && (
                    <div className="w-full sm:w-2/3 lg:w-full mt-2 lg:flex pr-4">
                        <img alt="次回作MCU映画ポスター画像" className="w-full sm:w-2/5 block" src={movieData.poster_url} />
                        <div className="flex">
                            <div className="w-full sm:w-2/3 sm:ml-4">
                                <p className="font-bold">『{movieData.title}』</p>
                                <p className="text-right">{movieData.release_date}</p>
                                <p>{movieData.overview}</p>
                                <div className="my-2 text-center">
                                    <Button onClick={handleTranslateClick} variant="outlined">
                                        翻訳
                                    </Button>
                                </div>
                                {translateText && <p>{translateText}</p>}
                            </div>
                        </div>
                    </div>
                )}
            </MainContents>
        </PrivateRoute>
    );
}
