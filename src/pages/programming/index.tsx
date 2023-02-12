import { Card } from '@mui/material';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import Header from '../../components/Header';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';

type Props = {
    langArray: [{ name: string; imageUrl: string }];
};

export default function Programming(props: Props) {
    const { langArray } = props;

    return (
        <PrivateRoute>
            <Header />
            <MainContents title="プログラミング言語">
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 gap-4 mr-6 mt-2 mb-10">
                    {langArray.map((lang: { name: string; imageUrl: string }, index: number) => (
                        <button className="hover transform hover:scale-105 duration-150" key={index}>
                            <Card className="w-full" variant="outlined">
                                <p className="pt-2 font-bold text-center">{lang.name}</p>
                                <img className="px-4 pb-4" src={lang.imageUrl} />
                            </Card>
                        </button>
                    ))}
                </div>
            </MainContents>
        </PrivateRoute>
    );
}

export const getStaticProps = async () => {
    const doc = new GoogleSpreadsheet(process.env.NEXT_PUBLIC_API_GOOGLE_SHEET_ID);
    doc.useServiceAccountAuth({
        client_email: process.env.NEXT_PUBLIC_API_GOOGLE_SHEET_CLIENT_EMAIL || '',
        private_key: (process.env.NEXT_PUBLIC_API_GOOGLE_SHEET_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
    });
    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    const langArray = rows.map((row) => ({
        name: row.name,
        imageUrl: row.imageUrl,
    }));

    return {
        props: { langArray },
    };
};
