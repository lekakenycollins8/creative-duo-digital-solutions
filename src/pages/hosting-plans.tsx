import { Helmet } from "react-helmet-async"
import { Link } from "react-router-dom";


const hostingPlans = [
  {
    name: 'Starter Plan',
    price: '3,500',
    features: [
      '5GB SSD Storage',
      'Unlimited Bandwidth',
      'Free SSL Certificate',
      '5 Email Accounts',
      'Basic Support',
      '1 Website'
    ]
  },
  {
    name: 'Basic Plan',
    price: '7,000',
    features: [
      '20GB SSD Storage',
      'Unlimited Bandwidth',
      'Free SSL Certificate',
      'Unlimited Email Accounts',
      'Priority Support',
      '5 Websites'
    ]
  },
  {
    name: 'Business Plan',
    price: '12,000',
    features: [
      '50GB SSD Storage',
      'Unlimited Bandwidth',
      'Free SSL Certificate',
      'Unlimited Email Accounts',
      '24/7 Support',
      'Unlimited Websites',
      'Free Domain Name'
    ]
  },
  {
    name: 'Enterprise Plan',
    price: '17,000',
    features: [
      '100GB SSD Storage',
      'Unlimited Bandwidth',
      'Free SSL Certificate',
      'Unlimited Email Accounts',
      '24/7 Premium Support',
      'Unlimited Websites',
      'Free Domain Name',
      'Dedicated IP'
    ]
  }
]

export default function HostingPlans() {
  return (
    <>
      <Helmet>
        <title>Hosting Plans | Your Company Name</title>
        <meta name="description" content="Choose from our range of hosting plans designed to meet your website needs. From starter to enterprise solutions." />
        <meta name="keywords" content="web hosting, hosting plans, website hosting, cloud hosting" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Choose Your Perfect Hosting Plan
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            We offer flexible hosting solutions to help you get your website up and running quickly.
            Select the plan that best fits your needs.
          </p>
        </div>
      </div>

      {/* Hosting Plans Grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hostingPlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h2>
                <div className="text-3xl font-bold text-blue-600 mb-6">
                  Ksh {plan.price}
                  <span className="text-sm text-gray-500">/year</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
} 