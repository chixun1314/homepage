import { Wrench, Clock, Shield, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ASService = () => {
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

                <div className="max-w-3xl mx-auto glass p-8 md:p-12 rounded-[2rem] relative overflow-hidden">
                    {status === 'success' ? (
                        <div className="flex flex-col items-center justify-center py-16 text-center animate-in fade-in zoom-in duration-300">
                            <CheckCircle2 className="h-16 w-16 text-primary mb-6" />
                            <h2 className="text-2xl font-bold mb-2">AS 신청이 접수되었습니다</h2>
                            <p className="text-secondary font-medium italic">"전문 엔지니어가 영업일 기준 48시간 이내에 연락드리고 방문하겠습니다."</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-8 text-primary font-bold hover:underline"
                            >
                                추가 AS 신청하기
                            </button>
                        </div>
                    ) : (
                        <>
                            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2">
                                수리 문의 작성
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
                                            placeholder="홍길동"
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
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">기구 모델명</label>
                                    <input
                                        name="model"
                                        type="text"
                                        className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="G-PRO 파워 랙 등"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">상세 증상</label>
                                    <textarea
                                        name="symptoms"
                                        rows="5"
                                        required
                                        className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="수리가 필요한 부분에 대해 상세히 적어주세요..."
                                    ></textarea>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-secondary mb-4">
                                    <input
                                        name="privacy_consent"
                                        type="checkbox"
                                        id="privacy"
                                        required
                                        className="rounded border-white/10 bg-background/50 text-primary focus:ring-primary h-4 w-4"
                                    />
                                    <label htmlFor="privacy" className="cursor-pointer">
                                        <Link to="/privacy" className="text-primary hover:underline underline-offset-4">개인정보 수집</Link> 및 이용에 동의 합니다.
                                    </label>
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
                                            AS 신청 완료하기
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

export default ASService;
