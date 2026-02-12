import { Send, CheckCircle2, AlertCircle, Loader2, Lock } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const QuoteRequest = () => {
    const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
    const { isAuthenticated } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isAuthenticated) return;

        setStatus('submitting');
        // ... rest of handlesubmit

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
        } catch {
            setStatus('error');
        }
    };

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

                    <div className="glass p-8 md:p-12 rounded-3xl relative overflow-hidden group">
                        {!isAuthenticated ? (
                            <div className="flex flex-col items-center justify-center py-16 text-center">
                                <div className="h-20 w-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8 ring-4 ring-primary/5 transition-transform group-hover:scale-110 duration-500">
                                    <Lock className="h-10 w-10 text-primary/40" strokeWidth={1.5} />
                                </div>
                                <h3 className="text-2xl font-bold mb-4">로그인 후 이용 가능합니다</h3>
                                <p className="text-secondary mb-10 max-w-[280px] leading-relaxed">
                                    안전한 서비스 이용과 개인정보 보호를 위해 Google 계정 로그인이 필요합니다.
                                </p>
                                <Link
                                    to="/admin"
                                    className="btn-primary w-full flex items-center justify-center gap-3 py-4 shadow-xl hover:shadow-primary/20"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                        <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                        <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
                                        <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                    </svg>
                                    Google로 시작하기
                                </Link>
                            </div>
                        ) : status === 'success' ? (
                            <div className="flex flex-col items-center justify-center py-12 text-center animate-in fade-in zoom-in duration-300">
                                <CheckCircle2 className="h-16 w-16 text-primary mb-6" />
                                <h3 className="text-2xl font-bold mb-2">신청이 완료되었습니다</h3>
                                <p className="text-secondary font-medium tracking-tight italic">"{user?.name}님, 확인 후 빠르게 연락드리겠습니다."</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-8 text-primary font-bold hover:underline"
                                >
                                    추가 문의하기
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">성함 / 담당자명</label>
                                        <input
                                            name="name"
                                            type="text"
                                            required
                                            defaultValue={user?.name}
                                            className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                            placeholder="홍길동"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">이메일 주소</label>
                                        <input
                                            name="email"
                                            type="email"
                                            required
                                            defaultValue={user?.email}
                                            className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">시설 유형</label>
                                    <select
                                        name="facility_type"
                                        className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors appearance-none text-secondary"
                                    >
                                        <option>상업용 헬스장 (Gym)</option>
                                        <option>개인 홈짐</option>
                                        <option>기업용 사내 헬스장</option>
                                        <option>관공서 및 학교</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-secondary mb-2">문의 내용</label>
                                    <textarea
                                        name="message"
                                        rows="4"
                                        required
                                        className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors"
                                        placeholder="프로젝트에 대해 알려주세요..."
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
                                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'submitting' ? (
                                        <>
                                            전송 중...
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                        </>
                                    ) : (
                                        <>
                                            무료 분석 신청하기
                                            <Send className="h-4 w-4" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default QuoteRequest;
