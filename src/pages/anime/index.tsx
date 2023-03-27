import { Button, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { DataGrid, GridRowsProp, jaJP } from '@mui/x-data-grid';
import axios from 'axios';
import dayjs from 'dayjs';
import { useLayoutEffect, useState } from 'react';
import { AnimeColumns } from '../../components/ColumnsAnime';
import CustomToolbar from '../../components/CustomToolbar';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';
import { API_ENDPOINT } from '../../constants/api';

export default function Anime() {
    const [isLoading, setIsLoading] = useState(false);
    const [seasons, setSeasons] = useState<any>([]);
    const [selectSeason, setSelectSeason] = useState('');
    const [rows, setRows] = useState([] as GridRowsProp);

    useLayoutEffect(() => {
        const currentYear = dayjs().format('YYYY');
        const targetSeasons = [];
        const threeYearsAgo = Number(currentYear) - 3;

        // 3年前から現在までの年を取得
        for (let year = Number(currentYear); year >= threeYearsAgo; year--) {
            targetSeasons.push(
                { year: year.toString(), cours: '4', season: '秋' },
                { year: year.toString(), cours: '3', season: '夏' },
                { year: year.toString(), cours: '2', season: '春' },
                { year: year.toString(), cours: '1', season: '冬' }
            );
        }
        setSeasons(targetSeasons);
        setSelectSeason(`${currentYear}/1`);
    }, []);

    const handleSelectSiteChange = (event: SelectChangeEvent<string>) => {
        const selectSeason = event.target.value;
        setSelectSeason(selectSeason);
    };

    const handleSearchClick = async () => {
        try {
            setIsLoading(true);

            const { data } = await axios.get(`${API_ENDPOINT.ANIME}${selectSeason}`);
            setRows(data);

            if (!data.length) {
                alert('データを取得できませんでした。\n情報が公開されるまでお待ちください。');
            }

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
            <MainContents title="アニメ情報">
                <div className="flex flex-col sm:flex-row w-4/5 sm:w-1/3 pt-2 sm:items-center">
                    <Select
                        size="small"
                        sx={{ width: '100%', marginRight: '1rem', height: '2rem' }}
                        value={selectSeason}
                        onChange={handleSelectSiteChange}
                    >
                        {seasons.map((season: { year: string; cours: string; season: string }, index: number) => (
                            <MenuItem value={`${season.year}/${season.cours}`} key={index}>
                                {season.year}年{season.season} 放送開始
                            </MenuItem>
                        ))}
                    </Select>
                    <Button variant="contained" sx={{ margin: '1rem 0', height: '2rem' }} onClick={handleSearchClick}>
                        検索
                    </Button>
                </div>
                <div
                    style={{
                        height: 500,
                        maxHeight: '100%',
                        width: '100%',
                        padding: '0 1rem 1rem 0',
                    }}
                >
                    <DataGrid
                        rows={rows}
                        columns={AnimeColumns}
                        rowsPerPageOptions={[10, 25, 50, 100]}
                        localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
                        initialState={{
                            columns: {
                                columnVisibilityModel: {
                                    id: false,
                                },
                            },
                        }}
                        components={{
                            Toolbar: CustomToolbar,
                        }}
                    />
                </div>
            </MainContents>
        </PrivateRoute>
    );
}
