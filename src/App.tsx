import React, { useState, useEffect } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Utensils, Wine, ArrowRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans selection:bg-brand-orange-500 selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 border-b-4 border-black ${isScrolled ? 'bg-white py-4 shadow-[0_4px_0_0_rgba(0,0,0,1)]' : 'bg-white py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-serif text-4xl uppercase tracking-tighter text-black font-bold">
            JAM CLUB
          </div>
          
          <div className="hidden md:flex gap-8 items-center text-xs font-bold uppercase tracking-widest">
            <button onClick={() => scrollTo('about')} className="hover:text-brand-orange-500 transition-colors">About</button>
            <button onClick={() => scrollTo('menu')} className="hover:text-brand-orange-500 transition-colors">Menu Highlights</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-brand-orange-500 transition-colors">Location</button>
            <a href="https://wa.me/351927337827" className="bg-[#FF6321] text-white px-6 py-2 font-bold uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
              Book Now
            </a>
          </div>

          <button className="md:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-32 px-6 md:hidden border-b-4 border-black"
          >
            <div className="flex flex-col gap-6 font-serif text-4xl uppercase tracking-wider font-bold">
              <button onClick={() => scrollTo('about')} className="text-left py-4 border-b-4 border-black">About</button>
              <button onClick={() => scrollTo('menu')} className="text-left py-4 border-b-4 border-black">Menu Highlights</button>
              <button onClick={() => scrollTo('contact')} className="text-left py-4 border-b-4 border-black">Location</button>
              <a href="https://wa.me/351927337827" className="mt-8 bg-[#FF6321] text-white text-center px-6 py-4 font-sans font-bold text-xl uppercase tracking-widest border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 bg-[#FF6321] text-white border-b-4 border-black overflow-hidden z-10">
        <div className="absolute inset-0 z-0 opacity-30">
          <img src="pub.jpg" alt="JAM Club Atmosphere" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider mb-8 rounded border-2 border-black"
          >
            <MapPin size={14} /> Lisbon, Portugal
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-9xl font-serif uppercase tracking-wider font-black leading-[0.9] mb-6 max-w-4xl"
          >
            Late Night Tapas & Drinks
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10 text-white/90"
          >
            Discover JAM Club. A local favorite in Lisbon serving premium cocktails, craft bites, and great times until 2 AM every day.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <a href="https://wa.me/351927337827" className="bg-black text-white px-8 py-4 text-sm font-bold uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2">
              Book Now via WhatsApp <ArrowRight size={16} />
            </a>
            <a href="tel:927337827" className="bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2">
              Call 927 337 827 <Phone size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#F8F8F8] px-6 border-b-4 border-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-serif font-black uppercase tracking-wider mb-6 text-black leading-[1.1]">The perfect spot for your evenings.</h2>
            <p className="text-[#1a1a1a] text-lg leading-relaxed mb-10 font-light">
              Located in the heart of Lisbon, JAM Club is your go-to destination when the sun goes down. Whether you're craving our famous authentic Tapas, a juicy crafted burger, or just want to unwind with a premium Signature Cocktail, we've got you covered.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="flex items-center justify-center w-14 h-14 bg-white border-2 border-black mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Utensils className="text-[#FF6321]" size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">Authentic Tapas</h3>
                <p className="text-gray-600 text-sm leading-relaxed">Delicious sharing boards featuring the finest cheeses, choriço, and local flavors.</p>
              </div>
              <div>
                <div className="flex items-center justify-center w-14 h-14 bg-white border-2 border-black mb-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <Wine className="text-[#FF6321]" size={28} />
                </div>
                <h3 className="font-bold text-lg mb-2 uppercase tracking-wide">Signature Drinks</h3>
                <p className="text-gray-600 text-sm leading-relaxed">From classic mojitos to bespoke 'JAM Cocktails', crafted by our expert team.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white aspect-[3/4] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden rounded-none">
               <img src="seafood.jpg" alt="Seafood and Tapas" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white aspect-[3/4] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden mt-12 rounded-none">
               <img src="bar.jpg" alt="JAM Club Bar" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section id="menu" className="py-24 px-6 bg-white border-b-4 border-black">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-black uppercase tracking-wider mb-4 text-black">Menu Highlights</h2>
              <p className="text-gray-600 max-w-xl text-lg font-light">A glimpse into our extensive selection of food and drinks. Visit us for the full experience.</p>
            </div>
            <a href="#contact" className="text-[#FF6321] font-bold uppercase tracking-widest flex items-center gap-2 hover:translate-x-1 transition-all shrink-0">
              Visit to see full menu <ArrowRight size={20} />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="font-serif text-2xl font-bold uppercase tracking-wider text-black mb-8 border-b-4 border-black pb-4">Tapas & Nibbles</div>
              <div className="flex flex-col gap-8">
                <MenuCard title="Tapa Jam" price="€27.50" desc="3 types of cheese, 2 types of chorizo, 1 type of ham, pumpkin jam, and olives" />
                <MenuCard title="Clams 'À JAM'" price="€29.00" desc="Our house special clams preparation" />
                <MenuCard title="Tapa Mexico" price="€16.50" desc="Chilli, Guacamole and Nachos" />
                <MenuCard title="Tapa Salmon" price="€12.50" desc="Smoked salmon with cornbread and fresh cheese" />
                <MenuCard title="Roasted Chorizo" price="€9.50" desc="Roasted with fire in a clay canoe" />
              </div>
            </div>

            <div>
              <div className="font-serif text-2xl font-bold uppercase tracking-wider text-black mb-8 border-b-4 border-black pb-4">Mains & Burgers</div>
              <div className="flex flex-col gap-8">
                <MenuCard title="Francesinha" price="€16.50" desc="Sandwich with traditional Portuguese tomato-based sauce" />
                <MenuCard title="Bitoque 'À JAM'" price="€15.50" desc="Beef steak, fried egg and french fries" />
                <MenuCard title="Jam Burger" price="€12.50" desc="2 burgers of 120g, with cheese, bacon, tomato and lettuce. French fries" />
                <MenuCard title="Bacalhau À Brás" price="€13.00" desc="Shredded cod, fried potatoes, thinly sliced fried onion, scrambled egg" />
                <MenuCard title="Jam Hot Dog" price="€9.50" desc="Fresh sausage, cheese and chorizo. Accompanied by french fries" />
              </div>
            </div>

            <div>
              <div className="font-serif text-2xl font-bold uppercase tracking-wider text-black mb-8 border-b-4 border-black pb-4">Signature Cocktails</div>
              <div className="flex flex-col gap-8">
                <MenuCard title="Mezcalita" price="€14.00" desc="Del Maguey Vida, Triple sec, lime juice and salt" />
                <MenuCard title="Jam Cocktail" price="€14.00" desc="Grey Goose, condensed milk, strawberries, lime juice" />
                <MenuCard title="Lisboa by Carina" price="€14.00" desc="Batch Melon, lime juice, egg white, angostura, dried ham" />
                <MenuCard title="Penicillin" price="€14.00" desc="Glenlivet, lemon juice, ginger, honey" />
                <MenuCard title="Alice by Mario" price="€13.50" desc="Strawberry Gin Beefeater, White Port wine, lime juice, mint" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-[#F8F8F8] px-6 border-b-4 border-black">
        <div className="max-w-7xl mx-auto flex gap-6 overflow-x-auto pb-6 snap-x">
          <div className="shrink-0 w-80 h-96 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] snap-center overflow-hidden">
            <img src="bar.jpg" alt="Bar Interior" className="w-full h-full object-cover" />
          </div>
          <div className="shrink-0 w-80 h-96 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] snap-center overflow-hidden">
            <img src="seafood.jpg" alt="Seafood Platter" className="w-full h-full object-cover" />
          </div>
          <div className="shrink-0 w-80 h-96 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] snap-center overflow-hidden">
            <img src="shots.jpg" alt="Signature Shots" className="w-full h-full object-cover" />
          </div>
          <div className="shrink-0 w-80 h-96 bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] snap-center overflow-hidden">
            <img src="pub.jpg" alt="Pub Atmosphere" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contact" className="py-24 bg-black text-white px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-serif font-black uppercase tracking-wider mb-6 text-[#FF6321] leading-[1.1]">Come pull up a chair.</h2>
            <p className="text-white/80 text-lg mb-12 max-w-md font-light">
              We look forward to hosting you. Reserve your table via WhatsApp or give us a call.
            </p>

            <div className="flex flex-col gap-6">
              <ContactRow icon={<MapPin className="text-[#FF6321]" />} text="Tv. dos Pescadores 27, 1200-328 Lisboa" />
              <ContactRow icon={<Clock className="text-[#FF6321]" />} text="Open Every Day • 5:00 PM – 2:00 AM" />
              <ContactRow icon={<Phone className="text-[#FF6321]" />} text={<a href="tel:927337827" className="hover:text-[#FF6321] transition-colors">927 337 827</a>} />
              <ContactRow icon={<MessageCircle className="text-[#FF6321]" />} text={<a href="https://wa.me/351927337827" className="hover:text-[#FF6321] transition-colors">+351 927 337 827</a>} />
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a href="https://www.google.pt/maps/place/Jam+Club/@38.7126972,-9.1487973,17z" target="_blank" rel="noopener noreferrer" className="bg-white text-black px-8 py-4 font-bold uppercase tracking-widest border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,99,33,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center">
                Get Directions
              </a>
            </div>
          </div>
          
          <div className="flex-1 min-h-[400px] bg-neutral-800 border-4 border-white shadow-[8px_8px_0px_0px_rgba(255,99,33,1)] overflow-hidden relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d3113.435555469779!2d-9.151372223428988!3d38.71269717176378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19348002b7e7cd%3A0x77a77cebd3cc4e65!2sJam%20Club!5e0!3m2!1sen!2spt!4v1716315000000!5m2!1sen!2spt" 
              className="absolute inset-0 w-full h-full border-0" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="JAM Club Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t-4 border-black py-8 px-6 text-xs font-bold uppercase tracking-widest text-[#1a1a1a]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-serif font-black uppercase tracking-wider text-black">
            JAM CLUB
          </div>
          <p>© {new Date().getFullYear()} JAM CLUB LISBOA. TV. DOS PESCADORES 27.</p>
          <div className="flex gap-6">
            <button onClick={() => scrollTo('about')} className="hover:text-[#FF6321] transition-colors">About</button>
            <button onClick={() => scrollTo('menu')} className="hover:text-[#FF6321] transition-colors">Menu</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-[#FF6321] transition-colors">Contact</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MenuCard({ title, price, desc }: { title: string, price: string, desc: string }) {
  return (
    <div className="group space-y-1">
      <div className="flex justify-between items-end border-b-2 border-transparent group-hover:border-black/5 pb-1 transition-all">
        <h4 className="font-bold text-lg text-black uppercase tracking-tight">{title}</h4>
        <span className="font-black text-[#FF6321]">{price}</span>
      </div>
      <p className="text-xs text-gray-600 font-medium leading-tight">{desc}</p>
    </div>
  );
}

function ContactRow({ icon, text }: { icon: React.ReactNode, text: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 text-lg">
      <div className="flex-shrink-0 w-12 h-12 bg-white border-2 border-white text-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(255,99,33,1)]">
        {icon}
      </div>
      <div className="font-bold">{text}</div>
    </div>
  );
}
