import { Send } from 'lucide-react';

const QuoteRequest = () => {
    return (
        <section id="quote" className="py-24 bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-black tracking-tight mb-6">제품 / 수리 / 유지보수 일반문의</h2>
                        <p className="text-secondary text-lg mb-8 leading-relaxed">
                            단순 기구 문의 부터 유지보수 진행시 예상되는 예산 금액 등. 전문가가 직접 분석하여 안내를 드립니다.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">1</div>
                                <div>
                                    <h4 className="font-bold mb-1">기구 및 수리 문의</h4>
                                    <p className="text-secondary text-sm">구매 예정이거나, 수리가 필요하시다면</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shrink-0">2</div>
                                <div>
                                    <h4 className="font-bold mb-1">유지보수 문의</h4>
                                    <p className="text-secondary text-sm">기구 종류 및 개수와 소모품에 따른 유지보수 예산 등.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="glass p-8 md:p-12 rounded-3xl">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">성함 / 담당자명</label>
                                    <input type="text" className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="홍길동" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">이메일 주소</label>
                                    <input type="email" className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="email@example.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">시설 유형</label>
                                <select className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none text-secondary">
                                    <option>상업용 헬스장 (Gym)</option>
                                    <option>개인 홈짐</option>
                                    <option>기업용 사내 헬스장</option>
                                    <option>관공서 및 학교</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">문의 내용</label>
                                <textarea rows="4" className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="프로젝트에 대해 알려주세요..."></textarea>
                            </div>
                            <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                                무료 분석 신청하기
                                <Send className="h-4 w-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuoteRequest;
