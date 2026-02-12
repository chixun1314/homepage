import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock } from 'lucide-react';

const AdminLogin = () => {
    const { loginWithGoogle, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/');
        }
    }, [isAuthenticated, navigate]);

    const handleGoogleLogin = () => {
        if (loginWithGoogle()) {
            navigate(-1); // Go back to previous page or home
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="max-w-md w-full glass p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500"></div>

                <div className="text-center mb-10">
                    <div className="inline-flex p-5 rounded-full bg-white/5 text-primary mb-6 ring-1 ring-white/10">
                        <Lock size={40} strokeWidth={1.5} />
                    </div>
                    <h1 className="text-4xl font-black tracking-tight mb-4">로그인이 필요합니다</h1>
                    <p className="text-secondary leading-relaxed">
                        문의 폼 작성 및 관리자 기능을 이용하시려면<br />
                        Google 계정으로 로그인해 주세요.
                    </p>
                </div>

                <div className="space-y-4">
                    <button
                        onClick={handleGoogleLogin}
                        className="w-full flex items-center justify-center gap-4 bg-white text-black hover:bg-gray-100 py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl group"
                    >
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                            <path
                                fill="#4285F4"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                                fill="#34A853"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                                fill="#FBBC05"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                            />
                            <path
                                fill="#EA4335"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                            />
                        </svg>
                        Google 계정으로 계속하기
                    </button>

                    <button
                        onClick={() => navigate('/')}
                        className="w-full py-4 text-secondary hover:text-white transition-colors text-sm font-medium"
                    >
                        메인 페이지로 돌아가기
                    </button>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 text-center">
                    <p className="text-xs text-secondary/40 font-medium tracking-widest uppercase">
                        Secure Authentication by Google
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
