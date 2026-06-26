import { Calendar, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data';
import { Button } from '../components/ui/Button';

export function Blog() {
  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>Blog | AlphaFuel Fitness & Nutrition Tips</title>
        <meta name="description" content="Read the latest articles on fitness, training tips, and sports nutrition from the AlphaFuel experts." />
      </Helmet>
      <section className="py-20 bg-zinc-900/50 border-b border-zinc-800">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white bg-clip-text">Alpha<span className="text-brand">Blog</span></h1>
          <p className="text-lg text-zinc-400">
            Training tips, nutrition guides, and everything you need to fuel your fitness journey.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <article 
                key={post.id} 
                className="group relative flex flex-col md:flex-row gap-8 items-start bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8 hover:border-zinc-700 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-sm text-brand font-medium mb-4">
                    <Calendar className="w-4 h-4" />
                    {post.publishedDate}
                  </div>
                  
                  <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-brand transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-zinc-400 text-lg mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <Button variant="ghost" className="px-0 hover:bg-transparent hover:text-brand bg-transparent text-white group" size="sm">
                    Read Article <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
