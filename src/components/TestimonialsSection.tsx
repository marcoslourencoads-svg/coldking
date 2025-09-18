import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button-variants";

const testimonials = [
  {
    name: "Carla S.",
    text: "Atendimento rápido e de qualidade. Meu ar voltou a gelar como novo!",
    rating: 5,
    service: "Manutenção Preventiva"
  },
  {
    name: "Marcos R.",
    text: "Muito profissionais! Recomendo para qualquer manutenção de ar-condicionado residencial.",
    rating: 5,
    service: "Instalação"
  },
  {
    name: "Fernanda L.",
    text: "Honestos, ágeis e com preço justo. Nunca mais deixo a manutenção do meu ar para depois.",
    rating: 5,
    service: "Manutenção Corretiva"
  },
  {
    name: "Roberto M.",
    text: "Equipe técnica excepcional. Resolveram um problema que outros não conseguiram.",
    rating: 5,
    service: "Reparo Especializado"
  }
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground">
            Depoimentos reais de famílias satisfeitas com nosso trabalho
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Desktop carousel */}
          <div className="hidden md:block">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="card-glass p-8 rounded-3xl text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl font-medium mb-6 text-foreground">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div className="space-y-2">
                <div className="font-semibold text-primary text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].service}
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="glass"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                variant="glass"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Mobile grid */}
          <div className="grid gap-6 md:hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-glass p-6 rounded-2xl"
              >
                <div className="flex justify-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg font-medium mb-4 text-foreground">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="space-y-1">
                  <div className="font-semibold text-primary">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.service}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;