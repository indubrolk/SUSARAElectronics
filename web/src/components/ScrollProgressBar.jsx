import { useState, useEffect } from 'react';

export default function ScrollProgressBar() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            if (windowHeight > 0) {
                const scroll = totalScroll / windowHeight;
                setScrollProgress(scroll);
            } else {
                setScrollProgress(0);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initialize on mount
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-transparent pointer-events-none">
            <div 
                className="h-full bg-blue-400 origin-left transition-transform duration-75 ease-out shadow-[0_0_10px_rgba(96,165,250,0.7)]" 
                style={{ transform: `scaleX(${scrollProgress})` }}
            />
        </div>
    );
}
