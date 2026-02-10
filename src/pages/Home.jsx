import Hero from '../components/Hero'
import MachineGallery from '../components/MachineGallery'
import QuoteRequest from '../components/QuoteRequest'
import Blog from '../components/Blog'
import { Link } from 'react-router-dom'
import { ShieldCheck, Truck, HeadphonesIcon } from 'lucide-react'
import EditableText from '../components/cms/EditableText'

const Home = () => {
    return (
        <>
            <Hero />

            {/* Professional Trust Badges */}
            <div className="bg-surface py-16 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div className="flex flex-col items-center">
                            <ShieldCheck className="h-10 w-10 text-primary mb-4" />
                            <h3 className="text-lg font-bold mb-2">품질 보증</h3>
                            <p className="text-secondary text-sm">BODY SPORTS의 모든 제품은 최고의 품질 검수를 거칩니다.</p>
                        </div>
                        <div className="flex flex-col items-center border-x border-white/10 px-4">
                            <Truck className="h-10 w-10 text-primary mb-4" />
                            <h3 className="text-lg font-bold mb-2">전국 직영 배송</h3>
                            <p className="text-secondary text-sm">전문 설치 팀이 전국 어디든 안전하게 배송 및 설치해 드립니다.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <HeadphonesIcon className="h-10 w-10 text-primary mb-4" />
                            <h3 className="text-lg font-bold mb-2">신속한 AS</h3>
                            <p className="text-secondary text-sm">전담 엔지니어를 통해 가장 빠른 유지보수 서비스를 제공합니다.</p>
                        </div>
                    </div>
                </div>
            </div>

            <MachineGallery />
            <QuoteRequest />

            {/* Brand Story Snippet */}
            <section className="py-24 bg-background overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <span className="text-accent font-bold tracking-widest uppercase mb-4 block">
                            <EditableText id="home.story.since" />
                        </span>
                        <h2 className="text-5xl font-black mb-8 tracking-tighter leading-tight">
                            <EditableText id="home.story.title" multiline={true} />
                        </h2>
                        <p className="text-secondary text-lg leading-relaxed mb-8">
                            <EditableText id="home.story.desc" multiline={true} />
                        </p>
                        <Link to="/blog" className="btn-secondary inline-block">브랜드 스토리 더보기</Link>
                    </div>
                    <div className="flex-1 relative">
                        <div className="aspect-square bg-surface rounded-full flex items-center justify-center p-8 border border-white/5">
                            <div className="text-[12rem] font-black opacity-5 select-none">BS</div>
                            <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80" alt="Factory" className="absolute w-3/4 grayscale rounded-2xl shadow-2xl" />
                        </div>
                    </div>
                </div>
            </section>

            <Blog />
        </>
    )
}

export default Home;
