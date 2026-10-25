export const profile = {
  nameJa: 'バートル ネルグイ',
  nameEn: 'Baatar Nergui',
  role: 'Frontend Engineer',
  email: 'shimamurahanahana@gmail.com',
  github: 'https://github.com/shimamurahanahana',
}

export type Work = {
  id: string
  title: string
  type: string
  desc: string
  tech: string[]
  live: string
  code?: string
  featured?: boolean
}

export const works: Work[] = [
  {
    id: 'undur',
    title: 'Undur Eej — モンゴル人向けオンライン販売サイト',
    type: '自主開発・運用中',
    desc: '日本在住のモンゴル人向けに、新品・中古・無料の商品を売り買いできるWebサービス。画面からサーバー処理、API、DBスキーマ・マイグレーションまで一人で設計・実装。',
    tech: ['Next.js 16', 'React 19', 'Supabase', 'Tailwind CSS'],
    live: 'https://undureej.com',
    featured: true,
  },
  {
    id: 'nt',
    title: '株式会社エヌティ 企業サイト',
    type: '受託制作',
    desc: '千葉県松戸市の原状回復・内装リフォーム会社のサイト。施工事例の管理画面とお問い合わせフォームを実装。',
    tech: ['Next.js', 'TypeScript', 'Supabase', 'Netlify'],
    live: 'https://nt-homecare.services',
  },
  {
    id: 'mng',
    title: 'MNG Construction — カナダ 建築外装会社サイト',
    type: '受託制作',
    desc: 'カナダ・カルガリーの外装リフォーム（造園・サイディング・屋根・除雪）会社の企業サイト。施工事例、口コミ、無料見積りフォーム、管理画面を実装。',
    tech: ['Vite', 'JavaScript', 'Vercel', 'レスポンシブ'],
    live: 'https://mng-construction.vercel.app',
  },
  {
    id: 'typing',
    title: 'モンゴル語タッチタイピング学習アプリ',
    type: '共同開発（2名）',
    desc: 'キリル文字を20段階で学べるアプリ。画面デザインとカリキュラムを担当。進捗・統計ロジックをテスト。',
    tech: ['React', 'TypeScript', 'Vite', 'Testing'],
    live: 'https://mongolian-typing.netlify.app',
  },
  {
    id: 'house',
    title: '住宅コンセプト計画サイト',
    type: '受託制作',
    desc: '2階建て住宅、2000㎡の敷地レイアウト、温室、設備計画を図とともに紹介。',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://shimamurahanahana.github.io/my-dream-house-plan/',
    code: 'https://github.com/shimamurahanahana/my-dream-house-plan',
  },
  {
    id: 'hashaa',
    title: '敷地計画サイト「Тухтай хашаа」',
    type: '受託制作',
    desc: 'モンゴル・トゥブ県の700㎡の土地を、一年中快適に暮らせる住まいに整備する計画サイト。',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://tuhtai-hashaa.netlify.app',
    code: 'https://github.com/shimamurahanahana/tuhtai-hashaa',
  },
]

export const strengths = [
  {
    title: '企画から公開まで一人でやり遂げる力',
    body: '要望ヒアリングから設計・実装・公開・改善まで一貫して担当。画面だけでなく、DB設計やAPIまで自分で考えて形にします。',
  },
  {
    title: '利用者の立場で考える力',
    body: '旅行業界と介護施設で、お客様・利用者様と直接向き合ってきました。「使う人にとって分かりやすいか」を常に意識しています。',
  },
  {
    title: '多言語・異文化への適応力',
    body: '韓国・モンゴル・日本と異なる環境で仕事を続けてきました。新しい環境や技術にも前向きに学び続けます。',
  },
]

export const skills = [
  { group: '言語', items: ['HTML', 'CSS', 'JavaScript', 'TypeScript'] },
  { group: 'フレームワーク', items: ['React', 'Next.js', 'Vite', 'Node.js'] },
  { group: 'データベース・UI', items: ['Supabase', 'Tailwind CSS', 'レスポンシブ対応'] },
  { group: 'ツール', items: ['Git / GitHub', 'Netlify', 'Vercel', 'GitHub Pages', '生成AIツール'] },
]

export const stack = ['React', 'Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Vite', 'Node.js', 'Git', 'Netlify', 'HTML', 'CSS', 'JavaScript']

export const languages = [
  { name: 'モンゴル語', level: '母語', pct: 100 },
  { name: '韓国語', level: 'ビジネス会話', pct: 80 },
  { name: '日本語', level: '日常会話（N3）', pct: 60 },
]

export const career = [
  {
    when: '2026 — 現在',
    title: 'フリーランス Web開発者',
    body: '企業サイト・個人住宅プロジェクトのWebサイトを受託制作。ヒアリングから設計・実装・公開・改善まで一人で担当。Next.js・React・SupabaseのWebアプリを自主開発・運用。',
  },
  {
    when: '2023.04 — 2026.03',
    title: '日本国内 — 介護職・食品製造',
    body: '地域密着型介護老人福祉施設で介護職員として勤務し、日本の職場でのチームワークを経験。その後、食品工場で製造業務に従事。業務の傍らWeb開発と生成AIツールを独学。',
  },
  {
    when: '2019.09 — 2023.02',
    title: 'Gobi Star Travel（モンゴル）— 旅行マネージャー',
    body: '旅行商品の案内・お客様対応に加え、自社Webサイトの制作・更新、SNSでの情報発信・広報を担当。',
  },
  {
    when: '2009.09 — 2019.02',
    title: 'Bodi Tour（韓国）— 代表',
    body: 'モンゴルの旅行会社の韓国代表として、韓国のお客様向けにモンゴル旅行の案内・手配を約10年間担当。',
  },
  {
    when: '2008.06',
    title: 'モンゴル科学技術大学 通信専攻 卒業',
    body: '',
  },
]
