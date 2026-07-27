import { Dumbbell, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 border-r-0 md:border-r border-zinc-800/50 pr-8">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-brand text-zinc-950 p-1.5 rounded-md">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span className="font-display font-bold tracking-tight text-xl">
                Alpha<span className="text-brand">Fuel</span>
              </span>
            </Link>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Premium sports nutrition designed to help athletes, fitness enthusiasts, and gym-goers achieve their fitness goals.
            </p>
            <div className="flex items-center gap-4 text-zinc-400">
              <a href="#" aria-label="Instagram" className="hover:text-brand transition-colors focus:ring-2 focus:ring-brand focus:outline-none rounded-sm"><Instagram className="w-5 h-5" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-brand transition-colors focus:ring-2 focus:ring-brand focus:outline-none rounded-sm"><Twitter className="w-5 h-5" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-brand transition-colors focus:ring-2 focus:ring-brand focus:outline-none rounded-sm"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h2 className="font-semibold text-white mb-6">Quick Links</h2>
            <ul className="space-y-4">
              <li><Link to="/products" className="text-zinc-400 hover:text-brand text-sm transition-colors">All Products</Link></li>
              <li><Link to="/about" className="text-zinc-400 hover:text-brand text-sm transition-colors">Our Story</Link></li>
              <li><Link to="/blog" className="text-zinc-400 hover:text-brand text-sm transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-zinc-400 hover:text-brand text-sm transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="font-semibold text-white mb-6">Support</h2>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-zinc-400 hover:text-brand text-sm transition-colors">FAQ</Link></li>
              <li><a href="#" className="text-zinc-400 hover:text-brand text-sm transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-brand text-sm transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-brand text-sm transition-colors">Track Order</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="font-semibold text-white mb-6">Contact Us</h2>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li>AlphaFuel Nutrition</li>
              <li>Haryana, India</li>
              <li><a href="mailto:support@alphafuel.in" className="hover:text-brand transition-colors">support@alphafuel.in</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-zinc-800 pt-8 flex items-center justify-center gap-4">
          <p className="text-zinc-400 text-sm">
            © 2026 AlphaFuel Nutrition. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
