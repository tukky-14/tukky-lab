import { Button, Card } from '@mui/material';
import React, { useState } from 'react';
import API from '../../awsConfig/api';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';

export const getStaticProps = async () => {
    const getApiInit = {
        headers: {},
    };
    const res = await API.get('dev', '/quotes', getApiInit);
    const quotes = res.map((data: any) => {
        return { quote: data.quote, character: data.character };
    });
    return {
        props: {
            quotes,
        },
    };
};

export default function Quotes({ quotes }: any) {
    const [quote, setQuote] = useState('');
    const [character, setCharacter] = useState();

    const handleButtonClick = () => {
        const randamIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randamIndex].quote);
        setCharacter(quotes[randamIndex].character);
    };

    return (
        <PrivateRoute>
            <Header />
            <MainContents title="ランダム名言">
                <div className="w-full sm:w-2/3 my-4 pr-4">
                    <Card variant="outlined">
                        <div className="h-40 sm:h-80 flex flex-col justify-center items-center relative font-serif">
                            <p className="p-2 sm:text-xl">{quote}</p>
                            <p className="absolute bottom-5 right-5 text-sm">{character}</p>
                        </div>
                    </Card>
                    <div className="w-full mt-4 flex justify-center">
                        <Button className="w-full sm:w-1/3" variant="contained" onClick={handleButtonClick}>
                            表示
                        </Button>
                    </div>
                </div>
            </MainContents>
        </PrivateRoute>
    );
}
