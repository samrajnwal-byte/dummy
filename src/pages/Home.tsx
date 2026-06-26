import { ArrowRight, CheckCircle2, ShieldCheck, Truck, Users, Leaf } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/ui/ProductCard';
import { products, reviews, stats } from '../data';

export function Home() {
  const navigate = useNavigate();
  const featuredProducts = products.filter(p => 
    ["Alpha Whey Pro", "Alpha Creatine Monohydrate", "Alpha Mass Gainer"].includes(p.name)
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>AlphaFuel | Premium Sports Nutrition & Supplements</title>
        <meta name="description" content="Fuel your strength and power your performance with AlphaFuel. High-quality, third-party tested sports nutrition supplements for fitness enthusiasts." />
      </Helmet>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-zinc-950 pt-24 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-zinc-800/40 via-zinc-950 to-zinc-950"></div>
        <div className="container relative mx-auto px-4 lg:px-8 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-brand text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            Fuel Your Strength. Power Your Performance.
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 max-w-4xl text-white">
            Unleash Your <span className="text-brand">True Potential</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed">
            Premium sports nutrition designed to help athletes, fitness enthusiasts, and gym-goers achieve their fitness goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full sm:w-auto" onClick={() => navigate('/products')}>
              Shop Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" onClick={() => navigate('/products')}>
              Explore Products
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-zinc-900/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose AlphaFuel?</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">We don't compromise on quality, so you don't have to compromise on results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
              <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-6">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">High-Quality Ingredients</h3>
              <p className="text-sm text-zinc-400">Sourced globally for maximum efficacy and purity.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
              <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Third-Party Tested</h3>
              <p className="text-sm text-zinc-400">Strict lab testing ensures you get exactly what's on the label.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
              <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-6">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Fast Delivery Across India</h3>
              <p className="text-sm text-zinc-400">Quick, reliable shipping to fuel your workouts without delay.</p>
            </div>

            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
              <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Vegetarian-Friendly Options</h3>
              <p className="text-sm text-zinc-400">100% vegetarian products available across our range.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 border-y border-zinc-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(stat => (
              <div key={stat.id} className="text-center">
                <div className="text-4xl md:text-5xl font-display font-bold text-brand mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-zinc-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 mt-16 bg-zinc-950">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
              <p className="text-zinc-400">Our best-selling supplements crafted for peak performance.</p>
            </div>
            <Button variant="outline" onClick={() => navigate('/products')}>View All Products</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-24 bg-zinc-900/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by Athletes</h2>
             <p className="text-zinc-400">Don't just take our word for it.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map(review => (
              <div key={review.id} className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl flex flex-col">
                <div className="flex text-brand mb-6">
                   {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} className={`w-5 h-5 ${i < review.rating ? 'fill-current' : 'text-zinc-700'}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                </div>
                <p className="text-lg text-zinc-300 italic mb-8 flex-grow">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-brand">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-medium text-white">{review.author}</div>
                    <div className="text-xs text-zinc-400">Verified Buyer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="py-24 border-t border-zinc-800 bg-zinc-950">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to crush your goals?</h2>
          <p className="text-zinc-400 mb-8 text-lg">Join thousands of athletes who trust AlphaFuel for their daily nutrition.</p>
          <Button size="lg" className="w-full sm:w-auto px-12" onClick={() => navigate('/products')}>
            Shop Now
          </Button>
        </div>
      </section>
    </div>
  );
}
