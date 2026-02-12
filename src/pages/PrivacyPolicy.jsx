import React from 'react';
import { ShieldCheck, FileText, UserCheck, Share2 } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="pt-32 pb-24 bg-background min-h-screen">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-black mb-6 tracking-tighter">개인정보 처리방침</h1>
                    <p className="text-secondary text-lg max-w-2xl mx-auto italic">
                        "저녁 메뉴 추천" 웹사이트(이하 "서비스")는 이용자의 개인정보를 소중히 다루며, 관련 법령을 준수합니다.
                    </p>
                </div>

                <div className="space-y-12">
                    {/* section 1 */}
                    <div className="glass p-8 md:p-10 rounded-[2rem] border border-white/5">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                                <UserCheck className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-bold">1. 수집하는 개인정보</h2>
                        </div>
                        <div className="space-y-4 text-secondary leading-relaxed">
                            <p>본 서비스는 다음과 같은 정보를 수집할 수 있습니다:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>제휴 문의 시:</strong> 이름/업체명, 이메일 주소, 연락처, 문의 내용</li>
                                <li><strong>자동 수집 정보:</strong> 방문 기록, 브라우저 종류, 접속 시간 (Google Analytics 등을 통해)</li>
                                <li><strong>동영상 테스트 시:</strong> 업로드된 이미지는 서버에 저장되지 않으며, 브라우저에서만 처리됩니다.</li>
                            </ul>
                        </div>
                    </div>

                    {/* section 2 */}
                    <div className="glass p-8 md:p-10 rounded-[2rem] border border-white/5">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                                <ShieldCheck className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-bold">2. 개인정보의 이용 목적</h2>
                        </div>
                        <div className="space-y-4 text-secondary leading-relaxed">
                            <p>수집된 정보는 다음 목적으로 이용됩니다:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>제휴 및 견적 문의에 대한 응답 및 상담</li>
                                <li>제품 설치 및 AS 서비스 제공을 위한 연락</li>
                                <li>서비스 개선 및 사용자 경험 향상</li>
                                <li>업무 통계 분석 및 효율적인 서비스 운영</li>
                            </ul>
                        </div>
                    </div>

                    {/* section 3 */}
                    <div className="glass p-8 md:p-10 rounded-[2rem] border border-white/5">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                                <FileText className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-bold">3. 개인정보의 보유 및 파기</h2>
                        </div>
                        <div className="space-y-4 text-secondary leading-relaxed">
                            <p>
                                수집된 개인정보는 수집 목적이 달성된 후 지체 없이 파기됩니다. 단, 관련 법령에 따라 보존이 필요한 경우 해당 기간 동안 안전하게 보관됩니다.
                            </p>
                        </div>
                    </div>

                    {/* section 4 */}
                    <div className="glass p-8 md:p-10 rounded-[2rem] border border-white/5">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary/10 rounded-2xl text-primary">
                                <Share2 className="h-6 w-6" />
                            </div>
                            <h2 className="text-2xl font-bold">4. 제3자 서비스</h2>
                        </div>
                        <div className="space-y-4 text-secondary leading-relaxed">
                            <p>본 서비스는 다음과 같은 제3자 서비스를 이용합니다:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>Google Analytics:</strong> 서비스 이용 통계 분석을 위해 사용됩니다.</li>
                                <li><strong>Formspree:</strong> 문의 내용 전송 및 처리를 위해 사용됩니다.</li>
                                <li><strong>Disqus:</strong> 댓글 기능 제공 시 사용될 수 있습니다.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center text-secondary text-sm">
                    <p>© 2026 BODY SPORTS. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
