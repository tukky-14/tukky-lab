import React from 'react';
import Expand from '../../components/Expand';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';

export default function Home() {
    return (
        <PrivateRoute>
            <Header />
            <MainContents title="ホーム">
                このサイトは学習した内容をアウトプットする実験用として作成しています。
                <div className="my-2 mr-4">
                    <Expand title="ランダム名言">
                        「表示」ボタンを押下すると、名言をランダムに表示します。
                    </Expand>
                    <Expand title="記事検索">
                        項目を選んで「検索」を押下すると、対象のサイトの情報を取得してグリッドに展開します。
                    </Expand>
                    <Expand title="感情分析"></Expand>
                    <Expand title="OCR"></Expand>
                    <Expand title="QR"></Expand>
                </div>
            </MainContents>
            <Footer />
        </PrivateRoute>
    );
}
