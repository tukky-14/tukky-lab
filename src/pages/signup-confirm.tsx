import { useAuth } from '../hooks/use-auth';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/Header';
import Link from 'next/link';

export default function Signup() {
    const { confirmSignUp } = useAuth();
    const { push, query } = useRouter();
    const [verificationCode, setVerificationCode] = useState('');

    useEffect(() => {
        if (!query?.email) {
            push('/');
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
            push('/');
        } else {
            alert(result.message);
        }
    };

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
