import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { useForm } from '@formspree/react';
import { useState } from 'react';
import { Alert, AlertTitle, AlertDescription } from './ui/alert';

const Contact = () => {
  const socialLinks = [
    { Icon: Instagram, href: "https://www.instagram.com/creativesolutions_25/#" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/lekakenycollins8/" },
    { Icon: Twitter, href: "https://x.com/leky_reborn" },
  ];
  const [state, handleSubmit] = useForm("xzzzwgdb");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (state.succeeded) {
    return (
    <div>
      <Alert variant="default">
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          Thanks for reaching out! We&apos;ll get back to you soon.
        </AlertDescription>
      </Alert>
    </div>
  );
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5 -z-10" />
      <div className="absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
      <div className="absolute w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" />
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to start your next project? Contact us today and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
            <div className="flex items-start space-x-4 group hover:bg-white/50 p-4 rounded-xl transition-all duration-300">
              <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">Email Us</h3>
                <a href="mailto:lemisogideon@gmail.com">
                <p className="text-gray-600">lemisogideon@gmail.com</p>
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 group hover:bg-white/50 p-4 rounded-xl transition-all duration-300">
              <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">Call Us</h3>
                <p className="text-gray-600">+254 745 113 186 or +254 702 274 352</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 group hover:bg-white/50 p-4 rounded-xl transition-all duration-300">
              <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">Visit Us</h3>
                <p className="text-gray-600">Pena Towers Kitengela, Nairobi, Kenya</p>
              </div>
            </div>

            <div className="pt-8 border-t">
              <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <social.Icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/20">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white/50 backdrop-blur-sm transition-all duration-300"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white/50 backdrop-blur-sm transition-all duration-300"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary bg-white/50 backdrop-blur-sm transition-all duration-300"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;