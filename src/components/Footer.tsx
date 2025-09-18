import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/95 backdrop-blur-md border-t border-border/20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contato */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-primary">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp 24h</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <span>contato@aircool.com.br</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <MapPin className="w-4 h-4" />
                <span>São Paulo - SP</span>
              </div>
            </div>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-primary">Serviços</h3>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Instalação de Ar-Condicionado
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Manutenção Preventiva
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Manutenção Corretiva
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Limpeza e Higienização
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Orçamento Gratuito
              </a>
            </div>
          </motion.div>

          {/* Sobre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-primary">Empresa</h3>
            <div className="space-y-3">
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Sobre Nós
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Nossa Equipe
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Depoimentos
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="block text-muted-foreground hover:text-foreground transition-colors">
                Termos de Serviço
              </a>
            </div>
          </motion.div>

          {/* Redes Sociais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-6 text-primary">Siga-nos</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary hover:bg-primary/30 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              
              <div className="mt-6">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Acompanhe nossas dicas de manutenção e novidades do setor de climatização.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-border/20 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <div className="text-2xl font-bold gradient-text mb-2">
                🌬️ AirCool Services
              </div>
              <p className="text-muted-foreground">
                Nossa missão: deixar você no clima perfeito.
              </p>
            </div>
            
            <div className="text-center md:text-right text-sm text-muted-foreground">
              <p>&copy; 2024 AirCool Services. Todos os direitos reservados.</p>
              <p className="mt-1">15 anos de experiência em climatização</p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;