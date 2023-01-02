import { Inter } from '@next/font/google';
import { useAuth } from '../hooks/use-auth';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useState } from 'react';
import Header from '../components/Header';
import CommonHead from '../components/CommonHead';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    const auth = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const executeSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const result = await auth.signIn(username, password);
        if (result.success) {
            // navigate({ pathname: "/dashboard" });
        } else {
            alert(result.message);
        }
    };

    return (
        <>
            <CommonHead />
            <Header />
            <main>
                <div className="max-w-xs m-auto pt-10 text-center">ログインしました！！</div>
                <Link href="/">
                    <button className="block m-auto text-blue-600 hover:underline">
                        ログアウト
                    </button>
                </Link>
            </main>
        </>
    );
}
