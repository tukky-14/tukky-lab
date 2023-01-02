const Auth = {
    identityPoolId: process.env.NEXT_PUBLIC_AUTH_IDENTIFY_POOL_ID,
    region: process.env.NEXT_PUBLIC_AUTH_REGION,
    userPoolId: process.env.NEXT_PUBLIC_AUTH_USER_POOL_ID,
    userPoolWebClientId: process.env.NEXT_PUBLIC_AUTH_USER_POOL_WEB_CLIENT_ID,
    //     domain: process.env.NEXT_PUBLIC_AUTH_COOKIE_STORAGE_DOMAIN,
    //     path: "/",
    //     expires: 365,
    //     sameSite: "strict",
    //     secure: true,
    // },
    authenticationFlowType: 'USER_SRP_AUTH',
};

export default Auth;
