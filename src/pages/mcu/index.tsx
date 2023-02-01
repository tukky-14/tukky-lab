import axios from 'axios';
import React, { useLayoutEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';
import { API_ENDPOINT } from '../../constants/api';

export default function NextMCU() {
    const [isLoading, setIsLoading] = useState(false);
    const [movieData, setMovieData] = useState<any>({});

    useLayoutEffect(() => {
        (async () => {
            setIsLoading(true);
            const { data } = await axios.get(API_ENDPOINT.NEXT_MCU);
            setMovieData(data);
            setIsLoading(false);
        })();
    }, []);

    return (
        <PrivateRoute>
            <Loading open={isLoading} />
            <Header />
            <MainContents title="MCU次回作">
                {!isLoading && (
                    <div className="w-full sm:w-1/2 mt-2 lg:flex pr-4">
                        <img className="w-full sm:w-2/5" src={movieData.poster_url} alt="次回作MCU映画ポスター画像" />
                        <div className="w-full sm:w-2/3 sm:ml-4">
                            <p className="font-bold">『{movieData.title}』</p>
                            <p className="text-right">{movieData.release_date}</p>
                            <p>{movieData.overview}</p>
                            <br />
                        </div>
                    </div>
                )}
            </MainContents>
        </PrivateRoute>
    );
}
