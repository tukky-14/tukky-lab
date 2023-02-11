import { Button, Card, TextField } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';
import { API_ENDPOINT } from '../../constants/api';

export default function Pokemon() {
    const [isLoading, setIsLoading] = useState(false);
    const [number, setNumber] = useState(0);
    const [pokemonData, setPokemonData] = useState<any>({
        id: 0,
        imageUrl: '',
        name: '',
        genus: '',
    });

    const handleButtonClick = async () => {
        try {
            if (!number) {
                return;
            }
            if (number > 1008) {
                alert('1008以下の図鑑番号でご指定下さい。');
                return;
            }
            setIsLoading(true);

            const { data } = await axios.get(`${API_ENDPOINT.POKEMON}${number}`);
            const speciesUrl = data.species.url;
            const { data: species } = await axios.get(speciesUrl);

            setPokemonData({
                id: data.id,
                imageUrl: data.sprites.other['official-artwork'].front_default,
                name: species.names.find((v: any) => v.language.name == 'ja')?.name,
                genus: species.genera.find((v: any) => v.language.name == 'ja')?.genus,
            });

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.error(error);
        }
    };

    return (
        <PrivateRoute>
            <Loading open={isLoading} />
            <Header />
            <MainContents title="ポケモン">
                <div className="flex w-full gap-4 my-3">
                    <TextField
                        size="small"
                        id="outlined-basic"
                        label="図鑑番号"
                        variant="outlined"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNumber(Number(e.target.value))}
                    />
                    <Button size="small" variant="contained" onClick={handleButtonClick}>
                        表示
                    </Button>
                </div>
                {pokemonData.imageUrl && (
                    <div className="w-full sm:w-1/3 my-4 text-right">
                        <Card className="p-2" variant="outlined">
                            <img src={pokemonData.imageUrl} alt="ポケモンの画像" />
                            <p>
                                No.{pokemonData.id} {pokemonData.name}
                            </p>
                            <p>{pokemonData.genus}</p>
                        </Card>
                    </div>
                )}
            </MainContents>
        </PrivateRoute>
    );
}
