import { useAuth } from '../../context/AuthContext';
import { useContent } from '../../context/ContentContext';
import { LogOut, RotateCcw, Settings } from 'lucide-react';
import { useState } from 'react';

const AdminFloatingControls = () => {
    const { user, logout } = useAuth();
    const { resetContent } = useContent();
    const [isExpanded, setIsExpanded] = useState(false);

    if (!user?.isAdmin) return null;

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">
            {isExpanded && (
                <>
                    <button
                        onClick={resetContent}
                        className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-full shadow-lg flex items-center gap-2 transition-all animate-in slide-in-from-bottom-2"
                        title="Reset Content"
                    >
                        <RotateCcw size={20} />
                    </button>
                    <button
                        onClick={logout}
                        className="bg-surface hover:bg-white/10 text-white border border-white/10 p-3 rounded-full shadow-lg flex items-center gap-2 transition-all animate-in slide-in-from-bottom-1"
                        title="Logout"
                    >
                        <LogOut size={20} />
                    </button>
                </>
            )}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`bg-primary text-background p-4 rounded-full shadow-xl hover:bg-primary/90 transition-all ${isExpanded ? 'rotate-45' : ''}`}
            >
                <Settings size={24} />
            </button>
        </div>
    );
};

export default AdminFloatingControls;
