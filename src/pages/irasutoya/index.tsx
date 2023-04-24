import { Button, Card, TextField } from '@mui/material';
import { useState } from 'react';
import API from '../../awsConfig/api';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';
import { IrasutoyaImage } from '../../types/irasutoya';

export default function Irasutoya() {
    const [isLoading, setIsLoading] = useState(false);
    const [keyword, setKeyword] = useState('');
    const [images, setImages] = useState<IrasutoyaImage[]>([]);

    const handleSearchClick = async () => {
        try {
            if (!keyword) {
                alert('検索キーワードを入力してください。');
                return;
            }
            setIsLoading(true);

            const getApiInit = {
                queryStringParameters: {
                    keyword,
                },
            };
            const { body } = await API.get('dev', '/irasutoya', getApiInit);
            if (!Object.keys(body).length) {
                alert('データが見つかりませんでした。');
                setImages([]);
                setIsLoading(false);
                return;
            }
            const imageData = body.map((data: IrasutoyaImage) => {
                return {
                    thumnail: data.thumnail.replace(/\"/g, ''),
                    alt: data.alt.replace(/\"/g, '').replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec)),
                    link: data.link,
                };
            });
            setImages(imageData);

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    return (
        <PrivateRoute>
            <Loading open={isLoading} />
            <Header />
            <MainContents title="いらすとや検索">
                <div className="flex w-full gap-4 my-3">
                    <TextField
                        size="small"
                        id="outlined-basic"
                        label="検索キーワード"
                        variant="outlined"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setKeyword(e.target.value)}
                    />
                    <Button size="small" variant="contained" onClick={handleSearchClick}>
                        検索
                    </Button>
                </div>
                {!!images.length && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mr-6 mt-2 mb-10">
                        {images.map((image: IrasutoyaImage, index: number) => (
                            <a href={image.link} key={index} target="_blank" rel="noreferrer">
                                <Card className="p-2 h-60 text-center" variant="outlined">
                                    <img className="w-40 m-auto" src={image.thumnail} alt={image.alt} />
                                    <p>{image.alt}</p>
                                </Card>
                            </a>
                        ))}
                    </div>
                )}
            </MainContents>
        </PrivateRoute>
    );
}
