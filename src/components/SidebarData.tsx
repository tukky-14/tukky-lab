import CastleIcon from '@mui/icons-material/Castle';
import ConstructionIcon from '@mui/icons-material/Construction';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import FlipCameraAndroidIcon from '@mui/icons-material/FlipCameraAndroid';
import HomeIcon from '@mui/icons-material/Home';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PetsIcon from '@mui/icons-material/Pets';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';

export const SidebarData = [
    {
        title: 'ホーム',
        icon: <HomeIcon />,
        link: '/',
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
    {
        title: 'HTTP猫',
        icon: <PetsIcon />,
        link: '/httpcat',
    },
    {
        title: 'ディズニーキャラ',
        icon: <CastleIcon />,
        link: '/disney',
    },
    {
        title: 'ポケモン',
        icon: <FlipCameraAndroidIcon />,
        link: '/pokemon',
    },
    {
        title: '便利サイト',
        icon: <ConstructionIcon />,
        link: '/useful',
    },
    {
        title: 'プログラミング言語',
        icon: <LaptopChromebookIcon />,
        link: '/programming',
    },
    {
        title: 'いらすとや検索',
        icon: <FaceRetouchingNaturalIcon />,
        link: '/irasutoya',
    },
];
