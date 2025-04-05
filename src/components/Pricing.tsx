import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$150",
    description: "Perfect for small businesses and startups",
    features: [
      "Custom Website Design",
      "Mobile Responsive",
      "3 Pages",
      "Contact Form",
      "Basic API integrations",
      "30 Days Support"
    ]
  },
  {
    name: "Professional",
    price: "$350",
    description: "Ideal for growing businesses",
    features: [
      "Everything in Starter",
      "Up to 10 Pages",
      "Advanced API integrations (e.g., CRMs, analytics).",
      "Dynamic features like user dashboards and admin panels.",
      "60 Days Support",
      "Performance Optimization"
    ],
    isPopular: true
  },
  {
    name: "Enterprise",
    price: "$1000",
    description: "For large scale organizations",
    features: [
      "Everything in Professional",
      "Unlimited Pages",
      "Custom Functionality",
      "Priority Support",
      "Advanced Analytics",
      "Security Features",
      "API Integration",
      "Monthly Maintenance",
      "24/7 Support"
    ]
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-10 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan that suits your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                tier.isPopular 
                  ? 'custom-gradient text-white shadow-2xl scale-105 z-10' 
                  : 'bg-card border border-border'
              }`}
            >
              {tier.isPopular && (
                <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${!tier.isPopular && 'gradient-text'}`}>
                  {tier.name}
                </h3>
                <div className="flex justify-center items-baseline mb-2">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  <span className={`ml-1 ${tier.isPopular ? 'text-white/80' : 'text-muted-foreground'}`}>
                    /project
                  </span>
                </div>
                <p className={`${tier.isPopular ? 'text-white/80' : 'text-muted-foreground'}`}>
                  {tier.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.05 }}
                    className="flex items-center"
                  >
                    <Check className={`h-5 w-5 mr-3 flex-shrink-0 ${
                      tier.isPopular ? 'text-white' : 'text-primary'
                    }`} />
                    <span className={`${tier.isPopular ? 'text-white/80' : 'text-muted-foreground'}`}>
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>

              <a href="#contact">
                <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-shadow ${
                  tier.isPopular
                    ? 'bg-white text-primary hover:shadow-xl'
                    : 'custom-gradient text-white hover:shadow-xl'
                }`}
              >
                Get Started
              </motion.button>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground mb-4">
            Need a custom plan? We've got you covered.
          </p>
          <a href="#contact">
          <button className="gradient-text font-medium hover:opacity-80 transition-opacity">
            Contact Us for Custom Solutions →
          </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
