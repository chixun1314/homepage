import { motion } from 'framer-motion';

const posts = [
    {
        id: 1,
        title: "근성장을 위한 운동 기구 선택 가이드",
        excerpt: "초보자가 가장 많이 하는 실수 중 하나는 본인에게 맞지 않는 기구를 선택하는 것입니다...",
        date: "2026.02.05",
        category: "트레이닝",
        image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        title: "헬스장 매출을 올리는 유튜브 광고 비결",
        excerpt: "대형 피트니스 센터가 유튜브 광고를 통해 신규 회원을 유치하는 전략적 프레임워크를 공개합니다.",
        date: "2026.01.28",
        category: "마케팅",
        image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        title: "HIIT와 고강도 인터벌 기구의 시너지",
        excerpt: "더 적은 시간으로 더 많은 지방을 태우는 기구 활용법과 영상 콘텐츠 구성 노하우.",
        date: "2026.01.12",
        category: "퍼포먼스",
        image: "https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&w=800&q=80"
    }
];

const BlogPage = () => {
    return (
        <div className="pt-32 pb-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-5xl font-black mb-16 tracking-tighter">인사이트 & 뉴스</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {posts.map((post, index) => (
                        <a
                            key={post.id}
                            href="https://blog.naver.com/teajini"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <motion.article
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="group cursor-pointer"
                            >
                                <div className="relative aspect-video overflow-hidden rounded-3xl mb-6 bg-surface">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                </div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-[10px] font-bold uppercase">{post.category}</span>
                                    <span className="text-secondary text-xs">{post.date}</span>
                                </div>
                                <h2 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">{post.title}</h2>
                                <p className="text-secondary text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                            </motion.article>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
