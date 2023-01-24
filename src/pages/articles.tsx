import { Button, MenuItem, Select } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp, jaJP } from '@mui/x-data-grid';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainContents from '../components/MainContents';
import PrivateRoute from '../components/PrivateRoute';

axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export default function Articles() {
    const [rows, setRows] = useState([] as GridRowsProp);
    const columns: GridColDef[] = [
        {
            field: 'title',
            headerName: 'タイトル',
            headerAlign: 'center',
            align: 'left',
            minWidth: 300,
        },
        {
            field: 'link',
            headerName: 'URL',
            headerAlign: 'center',
            align: 'left',
            minWidth: 500,
            flex: 1,
        },
    ];

    const fetchData = async () => {
        const URL = 'https://qiita.com/Qiita/items/b5c1550c969776b65b9b';
        const result = await axios(URL);
        const htmlParser = result.data;
        console.log('htmlParser:', htmlParser);
    };

    return (
        <PrivateRoute>
            <Header />
            <MainContents title="記事検索">
                <div className="flex flex-col sm:flex-row w-1/2 sm:w-1/3 pt-2 sm:items-center">
                    <Select
                        size="small"
                        sx={{ width: '100%', marginRight: '1rem', height: '2rem' }}
                        defaultValue={10}
                    >
                        <MenuItem value={10}>Qiita</MenuItem>
                        <MenuItem value={20}>Zenn</MenuItem>
                    </Select>
                    <Button
                        variant="contained"
                        sx={{ margin: '1rem 0', height: '2rem' }}
                        onClick={fetchData}
                    >
                        検索
                    </Button>
                </div>
                <div style={{ height: 300, width: '100%', padding: '0 1rem 1rem 0' }}>
                    <DataGrid
                        autoHeight
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
