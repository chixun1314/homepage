import { Wrench, Clock, Shield, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ASService = () => {
    return (
        <div className="pt-32 pb-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-black mb-6 tracking-tighter">AS & 유지보수 신청</h1>
                    <p className="text-xl text-secondary max-w-2xl mx-auto">
                        BODY SPORTS는 제품 판매 이후의 가치를 더 중요하게 생각합니다. 전문 엔지니어가 신속하게 방문하여 해결해 드립니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                    {[
                        { icon: <Clock className="h-8 w-8" />, title: "24시간 접수", desc: "온라인을 통해 언제 어디서든 AS 접수가 가능합니다." },
                        { icon: <Wrench className="h-8 w-8" />, title: "전문가 방문", desc: "피트니스 기구 전문 엔지니어가 48시간 이내에 방문합니다." },
                        { icon: <Shield className="h-8 w-8" />, title: "정품 부품 사용", desc: "모든 수리는 BODY SPORTS 정품 부품만을 사용하여 내구성을 보장합니다." }
                    ].map((item, i) => (
                        <div key={i} className="glass p-8 rounded-3xl text-center">
                            <div className="inline-flex p-4 rounded-2xl bg-primary/5 text-primary mb-6">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-secondary">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-3xl mx-auto glass p-8 md:p-12 rounded-[2rem]">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                        수리 문의 작성
                    </h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">고객명 / 업체명</label>
                                <input type="text" className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="홍길동" />
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">연락처</label>
                                <input type="tel" className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="010-0000-0000" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">기구 모델명</label>
                            <input type="text" className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="G-PRO 파워 랙 등" />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">상세 증상</label>
                            <textarea rows="5" className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="수리가 필요한 부분에 대해 상세히 적어주세요..."></textarea>
                        </div>
                        <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 py-4">
                            AS 신청 완료하기
                            <Send className="h-4 w-4" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ASService;
