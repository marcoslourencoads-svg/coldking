import { motion } from "framer-motion";
import { Heart, Zap, Award, Clock } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Mais conforto para toda a família",
    description: "Ambiente sempre na temperatura ideal para o bem-estar de todos",
  },
  {
    icon: Zap,
    title: "Economia de energia e conta de luz menor",
    description: "Equipamento eficiente reduz significativamente o consumo",
  },
  {
    icon: Award,
    title: "Técnicos e engenheiros certificados",
    description: "Profissionais qualificados com experiência comprovada",
  },
  {
    icon: Clock,
    title: "Atendimento rápido e humanizado",
    description: "Resposta ágil com foco no seu problema e necessidade",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Por que escolher nossa equipe?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cuidar do seu ar-condicionado é cuidar da sua saúde, do seu bolso e do bem-estar da sua casa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="card-glass p-6 rounded-2xl h-full hover:scale-105 transition-transform duration-300">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-primary text-xl">✅</span>
                    <h3 className="font-semibold text-lg">{benefit.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;