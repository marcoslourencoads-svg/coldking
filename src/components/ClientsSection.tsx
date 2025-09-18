import { motion } from "framer-motion";

const clients = [
  "Arezzo", "Schutz", "Vans", "Fiocruz", "Pacheco", 
  "Audibel", "Bazar das Flores", "TechCorp", "Inovação Lab"
];

const ClientsSection = () => {
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
            Clientes que Confiam em Nós
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Se empresas reconhecidas no Brasil já escolheram nossa equipe, 
            você pode confiar que sua casa estará em boas mãos.
          </p>
        </motion.div>

        {/* Animated logo carousel */}
        <div className="relative overflow-hidden">
          <motion.div 
            className="flex space-x-8 md:space-x-12"
            animate={{ x: [0, -100 * clients.length] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...clients, ...clients].map((client, index) => (
              <motion.div
                key={`${client}-${index}`}
                className="flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <div className="card-glass px-8 py-4 rounded-xl min-w-[200px] text-center">
                  <div className="text-lg font-semibold text-foreground">
                    {client}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile grid view */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:hidden gap-4 mt-8">
          {clients.slice(0, 6).map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="card-glass p-4 rounded-xl text-center"
            >
              <div className="font-semibold">{client}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;