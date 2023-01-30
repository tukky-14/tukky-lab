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
                        「表示」ボタンを押下すると、DynamoDBから取得したジョジョの名言をランダムに表示します。 名言は
                        <a
                            className="text-blue-600 hover:underline"
                            href="https://news.mynavi.jp/article/20220512-2339271/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            こちら
                        </a>
                        のサイトからいただきました。
                    </Expand>
                    <Expand title="MCU次回作">
                        次に公開されるMCU映画を表示します。
                        <a
                            className="text-blue-600 hover:underline"
                            href="https://github.com/DiljotSG/MCU-Countdown/blob/develop/docs/API.md"
                            target="_blank"
                            rel="noreferrer"
                        >
                            MCU-Countdown
                        </a>
                        を使用させていただきました。
                    </Expand>
                    <Expand title="アニメ情報">
                        季節別のアニメのリストを取得してグリッドに展開します。
                        <a
                            className="text-blue-600 hover:underline"
                            href="https://github.com/Project-ShangriLa/sora-playframework-scala"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Shangrila Anime API
                        </a>
                        を使用させていただきました。
                    </Expand>
                    <Expand title="記事検索">
                        項目を選んで「検索」を押下すると、対象のサイトをWebスクレイピングしてグリッドに展開します。
                    </Expand>
                    <Expand title="感情分析">
                        人の顔が写っている画像を選択して「分析」ボタンを押下すると、AWS Rekognitionを使用して感情を分析します。
                        テスト画像は存在しない人物の画像を生成する
                        <a
                            className="text-blue-600 hover:underline"
                            href="https://thispersondoesnotexist.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            こちら
                        </a>
                        のサイトを使ったりすると楽しいです。
                    </Expand>
                    <Expand title="OCR">
                        OCRは、Optical Character
                        Reader（またはRecognition）の略で、画像データのテキストを文字データに変換する光学文字認識機能のことです。
                        <br />
                        カメラで文字の写真を写して「分析」ボタンを押下すると、AWS
                        Rekognitionを使用してテキストを検出します。日本語は検出できません。。
                    </Expand>
                </div>
            </MainContents>
            <Footer />
        </PrivateRoute>
    );
}
