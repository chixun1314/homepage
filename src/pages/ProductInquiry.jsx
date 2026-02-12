import { FileText, Calculator, Truck, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useState } from 'react';

const ProductInquiry = () => {
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.target);

        try {
            const response = await fetch('https://formspree.io/f/xlgwgqzg', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className="pt-32 pb-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-black mb-6 tracking-tighter">제품 견적 문의</h1>
                    <p className="text-xl text-secondary max-w-2xl mx-auto">
                        최고의 피트니스 경험을 위한 첫 걸음. 원하시는 제품의 견적을 신속하게 안내해 드립니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                    {[
                        { icon: <Calculator className="h-8 w-8" />, title: "맞춤형 견적", desc: "예산과 공간에 최적화된 맞춤형 견적을 제안드립니다." },
                        { icon: <FileText className="h-8 w-8" />, title: "상세한 제품 정보", desc: "제품의 스펙, 특징, 설치 요건 등 상세한 정보를 함께 제공합니다." },
                        { icon: <Truck className="h-8 w-8" />, title: "배송 및 설치 안내", desc: "전문 기사님의 안전한 배송과 꼼꼼한 설치 일정을 안내해 드립니다." }
                    ].map((item, i) => (
                        <div key={i} className="glass p-8 rounded-3xl text-center">
                            <div className="inline-flex p-4 rounded-2xl bg-primary/5 text-primary mb-6">{item.icon}</div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-secondary">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
                    {status === 'success' ? (
                        <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in zoom-in duration-300">
                            <CheckCircle2 className="h-20 w-20 text-primary mb-8" />
                            <h2 className="text-3xl font-bold mb-4">견적 요청이 완료되었습니다</h2>
                            <p className="text-secondary text-lg">기재해주신 연락처로 상담원이 곧 연락드릴 예정입니다.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-10 btn-secondary px-8"
                            >
                                새로운 견적 문의하기
                            </button>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                                견적 요청서 작성
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">고객명 / 업체명</label>
                                        <input
                                            name="name"
                                            type="text"
                                            required
                                            className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                            placeholder="홍길동 / 피트니스 센터"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">연락처</label>
                                        <input
                                            name="phone"
                                            type="tel"
                                            required
                                            className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                            placeholder="010-0000-0000"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">이메일</label>
                                        <input
                                            name="email"
                                            type="email"
                                            required
                                            className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">설치 지역</label>
                                        <input
                                            name="location"
                                            type="text"
                                            className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                            placeholder="서울시 강남구"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <div className="md:col-span-2">
                                        <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">관심 제품</label>
                                        <input
                                            name="product"
                                            type="text"
                                            className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                            placeholder="G-PRO 파워 랙, 덤벨 세트 등"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">예상 수량</label>
                                        <input
                                            name="quantity"
                                            type="number"
                                            min="1"
                                            className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                            placeholder="1"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">문의 상세 내용</label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        required
                                        className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="원하시는 사양, 설치 공간의 특이사항, 납기 요청일 등을 자유롭게 적어주세요..."
                                    ></textarea>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-secondary mb-4">
                                    <input
                                        name="privacy_consent"
                                        type="checkbox"
                                        id="privacy"
                                        required
                                        className="rounded border-white/10 bg-background/50 text-primary focus:ring-primary"
                                    />
                                    <label htmlFor="privacy">개인정보 수집 및 이용에 동의합니다.</label>
                                </div>

                                {status === 'error' && (
                                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-4 rounded-xl flex items-center gap-3 text-sm">
                                        <AlertCircle className="h-5 w-5 shrink-0" />
                                        전송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full btn-primary flex items-center justify-center gap-2 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            전송 중...
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                        </>
                                    ) : (
                                        <>
                                            견적 신청하기
                                            <Send className="h-4 w-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductInquiry;
