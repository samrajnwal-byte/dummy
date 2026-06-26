import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../../types';
import { Button } from './Button';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="group flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 transition-all hover:border-zinc-700 hover:bg-zinc-900 h-full">
      <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-800 flex items-center justify-center block">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="text-zinc-600 font-display text-xl uppercase tracking-widest opacity-50 font-bold group-hover:scale-110 transition-transform duration-500">
            Alpha<span className="text-brand">Fuel</span>
          </div>
        )}
      </div>
      
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="font-semibold text-lg leading-tight line-clamp-2">
          {product.name}
        </h3>
        <p className="font-bold text-brand shrink-0">₹{product.price}</p>
      </div>
      
      <p className="text-sm text-zinc-400 mb-4">{product.category}</p>
      
      <div className="flex items-center gap-1.5 mb-6 text-sm font-medium text-zinc-300">
        <Star className="w-4 h-4 fill-brand text-brand" />
        <span>{product.rating}</span>
      </div>

      <div className="mt-auto pt-4">
        <Button variant="outline" className="w-full group-hover:bg-zinc-800">
          Add to Cart <ShoppingCart className="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
