import { Amplify, API } from 'aws-amplify';

Amplify.configure({
    API: {
        endpoints: [
            {
                name: 'dev',
                endpoint: process.env.NEXT_PUBLIC_API_ENDPOINT_TUKKYLAB,
            },
            {
                name: 'anime',
                endpoint: 'https://api.moemoe.tokyo/anime/v1',
            },
        ],
    },
});

export default API;
