import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import TechnicianImage from '../assets/susara1.jpg';

export default function AboutPremium() {
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                rootMargin: '0px 0px -120px 0px',
                threshold: 0.05,
            }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    return (
        <section
            id="about"
            ref={containerRef}
            className="py-24 bg-white overflow-hidden font-sans"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Image with animation */}
                    <div
                        className={`transition-all duration-[1000ms] ease-out transform ${isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-10'
                            }`}
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                            <img
                                src={TechnicianImage}
                                alt="Professional Technician working at SUSARA Electronics"
                                className="w-full h-auto object-cover max-h-[600px] transition-transform duration-700 group-hover:scale-105"
                            />
                            {/* Accent overlay border for aesthetics */}
                            <div className="absolute inset-0 border-4 border-blue-500/10 rounded-3xl pointer-events-none" />
                        </div>
                    </div>

                    {/* Right Column: Text & Content with staggered animation */}
                    <div
                        className={`transition-all duration-[1000ms] ease-out delay-200 transform ${isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-10'
                            }`}
                    >
                        {/* Pill Badge */}
                        <div className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-lg mb-6">
                            About
                        </div>

                        {/* Title */}
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-8">
                            We've been working in the industry for 36 years
                        </h2>

                        {/* Paragraphs */}
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-8">
                            <p>
                                Susara Electronics is a local electronics and electrical installation business based in Bamunakotuwa, Wariyapola, Sri Lanka, and its Facebook page serves as the primary digital storefront for its physical shop and service center. The business heavily specializes in the sale and installation of CCTV networks and security systems—frequently dealing with hardware like Hikvision DVRs and networking cables—alongside general electronic goods and electrical setups. Visitors to the page will typically find showcases of new product arrivals, photos and videos highlighting completed installations at client locations, and details on current promotional packages. Ultimately, the page acts as a direct communication and portfolio channel, allowing customers in the North Western Province to easily request price quotes, book professional installations, or troubleshoot their home and business security setups.
                            </p>
                        </div>

                        {/* Button */}
                        <div>
                            <button
                                onClick={() => {
                                    const contactSection = document.getElementById('contact');
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="inline-flex items-center gap-2 border border-gray-300 hover:border-gray-900 hover:bg-gray-50 transition-all duration-300 px-6 py-3.5 rounded-xl text-gray-900 font-semibold cursor-pointer group"
                            >
                                <span>About us</span>
                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
