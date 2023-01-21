import { useAuth } from '../hooks/use-auth';
import React, { useState } from 'react';
import Header from '../components/Header';
import CommonHead from '../components/CommonHead';
import Link from 'next/link';

export default function Home() {
    const { signOut } = useAuth();

    return (
        <>
            <CommonHead />
            <Header />
            <main>
                <div className="max-w-xs m-auto pt-10 text-center">ログインしました！！</div>
                <button className="block m-auto text-blue-600 hover:underline" onClick={signOut}>
                    ログアウト
                </button>
            </main>
        </>
    );
}
