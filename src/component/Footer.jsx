import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-100 via-pink-200 to-pink-100 text-gray-800 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="text-center">
          <img
            src="/transparent_logo.png"
            alt="Misara Logo"
            className="h-20 mx-auto mb-4"
          />
          <p className="text-sm">
            Discover elegant ethnic wear that blends tradition with modern
            style. Shop sarees, kurtis, lehengas, and more.
          </p>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-pink-700">
                All Collections
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-700">
                Best Sellers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-700">
                New Arrivals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-700">
                Track Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-pink-700">
                Exchange Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@misara.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Mumbai, India
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-pink-700">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-pink-700">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-pink-700">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-pink-400 text-white text-center py-4 text-sm">
        © {new Date().getFullYear()} Misara. All Rights Reserved.
      </div>
    </footer>
  );
}
