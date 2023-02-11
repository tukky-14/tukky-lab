import { Card } from '@mui/material';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import React, { useEffect, useState } from 'react';
import API from '../../awsConfig/api';
import Header from '../../components/Header';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';

const langArray = [
    { name: 'HTML', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Node.js', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Java', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Ruby', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg' },
];

export default function Programming() {
    useEffect(() => {});

    return (
        <PrivateRoute>
            <Header />
            <MainContents title="プログラミング言語">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4 mr-6 mt-2 mb-10">
                    {langArray.map((lang: { name: string; imageUrl: string }, index: number) => (
                        <button className="hover transform hover:scale-105 duration-150" key={index}>
                            <Card className="w-full" variant="outlined">
                                <p className="pt-2 font-bold text-center">{lang.name}</p>
                                <img className="px-4 pb-4" src={lang.imageUrl} />
                            </Card>
                        </button>
                    ))}
                </div>
            </MainContents>
        </PrivateRoute>
    );
}
