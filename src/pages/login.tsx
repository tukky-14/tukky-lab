import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import PrivateRoute from '../components/PrivateRoute';
import { useAuth } from '../hooks/useAuth';

export default function Login() {
    const { isLoading, signIn } = useAuth();
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const executeSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { success, message } = await signIn(username, password);
        if (success) {
            router.push('/');
        } else {
            console.log(message);
        }
    };

    if (isLoading) {
        <Loading open={isLoading} />;
    }

    return (
        <PrivateRoute>
            <Header />
            <main>
                <div className="max-w-xs m-auto pt-10 mb-8">
                    <form noValidate onSubmit={executeSignIn}>
                        <div className="mb-10">
                            <TextField
                                fullWidth
                                label="ユーザー名"
                                variant="outlined"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="mb-10">
                            <TextField
                                fullWidth
                                label="パスワード"
                                variant="outlined"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <Button type="submit" variant="outlined" fullWidth>
                            <span className="text-base p-2">ログイン</span>
                        </Button>
                    </form>
                </div>
                <Link href="signup">
                    <button className="block m-auto text-blue-600 hover:underline">サインイン</button>
                </Link>
            </main>
        </PrivateRoute>
    );
}
