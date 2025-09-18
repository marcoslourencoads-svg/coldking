import { motion } from "framer-motion";
import { Button } from "@/components/ui/button-variants";
import { MessageCircle, Phone } from "lucide-react";
import heroImage from "@/assets/hero-technician.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-accent/20" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="text-primary">❄️</span> Instalação e Manutenção de{" "}
              <span className="gradient-text">Ar-Condicionado Residencial</span>
            </motion.h1>

            <motion.p 
              className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Há <span className="text-primary font-semibold">15 anos</span> trazendo conforto e economia para famílias como a sua. 
              Já são <span className="text-primary font-semibold">520 atendimentos realizados</span>, sempre com qualidade, confiança e agilidade.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                variant="hero" 
                size="xl" 
                className="group"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span>👉</span>
                Solicitar Orçamento Agora
              </Button>
              
              <Button 
                variant="danger" 
                size="xl" 
                className="group"
                onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de solicitar um orçamento para manutenção de ar-condicionado.', '_blank')}
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              className="flex items-center gap-6 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15</div>
                <div className="text-sm text-muted-foreground">Anos no mercado</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">520+</div>
                <div className="text-sm text-muted-foreground">Atendimentos</div>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Satisfação</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-hero">
              <img 
                src={heroImage} 
                alt="Técnico profissional realizando manutenção de ar-condicionado em residência"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
            </div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-primary/20 backdrop-blur-md rounded-full p-4"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-2xl">🌬️</div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-accent/20 backdrop-blur-md rounded-full p-4"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              <div className="text-2xl">❄️</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;