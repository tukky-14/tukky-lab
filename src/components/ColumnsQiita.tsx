import { GridColDef } from '@mui/x-data-grid';

export const QiitaColumns: GridColDef[] = [
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
            <a className="text-blue-600 hover:underline" href={params.row.link} rel="noreferrer" target="_blank">
                {params.row.title}
            </a>
        ),
    },
    {
        field: 'link',
        headerName: 'リンク',
        headerAlign: 'center',
        align: 'left',
        minWidth: 400,
        renderCell: (params) => (
            <a className="text-blue-600 hover:underline" href={params.row.link} rel="noreferrer" target="_blank">
                {params.row.link}
            </a>
        ),
    },
    {
        field: 'tag',
        headerName: 'タグ',
        headerAlign: 'center',
        align: 'left',
        minWidth: 300,
    },
    {
        field: 'like',
        headerName: 'いいね',
        headerAlign: 'center',
        align: 'center',
        minWidth: 100,
    },
    {
        field: 'auther',
        headerName: '著者',
        headerAlign: 'center',
        align: 'left',
        minWidth: 100,
    },
];
