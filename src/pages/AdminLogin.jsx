import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Lock, ArrowRight } from 'lucide-react';

const AdminLogin = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (login(password)) {
            navigate('/');
        } else {
            setError('비밀번호가 올바르지 않습니다.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="max-w-md w-full glass p-8 rounded-2xl border border-white/10">
                <div className="text-center mb-8">
                    <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4">
                        <Lock size={32} />
                    </div>
                    <h1 className="text-3xl font-black tracking-tight mb-2">관리자 로그인</h1>
                    <p className="text-secondary">
                        웹사이트 콘텐츠 수정을 위한 관리자 인증이 필요합니다.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="관리자 비밀번호 입력"
                            className="w-full bg-black/30 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-center tracking-widest text-lg"
                            autoFocus
                        />
                        {error && (
                            <p className="text-red-500 text-sm mt-2 text-center font-medium animate-pulse">
                                {error}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full btn-primary py-4 flex items-center justify-center gap-2 font-bold text-lg"
                    >
                        로그인 <ArrowRight size={20} />
                    </button>
                </form>

                <div className="mt-8 text-center text-xs text-secondary/40">
                    Protected by SimpleAuth™ System
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
