import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import HomeIcon from '@mui/icons-material/Home';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';

export const SidebarData = [
    {
        title: 'ホーム',
        icon: <HomeIcon />,
        link: '/home',
    },
    {
        title: 'ランダム名言',
        icon: <SpeakerNotesIcon />,
        link: '/quotes',
    },
    {
        title: 'MCU次回作',
        icon: <MovieFilterIcon />,
        link: '/mcu',
    },
    {
        title: 'アニメ情報',
        icon: <LocalMoviesIcon />,
        link: '/anime',
    },
    {
        title: '記事検索',
        icon: <NewspaperIcon />,
        link: '/articles',
    },
    {
        title: '感情分析',
        icon: <SentimentSatisfiedAltIcon />,
        link: '/emotion',
    },
    {
        title: 'OCR',
        icon: <DocumentScannerIcon />,
        link: '/ocr',
    },
];