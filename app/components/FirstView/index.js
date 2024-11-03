// lp-hotel-post-ai/app/components/FirstView/index.js
export default function FirstView() {
    return (
      <section className="relative bg-cover bg-center text-white p-10" style={{ backgroundImage: "url('/static/images/hotel.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-bold">AIで簡単！ホテルのブログやSNS投稿を効率化</h1>
          <p className="mt-4">生成AIで魅力的なコンテンツをすぐに生成。手間をかけずにお客様との接点を強化。</p>
          <a href="https://d1toeffkawove5.cloudfront.net" className="mt-6 bg-white text-blue-700 p-3 rounded inline-block hover:bg-blue-100 hover:text-blue-900">今すぐ無料トライアルを開始する</a>
        </div>
      </section>
    );
}