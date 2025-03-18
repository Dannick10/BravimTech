import { Code, Palette, FileText, Search } from "lucide-react"
import Link from "next/link"

export default function ServicesSection() {
  const services = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "Criação de sites",
      description:
        "Criamos sites modernos e responsivos de alta performance para elevar a presença da sua empresa",
      stat: "252K sites são criados todos os dias",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: "Identidade visual",
      description:
        "Desenvolvemos identidades visuais únicas e criativas para destacar sua marca no mercado",
      stat: "UX pode aumentar em 400% a conversão",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: "No-Code",
      description:
        "Oferecemos soluções tecnológicas simples, sem barreiras, com manutenção prática e ágil",
      stat: "45% dos sites utilizam WordPress",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: <Search className="h-10 w-10" />,
      title: "Otimização | SEO",
      description:
        "Maximizamos sua visibilidade online com SEO eficaz para atrair o público certo ao seu website",
      stat: "O SEO pode aumentar em até 100%",
      gradient: "from-blue-600 to-indigo-500",
    },
  ]

  return (
    <section className="w-full bg-white py-24">
      <div className="px-56">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Nossas Soluções
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Estratégia, performance e tecnologia para impulsionar o seu negócio digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 transition-all duration-300 hover:translate-y-[-8px] group relative overflow-hidden"
            >
              {/* Decorative elements */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.2)_0%,transparent_60%)]"></div>
              <div className="absolute top-0 right-0 w-32 h-32 -mt-10 -mr-10 rounded-full bg-blue-50 opacity-20"></div>

              {/* Icon with gradient background */}
              <div
                className={`mb-6 relative z-10 inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
              >
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>

              <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>

              <div className="flex items-center text-sm text-gray-500 mb-6 border-l-4 border-blue-500 pl-3 py-1">
                <span className="font-medium">{service.stat}</span>
              </div>

              <Link
                href="#"
                className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors font-medium group-hover:shadow-md"
              >
                <span>Saiba Mais</span>
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all font-medium text-lg shadow-lg hover:shadow-xl"
          >
            Faça um orçamento
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}