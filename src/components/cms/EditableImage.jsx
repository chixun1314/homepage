import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useContent } from '../../context/ContentContext';
import { Image, Check, X, Upload } from 'lucide-react';

const EditableImage = ({ id, className = "", alt = "" }) => {
    const { isAdmin } = useAuth();
    const { content, updateContent } = useContent();
    const [isEditing, setIsEditing] = useState(false);
    const [url, setUrl] = useState(content[id] || "");

    const handleSave = () => {
        updateContent(id, url);
        setIsEditing(false);
    };

    return (
        <div className={`relative group ${className}`}>
            <img
                src={content[id] || "https://via.placeholder.com/800x600?text=No+Image"}
                alt={alt}
                className={`w-full h-full object-cover ${isAdmin ? 'group-hover:opacity-80 transition-opacity cursor-pointer' : ''}`}
                onClick={() => isAdmin && setIsEditing(true)}
            />

            {isAdmin && (
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-black/70 p-2 rounded-full text-primary">
                        <Image size={20} />
                    </div>
                </div>
            )}

            {isEditing && (
                <div className="absolute inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-6 animate-in fade-in zoom-in-95 duration-200">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                        <Image size={20} /> 이미지 URL 수정
                    </h3>
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="w-full bg-white/10 border border-white/20 rounded p-3 text-white mb-4 focus:ring-2 focus:ring-primary outline-none"
                        placeholder="https://..."
                        autoFocus
                    />
                    <div className="flex gap-3 w-full">
                        <button
                            onClick={handleSave}
                            className="flex-1 bg-primary text-background font-bold py-2 rounded hover:bg-primary/90 flex items-center justify-center gap-2"
                        >
                            <Check size={16} /> 저장
                        </button>
                        <button
                            onClick={() => setIsEditing(false)}
                            className="flex-1 bg-white/10 text-white font-bold py-2 rounded hover:bg-white/20 flex items-center justify-center gap-2"
                        >
                            <X size={16} /> 취소
                        </button>
                    </div>
                    <p className="text-xs text-secondary mt-4 text-center">
                        * 이미지 주소(Pre-signed URL)를 입력해주세요.
                    </p>
                </div>
            )}
        </div>
    );
};

export default EditableImage;
