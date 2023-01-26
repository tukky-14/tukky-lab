import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp, jaJP } from '@mui/x-data-grid';
import React, { useEffect, useReducer, useState } from 'react';
import API from '../../aws-config/api';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';
import CustomToolbar from './CustomToolbar';
import QiitaColumns from './QiitaColumns';
import ZennColumns from './ZennColumns';

export const columnsReducer = (state: GridColDef[], action: string) => {
    switch (action) {
        case 'qiita':
            return QiitaColumns;
        case 'zenn':
            return ZennColumns;
        default:
            return state;
    }
};

export default function Articles() {
    const [isLoading, setIsLoading] = useState(false);
    const [rows, setRows] = useState([] as GridRowsProp);
    const [columns, columnsDispatch] = useReducer(columnsReducer, QiitaColumns);

    useEffect(() => {
        handleSelectSiteChange();
    }, []);

    const handleSelectSiteChange = async (event?: SelectChangeEvent<string>) => {
        const site = event?.target.value || 'qiita';
        const result = await searchArticles(site);
        setRows(result);
        columnsDispatch(site);
    };

    const searchArticles = async (selectSite: string) => {
        try {
            setIsLoading(true);

            const getApiInit = {
                headers: {},
                queryStringParameters: {
                    site: selectSite,
                },
            };
            const { body } = await API.get('dev', '/articles', getApiInit);
            if (!Object.keys(body).length) {
                alert('データは取得できませんでした');
                setIsLoading(false);
                return;
            }

            setIsLoading(false);
            return body;
        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
    };

    return (
        <PrivateRoute>
            <Loading open={isLoading} />
            <Header />
            <MainContents title="記事検索">
                <div className="w-4/5 sm:w-1/3 py-2">
                    <Select
                        size="small"
                        sx={{ width: '100%', marginRight: '1rem', height: '2rem' }}
                        defaultValue="qiita"
                        onChange={handleSelectSiteChange}
                    >
                        <MenuItem value="qiita">Qiita週間トレンド記事</MenuItem>
                        <MenuItem value="zenn">Zenn</MenuItem>
                    </Select>
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
                                    link: false,
                                    auther: false,
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
