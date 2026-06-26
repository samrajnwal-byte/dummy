import { Target, Eye, Crosshair } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { team } from '../data';

export function About() {
  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>About Us | AlphaFuel</title>
        <meta name="description" content="Learn about AlphaFuel's mission to provide high-quality, science-backed supplements that help athletes unlock their true potential." />
      </Helmet>
      {/* Header */}
      <section className="bg-zinc-900/50 py-24 border-b border-zinc-800">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Alpha<span className="text-brand">Fuel</span></h1>
          <p className="text-lg text-zinc-400">
            Founded in 2026, AlphaFuel was created with one mission: to provide high-quality, science-backed supplements that help individuals unlock their true potential.
          </p>
        </div>
      </section>

      {/* Story & Philosophy */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="prose prose-invert prose-zinc max-w-none">
            <h2 className="text-3xl font-display font-bold text-white mb-6">Our Story</h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              We believe fitness is more than lifting weights—it's about building discipline, confidence, and a healthier lifestyle. The supplement industry is full of noise, proprietary blends, and false promises. We started AlphaFuel to change that, focusing entirely on transparency and proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <Target className="w-8 h-8 text-brand mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
              <p className="text-zinc-400 leading-relaxed">
                To empower fitness enthusiasts through safe, effective, and affordable sports nutrition. We want to be the fuel that drives your performance.
              </p>
            </div>
            
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
              <Eye className="w-8 h-8 text-brand mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-zinc-400 leading-relaxed">
                To become India's most trusted sports nutrition brand by never compromising on quality and always putting the athlete first.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-zinc-900/30">
        <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-zinc-400">The principles that guide everything we make and do.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Quality First",
              "Customer Satisfaction",
              "Transparency",
              "Innovation",
              "Integrity"
            ].map((value, i) => (
              <div key={i} className="flex flex-col items-center justify-center p-8 bg-zinc-950 border border-zinc-800 rounded-2xl text-center">
                <Crosshair className="w-6 h-6 text-brand mb-4 opacity-80" />
                <span className="font-semibold text-lg text-white">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 border-t border-zinc-800 pt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-zinc-400">The passionate people behind AlphaFuel.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="group relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
                <div className="aspect-square bg-zinc-800 flex items-center justify-center">
                  <div className="text-4xl text-zinc-700 font-bold group-hover:scale-110 transition-transform">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-white text-lg mb-1">{member.name}</h3>
                  <p className="text-brand text-sm font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
