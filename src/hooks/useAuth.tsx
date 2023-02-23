import { Amplify, Auth } from 'aws-amplify';
import { useRouter } from 'next/router';
import React, { createContext, useContext, useEffect, useState } from 'react';
import AwsConfigAuth from '../awsConfig/auth';

Amplify.configure({ Auth: AwsConfigAuth });

interface UseAuth {
    isLoading: boolean;
    isAuthenticated: boolean;
    username: string;
    getAuthenticatedToken: () => Promise<string>;
    signUp: (username: string, password: string, email: string) => Promise<Result>;
    confirmSignUp: (verificationCode: string) => Promise<Result>;
    signIn: (username: string, password: string) => Promise<Result>;
    signOut: () => void;
}

interface Result {
    success: boolean;
    message: string;
}

type Props = {
    children?: React.ReactNode;
};

const authContext = createContext({} as UseAuth);

export const ProvideAuth: React.FC<Props> = ({ children }) => {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = () => {
    return useContext(authContext);
};

const useProvideAuth = (): UseAuth => {
    const { push } = useRouter();

    const [isLoading, setIsLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        Auth.currentAuthenticatedUser()
            .then((result) => {
                setUsername(result.username);
                setIsAuthenticated(true);
                setIsLoading(false);
            })
            .catch(() => {
                setUsername('');
                setIsAuthenticated(false);
                setIsLoading(false);
            });
    }, []);

    const getAuthenticatedToken = async () => {
        const user = await Auth.currentAuthenticatedUser();
        const token = user.signInUserSession.idToken.jwtToken;
        return token;
    };

    const signUp = async (username: string, password: string, email: string) => {
        try {
            setIsLoading(true);
            await Auth.signUp({ username, password, attributes: { email } });
            setUsername(username);
            setPassword(password);
            setIsLoading(false);
            return { success: true, message: '' };
        } catch (error) {
            alert(error);
            setIsLoading(false);
            return {
                success: false,
                message: '認証に失敗しました。',
            };
        }
    };

    const confirmSignUp = async (verificationCode: string) => {
        try {
            setIsLoading(true);
            await Auth.confirmSignUp(username, verificationCode);
            const result = await signIn(username, password);
            setPassword('');
            setIsLoading(false);
            return result;
        } catch (error) {
            setIsLoading(false);
            alert(error);
            return {
                success: false,
                message: '認証に失敗しました。',
            };
        }
    };

    const signIn = async (username: string, password: string) => {
        try {
            setIsLoading(true);
            const result = await Auth.signIn(username, password);
            setUsername(result.username);
            setIsAuthenticated(true);
            setIsLoading(false);
            return { success: true, message: '' };
        } catch (error) {
            alert(error);
            setIsLoading(false);
            return {
                success: false,
                message: '認証に失敗しました。',
            };
        }
    };

    const signOut = async () => {
        try {
            setIsLoading(true);
            await Auth.signOut();
            setUsername('');
            setIsAuthenticated(false);
            push('/');
            setIsLoading(false);
            return { success: true, message: '' };
        } catch (error) {
            alert(error);
            setIsLoading(false);
            return {
                success: false,
                message: 'ログアウトに失敗しました。',
            };
        }
    };

    return {
        isLoading,
        isAuthenticated,
        username,
        getAuthenticatedToken,
        signUp,
        confirmSignUp,
        signIn,
        signOut,
    };
};
