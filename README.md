# ぶれハム。
スマートフォン向けの3Dハムスター撮影ゲームです。

## GitHubにアップロード
ZIPを展開して、中のファイルをリポジトリのルートへアップロードしてください。
index.html、app.js、style.cssなどは同じ階層に置いてください。

## GitHub Pagesで公開
リポジトリの Settings → Pages → Deploy from a branch を選び、main / (root) で保存します。
ビルドやnpm installは不要です。公開URLをスマートフォンで開いてください。

## ローカルで確認
このフォルダで `python -m http.server 8000` を実行し、http://localhost:8000 を開きます。
ファイルのダブルクリックではJavaScriptモジュールが動かない場合があります。

## 機能と注意点
- 写真・ポイント・ハムスター・模様替えはブラウザのlocalStorageに保存します。
- 既存サイトの保存データはGitHub Pagesへ自動で移りません。
- 傾き操作はHTTPSと、端末によっては利用者の許可が必要です。
- 歩行撮影はWebXRのimmersive-ar、local-floor、dom-overlay対応端末のみ。実機での歩行追跡は未検証です。
- Three.jsを同梱しています（MITライセンス）。

最新版: 種が開始直後から落ちるスタート画面を含みます。
