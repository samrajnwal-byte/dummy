import { CheckCircle2, ShieldCheck } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { ProductCard } from '../components/ui/ProductCard';
import { products } from '../data';

export function Products() {
  const highlightProduct = products.find(p => p.name === "Alpha Whey Pro");

  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>All Products | AlphaFuel</title>
        <meta name="description" content="Browse our complete line of premium whey protein, creatine, mass gainers, and fitness supplements designed for your fitness journey." />
      </Helmet>
      
      {/* Header */}
      <section className="py-20 bg-zinc-900/50 border-b border-zinc-800">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">All Products</h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Science-backed, perfectly dosed supplements for every stage of your fitness journey.
          </p>
        </div>
      </section>

      {/* Featured Highlight */}
      {highlightProduct && (
        <section className="py-20 border-b border-zinc-800 bg-zinc-950">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              
              <div className="w-full lg:w-1/2 aspect-square rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-brand/5 group-hover:bg-brand/10 transition-colors z-10"></div>
                {highlightProduct.image ? (
                  <img 
                    src={highlightProduct.image} 
                    alt={highlightProduct.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="text-center">
                    <span className="text-6xl font-display font-black text-brand tracking-tighter opacity-80 drop-shadow-lg">
                      ALPHA<br/>WHEY
                    </span>
                  </div>
                )}
              </div>
              
              <div className="w-full lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-medium mb-6">
                  Featured Product
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">{highlightProduct.name}</h2>
                <div className="text-2xl font-bold text-brand mb-6">₹{highlightProduct.price}</div>
                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                  {highlightProduct.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {highlightProduct.benefits?.map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-zinc-300">
                      <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-white mb-3 uppercase tracking-wider">Available Flavors</h3>
                  <div className="flex gap-3">
                    {highlightProduct.flavors?.map((flavor, i) => (
                      <div key={i} className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-300">
                        {flavor}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-sm text-zinc-400 bg-zinc-900/50 p-4 rounded-xl border border-zinc-800/50">
                  <ShieldCheck className="w-5 h-5 text-brand" />
                  Every batch is tested for banned substances & label accuracy.
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Catalog */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
