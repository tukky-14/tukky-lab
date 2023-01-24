import React from 'react';
import Expand from '../components/Expand';
import Footer from '../components/Footer';
import Header from '../components/Header';
import MainContents from '../components/MainContents';
import PrivateRoute from '../components/PrivateRoute';

export default function Home() {
    return (
        <PrivateRoute>
            <Header />
            <MainContents title="ホーム">
                このサイトは学習した内容をアウトプットする実験用として作成しています。
                <div className="my-2 mr-4">
                    <Expand title="ランダム名言">
                        <p>
                            「表示」ボタンを押下すると、DynamoDBから取得した名言をランダムに表示します。
                        </p>
                    </Expand>
                    <Expand title="感情分析">
                        <p></p>
                    </Expand>
                    <Expand title="記事検索">
                        <p></p>
                    </Expand>
                    <Expand title="OCR">
                        <p></p>
                    </Expand>
                    <Expand title="QR">
                        <p></p>
                    </Expand>
                </div>
            </MainContents>
            <Footer />
        </PrivateRoute>
    );
}
