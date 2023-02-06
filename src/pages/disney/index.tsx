import { Button } from '@mui/material';
import axios from 'axios';
import React, { useLayoutEffect, useState } from 'react';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';
import { API_ENDPOINT } from '../../constants/api';

export default function DisneyCharacter() {
    const DISNEY_CHARACTER_COUNT = 7526;
    const [isLoading, setIsLoading] = useState(false);
    const [charactersData, setCharactersData] = useState([
        { id: 1, name: '', imageUrl: '' },
        { id: 2, name: '', imageUrl: '' },
        { id: 3, name: '', imageUrl: '' },
    ]);

    useLayoutEffect(() => {
        (async () => {
            await getDisneyCharacters();
        })();
    }, []);

    const handleGetClick = async () => {
        await getDisneyCharacters();
    };

    const getDisneyCharacters = async () => {
        try {
            setIsLoading(true);

            let newCharactersData = [];
            for (let i = 0; i < charactersData.length; i++) {
                const randamNumber = Math.floor(Math.random() * DISNEY_CHARACTER_COUNT);
                const { data } = await axios.get(`${API_ENDPOINT.DISNEY}${randamNumber}`);
                newCharactersData.push({
                    id: data._id,
                    name: data.name,
                    imageUrl: data.imageUrl,
                });
            }

            setCharactersData(newCharactersData);
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
            <MainContents title="ディズニーキャラクター">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mr-6 mt-2 mb-10">
                    {charactersData.map((data: { id: number; name: string; imageUrl: string }) => (
                        <>
                            {data.imageUrl && (
                                <div key={data.id}>
                                    <img className="h-80 m-auto" src={data.imageUrl} alt="ディズニーキャラクターの画像" />
                                    <p className="text-center text-xl">
                                        {data.id}. {data.name}
                                    </p>
                                </div>
                            )}
                        </>
                    ))}
                </div>
                <div className="text-center">
                    <Button variant="outlined" onClick={handleGetClick}>
                        別のキャラクターを取得
                    </Button>
                </div>
            </MainContents>
        </PrivateRoute>
    );
}
