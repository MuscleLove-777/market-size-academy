/* ============================================
   Level 1: 市場規模分析の基礎
   ============================================ */
const LEVEL1_DATA = {
    id: 1,
    title: "市場規模分析の基礎",
    icon: "📊",
    description: "市場規模・市場シェアの基本概念と分析手法を学ぶ",
    modules: [
        {
            id: 101,
            title: "市場規模とは何か",
            duration: "12分",
            content: `
<h2>市場規模の定義</h2>
<p>市場規模とは、<strong>ある特定の市場における取引の総額または総量</strong>を指します。企業が事業戦略を立てる際、「この市場はどれくらい大きいのか」を把握することは最も基本的かつ重要なステップです。</p>

<h3>TAM・SAM・SOMの概念</h3>
<p>市場規模は、対象範囲に応じて3つのレベルに分類されます。</p>

<div class="info-box formula">
<div class="info-box-title">TAM・SAM・SOMフレームワーク</div>
<ul>
<li><strong>TAM（Total Addressable Market）:</strong> 獲得可能な最大の市場規模。理論上の最大値</li>
<li><strong>SAM（Serviceable Available Market）:</strong> 自社の製品・サービスでアプローチ可能な市場規模</li>
<li><strong>SOM（Serviceable Obtainable Market）:</strong> 実際に獲得が見込める現実的な市場規模</li>
</ul>
</div>

<div class="visual-box">
<div class="visual-box-title">TAM・SAM・SOMの関係</div>
<p style="text-align:center;">TAM（最大市場）&gt; SAM（対応可能市場）&gt; SOM（獲得可能市場）</p>
<p>例: 日本の外食産業全体（TAM: 約25兆円）&gt; ファストフード市場（SAM: 約7兆円）&gt; 自社が出店可能な地域のハンバーガー市場（SOM: 約500億円）</p>
</div>

<h2>トップダウン推計とボトムアップ推計</h2>
<p>市場規模を推計するアプローチには、大きく2つの方法があります。</p>

<h3>トップダウン推計</h3>
<p><strong>マクロデータから出発して市場を絞り込む</strong>手法です。政府統計や業界レポートの大きな数字を基に、対象市場を特定していきます。</p>
<ul>
<li>例: 日本のGDP約560兆円 → サービス業の構成比約70% → 外食産業の割合 → 対象セグメント</li>
<li>メリット: 大きな視点で市場を俯瞰できる</li>
<li>デメリット: 細分化するほど推計の精度が下がる</li>
</ul>

<h3>ボトムアップ推計</h3>
<p><strong>個別のデータを積み上げて市場全体を推計する</strong>手法です。顧客単価や顧客数など、具体的な数値を基に計算します。</p>
<ul>
<li>例: 顧客単価800円 × 1日来客数200人 × 365日 × 国内店舗数5,000店 = 約2,920億円</li>
<li>メリット: 具体的で説得力がある</li>
<li>デメリット: 前提条件の設定が難しい</li>
</ul>

<h2>市場規模の単位</h2>

<h3>金額ベース vs 数量ベース</h3>
<p>市場規模は目的に応じて異なる単位で測定されます。</p>

<table>
<thead>
<tr><th>単位</th><th>特徴</th><th>使用例</th></tr>
</thead>
<tbody>
<tr><td>金額ベース（売上高・出荷額）</td><td>価格変動の影響を受ける。異なる製品を合算しやすい</td><td>自動車市場: 約60兆円</td></tr>
<tr><td>数量ベース（販売台数・出荷個数）</td><td>価格変動の影響を排除できる。同種製品の比較に適する</td><td>国内新車販売: 約478万台/年</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">実務でのポイント</div>
市場規模を語る際は、必ず「何ベース」の数字かを明記しましょう。金額ベースと数量ベースでは市場のトレンドが異なることがあります。例えば、PC市場は単価下落により金額ベースでは縮小傾向でも、数量ベースでは横ばいということがあります。
</div>
            `,
            quiz: [
                {
                    id: "q101_1",
                    type: "choice",
                    question: "TAM・SAM・SOMのうち、「実際に獲得が見込める現実的な市場規模」を表すのはどれですか？",
                    options: ["TAM", "SAM", "SOM", "TAP"],
                    answer: 2,
                    explanation: "SOM（Serviceable Obtainable Market）は実際に獲得が見込める現実的な市場規模を表します。TAMは最大市場、SAMは対応可能市場です。"
                },
                {
                    id: "q101_2",
                    type: "choice",
                    question: "「顧客単価 × 顧客数 × 店舗数」のように個別データを積み上げて市場規模を推計する手法はどれですか？",
                    options: ["トップダウン推計", "ボトムアップ推計", "ベンチマーク推計", "アナロジー推計"],
                    answer: 1,
                    explanation: "ボトムアップ推計は個別のデータ（顧客単価、顧客数等）を積み上げて市場全体を推計する手法です。"
                },
                {
                    id: "q101_3",
                    type: "choice",
                    question: "市場規模の測定について正しい記述はどれですか？",
                    options: [
                        "金額ベースは価格変動の影響を受けない",
                        "数量ベースは異なる製品を合算しやすい",
                        "金額ベースと数量ベースでトレンドが異なることがある",
                        "市場規模は常に金額ベースで測定すべきである"
                    ],
                    answer: 2,
                    explanation: "金額ベースと数量ベースではトレンドが異なることがあります。例えば単価下落により金額では縮小でも数量では横ばいというケースがあります。"
                },
                {
                    id: "q101_4",
                    type: "fill",
                    question: "TAMの正式名称は？（英語で）",
                    answer: "Total Addressable Market",
                    explanation: "TAMはTotal Addressable Marketの略で、獲得可能な最大の市場規模（理論上の最大値）を意味します。"
                }
            ]
        },
        {
            id: 102,
            title: "市場規模の測定方法",
            duration: "15分",
            content: `
<h2>市場規模データの情報源</h2>
<p>市場規模を正確に把握するためには、<strong>信頼性の高い情報源</strong>を適切に活用することが不可欠です。主要な情報源を3つのカテゴリーに分類して解説します。</p>

<h3>1. 政府統計</h3>
<p>最も基本的かつ信頼性の高い情報源です。無料で公開されており、長期的な時系列データが利用可能です。</p>

<table>
<thead>
<tr><th>統計名</th><th>発行機関</th><th>主な内容</th></tr>
</thead>
<tbody>
<tr><td>工業統計調査</td><td>経済産業省</td><td>製造業の出荷額・付加価値額</td></tr>
<tr><td>商業動態統計</td><td>経済産業省</td><td>卸売業・小売業の販売額</td></tr>
<tr><td>特定サービス産業実態調査</td><td>経済産業省</td><td>サービス業の売上高</td></tr>
<tr><td>家計調査</td><td>総務省</td><td>世帯の消費支出</td></tr>
<tr><td>国民経済計算（GDP統計）</td><td>内閣府</td><td>産業別の付加価値額</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">e-Statの活用</div>
政府統計の総合窓口「<strong>e-Stat</strong>」（https://www.e-stat.go.jp/）で各種統計データを一元的に検索・閲覧できます。市場規模分析の第一歩として必ず活用しましょう。
</div>

<h3>2. 業界団体データ</h3>
<p>各産業の業界団体が公表する統計は、政府統計よりも詳細なセグメント情報を含むことが多いです。</p>
<ul>
<li><strong>日本自動車工業会（JAMA）:</strong> 自動車の生産・販売・輸出入統計</li>
<li><strong>電子情報技術産業協会（JEITA）:</strong> 電子機器・半導体の出荷統計</li>
<li><strong>日本チェーンストア協会:</strong> 小売業の販売統計</li>
<li><strong>全国銀行協会:</strong> 銀行業の預金・貸出統計</li>
</ul>

<h3>3. 民間調査会社のレポート</h3>
<p>より詳細な市場分析や将来予測が含まれますが、多くは有料です。</p>

<table>
<thead>
<tr><th>調査会社名</th><th>得意分野</th><th>特徴</th></tr>
</thead>
<tbody>
<tr><td>矢野経済研究所</td><td>国内産業全般</td><td>日本最大級の民間調査会社。幅広い産業をカバー</td></tr>
<tr><td>富士経済</td><td>食品・化学・エレクトロニクス</td><td>製品カテゴリー別の詳細な市場データ</td></tr>
<tr><td>富士キメラ総研</td><td>IT・エレクトロニクス</td><td>先端技術分野に強み</td></tr>
<tr><td>IDC Japan</td><td>IT・通信</td><td>グローバルIT市場の日本版データ</td></tr>
<tr><td>ガートナー</td><td>IT全般</td><td>テクノロジーのハイプサイクル等</td></tr>
</tbody>
</table>

<h2>データの読み方と注意点</h2>
<h3>市場規模データを読む際のチェックポイント</h3>
<ul>
<li><strong>定義:</strong> 「市場」の範囲はどこまでか（最終製品のみ？部品を含む？）</li>
<li><strong>単位:</strong> 金額ベースか数量ベースか。出荷額か販売額か</li>
<li><strong>対象地域:</strong> 日本国内のみか、グローバルか</li>
<li><strong>調査時点:</strong> いつ時点のデータか。予測値か実績値か</li>
<li><strong>出所:</strong> 政府統計か、民間推計か。推計の根拠は何か</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">注意</div>
同じ「自動車市場」でも、情報源によって市場規模の数字が大きく異なることがあります。これは市場の定義（完成車のみ/部品含む、国内生産/国内販売など）が異なるためです。必ず定義を確認しましょう。
</div>
            `,
            quiz: [
                {
                    id: "q102_1",
                    type: "choice",
                    question: "日本の政府統計を一元的に検索できるポータルサイトはどれですか？",
                    options: ["J-STAT", "e-Stat", "G-Data", "統計ポータル"],
                    answer: 1,
                    explanation: "e-Stat（https://www.e-stat.go.jp/）は政府統計の総合窓口で、各種統計データを一元的に検索・閲覧できます。"
                },
                {
                    id: "q102_2",
                    type: "choice",
                    question: "「工業統計調査」を発行している機関はどれですか？",
                    options: ["総務省", "内閣府", "経済産業省", "財務省"],
                    answer: 2,
                    explanation: "工業統計調査は経済産業省が実施しており、製造業の出荷額・付加価値額などのデータを提供しています。"
                },
                {
                    id: "q102_3",
                    type: "choice",
                    question: "市場規模データを読む際に最も重要なチェックポイントはどれですか？",
                    options: [
                        "データが最新であること",
                        "市場の定義・範囲を確認すること",
                        "複数の調査会社のデータを比較すること",
                        "グラフで可視化されていること"
                    ],
                    answer: 1,
                    explanation: "同じ市場名でも定義（範囲）が異なると数字が大きく変わります。市場の定義・範囲の確認が最も重要です。"
                },
                {
                    id: "q102_4",
                    type: "fill",
                    question: "日本最大級の民間調査会社で、幅広い産業の市場規模データを提供している会社名は？",
                    answer: "矢野経済研究所",
                    explanation: "矢野経済研究所は日本最大級の民間調査会社で、国内産業全般にわたる幅広い市場調査レポートを発行しています。"
                }
            ]
        },
        {
            id: 103,
            title: "市場シェアの計算と分析",
            duration: "12分",
            content: `
<h2>市場シェアの基本</h2>
<p>市場シェアとは、<strong>特定の市場における企業の占有率</strong>を指します。市場の競争構造を把握する上で最も基本的な指標です。</p>

<div class="info-box formula">
<div class="info-box-title">市場シェアの計算式</div>
<p><strong>市場シェア（%）= 企業の売上高 / 市場全体の売上高 × 100</strong></p>
<p>例: A社の売上高 500億円 / 市場全体 2,000億円 × 100 = <strong>25%</strong></p>
</div>

<h2>市場集中度の指標</h2>

<h3>CR（Concentration Ratio: 上位集中度）</h3>
<p>上位n社の市場シェアの合計値で、市場の集中度を測定します。</p>

<table>
<thead>
<tr><th>指標</th><th>計算方法</th><th>解釈</th></tr>
</thead>
<tbody>
<tr><td>CR3</td><td>上位3社のシェア合計</td><td>主要プレイヤーの寡占度を見る</td></tr>
<tr><td>CR5</td><td>上位5社のシェア合計</td><td>業界全体の集中度を見る</td></tr>
</tbody>
</table>

<h3>HHI（ハーフィンダール・ハーシュマン指数）</h3>
<p>市場の競争度を測る代表的な指標です。<strong>各企業のシェアの2乗を合計</strong>して算出します。</p>

<div class="info-box formula">
<div class="info-box-title">HHIの計算式</div>
<p><strong>HHI = s1^2 + s2^2 + s3^2 + ... + sn^2</strong></p>
<p>（s = 各企業の市場シェア（%単位で計算する場合は0〜10,000の範囲））</p>
</div>

<table>
<thead>
<tr><th>HHIの値</th><th>市場の分類</th><th>特徴</th></tr>
</thead>
<tbody>
<tr><td>〜1,500</td><td>競争的市場</td><td>多くの企業が競争している</td></tr>
<tr><td>1,500〜2,500</td><td>中程度の集中</td><td>一定の寡占傾向がある</td></tr>
<tr><td>2,500〜</td><td>高い集中度</td><td>少数企業による寡占・独占</td></tr>
</tbody>
</table>

<h3>計算例</h3>
<p>ある市場に4社が存在し、シェアがA社40%、B社30%、C社20%、D社10%の場合:</p>
<ul>
<li><strong>CR3</strong> = 40 + 30 + 20 = <strong>90%</strong>（上位3社で90%を占有 → 高い集中度）</li>
<li><strong>HHI</strong> = 40^2 + 30^2 + 20^2 + 10^2 = 1,600 + 900 + 400 + 100 = <strong>3,000</strong>（高い集中度）</li>
</ul>

<h2>シェア推移の読み方</h2>
<p>市場シェアは一時点だけでなく、<strong>時系列での変化（推移）</strong>を追うことが重要です。</p>
<ul>
<li><strong>シェア拡大:</strong> 競争力の向上、M&A、競合の撤退など</li>
<li><strong>シェア縮小:</strong> 競争激化、製品競争力の低下、新規参入者の台頭</li>
<li><strong>シェア安定:</strong> 成熟市場、暗黙の棲み分け、参入障壁の存在</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">実務でのポイント</div>
市場シェアの分析では、「シェアが何%か」よりも「シェアがどう変化しているか」が重要です。3〜5年のトレンドを追い、その背景にある要因（新製品投入、価格戦略、M&A等）を読み解きましょう。
</div>
            `,
            quiz: [
                {
                    id: "q103_1",
                    type: "choice",
                    question: "HHI（ハーフィンダール・ハーシュマン指数）が2,500以上の場合、市場はどのように分類されますか？",
                    options: ["競争的市場", "中程度の集中", "高い集中度", "完全競争"],
                    answer: 2,
                    explanation: "HHIが2,500以上の場合は「高い集中度」と分類され、少数企業による寡占・独占が見られる市場です。"
                },
                {
                    id: "q103_2",
                    type: "choice",
                    question: "A社のシェアが30%、B社20%、C社15%、D社10%、その他25%の市場でCR3はいくつですか？",
                    options: ["55%", "60%", "65%", "75%"],
                    answer: 2,
                    explanation: "CR3は上位3社のシェア合計なので、30% + 20% + 15% = 65%です。"
                },
                {
                    id: "q103_3",
                    type: "choice",
                    question: "市場シェア分析において最も重要な視点はどれですか？",
                    options: [
                        "現時点のシェア数値",
                        "シェアの時系列での変化とその要因",
                        "業界平均との比較",
                        "海外市場とのシェア比較"
                    ],
                    answer: 1,
                    explanation: "シェアの絶対値よりも、3〜5年のトレンド（変化の方向性）とその背景要因を読み解くことが実務では重要です。"
                },
                {
                    id: "q103_4",
                    type: "fill",
                    question: "市場の上位5社のシェア合計で集中度を表す指標は？（アルファベットと数字で）",
                    answer: "CR5",
                    explanation: "CR5（Concentration Ratio 5）は上位5社の市場シェア合計で、業界全体の集中度を見る指標です。"
                }
            ]
        },
        {
            id: 104,
            title: "日本の産業構造概観",
            duration: "15分",
            content: `
<h2>日本のGDP構成</h2>
<p>日本の名目GDP（国内総生産）は<strong>約560兆円</strong>（2023年度）で、世界第4位の経済規模を持ちます。このGDPがどのような産業で構成されているかを理解することが、市場規模分析の出発点です。</p>

<div class="visual-box">
<div class="visual-box-title">日本のGDP構成比（産業別付加価値）</div>
<table>
<thead>
<tr><th>産業セクター</th><th>付加価値額（概算）</th><th>構成比</th></tr>
</thead>
<tbody>
<tr><td>サービス業（広義）</td><td>約390兆円</td><td>約70%</td></tr>
<tr><td>製造業</td><td>約115兆円</td><td>約20%</td></tr>
<tr><td>建設業</td><td>約30兆円</td><td>約5%</td></tr>
<tr><td>農林水産業</td><td>約6兆円</td><td>約1%</td></tr>
<tr><td>その他（鉱業等）</td><td>約19兆円</td><td>約4%</td></tr>
</tbody>
</table>
</div>

<h2>主要産業セクター別の市場規模</h2>
<p>以下は、日本の主要産業セクターの市場規模（売上高・出荷額ベース）の概観です。</p>

<table>
<thead>
<tr><th>産業セクター</th><th>市場規模（概算）</th><th>主要企業例</th></tr>
</thead>
<tbody>
<tr><td>自動車・輸送機器</td><td>約60兆円</td><td>トヨタ、ホンダ、日産</td></tr>
<tr><td>小売業</td><td>約155兆円</td><td>イオン、セブン&アイ、ファーストリテイリング</td></tr>
<tr><td>情報通信業</td><td>約55兆円</td><td>NTT、KDDI、ソフトバンク</td></tr>
<tr><td>金融・保険業</td><td>約55兆円</td><td>三菱UFJ、三井住友、東京海上</td></tr>
<tr><td>建設業</td><td>約70兆円</td><td>大成建設、鹿島建設、大和ハウス</td></tr>
<tr><td>医薬品・ヘルスケア</td><td>約12兆円</td><td>武田薬品、大塚HD、アステラス製薬</td></tr>
<tr><td>電子部品・半導体</td><td>約10兆円</td><td>村田製作所、ソニーセミコンダクタ</td></tr>
<tr><td>鉄鋼・素材</td><td>約18兆円</td><td>日本製鉄、JFEスチール</td></tr>
<tr><td>食品・飲料</td><td>約25兆円</td><td>サントリー、味の素、キリン</td></tr>
<tr><td>不動産業</td><td>約47兆円</td><td>三井不動産、三菱地所、住友不動産</td></tr>
<tr><td>電力・ガス・エネルギー</td><td>約25兆円</td><td>東京電力、関西電力、ENEOS</td></tr>
</tbody>
</table>

<h2>世界との比較</h2>
<p>日本の産業構造を世界の主要国と比較してみましょう。</p>

<table>
<thead>
<tr><th>項目</th><th>日本</th><th>米国</th><th>中国</th><th>ドイツ</th></tr>
</thead>
<tbody>
<tr><td>名目GDP</td><td>約560兆円</td><td>約3,700兆円</td><td>約2,600兆円</td><td>約630兆円</td></tr>
<tr><td>製造業比率</td><td>約20%</td><td>約11%</td><td>約28%</td><td>約20%</td></tr>
<tr><td>サービス業比率</td><td>約70%</td><td>約80%</td><td>約53%</td><td>約69%</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">日本の産業構造の特徴</div>
<ul>
<li><strong>製造業の強さ:</strong> 先進国の中で製造業比率が高く（約20%）、自動車・電子部品・素材分野で世界的な競争力を持つ</li>
<li><strong>サービス経済化:</strong> 1970年代以降サービス業の比率が拡大し続け、現在は約70%を占める</li>
<li><strong>中小企業の厚み:</strong> 企業数の99.7%が中小企業であり、雇用の約70%を担う</li>
<li><strong>輸出依存度:</strong> GDPに対する輸出比率は約18%で、米国（約10%）より高いが、ドイツ（約40%）より低い</li>
</ul>
</div>

<h2>産業別の成長トレンド</h2>
<p>日本の産業構造は変化し続けています。</p>
<ul>
<li><strong>成長セクター:</strong> IT・デジタル、ヘルスケア、半導体関連、再生可能エネルギー</li>
<li><strong>成熟セクター:</strong> 建設、小売（総合スーパー）、印刷</li>
<li><strong>構造転換中:</strong> 自動車（EV化）、金融（フィンテック）、エネルギー（脱炭素）</li>
</ul>
            `,
            quiz: [
                {
                    id: "q104_1",
                    type: "choice",
                    question: "2023年度の日本の名目GDPとして最も近い値はどれですか？",
                    options: ["約350兆円", "約460兆円", "約560兆円", "約700兆円"],
                    answer: 2,
                    explanation: "日本の名目GDPは約560兆円（2023年度）で、世界第4位の経済規模です。"
                },
                {
                    id: "q104_2",
                    type: "choice",
                    question: "日本のGDPにおいてサービス業（広義）が占める割合として最も近いのはどれですか？",
                    options: ["約50%", "約60%", "約70%", "約80%"],
                    answer: 2,
                    explanation: "日本のGDPにおいてサービス業（広義）は約70%を占めています。米国（約80%）より低く、中国（約53%）より高い水準です。"
                },
                {
                    id: "q104_3",
                    type: "choice",
                    question: "日本の産業構造の特徴として正しくないものはどれですか？",
                    options: [
                        "先進国の中で製造業比率が比較的高い",
                        "企業数の99.7%が中小企業である",
                        "GDPに対する輸出比率はドイツより高い",
                        "自動車・電子部品・素材分野で世界的競争力を持つ"
                    ],
                    answer: 2,
                    explanation: "日本のGDPに対する輸出比率は約18%で、ドイツ（約40%）より低い水準です。日本はドイツほど輸出に依存していません。"
                },
                {
                    id: "q104_4",
                    type: "fill",
                    question: "日本の主要産業セクターの中で、市場規模（売上高ベース）が最も大きいのは？（漢字で）",
                    answer: "小売業",
                    explanation: "小売業は約155兆円の市場規模を持ち、日本の主要産業セクターの中で最も大きな市場です。"
                }
            ]
        }
    ]
};
