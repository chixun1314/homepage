import { Instagram, Twitter, Facebook, Mail, Dumbbell } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="relative z-10 bg-surface border-t border-white/5 py-20 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <Dumbbell className="h-8 w-8 text-primary" />
                            <span className="text-2xl font-black tracking-tighter text-primary">BODY SPORTS</span>
                        </div>
                        <p className="text-secondary max-w-sm mb-8 leading-relaxed">
                            프리미엄 피트니스 솔루션의 기준, <br />
                            BODY SPORTS는 프로 정신으로 최고의 머신과 환경을 구성하여 만들고 끝까지 책임을 다합니다.
                        </p>
                        <div className="flex space-x-6">
                            <a href="https://www.instagram.com/tj78_kim/" target="_blank" rel="noopener noreferrer">
                                <Instagram className="h-5 w-5 text-secondary hover:text-primary cursor-pointer transition-colors" />
                            </a>
                            <Twitter className="h-5 w-5 text-secondary hover:text-primary cursor-pointer transition-colors" />
                            <Facebook className="h-5 w-5 text-secondary hover:text-primary cursor-pointer transition-colors" />
                            <Mail className="h-5 w-5 text-secondary hover:text-primary cursor-pointer transition-colors" />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">서비스</h4>
                        <ul className="space-y-4 text-sm text-secondary">
                            <li>
                                <a
                                    href="https://smartstore.naver.com/body-sports"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white cursor-pointer transition-colors"
                                >
                                    제품 라인업
                                </a>
                            </li>
                            <li className="hover:text-white cursor-pointer transition-colors">제품 문의</li>
                            <li className="hover:text-white cursor-pointer transition-colors">AS 수리문의</li>
                            <li className="hover:text-white cursor-pointer transition-colors">에이전시 협업</li>
                            <li className="hover:text-white cursor-pointer transition-colors">B2B 대량구매</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">고객센터</h4>
                        <ul className="space-y-4 text-sm text-secondary">
                            <li>고객센터 010-4313-5843</li>
                            <li>사업장 소재지 경기도 파주시 쇠재개울길 62-9 1층 10호(금릉동) (우 : 10934)</li>
                            <li>e-mail body-sports@naver.com</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 text-center text-xs text-secondary/50">
                    © 2026 BODY SPORTS CO. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
