import { motion } from 'framer-motion';

const machines = [
    {
        id: 1,
        name: "BS-100 프리미엄 파워 랙",
        description: "고강도 탄소강 소재와 이중 코팅으로 설계되어 극한의 하중에도 흔들림 없는 안정성을 제공합니다. 정밀한 간격 조정으로 최적의 운동 환경을 선사합니다.",
        price: "₩3,500,000",
        specs: ["탄소강 3T 규격", "레이저 타공 시스템", "풀업 바 포함"],
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "BS-DUAL 케이블 크로스오버",
        description: "독립적인 듀얼 풀리 시스템으로 수만 가지의 운동 변형이 가능합니다. 특수 베어링 채택으로 소음을 최소화하고 매끄러운 수축감을 구현했습니다.",
        price: "₩5,400,000",
        specs: ["초정밀 베어링", "100kg 블록 스택", "다목적 핸들 세트"],
        image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        name: "BS-LEG 45도 레그 프레스",
        description: "인체공학적 등받이 각도 설계를 통해 허리 부담을 줄이면서 하체 근육에 최대의 부하를 집중시킵니다.",
        price: "₩1,800,000",
        specs: ["45도 고정 궤적", "미끄럼 방지 발판", "이지 세이프티 락"],
        image: "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?auto=format&fit=crop&w=800&q=80"
    }
];

const Machines = () => {
    return (
        <div className="pt-32 pb-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
                    <div>
                        <span className="text-secondary text-sm font-bold tracking-widest uppercase mb-2 block">Our Collection</span>
                        <h1 className="text-5xl font-black tracking-tighter">PREMIUM LINE-UP</h1>
                    </div>
                    <p className="text-secondary max-w-sm text-right hidden md:block">
                        바디 스포츠의 모든 제품은 전문가용 제품입니다.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-24">
                    {machines.map((machine, index) => (
                        <motion.div
                            key={machine.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-16 items-center`}
                        >
                            <div className="flex-1 w-full relative group">
                                <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] scale-95 group-hover:scale-100 transition-transform duration-500"></div>
                                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-surface">
                                    <img src={machine.image} alt={machine.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                                </div>
                            </div>
                            <div className="flex-1">
                                <h2 className="text-4xl font-bold mb-6">{machine.name}</h2>
                                <p className="text-secondary text-lg mb-8 leading-relaxed">{machine.description}</p>

                                <div className="grid grid-cols-2 gap-4 mb-10">
                                    {machine.specs.map((spec, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-primary/80">
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                                            {spec}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between border-t border-white/10 pt-8">
                                    <div className="text-3xl font-black">{machine.price}</div>
                                    <button className="btn-primary">견적 및 상담신청</button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Machines;
