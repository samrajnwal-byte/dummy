import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { faqs } from '../data';
import { Button } from '../components/ui/Button';

export function Contact() {
  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>Contact Us | AlphaFuel</title>
        <meta name="description" content="Get in touch with the AlphaFuel team. We are here to answer your questions about our supplements, orders, and fitness guides." />
      </Helmet>
      {/* Header */}
      <section className="py-20 bg-zinc-900/50 border-b border-zinc-800">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get In Touch</h1>
          <p className="text-lg text-zinc-400">
            Have a question about our products, your order, or need fitness advice? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Address</h3>
                    <p className="text-zinc-400 leading-relaxed">
                      AlphaFuel Nutrition <br/>
                      <br/>
                      Haryana, India 
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <a href="tel:+919876543210" className="text-zinc-400 hover:text-brand transition-colors focus:ring-2 focus:ring-brand focus:outline-none rounded-sm aria-label='Call us'">
                      
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <a href="mailto:support@alphafuel.in" className="text-zinc-400 hover:text-brand transition-colors focus:ring-2 focus:ring-brand focus:outline-none rounded-sm aria-label='Email us'">
                      support@alphafuel.in
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-brand" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Business Hours</h3>
                    <p className="text-zinc-400">
                      Monday – Saturday<br/>
                      9:00 AM – 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Form */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-white mb-8">Send us a message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullName" className="text-sm font-medium text-zinc-300">Full Name</label>
                    <input 
                      id="fullName"
                      type="text" 
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="emailAddress" className="text-sm font-medium text-zinc-300">Email Address</label>
                    <input 
                      id="emailAddress"
                      type="email" 
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phoneNumber" className="text-sm font-medium text-zinc-300">Phone Number</label>
                  <input 
                    id="phoneNumber"
                    type="tel" 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                    placeholder="+91"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-zinc-300">Subject</label>
                  <input 
                    id="subject"
                    type="text" 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-300">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all resize-none"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>

                <Button size="lg" className="w-full mt-4">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 border-t border-zinc-800 bg-zinc-950">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-6">
            {faqs.map(faq => (
              <div key={faq.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-white mb-2">{faq.question}</h3>
                <p className="text-zinc-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
