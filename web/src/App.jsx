import { useState, useEffect } from 'react';
import { Menu, X, Zap, Wrench, Phone, Mail, MapPin, Clock, CheckCircle, ChevronRight } from 'lucide-react';
import Map from './components/map';
import Preloader from './components/Preloader';
import Carousel from './components/carousel';
import Cover from "./assets/cover.jpg";
import AboutPremium from './components/AboutPremium';
import ScrollProgressBar from './components/ScrollProgressBar';
import TopBar from './components/TopBar';


export default function TechnicianWebsite() {
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const done = () => setLoading(false);
    //
    //     if (document.readyState === 'complete') {
    //         done();
    //         return;
    //     }
    //     window.addEventListener('load', done);
    //     return () => window.removeEventListener('load', done);
    // }, []);
    useEffect(() => {
        // Change 2000 to the number of milliseconds you want
        const id = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(id);
    }, []);


    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const services = [
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Electrical Services",
            description: "Complete electrical installations, repairs, and maintenance for residential and commercial properties.",
            features: ["Wiring & Rewiring", "Circuit Installation", "Emergency Repairs", "Safety Inspections"]
        },
        {
            icon: <Wrench className="w-8 h-8" />,
            title: "Mechanical Services",
            description: "Expert mechanical solutions including HVAC, plumbing, and industrial equipment maintenance.",
            features: ["HVAC Systems", "Equipment Maintenance", "Preventive Service", "Industrial Repairs"]
        }
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (

        <>
            <ScrollProgressBar />
            <Preloader show={loading} />

            <main className={loading ? 'pointer-events-none select-none min-h-dvh blur-sm' : ''}>
                <div className="min-h-screen bg-gray-50">
                    {/* Header */}
                    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
                        <TopBar />
                        {/* Navigation */}
                        <nav className="w-full">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex justify-between items-center h-16">
                                <div className="flex items-center space-x-2">
                                    <Zap className="w-8 h-8 text-yellow-500"/>
                                    <span className="text-xl font-bold text-gray-900">SUSARA Electronics</span>
                                </div>

                                {/* Desktop Menu */}
                                <div className="hidden md:flex space-x-8">
                                    <button onClick={() => scrollToSection('home')}
                                            className="text-lg font-semibold relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:h-[4px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">Home
                                    </button>
                                    <button onClick={() => scrollToSection('services')}
                                            className="text-lg relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">Services
                                    </button>
                                    <button onClick={() => scrollToSection('about')}
                                            className="text-lg relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">About
                                    </button>
                                    <button onClick={() => scrollToSection('contact')}
                                            className="text-lg relative pb-1 after:absolute after:left-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-yellow-500 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full">Contact
                                    </button>
                                </div>

                                {/* Mobile Menu Button */}
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="md:hidden text-gray-700"
                                >
                                    {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        {isMenuOpen && (
                            <div className="md:hidden bg-white border-t">
                                <div className="px-4 py-4 space-y-3">
                                    <button onClick={() => scrollToSection('home')}
                                            className="block w-full text-left text-gray-700 hover:text-blue-600">Home
                                    </button>
                                    <button onClick={() => scrollToSection('services')}
                                            className="block w-full text-left text-gray-700 hover:text-blue-600">Services
                                    </button>
                                    <button onClick={() => scrollToSection('about')}
                                            className="block w-full text-left text-gray-700 hover:text-blue-600">About
                                    </button>
                                    <button onClick={() => scrollToSection('contact')}
                                            className="block w-full text-left text-gray-700 hover:text-blue-600">Contact
                                    </button>
                                </div>
                            </div>
                        )}
                    </nav>
                    </header>

                    {/* Hero Section */}
                    <section id="home" className="pt-16 md:pt-[104px] text-white">
                        <div
                            className="relative h-screen flex items-center justify-center bg-cover bg-center"
                            style={{ backgroundImage: `url(${Cover})` }}
                        >
                            <div className="absolute inset-0 bg-black/80" aria-hidden="true" />
                            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                                <h1
                                    className="text-blue-400 text-4xl sm:text-5xl font-bold mb-6"
                                    style={{
                                        animation: !loading ? 'floatUp 0.8s ease-out forwards' : 'none',
                                        opacity: 0,
                                    }}
                                >
                                    Professional Electrical & Mechanical Services
                                </h1>
                                <p
                                    className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto"
                                    style={{
                                        animation: !loading ? 'floatUp 0.8s ease-out 0.3s forwards' : 'none',
                                        opacity: 0,
                                    }}
                                >
                                    Your trusted partner for reliable electrical and mechanical solutions. Available 24/7 for emergencies.
                                </p>
                                <div
                                    className="flex flex-col sm:flex-row gap-4 justify-center"
                                    style={{
                                        animation: !loading ? 'floatUp 0.8s ease-out 0.6s forwards' : 'none',
                                        opacity: 0,
                                    }}
                                >
                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        className="bg-yellow-600 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
                                    >
                                        Get a Quote
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('services')}
                                        className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
                                    >
                                        Our Services
                                    </button>
                                </div>
                            </div>

                            <style>{`
            @keyframes floatUp {
                from {
                    opacity: 0;
                    transform: translateY(40px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `}</style>
                        </div>
                    </section>
                    
                    <AboutPremium />

                    {/* Services Section */}
                    <section id="services" className="py-20">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">
                                    We provide comprehensive electrical and mechanical solutions for residential,
                                    commercial, and industrial clients.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {services.map((service, index) => (
                                    <div key={index}
                                         className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">
                                        <div className="text-blue-600 mb-4">{service.icon}</div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                        <p className="text-gray-600 mb-6">{service.description}</p>
                                        <ul className="space-y-2">
                                            {service.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-center text-gray-700">
                                                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"/>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/*<section id="carousel" className="py-20">*/}
                    {/*    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
                    {/*        <Carousel/>*/}

                    {/*    </div>*/}
                    {/*</section>*/}

                    {/* About Section */}
                    <section id="why-choose-us" className="py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Why Choose
                                        Us?</h2>
                                    <p className="text-gray-600 mb-6">
                                        With over 15 years of experience, we've built a reputation for excellence in
                                        electrical and mechanical services. Our certified technicians are committed to
                                        delivering quality workmanship and exceptional customer service.
                                    </p>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"/>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Certified Technicians</h4>
                                                <p className="text-gray-600">Fully licensed and insured
                                                    professionals</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"/>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">24/7 Emergency Service</h4>
                                                <p className="text-gray-600">Available whenever you need us</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start">
                                            <CheckCircle className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0"/>
                                            <div>
                                                <h4 className="font-semibold text-gray-900">Competitive Pricing</h4>
                                                <p className="text-gray-600">Quality service at fair rates</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl p-8">
                                    <div className="bg-white rounded-lg p-6 shadow-lg">
                                        <Clock className="w-12 h-12 text-blue-600 mb-4"/>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Service Hours</h3>
                                        <div className="space-y-2 text-gray-700">
                                            <p><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
                                            <p><strong>Saturday:</strong> 9:00 AM - 4:00 PM</p>
                                            <p><strong>Sunday:</strong> Emergency Only</p>
                                            <p className="text-blue-600 font-semibold mt-4">24/7 Emergency Response
                                                Available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact Section */}
                    <section id="contact" className="py-20 bg-gray-100">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
                                <p className="text-gray-600">Get in touch for a free consultation or emergency
                                    service</p>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                                    <Phone className="w-12 h-12 text-yellow-500 mx-auto mb-4"/>
                                    <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
                                    <p className="text-gray-600">+94 77 081 8427</p>
                                    <p className="text-sm text-gray-500 mt-1">Available 24/7</p>
                                </div>
                                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                                    <Mail className="w-12 h-12 text-yellow-500 mx-auto mb-4"/>
                                    <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                                    <p className="text-gray-600">susaraelectronics@gmail.com</p>
                                    <p className="text-sm text-gray-500 mt-1">We respond within 24hrs</p>
                                </div>
                                <div className="bg-white rounded-lg p-6 shadow-md text-center">
                                    <MapPin className="w-12 h-12 text-yellow-500 mx-auto mb-4"/>
                                    <h3 className="font-bold text-gray-900 mb-2">Location</h3>
                                    <p className="text-gray-600">Susara Electronics, Kalugamuwa Road, Kalagaha Panadaragama</p>
                                    <p className="text-gray-600"></p>
                                </div>
                            </div>
                        </div>
                    </section>


                    <div className="text-center mb-10">
                        <div id='map' className='text-3xl sm:text-4xl font-bold text-gray-900 mb-4'>
                            <h1 className="mb-10 mt-5">Locate Us</h1>
                            <Map/>
                        </div>
                    </div>


                    {/* Footer */}
                    <footer className="bg-gray-900 text-white py-8">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <div className="flex items-center justify-center space-x-2 mb-4">
                                <Zap className="w-6 h-6 text-blue-400"/>
                                <span className="text-xl font-bold">SUSARA Electronics</span>
                            </div>
                            <p className="text-gray-400 mb-2">Professional Electrical & Mechanical Services</p>
                            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} SUSARA Electronics. All rights reserved.</p>
                        </div>
                    </footer>
                </div>

            </main>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/94770818427"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:bg-[#128C7E] hover:scale-110 hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)] transition-all duration-300 flex items-center justify-center group"
                aria-label="Contact us on WhatsApp"
            >
                <svg
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                
                {/* Tooltip */}
                <span className="absolute right-full mr-4 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    Chat with us
                    <div className="absolute right-[-4px] top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                </span>
            </a>
        </>
    );
}