import { FileText, Calculator, Truck, Send, CheckCircle2, AlertCircle, Loader2, Lock } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProductInquiry = () => {
    const [status, setStatus] = useState('idle');
    const { user, isAuthenticated } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isAuthenticated) return;
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

                <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[2rem] relative overflow-hidden group">
                    {!isAuthenticated ? (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <div className="h-24 w-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-10 ring-4 ring-primary/5 transition-transform group-hover:scale-110 duration-500">
                                <Lock className="h-12 w-12 text-primary/40" strokeWidth={1.5} />
                            </div>
                            <h2 className="text-3xl font-bold mb-6 tracking-tight">로그인 후 견적 신청이 가능합니다</h2>
                            <p className="text-secondary mb-12 max-w-[320px] leading-relaxed mx-auto">
                                자세한 상담과 견적 산출을 위해 <br />
                                Google 계정으로 본인 인증이 필요합니다.
                            </p>
                            <Link
                                to="/admin"
                                className="btn-primary flex items-center justify-center gap-4 py-5 px-10 shadow-2xl hover:shadow-primary/20 text-lg"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                                    <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                                Google로 계속하기
                            </Link>
                        </div>
                    ) : status === 'success' ? (
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
                            <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-6">
                                <h2 className="text-2xl font-bold flex items-center gap-2">
                                    <FileText className="h-6 w-6 text-primary" /> 견적 요청서 작성
                                </h2>
                                <div className="text-xs text-secondary font-medium px-3 py-1 rounded-full bg-white/5 border border-white/5">
                                    {user?.name}님 로그인 중
                                </div>
                            </div>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">고객명 / 업체명</label>
                                        <input
                                            name="name"
                                            type="text"
                                            required
                                            defaultValue={user?.name}
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
                                            defaultValue={user?.email}
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
