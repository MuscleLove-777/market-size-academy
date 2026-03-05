/* ============================================
   Level 3: IT・通信・メディアの市場規模
   ============================================ */
const LEVEL3_DATA = {
    id: 3,
    title: "IT・通信・メディアの市場規模",
    icon: "📱",
    description: "デジタル時代の主要産業の市場規模と企業シェアを学ぶ",
    modules: [
        {
            id: 301,
            title: "通信キャリア市場",
            duration: "15分",
            content: `
<h2>日本の通信市場の全体像</h2>
<p>日本の通信市場規模は<strong>約14兆円</strong>に達し、社会インフラとして不可欠な巨大産業です。携帯電話・スマートフォンの普及率は100%を超え（1人が複数回線を保有）、通信は現代社会の基盤となっています。</p>

<div class="info-box tip">
<div class="info-box-title">通信市場の構成</div>
<ul>
<li><strong>移動体通信（モバイル）:</strong> 約10兆円 - 携帯電話・スマートフォン関連</li>
<li><strong>固定通信:</strong> 約4兆円 - 光回線・ブロードバンド等</li>
</ul>
</div>

<h2>主要通信キャリアの比較</h2>
<p>日本の通信市場は、大手3社（NTTドコモ・KDDI・ソフトバンク）による<strong>寡占構造</strong>が特徴です。2020年に参入した楽天モバイルが第4のキャリアとして市場に変化をもたらしています。</p>

<div class="visual-box">
<div class="visual-box-title">主要通信キャリアの売上高・シェア</div>
<table>
<tr><th>企業名</th><th>売上高</th><th>契約回線シェア(%)</th></tr>
<tr><td>NTTドコモ</td><td>約6兆円</td><td>約37%</td></tr>
<tr><td>KDDI（au）</td><td>約5.7兆円</td><td>約28%</td></tr>
<tr><td>ソフトバンク</td><td>約5.9兆円</td><td>約22%</td></tr>
<tr><td>楽天モバイル</td><td>約0.4兆円</td><td>約4%</td></tr>
<tr><td>MVNO各社</td><td>-</td><td>約9%</td></tr>
</table>
</div>

<h3>5Gの普及状況</h3>
<p>5G（第5世代移動通信）は2020年に商用サービスが開始され、<strong>高速・大容量・低遅延・多数同時接続</strong>を実現します。2025年時点で人口カバー率は90%を超え、スマートファクトリーや自動運転など産業用途での活用も進んでいます。</p>

<h3>固定回線市場</h3>
<p>光回線を中心とした固定ブロードバンド市場では、NTT東西の「フレッツ光」が圧倒的シェアを持ちます。「光コラボレーション」モデルにより、ドコモ光やソフトバンク光など、携帯キャリアがセット割引で顧客を囲い込む構図が定着しています。</p>

<h3>MVNO・格安SIMの影響</h3>
<p>MVNO（仮想移動体通信事業者）は大手キャリアの回線を借り受けて低価格サービスを提供します。契約回線シェアは約9%ですが、大手キャリアの料金値下げを促す<strong>競争促進効果</strong>をもたらしました。政府の「携帯料金値下げ」政策もあり、業界全体の料金水準は低下傾向にあります。</p>

<div class="info-box warning">
<div class="info-box-title">業界の課題</div>
通信業界は成熟市場であり、契約回線数の大幅な成長は見込みにくい状況です。各社は金融・決済・エンターテイメントなどの<strong>非通信領域</strong>への多角化を加速させています。
</div>
            `,
            quiz: [
                {
                    id: "q301_1",
                    type: "choice",
                    question: "日本の通信市場全体の規模として最も近いものはどれですか？",
                    options: ["約5兆円", "約10兆円", "約14兆円", "約20兆円"],
                    answer: 2,
                    explanation: "日本の通信市場規模は約14兆円です。移動体通信が約10兆円、固定通信が約4兆円で構成されています。"
                },
                {
                    id: "q301_2",
                    type: "choice",
                    question: "携帯電話の契約回線シェアが最も高い企業はどれですか？",
                    options: ["KDDI（au）", "ソフトバンク", "NTTドコモ", "楽天モバイル"],
                    answer: 2,
                    explanation: "NTTドコモが契約回線シェア約37%で最大のシェアを持っています。"
                },
                {
                    id: "q301_3",
                    type: "choice",
                    question: "第4のキャリアとして2020年に携帯事業に参入した企業はどれですか？",
                    options: ["LINE", "楽天モバイル", "IIJ", "日本通信"],
                    answer: 1,
                    explanation: "楽天モバイルが2020年に自社回線によるMNOサービスを開始し、第4のキャリアとして参入しました。"
                },
                {
                    id: "q301_4",
                    type: "fill",
                    question: "大手キャリアの回線を借りて低価格サービスを提供する事業者の略称は？（アルファベット4文字）",
                    answer: "MVNO",
                    explanation: "MVNO（Mobile Virtual Network Operator：仮想移動体通信事業者）は大手キャリアの回線を借り受けて格安SIMサービスを提供しています。"
                }
            ]
        },
        {
            id: 302,
            title: "ITサービス・SaaS市場",
            duration: "15分",
            content: `
<h2>国内IT市場の全体像</h2>
<p>日本の国内IT市場規模は<strong>約16兆円</strong>に達し、あらゆる産業のデジタル化を支える基幹産業です。企業のDX（デジタルトランスフォーメーション）推進に伴い、市場は堅調に成長を続けています。</p>

<div class="info-box tip">
<div class="info-box-title">IT市場の構成</div>
<ul>
<li><strong>システムインテグレーション（SI）:</strong> 企業の業務システム構築・運用</li>
<li><strong>ITコンサルティング:</strong> IT戦略立案・DX推進支援</li>
<li><strong>クラウド・SaaS:</strong> ソフトウェアのサービス提供</li>
<li><strong>ITアウトソーシング:</strong> IT運用管理の外部委託</li>
</ul>
</div>

<h2>主要ITサービス企業の比較</h2>

<div class="visual-box">
<div class="visual-box-title">主要企業のIT事業売上・シェア</div>
<table>
<tr><th>企業名</th><th>IT事業売上</th><th>シェア(%)</th></tr>
<tr><td>富士通</td><td>約3.7兆円</td><td>約10%</td></tr>
<tr><td>NTTデータ</td><td>約3.5兆円</td><td>約9%</td></tr>
<tr><td>日立製作所（IT）</td><td>約2.2兆円</td><td>約7%</td></tr>
<tr><td>NEC</td><td>約2兆円</td><td>約6%</td></tr>
<tr><td>野村総合研究所</td><td>約0.7兆円</td><td>約3%</td></tr>
</table>
</div>

<h3>日本のIT業界の特徴：多重下請け構造</h3>
<p>日本のIT業界は、大手SIerを頂点とする<strong>多重下請け構造</strong>（ゼネコン型構造）が特徴です。発注企業 → 元請けSIer → 二次請け → 三次請け...と業務が分散し、末端ほど利益率が低くなる構造的課題を抱えています。</p>

<h3>SaaS市場の急成長</h3>
<p>国内SaaS市場は<strong>約1.5兆円</strong>規模に到達し、前年比約20%の高成長を続けています。従来のオンプレミス（自社設置型）システムからクラウドへの移行が加速しており、今後も成長が見込まれます。</p>

<div class="info-box success">
<div class="info-box-title">主要SaaS企業</div>
<ul>
<li><strong>Sansan:</strong> 名刺管理SaaSの最大手</li>
<li><strong>freee:</strong> クラウド会計ソフトで中小企業向け市場をリード</li>
<li><strong>マネーフォワード:</strong> 家計簿・会計・HR領域のSaaS</li>
<li><strong>サイボウズ:</strong> グループウェア「kintone」等</li>
<li><strong>ラクス:</strong> 経費精算「楽楽精算」等のバックオフィスSaaS</li>
</ul>
</div>

<h3>DX需要の拡大</h3>
<p>経済産業省が警鐘を鳴らした「<strong>2025年の崖</strong>」問題（レガシーシステムの老朽化による経済損失リスク）を背景に、企業のDX投資は急拡大しています。既存システムの刷新やデータ活用基盤の構築が多くの企業で喫緊の課題となっています。</p>

<div class="info-box warning">
<div class="info-box-title">IT人材不足</div>
日本では2030年にIT人材が最大約79万人不足すると予測されており、人材確保が業界全体の最大の課題です。
</div>
            `,
            quiz: [
                {
                    id: "q302_1",
                    type: "choice",
                    question: "国内IT市場の規模として最も近いものはどれですか？",
                    options: ["約8兆円", "約12兆円", "約16兆円", "約20兆円"],
                    answer: 2,
                    explanation: "日本の国内IT市場規模は約16兆円です。"
                },
                {
                    id: "q302_2",
                    type: "choice",
                    question: "IT事業の売上高が最も大きい日本企業はどれですか？",
                    options: ["NTTデータ", "NEC", "富士通", "日立製作所"],
                    answer: 2,
                    explanation: "富士通がIT事業売上約3.7兆円で国内最大規模です。"
                },
                {
                    id: "q302_3",
                    type: "choice",
                    question: "国内SaaS市場の成長率（前年比）として最も近いものはどれですか？",
                    options: ["約5%", "約10%", "約20%", "約40%"],
                    answer: 2,
                    explanation: "国内SaaS市場は前年比約20%の高成長を続けています。"
                },
                {
                    id: "q302_4",
                    type: "fill",
                    question: "経済産業省が警鐘を鳴らした、レガシーシステムの老朽化による経済損失リスクの通称は？（「20XX年の○」の形で）",
                    answer: "2025年の崖",
                    explanation: "「2025年の崖」は経済産業省が提唱した概念で、レガシーシステムの老朽化・複雑化により、DXが進まなければ最大12兆円/年の経済損失が発生すると警告しています。"
                }
            ]
        },
        {
            id: 303,
            title: "ゲーム・エンタメ市場",
            duration: "12分",
            content: `
<h2>日本のゲーム市場</h2>
<p>日本のゲーム市場規模は<strong>約2兆円</strong>で、米国・中国に次ぐ世界第3位の市場です。日本は「ゲーム大国」として世界的に知られ、任天堂やソニーなどのグローバル企業を輩出しています。</p>

<div class="info-box tip">
<div class="info-box-title">ゲーム市場の構成比</div>
<ul>
<li><strong>モバイルゲーム:</strong> 約60% - スマートフォン向けゲームが最大セグメント</li>
<li><strong>家庭用ゲーム:</strong> 約30% - コンソール機（Switch、PlayStation等）</li>
<li><strong>PCゲーム:</strong> 約10% - Steam等のプラットフォーム</li>
</ul>
</div>

<h2>主要ゲーム企業</h2>

<h3>任天堂</h3>
<p>売上高<strong>約1.7兆円</strong>の日本最大のゲーム企業です。Nintendo Switchシリーズは世界累計販売台数1億4,000万台以上を記録し、「ゼルダの伝説」「マリオ」「ポケモン」などの強力なIPを保有しています。</p>

<h3>ソニー（PlayStation）</h3>
<p>PlayStation 5は世界で5,000万台以上を販売。ソニーのゲーム&ネットワークサービス部門の売上は約4兆円規模（グローバル）で、PlayStation Plus（有料会員サービス）やファーストパーティスタジオの拡充に注力しています。</p>

<h3>その他の主要企業</h3>

<div class="visual-box">
<div class="visual-box-title">主要ゲームパブリッシャー</div>
<table>
<tr><th>企業名</th><th>特徴・代表作</th></tr>
<tr><td>バンダイナムコ</td><td>「ドラゴンボール」「ガンダム」等のIP活用、アミューズメント施設運営</td></tr>
<tr><td>カプコン</td><td>「モンスターハンター」「バイオハザード」「ストリートファイター」</td></tr>
<tr><td>スクウェア・エニックス</td><td>「ファイナルファンタジー」「ドラゴンクエスト」</td></tr>
<tr><td>コナミ</td><td>「遊戯王」「eFootball」、スポーツクラブ事業も展開</td></tr>
</table>
</div>

<h3>モバイルゲーム市場</h3>
<p>市場全体の約60%を占めるモバイルゲームは、<strong>基本プレイ無料+課金（ガチャ）モデル</strong>が主流です。日本のモバイルゲームのユーザー課金額は世界でもトップクラスで、1人あたりの支出額は世界最高水準です。</p>

<div class="info-box warning">
<div class="info-box-title">ゲーム業界の変化</div>
サブスクリプションモデル（Game Pass、PS Plus等）の台頭やクラウドゲーミングの発展により、ゲームのビジネスモデルが大きく変化しています。また、eスポーツ市場も急成長しており、新たな収益機会となっています。
</div>
            `,
            quiz: [
                {
                    id: "q303_1",
                    type: "choice",
                    question: "日本のゲーム市場規模として最も近いものはどれですか？",
                    options: ["約5,000億円", "約1兆円", "約2兆円", "約5兆円"],
                    answer: 2,
                    explanation: "日本のゲーム市場規模は約2兆円で、米国・中国に次ぐ世界第3位です。"
                },
                {
                    id: "q303_2",
                    type: "choice",
                    question: "日本のゲーム市場で最も大きなセグメントはどれですか？",
                    options: ["家庭用ゲーム", "PCゲーム", "モバイルゲーム", "アーケードゲーム"],
                    answer: 2,
                    explanation: "モバイルゲームが市場全体の約60%を占める最大セグメントです。"
                },
                {
                    id: "q303_3",
                    type: "choice",
                    question: "売上高約1.7兆円の日本最大のゲーム企業はどれですか？",
                    options: ["ソニー", "任天堂", "バンダイナムコ", "カプコン"],
                    answer: 1,
                    explanation: "任天堂が売上高約1.7兆円で日本最大のゲーム企業です。Nintendo Switchシリーズが世界的大ヒットを記録しています。"
                },
                {
                    id: "q303_4",
                    type: "fill",
                    question: "Nintendo Switchシリーズの世界累計販売台数は約何万台ですか？（数字のみ）",
                    answer: "14000",
                    explanation: "Nintendo Switchシリーズは世界累計販売台数1億4,000万台（14,000万台）以上を記録しています。"
                }
            ]
        },
        {
            id: 304,
            title: "広告・メディア市場",
            duration: "12分",
            content: `
<h2>日本の広告市場の全体像</h2>
<p>日本の広告市場規模は<strong>約7.3兆円</strong>で、世界第3位の広告市場です。最大の特徴は<strong>デジタル広告が約45%</strong>に到達し、テレビ広告を逆転したことです。この構造変化は広告業界全体に大きな影響を与えています。</p>

<div class="visual-box">
<div class="visual-box-title">広告媒体別の構成</div>
<table>
<tr><th>媒体</th><th>構成比</th><th>トレンド</th></tr>
<tr><td>デジタル広告</td><td>約45%</td><td>拡大中</td></tr>
<tr><td>テレビ広告</td><td>約25%</td><td>縮小傾向</td></tr>
<tr><td>新聞・雑誌</td><td>約8%</td><td>大幅縮小</td></tr>
<tr><td>屋外・交通広告等</td><td>約22%</td><td>横ばい〜微増</td></tr>
</table>
</div>

<h2>主要広告企業</h2>

<h3>電通</h3>
<p>国内広告市場シェア<strong>約25%</strong>を持つ日本最大の広告会社です。2020年に持株会社「電通グループ」に移行し、海外事業（dentsu international）を含めたグローバル売上は約1.1兆円に達します。</p>

<h3>博報堂</h3>
<p>国内シェア<strong>約15%</strong>で業界第2位。博報堂DYホールディングスとして上場しており、「生活者発想」を掲げたクリエイティブ力に定評があります。</p>

<h3>サイバーエージェント</h3>
<p><strong>インターネット広告の国内首位</strong>企業です。ネット広告代理事業に加え、メディア事業（ABEMA）やゲーム事業（Cygames）も展開しています。デジタル広告の成長とともに存在感を拡大しています。</p>

<h3>ADKホールディングス</h3>
<p>国内第3位の総合広告会社で、アニメコンテンツとの結びつきが強いのが特徴です。2018年にベインキャピタルによるMBOで非上場化しました。</p>

<div class="info-box success">
<div class="info-box-title">デジタル広告の内訳</div>
<ul>
<li><strong>検索連動型広告:</strong> Google、Yahoo!の検索結果に表示</li>
<li><strong>SNS広告:</strong> Instagram、X（旧Twitter）、TikTok等 - 急成長中</li>
<li><strong>動画広告:</strong> YouTube、ABEMA等 - 高い成長率</li>
<li><strong>ディスプレイ広告:</strong> Webサイト上のバナー等</li>
</ul>
</div>

<h3>テレビ広告の縮小トレンド</h3>
<p>テレビ視聴率の低下、特に若年層のテレビ離れにより、テレビ広告費は縮小傾向が続いています。一方で、テレビ局各社はTVer等の配信プラットフォームを通じた<strong>動画配信広告</strong>に活路を見出そうとしています。</p>

<h3>SNS広告の急成長</h3>
<p>Instagram、TikTok、X（旧Twitter）などのSNS広告は、<strong>精度の高いターゲティング</strong>と若年層へのリーチ力から急成長しています。インフルエンサーマーケティングの市場も拡大を続けています。</p>

<div class="info-box warning">
<div class="info-box-title">広告業界の課題</div>
Cookie規制の強化によるターゲティング精度の低下、広告詐欺（アドフラウド）対策、プライバシー保護と広告効果のバランスなど、デジタル広告には多くの課題があります。
</div>
            `,
            quiz: [
                {
                    id: "q304_1",
                    type: "choice",
                    question: "日本の広告市場規模として最も近いものはどれですか？",
                    options: ["約3兆円", "約5兆円", "約7.3兆円", "約10兆円"],
                    answer: 2,
                    explanation: "日本の広告市場規模は約7.3兆円で、世界第3位の規模です。"
                },
                {
                    id: "q304_2",
                    type: "choice",
                    question: "日本の広告市場でデジタル広告の構成比として最も近いものはどれですか？",
                    options: ["約20%", "約30%", "約45%", "約60%"],
                    answer: 2,
                    explanation: "デジタル広告は広告市場全体の約45%に到達し、テレビ広告を逆転しています。"
                },
                {
                    id: "q304_3",
                    type: "choice",
                    question: "インターネット広告の国内首位企業はどれですか？",
                    options: ["電通", "博報堂", "サイバーエージェント", "ADKホールディングス"],
                    answer: 2,
                    explanation: "サイバーエージェントがインターネット広告の国内首位です。デジタル広告市場の成長とともに存在感を拡大しています。"
                },
                {
                    id: "q304_4",
                    type: "fill",
                    question: "国内広告市場シェア約25%を持つ日本最大の広告会社名は？（カタカナ2文字）",
                    answer: "電通",
                    explanation: "電通は国内広告市場シェア約25%を持つ日本最大の広告会社です。海外事業も含めたグローバル売上は約1.1兆円に達します。"
                }
            ]
        }
    ]
};
