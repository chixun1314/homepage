import { Menu, X, Dumbbell, Send, LogIn } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed w-full z-50 top-0 glass shadow-2xl">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <Link to="/" className="flex items-center gap-2">
                        <Dumbbell className="h-8 w-8 text-primary" />
                        <span className="text-2xl font-black tracking-tighter text-primary">BODY SPORTS</span>
                    </Link>

                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            <Link to="/" className="hover:text-white px-3 py-2 text-sm font-medium transition-colors">홈</Link>
                            <Link to="/machines" className="text-secondary hover:text-white px-3 py-2 text-sm font-medium transition-colors">제품소개</Link>
                            <Link to="/product-inquiry" className="text-secondary hover:text-white px-3 py-2 text-sm font-medium transition-colors">제품 문의</Link>
                            <Link to="/agency" className="text-secondary hover:text-white px-3 py-2 text-sm font-medium transition-colors">에이전시</Link>
                            <Link to="/blog" className="text-secondary hover:text-white px-3 py-2 text-sm font-medium transition-colors">블로그</Link>
                            <div className="flex items-center gap-4 ml-4">
                                <Link to="/admin" className="text-secondary hover:text-white flex items-center gap-1.5 text-sm font-medium transition-colors">
                                    로그인 <LogIn className="h-4 w-4" />
                                </Link>
                                <Link to="/as-service" className="btn-primary flex items-center gap-2">
                                    AS 신청 <Send className="h-3 w-3" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-primary p-2">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden glass border-t border-white/10 animate-in slide-in-from-top duration-300">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" className="block px-3 py-2 text-base font-medium" onClick={() => setIsOpen(false)}>홈</Link>
                        <Link to="/machines" className="block px-3 py-2 text-base font-medium text-secondary" onClick={() => setIsOpen(false)}>제품소개</Link>
                        <Link to="/product-inquiry" className="block px-3 py-2 text-base font-medium text-secondary" onClick={() => setIsOpen(false)}>제품 문의</Link>
                        <Link to="/agency" className="block px-3 py-2 text-base font-medium text-secondary" onClick={() => setIsOpen(false)}>에이전시</Link>
                        <Link to="/blog" className="block px-3 py-2 text-base font-medium text-secondary" onClick={() => setIsOpen(false)}>블로그</Link>
                        <div className="px-3 py-4 space-y-3">
                            <Link to="/admin" className="w-full flex items-center justify-center gap-2 py-3 border border-white/10 rounded-xl text-secondary hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
                                <LogIn className="h-4 w-4" /> 로그인
                            </Link>
                            <Link to="/as-service" className="w-full btn-primary block text-center py-3" onClick={() => setIsOpen(false)}>AS 신청</Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
