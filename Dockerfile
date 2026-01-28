# Node.jsの軽量 Alpine ベース（最新のLTS推奨）
FROM node:20-bullseye
# FROM node:22-alpine   ← コマンドにgitが入っていない

# 作業ディレクトリを設定
WORKDIR /app

# node_modulesを除いた依存ファイルのみをコピー
COPY package*.json ./

# 依存関係をインストール
RUN npm install

# 残りのすべてのファイルをコピー
COPY . .

# Vite が使用するポート
EXPOSE 5173

# コンテナ起動時に開発サーバーを立ち上げ（--hostを付けると、外部アクセス（localhost:5173）可能になる
CMD ["npm", "run", "dev", "--", "--host"]

