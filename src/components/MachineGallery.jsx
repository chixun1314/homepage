import { motion } from 'framer-motion';
import EditableText from './cms/EditableText';
import EditableImage from './cms/EditableImage';



const MachineGallery = () => {
    return (
        <section id="machines" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h2 className="text-4xl font-black tracking-tight mb-4">
                            <EditableText id="home.gallery.title" />
                        </h2>
                        <p className="text-secondary max-w-lg">
                            <EditableText id="home.gallery.desc" multiline={true} />
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-sm font-bold border-b-2 border-primary pb-1 cursor-pointer">전체</span>
                        <span className="text-sm font-bold text-secondary hover:text-white pb-1 cursor-pointer transition-colors">근력</span>
                        <span className="text-sm font-bold text-secondary hover:text-white pb-1 cursor-pointer transition-colors">유산소</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((id, index) => (
                        <motion.div
                            key={id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-surface mb-6 rounded-2xl">
                                <EditableImage
                                    id={`machine.${id}.image`}
                                    className="w-full h-full"
                                    alt={`Machine ${id}`}
                                />
                                <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 text-xs font-bold rounded-full text-primary">
                                    <EditableText id={`machine.${id}.category`} />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                                <EditableText id={`machine.${id}.name`} />
                            </h3>
                            <p className="text-secondary mb-4">
                                <EditableText id={`machine.${id}.price`} />
                            </p>
                            <a
                                href="https://smartstore.naver.com/body-sports"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-sm font-bold border-b border-white/20 group-hover:border-white transition-colors pb-1"
                            >
                                상세 보기
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MachineGallery;
