/* ============================================
   市場規模アカデミー - Main Application
   ============================================ */
const App = {
    levels: [], allModules: [], currentModuleId: null, progress: {}, quizResults: {},

    init() {
        this.levels = [LEVEL1_DATA, LEVEL2_DATA, LEVEL3_DATA, LEVEL4_DATA, LEVEL5_DATA, LEVEL6_DATA];
        this.allModules = [];
        this.levels.forEach(level => { level.modules.forEach(mod => { this.allModules.push({ ...mod, levelId: level.id, levelTitle: level.title }); }); });
        this.loadProgress(); this.buildSidebar(); this.showDashboard();
        if (localStorage.getItem('market-size-darkmode') === 'true') document.documentElement.setAttribute('data-theme', 'dark');
        this.updateGlobalProgress();
        document.addEventListener('click', (e) => { const h = e.target.closest('.collapsible-header'); if (h) h.parentElement.classList.toggle('open'); });
    },

    loadProgress() {
        try { const s = localStorage.getItem('market-size-progress'); if (s) this.progress = JSON.parse(s);
            const sq = localStorage.getItem('market-size-quiz-results'); if (sq) this.quizResults = JSON.parse(sq);
        } catch (e) { this.progress = {}; this.quizResults = {}; }
    },

    saveProgress() { localStorage.setItem('market-size-progress', JSON.stringify(this.progress)); localStorage.setItem('market-size-quiz-results', JSON.stringify(this.quizResults)); },
    completeModule(id) { this.progress[id] = { completed: true, completedAt: new Date().toISOString() }; this.saveProgress(); this.buildSidebar(); this.updateGlobalProgress(); },
    saveQuizResult(id, result) { this.quizResults[id] = { ...result, attemptedAt: new Date().toISOString() }; this.saveProgress(); },
    isModuleCompleted(id) { return this.progress[id] && this.progress[id].completed; },

    updateGlobalProgress() {
        const total = this.allModules.length, completed = this.allModules.filter(m => this.isModuleCompleted(m.id)).length;
        const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
        const fill = document.getElementById('globalProgressFill'), text = document.getElementById('globalProgressText');
        if (fill) fill.style.width = pct + '%'; if (text) text.textContent = `${pct}% 完了 (${completed}/${total})`;
    },

    buildSidebar() {
        const nav = document.getElementById('sidebarNav'); let html = '';
        this.levels.forEach(level => {
            const mods = level.modules, done = mods.filter(m => this.isModuleCompleted(m.id)).length;
            const isCurrent = this.currentModuleId && mods.some(m => m.id === this.currentModuleId);
            html += `<div class="sidebar-level"><div class="sidebar-level-header ${isCurrent ? 'expanded' : ''}" onclick="App.toggleLevel(this)">
                <span>${level.icon} Lv${level.id}: ${level.title}</span>
                <span style="display:flex;align-items:center;gap:8px;"><span style="font-size:0.7rem;opacity:0.7;">${done}/${mods.length}</span><span class="chevron">▶</span></span>
                </div><div class="sidebar-modules ${isCurrent ? 'expanded' : ''}">`;
            mods.forEach(mod => {
                html += `<div class="sidebar-item ${this.isModuleCompleted(mod.id)?'completed':''} ${this.currentModuleId===mod.id?'active':''}" onclick="App.showModule(${mod.id})">
                    <span class="status-dot"></span><span>${mod.title}</span></div>`;
            });
            html += '</div></div>';
        });
        nav.innerHTML = html;
    },

    toggleLevel(h) { h.classList.toggle('expanded'); h.nextElementSibling.classList.toggle('expanded'); },
    toggleSidebar() { document.getElementById('sidebar').classList.toggle('open'); },

    showDashboard() {
        this.currentModuleId = null; this.showView('dashboardView'); this.buildSidebar();
        const c = document.getElementById('dashboardView');
        const total = this.allModules.length, done = this.allModules.filter(m => this.isModuleCompleted(m.id)).length;
        const quizzes = Object.keys(this.quizResults).length;
        const avg = quizzes > 0 ? Math.round(Object.values(this.quizResults).reduce((s, r) => s + r.percentage, 0) / quizzes) : 0;
        let html = `<div class="fade-in"><div class="dashboard-hero"><h2>市場規模アカデミーへようこそ</h2>
            <p>日本の主要産業の市場規模、業界構造、主要企業の市場シェアを体系的に学べる総合学習プラットフォームです。</p></div>
            <div class="dashboard-grid">
                <div class="stat-card"><div class="stat-value">${done}/${total}</div><div class="stat-label">モジュール完了</div></div>
                <div class="stat-card"><div class="stat-value">${quizzes}</div><div class="stat-label">クイズ受験数</div></div>
                <div class="stat-card"><div class="stat-value">${avg}%</div><div class="stat-label">平均スコア</div></div>
                <div class="stat-card"><div class="stat-value">${this.getEstimatedTime()}</div><div class="stat-label">残り学習時間</div></div>
            </div><h2 style="margin-bottom:20px;font-size:1.3rem;">学習コース</h2><div class="dashboard-grid">`;
        this.levels.forEach(level => {
            const mods = level.modules, d = mods.filter(m => this.isModuleCompleted(m.id)).length, pct = Math.round((d / mods.length) * 100);
            html += `<div class="level-card level-${level.id}" onclick="App.showModule(${mods[0].id})">
                <div class="level-card-header"><div class="level-icon">${level.icon}</div><div><h3>Level ${level.id}: ${level.title}</h3>
                <div class="level-desc">${level.description} (${mods.length}モジュール)</div></div></div>
                <div class="level-progress"><div class="level-progress-bar"><div class="level-progress-fill" style="width:${pct}%"></div></div>
                <div class="level-progress-text">${d}/${mods.length} 完了 (${pct}%)</div></div></div>`;
        });
        html += '</div></div>'; c.innerHTML = html;
    },

    getEstimatedTime() {
        let t = 0; this.allModules.forEach(m => { if (!this.isModuleCompleted(m.id)) { const match = m.duration.match(/(\d+)/); if (match) t += parseInt(match[1]); } });
        if (t === 0) return '完了！'; const h = Math.floor(t / 60), mins = t % 60; return h > 0 ? `約${h}時間${mins}分` : `約${mins}分`;
    },

    showModule(moduleId) {
        const mod = this.allModules.find(m => m.id === moduleId); if (!mod) return;
        this.currentModuleId = moduleId; this.showView('moduleView'); this.buildSidebar();
        document.getElementById('sidebar').classList.remove('open');
        const c = document.getElementById('moduleView'), level = this.levels.find(l => l.id === mod.levelId);
        const idx = this.allModules.findIndex(m => m.id === moduleId);
        const prev = idx > 0 ? this.allModules[idx - 1] : null, next = idx < this.allModules.length - 1 ? this.allModules[idx + 1] : null;
        let html = `<div class="fade-in"><div class="module-header">
            <div class="module-breadcrumb"><a onclick="App.showDashboard()">ダッシュボード</a> / <a onclick="App.showModule(${level.modules[0].id})">Level ${level.id}: ${level.title}</a> / ${mod.title}</div>
            <h1 class="module-title">${mod.title}</h1>
            <div class="module-meta"><span>⏱ ${mod.duration}</span><span>${this.isModuleCompleted(moduleId) ? '✅ 完了済み' : '📖 未完了'}</span></div></div>
            <div class="module-body">${mod.content}</div>
            <div class="module-nav"><div>${prev ? `<button class="btn btn-outline" onclick="App.showModule(${prev.id})">← ${prev.title}</button>` : ''}</div>
            <div style="display:flex;gap:12px;">${mod.quiz && mod.quiz.length > 0
                ? `<button class="btn btn-primary btn-lg" onclick="App.startQuiz(${moduleId})">理解度チェック (${mod.quiz.length}問)</button>`
                : `<button class="btn btn-success btn-lg" onclick="App.completeModule(${moduleId}); App.goToNextModule(${moduleId});">完了して次へ</button>`}</div>
            <div>${next ? `<button class="btn btn-outline" onclick="App.showModule(${next.id})">${next.title} →</button>` : ''}</div></div></div>`;
        c.innerHTML = html; document.querySelector('.content').scrollTop = 0;
    },

    startQuiz(moduleId) { const mod = this.allModules.find(m => m.id === moduleId); if (!mod || !mod.quiz) return; this.showView('quizView'); Quiz.start(moduleId, mod.quiz); },
    goToNextModule(id) { const idx = this.allModules.findIndex(m => m.id === id); if (idx < this.allModules.length - 1) this.showModule(this.allModules[idx + 1].id); else { this.showDashboard(); this.showCompletionMessage(); } },

    showCompletionMessage() {
        document.getElementById('modalContent').innerHTML = `<h2>🎓 おめでとうございます！</h2>
            <div class="score-circle pass" style="font-size:2.5rem;">🏆</div>
            <p>全モジュール完了！<br>日本の主要産業の市場規模と企業シェアを把握しました。<br>ビジネスに活かしていきましょう！</p>
            <div class="modal-actions"><button class="btn btn-primary" onclick="App.closeModal()">ダッシュボードへ</button></div>`;
        document.getElementById('modalOverlay').style.display = 'flex';
    },

    closeModal() { document.getElementById('modalOverlay').style.display = 'none'; },
    showView(viewId) { ['dashboardView','moduleView','quizView','referenceView'].forEach(id => { document.getElementById(id).style.display = id === viewId ? 'block' : 'none'; }); },
    toggleDarkMode() { const d = document.documentElement.getAttribute('data-theme') === 'dark'; if (d) { document.documentElement.removeAttribute('data-theme'); localStorage.setItem('market-size-darkmode','false'); } else { document.documentElement.setAttribute('data-theme','dark'); localStorage.setItem('market-size-darkmode','true'); } },
    resetProgress() { if (confirm('全ての学習進捗をリセットしますか？')) { this.progress = {}; this.quizResults = {}; localStorage.removeItem('market-size-progress'); localStorage.removeItem('market-size-quiz-results'); this.buildSidebar(); this.updateGlobalProgress(); this.showDashboard(); } },

    showReference() {
        this.showView('referenceView'); this.buildSidebar();
        const c = document.getElementById('referenceView');
        const sections = [
            { category: '市場分析基本用語', terms: [
                { name: 'TAM', desc: 'Total Addressable Market（獲得可能な最大市場規模）。ある製品・サービスが理論上獲得しうる市場全体の規模' },
                { name: 'SAM', desc: 'Serviceable Addressable Market（実際にアプローチ可能な市場規模）。TAMの中で自社が対象とできる市場' },
                { name: 'SOM', desc: 'Serviceable Obtainable Market（実際に獲得可能な市場規模）。SAMの中で現実的に獲得が見込める市場' },
                { name: 'HHI', desc: 'Herfindahl-Hirschman Index（ハーフィンダール・ハーシュマン指数）。市場の集中度を測る指標' },
                { name: 'CAGR', desc: 'Compound Annual Growth Rate（年平均成長率）。一定期間における平均的な年間成長率' },
                { name: 'YoY', desc: 'Year over Year（前年同期比）。前年の同時期と比較した成長率・変化率' },
            ]},
            { category: '業界分類', terms: [
                { name: '製造業', desc: '自動車、電機、機械、化学、鉄鋼など、原材料を加工して製品を生産する産業群' },
                { name: 'サービス業', desc: '情報通信、運輸、飲食、宿泊、教育など、無形のサービスを提供する産業群' },
                { name: '金融業', desc: '銀行、証券、保険、リースなど、金融サービスを提供する産業群' },
                { name: 'IT業界', desc: 'ソフトウェア、SaaS、クラウド、AI、半導体など、情報技術に関連する産業群' },
                { name: '小売業', desc: 'コンビニ、スーパー、百貨店、EC、ドラッグストアなど、消費者に直接商品を販売する産業群' },
                { name: 'ヘルスケア', desc: '医薬品、医療機器、バイオテクノロジー、ヘルステックなど、健康・医療に関連する産業群' },
            ]},
            { category: '分析手法', terms: [
                { name: 'トップダウン推計', desc: 'マクロデータ（GDP、業界全体の売上等）から市場規模を推計する方法' },
                { name: 'ボトムアップ推計', desc: '個別企業の売上やユニット数を積み上げて市場規模を推計する方法' },
                { name: 'CR3/CR5', desc: '上位3社/5社の市場シェア合計。市場の集中度を簡易的に示す指標' },
                { name: 'バリューチェーン', desc: '原材料調達から製品・サービスの販売に至る一連の価値創造活動の連鎖' },
                { name: 'ファイブフォース', desc: 'マイケル・ポーターの5つの競争要因分析。業界の競争環境と収益性を評価するフレームワーク' },
                { name: 'PEST分析', desc: 'Political, Economic, Social, Technologicalの4つの観点からマクロ環境を分析するフレームワーク' },
            ]},
            { category: 'データソース', terms: [
                { name: '経済産業省', desc: '工業統計調査、商業動態統計、特定サービス産業実態調査など、産業に関する公的統計を公表' },
                { name: '総務省統計局', desc: '国勢調査、家計調査、サービス産業動向調査など、基礎的な統計データを公表' },
                { name: '日本銀行', desc: '短観（全国企業短期経済観測調査）、資金循環統計など、経済・金融に関するデータを公表' },
                { name: '矢野経済研究所', desc: '各種産業の市場規模調査レポートを発行する民間調査会社' },
                { name: '富士経済', desc: '食品、化学、エレクトロニクスなど多分野の市場調査レポートを発行する民間調査会社' },
                { name: 'IDC Japan', desc: 'IT市場に特化した調査・コンサルティングを行うグローバル調査会社の日本法人' },
            ]},
            { category: '市場指標', terms: [
                { name: '市場規模', desc: 'ある産業・市場における総売上高または総出荷額。金額ベースまたは数量ベースで表現される' },
                { name: '市場シェア', desc: '特定の企業が市場全体の中で占める売上高の割合。競争力の指標として使用される' },
                { name: '成長率', desc: '市場規模の前期比または前年比の増減率。市場の拡大・縮小のトレンドを示す' },
                { name: '利益率', desc: '売上高に対する利益の割合。営業利益率、経常利益率、純利益率などがある' },
                { name: '参入障壁', desc: '新規企業が市場に参入する際の障害。規制、資本、技術、ブランドなどが要因となる' },
            ]}
        ];
        const colors = { '市場分析基本用語': '#0d9488', '業界分類': '#2563eb', '分析手法': '#7c3aed', 'データソース': '#e11d48', '市場指標': '#d97706' };
        let html = `<div class="fade-in"><h1 style="font-size:1.6rem;margin-bottom:8px;">用語リファレンス</h1>
            <p style="color:var(--text-secondary);margin-bottom:24px;">市場規模分析と業界研究に関する重要用語の一覧です。</p>
            <div class="reference-search"><input type="text" id="refSearchInput" placeholder="用語名で検索..." oninput="App.filterReference()"></div>`;
        sections.forEach(s => {
            html += `<div class="ref-domain-section"><h2 style="font-size:1.2rem;margin:24px 0 12px;color:${colors[s.category] || '#333'}">${s.category}</h2><div style="display:grid;gap:8px;">`;
            s.terms.forEach(t => {
                html += `<div class="ref-var-row" data-var="${t.name}" style="background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);padding:12px 16px;display:flex;align-items:center;gap:16px;border-left:4px solid ${colors[s.category] || '#333'}">
                    <div style="min-width:160px;font-weight:700;font-size:0.95rem;">${t.name}</div><div style="font-size:0.85rem;color:var(--text-secondary)">${t.desc}</div></div>`;
            });
            html += '</div></div>';
        });
        html += '</div>'; c.innerHTML = html;
    },

    filterReference() {
        const q = document.getElementById('refSearchInput').value.toLowerCase().trim();
        document.querySelectorAll('.ref-var-row').forEach(r => { r.style.display = (!q || r.getAttribute('data-var').toLowerCase().includes(q)) ? '' : 'none'; });
    }
};

document.addEventListener('DOMContentLoaded', () => { App.init(); });
