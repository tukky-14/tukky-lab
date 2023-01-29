import { Button, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp, jaJP } from '@mui/x-data-grid';
import React, { useReducer, useState } from 'react';
import API from '../../aws-config/api';
import { AnimeColumns } from '../../components/ColumnsAnime';
import CustomToolbar from '../../components/CustomToolbar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';

const seasons = [{ year: '2023', month: '1月' }];

export default function Articles() {
    const [isLoading, setIsLoading] = useState(false);
    const [selectSite, setSelectSeason] = useState('');
    const [rows, setRows] = useState([] as GridRowsProp);
    const [columns, setColumns] = useState(AnimeColumns);

    const handleSelectSiteChange = (event: SelectChangeEvent<string>) => {
        const selectSeason = event.target.value;
        setSelectSeason(selectSite);
        setRows([]);
    };

    const handleSearchClick = async () => {
        try {
            setIsLoading(true);

            const getApiInit = {
                // header: {
                //     'Access-Control-Allow-Origin': '*',
                // },
                // queryStringParameters: {
                //     site: selectSite,
                // },
            };
            const res = await API.get('anime', '/master/2023/1', getApiInit);
            // const res = animeList;
            console.log('res:', res);
            setRows(res);
            // setRows(body);
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
                        defaultValue="2023"
                        onChange={handleSelectSiteChange}
                    >
                        {seasons.map((season: { year: string; month: string }, index: number) => (
                            <MenuItem value={season.year} key={index}>
                                {season.year}年{season.month}放送開始
                            </MenuItem>
                        ))}
                    </Select>
                    <Button variant="contained" sx={{ margin: '1rem 0', height: '2rem' }} onClick={handleSearchClick}>
                        検索
                    </Button>
                </div>
                <div
                    style={{
                        height: 430,
                        maxHeight: '100%',
                        width: '100%',
                        padding: '0 1rem 1rem 0',
                    }}
                >
                    <DataGrid
                        rows={rows}
                        columns={columns}
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
            <Footer />
        </PrivateRoute>
    );
}
