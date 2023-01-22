import React from 'react';
import Header from '../components/Header';
import PrivateRoute from '../components/PrivateRoute';
import { useAuth } from '../hooks/useAuth';

export default function Dashboard() {
    const { signOut } = useAuth();

    const executeSignOut = () => {
        const answer = confirm('本当にログアウトしますか？');
        if (!answer) {
            return;
        }
        signOut();
    };

    return (
        <PrivateRoute>
            <Header />
            <main>
                <div className="max-w-xs m-auto pt-10 text-center">ログインしました！！</div>
                <button
                    className="block m-auto text-blue-600 hover:underline"
                    onClick={executeSignOut}
                >
                    ログアウト
                </button>
            </main>
        </PrivateRoute>
    );
}
