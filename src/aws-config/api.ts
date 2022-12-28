import { Amplify, API } from "aws-amplify";

Amplify.configure({
    API: {
        endpoints: [
            {
                name: "demo",
                endpoint: "https://i3dscrpb7l.execute-api.ap-northeast-1.amazonaws.com/demo",
            },
        ],
    },
});

export default API;
