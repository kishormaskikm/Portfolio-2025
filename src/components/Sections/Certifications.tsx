interface Certification {
  icon: string;
  color: string;
  title: string;
  provider: string;
  description: string;
}

const Certifications = () => {
  const certifications: Certification[] = [
    {
      icon: "microsoft",
      color: "blue",
      title: "AZ-204 Developing Solutions for Microsoft Azure",
      provider: "Microsoft",
      description: "Professional certification covering Azure application development, cloud services, security, and deployment with hands-on experience."
    },
    {
        icon: "google",
        color: "purple",
        title: "Java programming",
        provider: "Udemy",
        description: "Completed Java Programming certification covering core Java concepts, OOP, collections, exception handling, and multithreading."
    },
  ]

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          My <span className="gradient-text">Certifications</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  )
}

const CertificationCard = ({ icon, color, title, provider, description }: Certification) => (
  <div className={`bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-${color}-400 transition duration-300 card-hover`}>
    <div className="flex items-start">
      <div className={`mr-4 text-${color}-400`}>
        <i className={`fab fa-${icon} text-4xl`}></i>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{provider}</p>
        <p className="text-gray-300">{description}</p>
        <a href="https://www.udemy.com/certificate/UC-427fb800-439b-419d-ba88-e84b12c236ee/" target="_blank" className={`inline-block mt-4 text-${color}-400 hover:text-${color}-300 transition duration-300`}>
          View Certificate <i className="fas fa-arrow-right ml-1"></i>
        </a>
      </div>
    </div>
  </div>
)

export default Certifications
