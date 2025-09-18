import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CounterAnimation = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const stepTime = 50; // Update every 50ms
    const steps = duration / stepTime;
    const increment = target / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepTime);
    
    return () => clearInterval(timer);
  }, [target]);
  
  return (
    <span className="text-5xl md:text-6xl font-bold gradient-text">
      {count}{suffix}
    </span>
  );
};

const ExperienceSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="card-glass p-8 rounded-3xl">
              <div className="grid grid-cols-2 gap-8">
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <CounterAnimation target={15} />
                  </motion.div>
                  <p className="text-lg font-medium text-muted-foreground mt-2">
                    anos no mercado
                  </p>
                </div>
                
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <CounterAnimation target={520} suffix="+" />
                  </motion.div>
                  <p className="text-lg font-medium text-muted-foreground mt-2">
                    atendimentos realizados
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              15 Anos de Experiência em Climatização
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Já levamos climatização de qualidade para residências, pequenos negócios e grandes marcas. 
              Com uma equipe de <span className="text-primary font-semibold">engenheiros e técnicos especializados</span>, 
              você tem a certeza de um serviço feito com segurança e eficiência.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-xl bg-primary/10">
                <div className="text-2xl mb-2">🏠</div>
                <div className="text-sm font-medium">Residencial</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-accent/10">
                <div className="text-2xl mb-2">🏢</div>
                <div className="text-sm font-medium">Empresarial</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-primary/10">
                <div className="text-2xl mb-2">🔧</div>
                <div className="text-sm font-medium">Manutenção</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;