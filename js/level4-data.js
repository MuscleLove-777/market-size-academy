/* ============================================
   Level 4: 医薬品・ヘルスケアの市場規模
   ============================================ */
const LEVEL4_DATA = {
    id: 4,
    title: "医薬品・ヘルスケアの市場規模",
    icon: "💊",
    description: "成長を続けるヘルスケア市場の規模と主要プレイヤーを学ぶ",
    modules: [
        {
            id: 401,
            title: "日本の医薬品市場",
            duration: "15分",
            content: `
<h2>国内医薬品市場の全体像</h2>
<p>日本の医薬品市場規模は<strong>約10兆円</strong>で、米国・中国に次ぐ<strong>世界第3位</strong>の医薬品市場です。国民皆保険制度の下、医療用医薬品が市場の約9割を占め、薬価制度による政府の価格統制が市場の大きな特徴です。</p>

<div class="info-box tip">
<div class="info-box-title">医薬品市場の構成</div>
<ul>
<li><strong>医療用医薬品:</strong> 約9兆円 - 医師の処方が必要な医薬品</li>
<li><strong>OTC医薬品（一般用）:</strong> 約1兆円 - 薬局で購入可能な医薬品</li>
</ul>
</div>

<h2>主要製薬企業の比較</h2>
<p>日本の製薬企業は、グローバル展開を進める大手と国内中心の中堅企業に分かれます。武田薬品工業は2019年のシャイアー買収により、<strong>世界トップ10入り</strong>を果たしました。</p>

<div class="visual-box">
<div class="visual-box-title">主要製薬企業の売上高・シェア</div>
<table>
<tr><th>企業名</th><th>売上高</th><th>国内シェア(%)</th></tr>
<tr><td>武田薬品工業</td><td>約4.3兆円</td><td>約6%</td></tr>
<tr><td>大塚ホールディングス</td><td>約2兆円</td><td>約5%</td></tr>
<tr><td>アステラス製薬</td><td>約1.6兆円</td><td>約4%</td></tr>
<tr><td>第一三共</td><td>約1.6兆円</td><td>約4%</td></tr>
<tr><td>中外製薬</td><td>約1.2兆円</td><td>約4%</td></tr>
<tr><td>エーザイ</td><td>約0.7兆円</td><td>約3%</td></tr>
</table>
</div>

<h3>後発医薬品（ジェネリック）市場の拡大</h3>
<p>政府は医療費抑制のため、ジェネリック医薬品の使用促進策を推進しています。数量ベースでの使用割合は<strong>80%以上</strong>に到達しました。主要企業としては沢井製薬、日医工、東和薬品などがあります。</p>

<div class="info-box warning">
<div class="info-box-title">ジェネリック業界の課題</div>
2020年以降、小林化工や日医工の品質不正問題が相次ぎ発覚し、業界全体の信頼回復が大きな課題となっています。安定供給体制の再構築も急務です。
</div>

<h3>バイオ医薬品のトレンド</h3>
<p>従来の低分子化合物に代わり、<strong>抗体医薬品</strong>や<strong>細胞・遺伝子治療</strong>などのバイオ医薬品が新薬開発の主流になりつつあります。中外製薬はロシュとの提携を通じてバイオ医薬品で強みを発揮し、第一三共は<strong>ADC（抗体薬物複合体）「エンハーツ」</strong>で世界的な注目を集めています。</p>

<div class="info-box success">
<div class="info-box-title">注目の動向</div>
<ul>
<li><strong>エーザイ:</strong> アルツハイマー病治療薬「レカネマブ」が承認を取得</li>
<li><strong>第一三共:</strong> ADC技術で世界をリードし、がん治療に革新</li>
<li><strong>中外製薬:</strong> ロシュグループの一員として、バイオ医薬品に強み</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q401_1",
                    type: "choice",
                    question: "日本の医薬品市場の世界での順位はどれですか？",
                    options: ["世界第1位", "世界第2位", "世界第3位", "世界第5位"],
                    answer: 2,
                    explanation: "日本の医薬品市場は約10兆円で、米国・中国に次ぐ世界第3位です。"
                },
                {
                    id: "q401_2",
                    type: "choice",
                    question: "売上高が最も大きい日本の製薬企業はどれですか？",
                    options: ["アステラス製薬", "中外製薬", "武田薬品工業", "第一三共"],
                    answer: 2,
                    explanation: "武田薬品工業が売上高約4.3兆円で日本最大の製薬企業です。2019年のシャイアー買収で世界トップ10入りを果たしました。"
                },
                {
                    id: "q401_3",
                    type: "choice",
                    question: "第一三共が世界的に注目を集めている技術分野はどれですか？",
                    options: ["ワクチン開発", "再生医療", "ADC（抗体薬物複合体）", "遺伝子治療"],
                    answer: 2,
                    explanation: "第一三共はADC（抗体薬物複合体）技術で世界をリードしており、「エンハーツ」ががん治療で大きな成果を上げています。"
                },
                {
                    id: "q401_4",
                    type: "fill",
                    question: "ジェネリック医薬品の数量ベースの使用割合は約何%以上に到達していますか？（数字のみ）",
                    answer: "80",
                    explanation: "政府のジェネリック使用促進策により、数量ベースでの使用割合は80%以上に到達しています。"
                }
            ]
        },
        {
            id: 402,
            title: "医療機器市場",
            duration: "12分",
            content: `
<h2>国内医療機器市場の全体像</h2>
<p>日本の医療機器市場規模は<strong>約3.5兆円</strong>で、米国に次ぐ世界有数の市場です。高齢化社会の進展に伴い、安定した成長が続いています。一方で、市場全体の<strong>約60%が輸入品</strong>という輸入超過の構造が特徴です。</p>

<div class="info-box tip">
<div class="info-box-title">医療機器の分類</div>
<ul>
<li><strong>治療機器:</strong> 手術器具、人工関節、ペースメーカー等</li>
<li><strong>診断機器:</strong> CT、MRI、超音波診断装置等</li>
<li><strong>その他:</strong> 注射器、カテーテル、体外診断薬等</li>
</ul>
</div>

<h2>主要医療機器企業</h2>

<h3>オリンパス</h3>
<p>消化器内視鏡で<strong>世界シェア約70%</strong>を誇る圧倒的トップ企業です。カメラ事業から撤退し、医療事業に経営資源を集中させています。内視鏡検査・治療に関する総合的なソリューションを提供しています。</p>

<h3>テルモ</h3>
<p>カテーテルや輸液システムなどの<strong>使い捨て医療機器</strong>で国内トップクラスの企業です。心臓血管領域に強みを持ち、グローバルでも高いシェアを有しています。</p>

<h3>シスメックス</h3>
<p><strong>血球計数装置（ヘマトロジー）で世界トップシェア</strong>を持つ臨床検査機器メーカーです。検体検査の自動化・効率化に貢献しています。</p>

<div class="visual-box">
<div class="visual-box-title">主要医療機器企業の強み</div>
<table>
<tr><th>企業名</th><th>得意分野</th><th>特徴</th></tr>
<tr><td>オリンパス</td><td>消化器内視鏡</td><td>世界シェア約70%</td></tr>
<tr><td>テルモ</td><td>カテーテル・輸液</td><td>心臓血管領域に強み</td></tr>
<tr><td>シスメックス</td><td>血球計数装置</td><td>ヘマトロジー世界トップ</td></tr>
<tr><td>ニプロ</td><td>透析関連機器</td><td>人工腎臓で国内大手</td></tr>
<tr><td>島津製作所</td><td>X線・分析機器</td><td>画像診断に強み</td></tr>
</table>
</div>

<h3>輸入超過の構造</h3>
<p>日本の医療機器市場は<strong>約60%が輸入品</strong>で占められています。特にCT・MRIなどの大型画像診断装置はGEヘルスケア、シーメンス、フィリップスの欧米3社が世界市場を寡占しています。一方、内視鏡やカテーテルなど、日本企業が世界的に強い分野も存在します。</p>

<div class="info-box warning">
<div class="info-box-title">業界の課題</div>
医療機器の薬事承認プロセスの迅速化（デバイスラグの解消）、サイバーセキュリティ対策、AI搭載医療機器の規制整備などが課題となっています。
</div>
            `,
            quiz: [
                {
                    id: "q402_1",
                    type: "choice",
                    question: "日本の医療機器市場規模として最も近いものはどれですか？",
                    options: ["約1兆円", "約2兆円", "約3.5兆円", "約5兆円"],
                    answer: 2,
                    explanation: "日本の医療機器市場規模は約3.5兆円です。"
                },
                {
                    id: "q402_2",
                    type: "choice",
                    question: "消化器内視鏡で世界シェア約70%を持つ企業はどれですか？",
                    options: ["テルモ", "シスメックス", "オリンパス", "島津製作所"],
                    answer: 2,
                    explanation: "オリンパスが消化器内視鏡で世界シェア約70%を誇る圧倒的トップ企業です。"
                },
                {
                    id: "q402_3",
                    type: "choice",
                    question: "日本の医療機器市場における輸入品の割合として最も近いものはどれですか？",
                    options: ["約20%", "約40%", "約60%", "約80%"],
                    answer: 2,
                    explanation: "日本の医療機器市場は約60%が輸入品で占められており、輸入超過の構造が特徴です。"
                },
                {
                    id: "q402_4",
                    type: "fill",
                    question: "血球計数装置（ヘマトロジー）で世界トップシェアを持つ日本企業名は？（カタカナ5文字）",
                    answer: "シスメックス",
                    explanation: "シスメックスは血球計数装置（ヘマトロジー）で世界トップシェアを持つ臨床検査機器メーカーです。"
                }
            ]
        },
        {
            id: 403,
            title: "CRO・製薬サービス市場",
            duration: "15分",
            content: `
<h2>CRO市場の全体像</h2>
<p>CRO（Contract Research Organization：医薬品開発業務受託機関）は、製薬企業から臨床試験（治験）の業務を受託する専門企業です。国内CRO市場は<strong>約3,000億円</strong>規模に成長しています。</p>

<div class="info-box tip">
<div class="info-box-title">CROが担う主な業務</div>
<ul>
<li><strong>臨床開発モニタリング:</strong> 治験の実施状況を確認・管理</li>
<li><strong>データマネジメント:</strong> 治験データの品質管理</li>
<li><strong>統計解析:</strong> 有効性・安全性の統計学的評価</li>
<li><strong>薬事申請支援:</strong> 規制当局への承認申請サポート</li>
<li><strong>ファーマコビジランス:</strong> 安全性情報の監視・報告</li>
</ul>
</div>

<h2>主要CRO企業の比較</h2>

<div class="visual-box">
<div class="visual-box-title">主要CRO企業の売上高・シェア</div>
<table>
<tr><th>企業名</th><th>売上高</th><th>国内CROシェア(%)</th></tr>
<tr><td>EPSグループ</td><td>約670億円</td><td>約15%</td></tr>
<tr><td>シミックグループ</td><td>約640億円</td><td>約14%</td></tr>
<tr><td>IQVIAジャパン</td><td>約500億円</td><td>約11%</td></tr>
<tr><td>リニカル</td><td>約300億円</td><td>約7%</td></tr>
<tr><td>メディサイエンスプラニング</td><td>約200億円</td><td>約5%</td></tr>
</table>
</div>

<h3>EPSグループ</h3>
<p>国内CRO最大手で、CRO・SMO・CSOの<strong>三位一体モデル</strong>が特徴です。中国市場でも強い存在感を持ち、日中間の医薬品開発ブリッジングに強みがあります。</p>

<h3>シミックグループ</h3>
<p>日本初のCROとして1992年に設立されたパイオニア企業です。CROに加え、CDMO（医薬品製造受託）事業も展開し、開発から製造までの一貫サービスを提供しています。</p>

<h3>IQVIAジャパン</h3>
<p>グローバルCRO最大手IQVIAの日本法人で、医薬品市場データと臨床開発受託を組み合わせたサービスが強みです。</p>

<h3>SMO市場</h3>
<p>SMO（Site Management Organization：治験施設支援機関）は、治験を実施する医療機関をサポートする業態です。CRC（治験コーディネーター）の派遣が主な業務で、市場規模は<strong>約400億円</strong>です。</p>

<h3>PV（ファーマコビジランス）市場</h3>
<p>医薬品の安全性情報を管理するPV業務は、規制強化に伴い外部委託が増加しています。市場規模は<strong>約500億円</strong>で、CRO各社やPV専門企業が受託しています。</p>

<div class="info-box success">
<div class="info-box-title">CRO市場の成長ドライバー</div>
<ul>
<li><strong>製薬企業のアウトソーシング拡大:</strong> コア業務への集中とコスト効率化</li>
<li><strong>バイオ医薬品の開発増加:</strong> 高度な専門性が必要な治験の増加</li>
<li><strong>規制の複雑化:</strong> ICH-E6(R3)等の新ガイドライン対応</li>
<li><strong>DX推進:</strong> DCT（分散型臨床試験）やリアルワールドデータの活用</li>
</ul>
</div>
            `,
            quiz: [
                {
                    id: "q403_1",
                    type: "choice",
                    question: "国内CRO市場の規模として最も近いものはどれですか？",
                    options: ["約1,000億円", "約3,000億円", "約5,000億円", "約1兆円"],
                    answer: 1,
                    explanation: "国内CRO市場は約3,000億円規模です。"
                },
                {
                    id: "q403_2",
                    type: "choice",
                    question: "国内CRO市場でシェアが最も高い企業はどれですか？",
                    options: ["シミックグループ", "IQVIAジャパン", "EPSグループ", "リニカル"],
                    answer: 2,
                    explanation: "EPSグループが国内CROシェア約15%で最大手です。"
                },
                {
                    id: "q403_3",
                    type: "choice",
                    question: "日本初のCROとして設立されたパイオニア企業はどれですか？",
                    options: ["EPSグループ", "シミックグループ", "IQVIAジャパン", "リニカル"],
                    answer: 1,
                    explanation: "シミックグループは1992年に日本初のCROとして設立されたパイオニア企業です。"
                },
                {
                    id: "q403_4",
                    type: "fill",
                    question: "治験施設支援機関の略称は？（アルファベット3文字）",
                    answer: "SMO",
                    explanation: "SMO（Site Management Organization）は治験を実施する医療機関をサポートする業態で、CRC派遣が主な業務です。"
                }
            ]
        },
        {
            id: 404,
            title: "ヘルスケアテック・介護市場",
            duration: "12分",
            content: `
<h2>介護市場の全体像</h2>
<p>日本の介護市場規模は<strong>約12兆円</strong>に達し、高齢化の進展に伴い拡大を続けています。2025年には団塊の世代が全員75歳以上となる「2025年問題」を迎え、介護需要はさらに増大する見通しです。</p>

<div class="info-box tip">
<div class="info-box-title">介護市場の構成</div>
<ul>
<li><strong>施設介護:</strong> 特別養護老人ホーム、有料老人ホーム、介護老人保健施設等</li>
<li><strong>在宅介護:</strong> 訪問介護、デイサービス、ショートステイ等</li>
<li><strong>介護用品・福祉機器:</strong> 介護ベッド、車椅子、福祉車両等</li>
</ul>
</div>

<h2>主要介護企業</h2>

<div class="visual-box">
<div class="visual-box-title">主要介護サービス企業</div>
<table>
<tr><th>企業名</th><th>特徴</th></tr>
<tr><td>SOMPOケア</td><td>SOMPOホールディングス傘下、業界最大手。介護付きホーム運営数トップ</td></tr>
<tr><td>ニチイ学館</td><td>在宅介護の最大手。訪問介護・デイサービスに強み</td></tr>
<tr><td>ベネッセスタイルケア</td><td>高品質な有料老人ホームを展開。教育大手ベネッセの介護事業</td></tr>
<tr><td>ツクイ</td><td>デイサービス事業所数で全国トップクラス</td></tr>
</table>
</div>

<h3>介護人材の不足</h3>
<p>介護業界は深刻な人材不足に直面しており、2040年には約69万人の介護職員が不足すると推計されています。外国人材の受け入れ拡大や介護ロボット・ICTの活用による生産性向上が急務です。</p>

<h2>ヘルスケアIT企業</h2>
<p>医療・ヘルスケア分野のデジタル化を推進する企業群が急成長しています。</p>

<h3>エムスリー</h3>
<p>医療従事者向けプラットフォーム「m3.com」を運営し、<strong>国内医師の約90%が登録</strong>する圧倒的なネットワークを持ちます。製薬企業向けのマーケティング支援や治験関連サービスなど、医療情報の流通を効率化するビジネスモデルで高い利益率を誇ります。</p>

<h3>メドレー</h3>
<p>オンライン診療システム「CLINICS」や医療介護の求人プラットフォーム「ジョブメドレー」を展開。医療DXの推進役として成長を続けています。</p>

<h3>PHCホールディングス</h3>
<p>電子カルテや調剤薬局向けシステムなど、<strong>医療ITインフラ</strong>を広く提供する企業です。糖尿病管理機器やライフサイエンス関連機器も手がけています。</p>

<div class="info-box success">
<div class="info-box-title">ヘルスケアテックの注目トレンド</div>
<ul>
<li><strong>オンライン診療:</strong> コロナ禍で規制緩和が進み、利用が拡大</li>
<li><strong>PHR（パーソナルヘルスレコード）:</strong> 個人の健康データの一元管理</li>
<li><strong>AI診断支援:</strong> 画像診断やゲノム解析でのAI活用</li>
<li><strong>介護ロボット:</strong> 見守りセンサー、移乗支援ロボット等の導入拡大</li>
</ul>
</div>

<div class="info-box warning">
<div class="info-box-title">ヘルスケア市場の課題</div>
医療データの標準化・相互運用性の確保、個人情報保護とデータ活用のバランス、デジタルデバイド（高齢者のIT格差）への対応が課題となっています。
</div>
            `,
            quiz: [
                {
                    id: "q404_1",
                    type: "choice",
                    question: "日本の介護市場規模として最も近いものはどれですか？",
                    options: ["約5兆円", "約8兆円", "約12兆円", "約15兆円"],
                    answer: 2,
                    explanation: "日本の介護市場規模は約12兆円で、高齢化に伴い拡大を続けています。"
                },
                {
                    id: "q404_2",
                    type: "choice",
                    question: "医療従事者向けプラットフォーム「m3.com」を運営する企業はどれですか？",
                    options: ["メドレー", "PHCホールディングス", "エムスリー", "SOMPOケア"],
                    answer: 2,
                    explanation: "エムスリーが「m3.com」を運営しており、国内医師の約90%が登録しています。"
                },
                {
                    id: "q404_3",
                    type: "choice",
                    question: "介護付きホーム運営数で業界トップの企業はどれですか？",
                    options: ["ニチイ学館", "ベネッセスタイルケア", "ツクイ", "SOMPOケア"],
                    answer: 3,
                    explanation: "SOMPOケアはSOMPOホールディングス傘下の業界最大手で、介護付きホーム運営数トップです。"
                },
                {
                    id: "q404_4",
                    type: "fill",
                    question: "2040年に不足すると推計されている介護職員数は約何万人ですか？（数字のみ）",
                    answer: "69",
                    explanation: "2040年には約69万人の介護職員が不足すると推計されており、人材確保が最大の課題です。"
                }
            ]
        }
    ]
};
