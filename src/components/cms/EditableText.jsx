import { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useContent } from '../../context/ContentContext';
import { Edit2, Check, X } from 'lucide-react';

const EditableText = ({ id, className = "", multiline = false, tagName = "span" }) => {
    const { isAdmin } = useAuth();
    const { content, updateContent } = useContent();
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(content[id] || "");
    const inputRef = useRef(null);

    useEffect(() => {
        setValue(content[id] || "");
    }, [content, id]);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const handleSave = () => {
        updateContent(id, value);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setValue(content[id] || "");
        setIsEditing(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !multiline) {
            handleSave();
        }
        if (e.key === 'Escape') {
            handleCancel();
        }
    };

    if (!isAdmin) {
        const Tag = tagName;
        return <Tag className={className} dangerouslySetInnerHTML={{ __html: (content[id] || "").replace(/\n/g, '<br/>') }} />;
    }

    if (isEditing) {
        return (
            <div className="relative inline-block w-full">
                {multiline ? (
                    <textarea
                        ref={inputRef}
                        className={`w-full bg-black/50 border-2 border-primary rounded p-2 text-white outline-none focus:ring-2 focus:ring-primary/50 ${className}`}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        rows={5}
                    />
                ) : (
                    <input
                        ref={inputRef}
                        className={`w-full bg-black/50 border-2 border-primary rounded p-2 text-white outline-none focus:ring-2 focus:ring-primary/50 ${className}`}
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                )}
                <div className="absolute -top-10 right-0 flex gap-2 z-50 bg-black/80 p-1 rounded border border-white/20">
                    <button onClick={handleSave} className="p-1 hover:text-green-400 text-green-500 bg-white/10 rounded"><Check size={16} /></button>
                    <button onClick={handleCancel} className="p-1 hover:text-red-400 text-red-500 bg-white/10 rounded"><X size={16} /></button>
                </div>
            </div>
        );
    }

    const Tag = tagName;
    return (
        <div className="relative group inline-block w-full">
            <Tag
                className={`${className} border border-transparent hover:border-primary/50 hover:bg-white/5 rounded transition-all cursor-pointer`}
                onClick={() => setIsEditing(true)}
                title="Click to edit"
                dangerouslySetInnerHTML={{ __html: (content[id] || "").replace(/\n/g, '<br/>') }}
            />
            <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                <Edit2 className="w-4 h-4 text-primary bg-black rounded-full p-0.5" />
            </div>
        </div>
    );
};

export default EditableText;
