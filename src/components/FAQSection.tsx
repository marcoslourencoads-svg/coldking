import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Quanto custa a manutenção de ar-condicionado residencial?",
    answer: "O valor varia conforme o tipo de equipamento, mas sempre oferecemos orçamento justo e transparente. Para Split comum, o valor médio fica entre R$ 120-180. Oferecemos visita técnica gratuita para avaliação precisa."
  },
  {
    question: "Quando devo limpar meu ar-condicionado?",
    answer: "Recomendamos a cada 6 meses para residências, garantindo ar puro e economia de energia. Em locais com muito uso ou ambientes empoeirados, pode ser necessário a cada 3-4 meses."
  },
  {
    question: "Qual a diferença entre manutenção preventiva e corretiva?",
    answer: "A preventiva evita problemas futuros e gastos extras, sendo feita regularmente. Já a corretiva é feita quando o equipamento já apresenta falhas. A preventiva é sempre mais econômica e eficiente."
  },
  {
    question: "Vocês atendem em qual região?",
    answer: "Atendemos toda a Grande São Paulo e região metropolitana. Para outras localidades, consulte nossa central de atendimento para verificar disponibilidade."
  },
  {
    question: "Quanto tempo demora uma manutenção completa?",
    answer: "Uma manutenção preventiva leva entre 45 minutos a 1h30, dependendo do tipo de equipamento. Já manutenções corretivas podem levar mais tempo conforme a complexidade do problema."
  },
  {
    question: "Vocês oferecem garantia nos serviços?",
    answer: "Sim! Oferecemos garantia de 90 dias para manutenções e 6 meses para instalações. Todos os nossos serviços contam com garantia e suporte técnico."
  }
];

const FAQSection = () => {
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
            FAQ – Perguntas Frequentes
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tire suas dúvidas sobre nossos serviços de ar-condicionado
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="card-glass rounded-2xl px-6 border-0"
              >
                <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;