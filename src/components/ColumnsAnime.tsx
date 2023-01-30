import { GridColDef } from '@mui/x-data-grid';
import React from 'react';

export const AnimeColumns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'No',
        headerAlign: 'center',
        align: 'center',
        minWidth: 100,
    },
    {
        field: 'title',
        headerName: 'タイトル',
        headerAlign: 'center',
        align: 'left',
        minWidth: 600,
        flex: 1,
        renderCell: (params) => (
            <a className="text-blue-600 hover:underline" href={params.row.public_url} target="_blank" rel="noreferrer">
                {params.row.title}
            </a>
        ),
    },
    {
        field: 'sequel',
        headerName: 'シーズン',
        headerAlign: 'center',
        align: 'left',
        minWidth: 100,
        renderCell: (params) => <p>{!!params.row.sequel && params.row.sequel}</p>,
    },
    {
        field: 'product_companies',
        headerName: '制作会社',
        headerAlign: 'center',
        align: 'left',
        minWidth: 200,
    },
    {
        field: 'twitter_account',
        headerName: 'Twitterアカウント',
        headerAlign: 'center',
        align: 'left',
        minWidth: 150,
        renderCell: (params) => (
            <a
                className="text-blue-600 hover:underline"
                href={`https://twitter.com/${params.row.twitter_account}`}
                target="_blank"
                rel="noreferrer"
            >
                {params.row.twitter_account}
            </a>
        ),
    },
];
