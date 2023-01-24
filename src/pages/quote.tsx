import { Button, Card } from '@mui/material';
import { Auth } from 'aws-amplify';
import React, { useEffect, useState } from 'react';
import API from '../aws-config/api';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainContents from '../components/MainContents';
import PrivateRoute from '../components/PrivateRoute';

export default function Quote() {
    const [quote, setQuote] = useState('');
    const [quoteList, setQuoteList] = useState([]);

    useEffect(() => {
        executeGetRollcall();
    }, []);

    const handleButtonClick = () => {
        const randamIndex = Math.floor(Math.random() * quoteList.length);
        setQuote(quoteList[randamIndex]);
    };

    const executeGetRollcall = async () => {
        try {
            const user = await Auth.currentAuthenticatedUser();
            const token = user.signInUserSession.idToken.jwtToken;

            const getApiInit = {
                headers: {
                    Authorization: token,
                },
                // queryStringParameters: {
                // },
            };
            const res = await API.get('dev', '/quotes', getApiInit);
            const quotes = res.map((data: any) => data.quote);
            setQuoteList(quotes);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <PrivateRoute>
            <Header />
            <MainContents title="ランダム名言">
                <div className="w-full sm:w-2/3 my-4 pr-4">
                    <Card variant="outlined">
                        <div className="h-40 sm:h-80 flex flex-col justify-center items-center">
                            <p className="p-2 sm:text-xl font-serif">{quote}</p>
                        </div>
                    </Card>
                </div>
                <Button variant="contained" onClick={handleButtonClick}>
                    表示
                </Button>
            </MainContents>
            <Footer />
        </PrivateRoute>
    );
}
