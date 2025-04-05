# せんめつくん

このChrome拡張機能「せんめつくん」は、指定した文字列に基づいてウェブページ上のポストをフィルタリングします。特定の文字列が含まれるポストを非表示にすることで、快適なブラウジング体験を提供します。

## 機能

- ストレージに保存された文字列を使用して、ウェブページ上のポストをフィルタリング
- ポストの内容が更新された際に自動で表示を更新
- ユーザーが追加した文字列が含まれるポストを非表示にする

## インストール

1. このリポジトリをクローンまたはダウンロードします。
2. Chromeブラウザを開き、`chrome://extensions/`に移動します。
3. 右上の「デベロッパーモード」をオンにします。
4. 「パッケージ化されていない拡張機能を読み込む」をクリックし、ダウンロードしたフォルダを選択します。

## 使い方

1. 拡張機能のアイコン「せんめつくん」をクリックしてポップアップを開きます。
2. フィルタリングしたい文字列をテキストボックスに入力します。
3. 「追加」ボタンをクリックして文字列を保存します。
4. 指定した文字列が含まれるポストは自動的に非表示になります。

## 開発

### 必要な環境

- Chromeブラウザ
- JavaScript

### ファイル構成

/せんめつくん
│
├── icon/
│   └── light.png          # アイコン画像
│
├── css/
│   └── materialize.min.css # スタイルシート
│
├── js/
│   └── materialize.min.js  # JavaScriptライブラリ
│
├── popup.html              # ポップアップのHTML
├── popup.js                # ポップアップのJavaScript
├── content.js              # コンテンツスクリプト
└── style.css               # カスタムスタイルシート


## 注意事項

- 拡張機能の動作には、Chromeブラウザが必要です。
- ストレージのデータが無効化されると、フィルタリングが正しく機能しない場合があります。

## ライセンス

このプロジェクトはMITライセンスの下で提供されています。
