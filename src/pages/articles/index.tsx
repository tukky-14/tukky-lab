import { Button, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { DataGrid, GridColDef, GridRowsProp, jaJP } from '@mui/x-data-grid';
import { useReducer, useState } from 'react';
import API from '../../aws-config/api';
import { QiitaColumns } from '../../components/ColumnsQiita';
import { ZennColumns } from '../../components/ColumnsZenn';
import CustomToolbar from '../../components/CustomToolbar';
import Header from '../../components/Header';
import Loading from '../../components/Loading';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';
import { Site } from '../../types/articles';

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
                        defaultValue="qiita"
                        onChange={handleSelectSiteChange}
                        size="small"
                        sx={{ width: '100%', marginRight: '1rem', height: '2rem' }}
                    >
                        {sites.map((site: Site, index: number) => (
                            <MenuItem key={index} value={site.value}>
                                {site.title}
                            </MenuItem>
                        ))}
                    </Select>
                    <Button onClick={handleSearchClick} sx={{ margin: '1rem 0', height: '2rem' }} variant="contained">
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
                        columns={columns}
                        components={{
                            Toolbar: CustomToolbar,
                        }}
                        initialState={{
                            columns: {
                                columnVisibilityModel: {
                                    link: false,
                                    auther: false,
                                },
                            },
                        }}
                        localeText={jaJP.components.MuiDataGrid.defaultProps.localeText}
                        rows={rows}
                        rowsPerPageOptions={[10, 25, 50, 100]}
                    />
                </div>
            </MainContents>
        </PrivateRoute>
    );
}
