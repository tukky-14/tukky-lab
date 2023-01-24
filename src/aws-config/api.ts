import { Amplify, API } from 'aws-amplify';

Amplify.configure({
    API: {
        endpoints: [
            {
                name: 'dev',
                endpoint: process.env.NEXT_PUBLIC_API_ENDPOINT_QUOTES,
            },
        ],
    },
});

export default API;
