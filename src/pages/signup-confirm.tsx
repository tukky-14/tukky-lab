import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import PrivateRoute from '../components/PrivateRoute';
import { useAuth } from '../hooks/useAuth';

export default function SignupConfirm() {
    const { isLoading, confirmSignUp } = useAuth();
    const router = useRouter();
    const [verificationCode, setVerificationCode] = useState('');

    useEffect(() => {
        if (!router.query?.email) {
            router.push('/');
        }
    }, []);

    const executeSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!verificationCode) {
            alert('未入力の項目があります。');
            return;
        }

        const result = await confirmSignUp(verificationCode);
        if (result.success) {
            alert('サインアップが完了しました。');
            router.push('/');
        } else {
            alert(result.message);
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
                                label="確認コード"
                                variant="outlined"
                                type="email"
                                value={verificationCode}
                                onChange={(e) => setVerificationCode(e.target.value)}
                            />
                        </div>
                        <Button type="submit" variant="outlined" fullWidth>
                            <span className="text-base p-2">送信</span>
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
