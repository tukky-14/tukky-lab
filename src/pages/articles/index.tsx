import { Button, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp, jaJP } from '@mui/x-data-grid';
import React, { useReducer, useState } from 'react';
import API from '../../awsConfig/api';
import { QiitaColumns } from '../../components/ColumnsQiita';
import { ZennColumns } from '../../components/ColumnsZenn';
import CustomToolbar from '../../components/CustomToolbar';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';

const sites = [
    { value: 'qiita', title: 'Qiita週間トレンド記事' },
    { value: 'zenn', title: 'Zenn週間トレンド記事' },
];

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
    const [selectSite, setSelectSite] = useState('qiita');
    const [rows, setRows] = useState([] as GridRowsProp);
    const [columns, columnsDispatch] = useReducer(columnsReducer, QiitaColumns);

    const handleSelectSiteChange = (event: SelectChangeEvent<string>) => {
        const selectSite = event.target.value;
        setSelectSite(selectSite);
        setRows([]);
        columnsDispatch(selectSite);
    };

    const handleSearchClick = async () => {
        try {
            setIsLoading(true);

            const getApiInit = {
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

            setRows(body);
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
            <MainContents title="記事検索">
                <div className="flex flex-col sm:flex-row w-4/5 sm:w-1/3 pt-2 sm:items-center">
                    <Select
                        size="small"
                        sx={{ width: '100%', marginRight: '1rem', height: '2rem' }}
                        defaultValue="qiita"
                        onChange={handleSelectSiteChange}
                    >
                        {sites.map((site: { value: string; title: string }, index: number) => (
                            <MenuItem value={site.value} key={index}>
                                {site.title}
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
