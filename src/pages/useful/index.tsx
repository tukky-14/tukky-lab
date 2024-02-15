import { Card } from '@mui/material';
import axios from 'axios';
import * as cheerio from 'cheerio';

import Header from '../../components/Header';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';
import { siteInfo, siteInfoProps } from '../../types/useful';

const sites = [
    { url: 'https://picsum.photos/', comment: '実装中にダミーの画像を設定したいときに重宝します。' },
    { url: 'https://www.remove.bg/ja', comment: '画像の背景を切り取ることができます。' },
    { url: 'https://tameshigaki.jp/', comment: 'いろんなフォントを試せて楽しいです。' },
    { url: 'https://o-dan.net/ja/', comment: '無料の画像をまさに横断(O-DAN)検索できます。' },
    { url: 'https://www.logoai.com/', comment: 'ロゴを自動で作成します。' },
    { url: 'https://tyoudoii-illust.com/', comment: 'ちょうどいいイラストが見つかります。' },
    { url: 'https://www.flaticon.com/', comment: 'フリーのアイコンを探せます。' },
    { url: 'https://command-lab.com/practice/', comment: 'ショートカットの練習に最適です。' },
];

export default function Useful(props: siteInfoProps) {
    const { siteInfoArray } = props;

    return (
        <PrivateRoute>
            <Header />
            <MainContents title="便利サイト">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mr-6 mt-2 mb-10">
                    {siteInfoArray.map((og: siteInfo, index: number) => (
                        <a
                            className="hover transform hover:scale-105 duration-300"
                            href={og.url}
                            key={index}
                            rel="noreferrer"
                            target="_blank"
                        >
                            <Card>
                                <div className="sm:flex p-2">
                                    <img alt={og.title} className="m-auto sm:m-0 h-40 w-full sm:w-40 block" src={og.image} />
                                    <div className="ml-2">
                                        <p className="font-bold">{og.title}</p>
                                        <p className="h-10 text-sm overflow-hidden text-overflow-ellipsis">{og.description}</p>
                                        <p className="italic mt-4 text-sm overflow-hidden text-overflow-ellipsis">{og.comment}</p>
                                    </div>
                                </div>
                            </Card>
                        </a>
                    ))}
                </div>
            </MainContents>
        </PrivateRoute>
    );
}

export const getStaticProps = async () => {
    const siteInfoArray = [];

    for (let i = 0; i < sites.length; i++) {
        const response = await axios.get(sites[i].url);
        const $ = cheerio.load(response.data);
        const title = $("meta[property='og:title']")?.attr('content') || '';
        const description = $("meta[property='og:description']")?.attr('content') || '';
        const image = $("meta[property='og:image']")?.attr('content') || '';
        siteInfoArray.push({ ...sites[i], title, description, image });
    }

    return {
        props: { siteInfoArray },
    };
};
