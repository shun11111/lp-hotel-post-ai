// app/components/Benefits.tsx
export default function Benefits() {
    return (
      <section className="p-10 text-gray-800">
        <h2 className="text-2xl font-bold text-center mb-8">AIでブログ記事・SNS投稿を作成するメリット</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold mb-2">コンテンツ作成の効率化</h3>
            <p className="text-sm">AIがブログやSNSの投稿を自動生成。時間と労力を節約できます。</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold mb-2">パーソナライズされたコンテンツ</h3>
            <p className="text-sm">ホテルの情報を登録することで、ホテル独自のコンテンツを生成します。</p>
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold mb-2">コンテンツの品質向上</h3>
            <p className="text-sm">最新のAI技術が、魅力的で品質の高いコンテンツを提供します。</p>
          </div>
        </div>
      </section>
    );
}