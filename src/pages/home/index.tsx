import React from 'react';
import Expand from '../../components/Expand';
import Header from '../../components/Header';
import MainContents from '../../components/MainContents';
import PrivateRoute from '../../components/PrivateRoute';

export default function Home() {
    return (
        <PrivateRoute>
            <Header />
            <MainContents title="ホーム">
                このサイトは学習した内容をアウトプットする実験用として作成しています。
                <div className="mt-2 mr-4 mb-16">
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
                        を使用させていただきました。「翻訳」ボタンはGoogle App Scriptを利用して公開した翻訳用のAPIを使用しています。
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
                    <Expand title="HTTP猫">
                        HTTPステータスコードのボタンを押すと、コードに応じた猫の画像を表示します。
                        HTTPステータスを猫の画像で取得できる
                        <a className="text-blue-600 hover:underline" href="https://http.cat/" target="_blank" rel="noreferrer">
                            こちら
                        </a>
                        を使用させていただきました。かわいい。
                    </Expand>
                    <Expand title="ディズニーキャラ">
                        7000を超えるディズニーのキャラクターをランダムで取得します。
                        <a className="text-blue-600 hover:underline" href="https://disneyapi.dev/" target="_blank" rel="noreferrer">
                            Disney API
                        </a>
                        を使用させていただきました。ほとんど知らないキャラクターが出てきます。ミッキーが出せたら超ラッキーです！
                    </Expand>
                    <Expand title="ポケモン">
                        みんな大好きポケモンのAPI、
                        <a className="text-blue-600 hover:underline" href="https://pokeapi.co/" target="_blank" rel="noreferrer">
                            pokeapi
                        </a>
                        を使用してみました。1008までの図鑑番号を入力して「表示」を押下すると、ポケモンの情報を表示します。
                    </Expand>
                    <Expand title="便利サイト">便利サイトをまとめました。</Expand>
                    <Expand title="プログラミング言語">
                        プログラミング言語を一覧で表示します。アイコンは
                        <a className="text-blue-600 hover:underline" href="https://devicon.dev/" target="_blank" rel="noreferrer">
                            DEVICON
                        </a>
                        を使用しました。
                    </Expand>
                </div>
            </MainContents>
        </PrivateRoute>
    );
}
