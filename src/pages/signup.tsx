import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { useAuth } from '../hooks/useAuth';

export default function Signup() {
    const { isLoading, signUp } = useAuth();
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [email, setEmail] = useState('');

    const executeSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!username || !password || !passwordAgain || !email) {
            alert('未入力の項目があります。');
            return;
        }

        if (password !== passwordAgain) {
            alert('パスワードが一致しません。');
            return;
        }

        const { success, message } = await signUp(username, password, email);
        if (success) {
            alert('入力されたメールアドレス宛に確認コードを送信しました。');
            router.push({ pathname: '/signup-confirm', query: { email } }, 'signup-confirm');
        } else {
            console.log(message);
        }
    };

    if (isLoading) {
        <Loading open={isLoading} />;
    }

    return (
        <>
            <Header />
            <main>
                <div className="max-w-xs m-auto pt-10 mb-8">
                    <form noValidate onSubmit={executeSignUp}>
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
                        <div className="mb-10">
                            <TextField
                                fullWidth
                                label="パスワード（再入力）"
                                variant="outlined"
                                type="password"
                                value={passwordAgain}
                                onChange={(e) => setPasswordAgain(e.target.value)}
                            />
                        </div>
                        <div className="mb-10">
                            <TextField
                                fullWidth
                                label="メールアドレス"
                                variant="outlined"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <Button type="submit" variant="outlined" fullWidth>
                            <span className="text-base p-2">サインイン</span>
                        </Button>
                    </form>
                </div>
                <Link href="/">
                    <button className="block m-auto text-blue-600 hover:underline">
                        ログインに戻る
                    </button>
                </Link>
            </main>
        </>
    );
}
