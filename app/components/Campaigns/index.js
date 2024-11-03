// app/components/Campaigns.tsx
export default function Campaigns() {
    return (
        <section className="p-10 text-gray-800">
            <h2 className="text-2xl font-bold text-center mb-8">キャンペーン情報</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card">
                    <h3 className="text-lg font-semibold mb-2">先着100施設限定で導入費用が無料</h3>
                    <p className="text-sm">先着100施設様限定で、本サービスを無料で利用開始していただけます。</p>
                </div>
                <div className="card">
                    <h3 className="text-lg font-semibold mb-2">記事生成1000ポイント分を無料付与</h3>
                    <p className="text-sm">記事生成に利用するポイントを1000ポイント分（1ヶ月利用分相当）を無料でプレゼント</p>
                </div>
            </div>
        </section>
    );
}