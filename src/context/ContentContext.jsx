import { createContext, useContext, useState, useEffect } from 'react';

const ContentContext = createContext();

export const useContent = () => useContext(ContentContext);

// Initial default content to populate if localStorage is empty
const defaultContent = {
    "home.hero.title": "BODY SPORTS\nEXCELLENCE",
    "home.hero.subtitle": "Elite Fitness Equipment Manufacturer",
    "home.hero.description": "완벽한 궤적, 압도적인 내구성. 바디 스포츠는 타협하지 않는 품질로 피트니스 \n전문가들의 신뢰를 받고 있습니다.",
    "home.hero.button.primary": "제품 카탈로그",
    "home.hero.button.secondary": "전문가 상담",

    // Brand Story
    "home.story.since": "SINCE 2006",
    "home.story.title": "운동기구의 본질에 집착합니다.",
    "home.story.desc": "BODY SPORTS는 단순히 기구를 판매하는 회사가 아닙니다. 인간의 근육 역학을 이해하고, 가장 효율적인 운동 궤적을 설계하여 운동하는 이들에게 최상의 환경과 경험을 선사하는 컨설턴트 입니다.",

    // Machine Gallery
    "home.gallery.title": "추천 장비 라인업",
    "home.gallery.desc": "머신 중 가장 높은 구매 전환율을 보이는 프리미엄 라인입니다.",

    "machine.1.name": "G-PRO 파워 랙",
    "machine.1.price": "₩3,500,000",
    "machine.1.image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",

    "machine.2.name": "아펙스 케이블 머신",
    "machine.2.price": "₩5,400,000",
    "machine.2.image": "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80",

    "machine.3.name": "그래비티 레그 프레스",
    "machine.3.price": "₩1,800,000",
    "machine.3.image": "https://images.unsplash.com/photo-1434608519344-49d77a699e1d?auto=format&fit=crop&w=800&q=80"
};

export const ContentProvider = ({ children }) => {
    const [content, setContent] = useState(defaultContent);

    useEffect(() => {
        const storedContent = localStorage.getItem('siteContent');
        if (storedContent) {
            try {
                const parsed = JSON.parse(storedContent);
                setContent(prev => ({ ...prev, ...parsed }));
            } catch (e) {
                console.error("Failed to parse stored content", e);
            }
        }
    }, []);

    const updateContent = (path, value) => {
        setContent(prev => {
            const newContent = { ...prev, [path]: value };
            localStorage.setItem('siteContent', JSON.stringify(newContent));
            return newContent;
        });
    };

    const resetContent = () => {
        if (window.confirm("모든 변경사항을 초기화하시겠습니까? (되돌릴 수 없습니다)")) {
            setContent(defaultContent);
            localStorage.removeItem('siteContent');
            window.location.reload();
        }
    }

    const getContent = (path) => {
        return content[path] || defaultContent[path] || path; // Fallback to path if missing
    };

    return (
        <ContentContext.Provider value={{ content, updateContent, getContent, resetContent }}>
            {children}
        </ContentContext.Provider>
    );
};
