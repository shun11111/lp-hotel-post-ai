// app/layout.tsx
import './globals.css';
export const metadata = {
  title: 'AIによるホテルのSNS投稿支援サービス',
  description: 'ホテルのSNS投稿をAIがサポートします。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header> {/* ナビゲーションバーやロゴなど */} </header>
        <main>{children}</main>
        <footer> {/* フッター内容 */} </footer>
      </body>
    </html>
  );
}
