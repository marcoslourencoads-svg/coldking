import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button-variants";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Aqui você integraria com sua API ou serviço de email
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.%0A%0A${formData.message}%0A%0AContato: ${formData.phone}%0AEmail: ${formData.email}`;
    const whatsappUrl = `https://wa.me/5511999999999?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Mensagem enviada!",
      description: "Você será redirecionado para o WhatsApp para finalizar o contato.",
    });
  };

  const whatsappDirect = () => {
    const message = "Olá! Gostaria de solicitar um orçamento para manutenção de ar-condicionado.";
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Fale com um Especialista
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Quer um ar-condicionado sempre limpo, eficiente e funcionando como novo? 
            Preencha o formulário abaixo ou fale conosco pelo WhatsApp.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="card-glass p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Solicitar Orçamento</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium">Nome completo</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="mt-2 bg-input/50 border-border/50 focus:border-primary"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-medium">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="mt-2 bg-input/50 border-border/50 focus:border-primary"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium">Telefone/WhatsApp</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="mt-2 bg-input/50 border-border/50 focus:border-primary"
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium">Mensagem</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="mt-2 bg-input/50 border-border/50 focus:border-primary resize-none"
                    placeholder="Descreva seu problema ou necessidade..."
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full">
                  <MessageCircle className="w-5 h-5" />
                  Falar com um Especialista no WhatsApp
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="card-glass p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Contato Direto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Telefone</div>
                    <div className="text-muted-foreground">(11) 99999-9999</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">WhatsApp</div>
                    <div className="text-muted-foreground">Resposta imediata</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">contato@aircool.com.br</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-glass p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Atendimento Rápido</h3>
              <p className="text-muted-foreground mb-4">
                Precisando de atendimento urgente? Fale conosco diretamente no WhatsApp!
              </p>
              <Button 
                variant="danger" 
                size="lg" 
                className="w-full"
                onClick={whatsappDirect}
              >
                <MessageCircle className="w-5 h-5" />
                Chamar no WhatsApp Agora
              </Button>
            </div>

            <div className="card-glass p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span>8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span>8h às 14h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span>Emergências</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;