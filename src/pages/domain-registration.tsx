import { useState } from 'react'
import { Helmet } from "react-helmet-async"

const DOMAIN_EXTENSIONS = ['.com', '.co.ke', '.ke']

export default function DomainRegistration() {
  const [domainName, setDomainName] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const checkDomainAvailability = async (domain) => {
    setIsLoading(true)
    setError('')
    
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Simulate domain availability check
    // In a real application, this would be an API call to a domain registrar
    const isAvailable = Math.random() > 0.5 // 50% chance of availability
    
    return isAvailable
  }

  const handleSearch = async () => {
    if (!domainName.trim()) {
      setError('Please enter a domain name')
      return
    }

    setIsLoading(true)
    setError('')
    
    try {
      const results = await Promise.all(
        DOMAIN_EXTENSIONS.map(async (ext) => {
          const fullDomain = `${domainName}${ext}`
          const isAvailable = await checkDomainAvailability(fullDomain)
          return {
            domain: fullDomain,
            available: isAvailable
          }
        })
      )
      
      setSearchResults(results)
    } catch (err) {
      setError('An error occurred while checking domain availability')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Helmet>
        <title>Domain Registration | Your Company Name</title>
        <meta name="description" content="Search and register your perfect domain name. We offer .com, .co.ke, and .ke domain extensions." />
        <meta name="keywords" content="domain registration, domain search, domain names, .com domains, .ke domains" />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
            Find Your Perfect Domain Name
          </h1>
          <p className="text-xl text-center max-w-2xl mx-auto">
            Search for available domain names and register your online presence today.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={domainName}
              onChange={(e) => setDomainName(e.target.value)}
              placeholder="Enter your domain name"
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleSearch}
              disabled={isLoading}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50"
            >
              {isLoading ? 'Checking...' : 'Check Availability'}
            </button>
          </div>

          {error && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className="mt-8 space-y-4">
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {result.domain}
                      </h3>
                      <p className={`mt-1 ${result.available ? 'text-green-600' : 'text-red-600'}`}>
                        {result.available
                          ? 'Congratulations! Your domain is available for registration.'
                          : 'Sorry, this domain is already registered. Try a different name.'}
                      </p>
                    </div>
                    {result.available && (
                      <button
                        className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300"
                      >
                        Register Now
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Domain Extensions */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Available Domain Extensions
            </h2>
            <div className="flex flex-wrap gap-4">
              {DOMAIN_EXTENSIONS.map((ext, index) => (
                <div
                  key={index}
                  className="bg-gray-50 px-4 py-2 rounded-lg text-gray-700 font-medium"
                >
                  {ext}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}