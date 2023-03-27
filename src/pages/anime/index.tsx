import { Button, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { DataGrid, GridRowsProp, jaJP } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useState } from 'react';
import { AnimeColumns } from '../../components/ColumnsAnime';
import CustomToolbar from '../../components/CustomToolbar';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';
import { API_ENDPOINT } from '../../constants/api';

const seasons = [
    { year: '2023', cours: '2', season: '春' },
    { year: '2023', cours: '1', season: '冬' },
    { year: '2022', cours: '4', season: '秋' },
    { year: '2022', cours: '3', season: '夏' },
    { year: '2022', cours: '2', season: '春' },
    { year: '2022', cours: '1', season: '冬' },
    { year: '2021', cours: '4', season: '秋' },
    { year: '2021', cours: '3', season: '夏' },
    { year: '2021', cours: '2', season: '春' },
    { year: '2021', cours: '1', season: '冬' },
    { year: '2020', cours: '4', season: '秋' },
    { year: '2020', cours: '3', season: '夏' },
    { year: '2020', cours: '2', season: '春' },
    { year: '2020', cours: '1', season: '冬' },
];

export default function Articles() {
    const [isLoading, setIsLoading] = useState(false);
    const [selectSeason, setSelectSeason] = useState('2023/1');
    const [rows, setRows] = useState([] as GridRowsProp);

    const handleSelectSiteChange = (event: SelectChangeEvent<string>) => {
        const selectSeason = event.target.value;
        setSelectSeason(selectSeason);
        setRows([]);
    };

    const handleSearchClick = async () => {
        try {
            setIsLoading(true);

            const { data } = await axios.get(`${API_ENDPOINT.ANIME}${selectSeason}`);
            setRows(data);

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
                        defaultValue="2023/1"
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
