import { Button, MenuItem, Select } from '@mui/material';
import { DataGrid, GridColDef, GridRenderCellParams, GridRowsProp, jaJP } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainContents from '../components/MainContents';
import PrivateRoute from '../components/PrivateRoute';

export default function Articles() {
    // グリッド設定
    const [gridHeight, setGridHeight] = useState(window.innerHeight - 200);
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
    const styles = {
        grid: {
            '.MuiDataGrid-columnHeaders': {
                backgroundColor: '#f3f4f6',
            },
            '.MuiDataGrid-columnHeaderTitle': {
                fontWeight: 600,
            },
        },
    };

    useEffect(() => {
        window.addEventListener(`resize`, () => {
            setGridHeight(window.innerHeight - 260);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.innerHeight]);

    return (
        <PrivateRoute>
            <Header />
            <MainContents title="記事検索">
                <Select size="small" sx={{ width: '20%', marginRight: '1rem', height: '2rem' }}>
                    <MenuItem value={10}>Qiita</MenuItem>
                    <MenuItem value={20}>Zenn</MenuItem>
                </Select>
                <Button variant="contained" sx={{ margin: '1rem 0', height: '2rem' }}>
                    検索
                </Button>
                <div style={{ height: gridHeight, width: '100%', padding: '0 1rem 1rem 0' }}>
                    {gridHeight > 0 && (
                        <DataGrid
                            sx={styles.grid}
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
                    )}
                </div>
            </MainContents>
            <Footer />
        </PrivateRoute>
    );
}
