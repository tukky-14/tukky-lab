import { Button, MenuItem, Select } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp, jaJP } from '@mui/x-data-grid';
import { Auth } from 'aws-amplify';
import axios from 'axios';
import React, { useState } from 'react';
import API from '../aws-config/api';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MainContents from '../components/MainContents';
import PrivateRoute from '../components/PrivateRoute';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default function Articles() {
    const [rows, setRows] = useState([] as GridRowsProp);
    const [isLoading, setIsLoading] = useState(false);
    const columns: GridColDef[] = [
        {
            field: 'title',
            headerName: 'タイトル',
            headerAlign: 'center',
            align: 'left',
            minWidth: 600,
            flex: 1,
            renderCell: (params) => (
                <a className="text-blue-600 hover:underline" href={params.row.link} target="_blank">
                    {params.row.title}
                </a>
            ),
        },
        {
            field: 'tag',
            headerName: 'タグ',
            headerAlign: 'center',
            align: 'center',
            minWidth: 300,
        },
        {
            field: 'like',
            headerName: 'いいね',
            headerAlign: 'center',
            align: 'center',
            minWidth: 100,
        },
    ];

    const handleSearchClick = async () => {
        try {
            setIsLoading(true);
            const user = await Auth.currentAuthenticatedUser();
            const token = user.signInUserSession.idToken.jwtToken;

            const getApiInit = {
                headers: {
                    Authorization: token,
                },
                // queryStringParameters: {
                // },
            };
            const { body } = await API.get('dev', '/articles', getApiInit);
            console.log(body);
            setRows(body);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    // if (isLoading) {
    //     return <Loading />;
    // }

    return (
        <PrivateRoute>
            <Loading open={isLoading} />
            <Header />
            <MainContents title="記事検索">
                <div className="flex flex-col sm:flex-row w-1/2 sm:w-1/3 pt-2 sm:items-center">
                    <Select
                        size="small"
                        sx={{ width: '100%', marginRight: '1rem', height: '2rem' }}
                        defaultValue={10}
                    >
                        <MenuItem value={10}>Qiita週間トレンド記事</MenuItem>
                        <MenuItem value={20}>Zenn</MenuItem>
                    </Select>
                    <Button
                        variant="contained"
                        sx={{ margin: '1rem 0', height: '2rem' }}
                        onClick={handleSearchClick}
                    >
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
                        checkboxSelection
                        columns={columns}
                        rowsPerPageOptions={[10, 25, 50, 100]}
                        localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
                        initialState={{
                            columns: {
                                columnVisibilityModel: {
                                    USE_STATUS: false,
                                },
                            },
                            sorting: {
                                sortModel: [{ field: 'LICENSE_PLATE', sort: 'asc' }],
                            },
                        }}
                    />
                </div>
            </MainContents>
            <Footer />
        </PrivateRoute>
    );
}
