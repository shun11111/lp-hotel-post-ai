// app/components/SuccessStories.tsx
export default function SuccessStories() {
    return (
      <section className="p-10 text-gray-800">
        <h2 className="text-2xl font-bold text-center mb-8">成功事例</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold mb-2">ホテルAの成功体験</h3>
            <p className="text-sm">「生成AIを使うことで、わずか数分で高品質なSNS投稿を作成でき、予約数が20%増加しました。」</p>
            <p className="text-sm mt-4">- ホテルA マネージャー</p>
          </div>
          <div className="bg-gray-100 p-6 shadow-lg rounded-lg">
            <h3 className="text-lg font-semibold mb-2">ホテルBの成功体験</h3>
            <p className="text-sm">「多言語対応の投稿が簡単にできるようになり、外国人観光客の宿泊予約が増加しました。」</p>
            <p className="text-sm mt-4">- ホテルB マーケティングチーム</p>
          </div>
        </div>
      </section>
    );
}