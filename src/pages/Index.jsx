import { useState, useEffect } from 'react';
import { Tree, Leaf, Briefcase, Camera, Code, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (clickCount === 5) {
      setShowEasterEgg(true);
    }
  }, [clickCount]);

  const handleLogoClick = () => {
    setClickCount(prevCount => prevCount + 1);
  };

  return (
    <div className="min-h-screen bg-[#1B4332] text-[#D8F3DC]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1B4332] bg-opacity-90 backdrop-blur-sm py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2 cursor-pointer" onClick={handleLogoClick}>
          <Tree className="h-8 w-8 text-[#52B788]" />
          <span className="text-2xl font-bold">ForestDev</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-[#52B788] transition-colors">About</a></li>
            <li><a href="#portfolio" className="hover:text-[#52B788] transition-colors">Portfolio</a></li>
            <li><a href="#contact" className="hover:text-[#52B788] transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="text-center z-10">
          <h1 className="text-6xl font-bold mb-4">Whats up</h1>
          <p className="text-2xl mb-8">I'm a forest-inspired developer</p>
          <Button className="bg-[#52B788] hover:bg-[#40916C] text-[#1B4332]">
            Explore My Work
          </Button>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <Tree className="w-full h-full text-[#52B788]" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#2D6A4F]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img src="/placeholder.svg" alt="Profile" className="rounded-full w-64 h-64 mx-auto object-cover border-4 border-[#52B788]" />
            </div>
            <div className="md:w-1/2">
              <p className="text-lg mb-4">
                I'm a passionate developer with a love for nature and coding. Just like a forest ecosystem, I believe in creating harmonious and sustainable digital solutions that grow and adapt over time.
              </p>
              <p className="text-lg">
                My expertise spans across various technologies, and I'm always eager to learn and branch out into new areas of development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-[#1B4332]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioItem
              title="EcoTracker"
              description="A mobile app for tracking personal carbon footprint"
              icon={<Leaf className="h-12 w-12 text-[#52B788]" />}
            />
            <PortfolioItem
              title="ForestView"
              description="Virtual reality forest exploration experience"
              icon={<Camera className="h-12 w-12 text-[#52B788]" />}
            />
            <PortfolioItem
              title="GreenCommerce"
              description="E-commerce platform for eco-friendly products"
              icon={<Briefcase className="h-12 w-12 text-[#52B788]" />}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#2D6A4F]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>
          <p className="text-xl mb-8">
            Interested in working together? Let's connect and create something amazing!
          </p>
          <Button className="bg-[#52B788] hover:bg-[#40916C] text-[#1B4332]">
            Contact Me
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1B4332] py-6 text-center">
        <p>&copy; 2024 ForestDev. All rights reserved.</p>
      </footer>

      {/* Easter Egg */}
      {showEasterEgg && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#2D6A4F] p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">You found the secret grove!</h3>
            <p className="mb-4">Here's a special message just for you:</p>
            <p className="text-[#52B788] font-bold italic">"In code, as in nature, growth comes from nurturing and patience."</p>
            <Button className="mt-6 bg-[#52B788] hover:bg-[#40916C] text-[#1B4332]" onClick={() => setShowEasterEgg(false)}>
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

const PortfolioItem = ({ title, description, icon }) => (
  <Card className="bg-[#2D6A4F] border-[#52B788]">
    <CardContent className="p-6 text-center">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </CardContent>
  </Card>
);

export default Index;
