import CastleIcon from '@mui/icons-material/Castle';
import ConstructionIcon from '@mui/icons-material/Construction';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import ExploreIcon from '@mui/icons-material/Explore';
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
        icon: <HomeIcon fontSize="small" />,
        link: '/',
    },
    {
        title: 'ランダム名言',
        icon: <SpeakerNotesIcon fontSize="small" />,
        link: '/quotes',
    },
    {
        title: 'MCU次回作',
        icon: <MovieFilterIcon fontSize="small" />,
        link: '/mcu',
    },
    {
        title: 'アニメ情報',
        icon: <LocalMoviesIcon fontSize="small" />,
        link: '/anime',
    },
    {
        title: '記事検索',
        icon: <NewspaperIcon fontSize="small" />,
        link: '/articles',
    },
    {
        title: '感情分析',
        icon: <SentimentSatisfiedAltIcon fontSize="small" />,
        link: '/emotion',
    },
    {
        title: 'OCR',
        icon: <DocumentScannerIcon fontSize="small" />,
        link: '/ocr',
    },
    {
        title: 'HTTP猫',
        icon: <PetsIcon fontSize="small" />,
        link: '/httpcat',
    },
    {
        title: 'ディズニーキャラ',
        icon: <CastleIcon fontSize="small" />,
        link: '/disney',
    },
    {
        title: 'ポケモン',
        icon: <FlipCameraAndroidIcon fontSize="small" />,
        link: '/pokemon',
    },
    {
        title: '便利サイト',
        icon: <ConstructionIcon fontSize="small" />,
        link: '/useful',
    },
    {
        title: 'プログラミング言語',
        icon: <LaptopChromebookIcon fontSize="small" />,
        link: '/programming',
    },
    {
        title: 'いらすとや検索',
        icon: <FaceRetouchingNaturalIcon fontSize="small" />,
        link: '/irasutoya',
    },
    {
        title: 'connpass検索',
        icon: <ExploreIcon fontSize="small" />,
        link: '/connpass',
    },
];
