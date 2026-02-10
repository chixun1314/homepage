import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import EditableText from './cms/EditableText';

const Hero = () => {
    return (
        <div className="relative h-screen flex items-center justify-center overflow-hidden bg-background">
            {/* Background patterns */}
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-primary/20 skew-x-12 transform"></div>
                <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-primary/20 -skew-x-12 transform"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-primary/60 uppercase tracking-[0.4em] text-sm font-bold mb-6 block">
                        <EditableText id="home.hero.subtitle" />
                    </span>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-none">
                        <EditableText id="home.hero.title" multiline={true} />
                    </h1>
                    <p className="text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                        <EditableText id="home.hero.description" multiline={true} />
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a
                            href="https://smartstore.naver.com/body-sports"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary flex items-center gap-2 group px-10"
                        >
                            <EditableText id="home.hero.button.primary" />
                            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <Link to="/product-inquiry" className="btn-secondary flex items-center gap-2 px-10">
                            <EditableText id="home.hero.button.secondary" /> <ArrowRight className="h-5 w-5" />
                        </Link>
                    </div>
                </motion.div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 group cursor-pointer">
                <span className="text-[10px] uppercase tracking-[0.3em] text-secondary/40 group-hover:text-primary transition-colors">Discover Quality</span>
                <div className="w-px h-12 bg-gradient-to-b from-primary/40 to-transparent"></div>
            </div>
        </div>
    );
};

export default Hero;
