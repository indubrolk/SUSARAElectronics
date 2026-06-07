import { Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function TopBar() {
    return (
        <div className="bg-white border-b border-gray-100 hidden md:block w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-15 text-sm">
                    {/* Left side: Contact Info */}
                    <div className="flex space-x-6 text-gray-600 font-medium">
                        <div className="flex items-center space-x-2">
                            <Mail className="w-4 h-4 text-yellow-500" />
                            <span>susaraelectronics@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-yellow-500" />
                            <span>Kalagaha, Panadaragama, Wariyapola, Sri Lanka</span>
                        </div>
                    </div>

                    {/* Right side: Social Icons */}
                    <div className="flex space-x-4 text-gray-800">
                        <a href="https://web.facebook.com/susaraelectronics.lk" className="bg-black-400 hover:text-yellow-500 transition-colors">
                            <Facebook className="w-4 h-4" />
                        </a>
                        <a href="https://www.instagram.com/susara_electronics/" className="hover:text-yellow-500 transition-colors">
                            <Instagram className="w-4 h-4" />
                        </a>
                        <a href="https://x.com/susaraelectron1" className="hover:text-yellow-500 transition-colors">
                            <Twitter className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
