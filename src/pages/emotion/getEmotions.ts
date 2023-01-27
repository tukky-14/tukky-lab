import API from '../../aws-config/api';

const getEmotions = async (imageSrc: string) => {
    try {
        const putApiInit = {
            headers: {},
            body: {
                imageSrc,
            },
        };
        const { body } = await API.put('dev', '/emotion', putApiInit);
        if (!Object.keys(body).length) {
            alert('データは取得できませんでした');
            return;
        }

        return body.FaceDetails[0].Emotions;
    } catch (error) {
        console.log(error);
    }
};

export default getEmotions;
