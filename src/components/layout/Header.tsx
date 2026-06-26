import { Dumbbell, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { cn } from '../../utils';
import { Button } from '../ui/Button';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-brand text-zinc-950 p-1.5 rounded-md group-hover:bg-brand-hover transition-colors">
            <Dumbbell className="w-5 h-5" />
          </div>
          <span className="font-display font-bold space-x-0 tracking-tight text-xl">
            Alpha<span className="text-brand">Fuel</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "text-sm font-medium transition-colors hover:text-brand",
                  isActive ? "text-brand" : "text-zinc-400"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" size="sm">Log In</Button>
          <Button size="sm">Shop Now</Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand rounded-sm"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <nav className="md:hidden border-t border-zinc-800 bg-zinc-950" aria-label="Mobile navigation">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "block py-2 text-sm font-medium transition-colors hover:text-brand",
                    isActive ? "text-brand" : "text-zinc-400"
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-zinc-800">
               <Button variant="outline" className="w-full">Log In</Button>
               <Button className="w-full">Shop Now</Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
