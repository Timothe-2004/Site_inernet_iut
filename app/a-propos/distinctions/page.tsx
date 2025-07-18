import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Star, TrendingUp, Globe } from "lucide-react"

export default function DistinctionsPage() {
  const certifications = [
    {
      year: "2023",
      title: "Certification ISO 9001:2015",
      description:
        "Reconnaissance de l'excellence de notre système de management de la qualité. Cette certification atteste de notre engagement constant vers l'amélioration continue et la satisfaction de nos étudiants.",
      logo: "/placeholder.svg?height=120&width=120",
      category: "Qualité",
    },
    {
      year: "2022",
      title: "Label Grande École du Numérique",
      description:
        "Reconnaissance nationale pour nos formations en informatique et technologies digitales. Ce label confirme la qualité de nos programmes et leur adéquation avec les besoins du marché.",
      logo: "/placeholder.svg?height=120&width=120",
      category: "Formation",
    },
    {
      year: "2021",
      title: "Prix de l'Innovation Pédagogique",
      description:
        "Décerné par le Ministère de l'Enseignement Supérieur pour nos méthodes d'apprentissage innovantes. Notre approche 'Learning by Doing' a été particulièrement saluée.",
      logo: "/placeholder.svg?height=120&width=120",
      category: "Innovation",
    },
    {
      year: "2020",
      title: "Accréditation AACSB",
      description:
        "Reconnaissance internationale de l'excellence de nos programmes de gestion. Moins de 5% des écoles de commerce mondiales détiennent cette accréditation prestigieuse.",
      logo: "/placeholder.svg?height=120&width=120",
      category: "International",
    },
  ]

  const rankings = [
    {
      position: "Top 5",
      title: "Meilleures Écoles de Gestion",
      description: "Classement national des écoles de gestion 2023",
      year: "2023",
      source: "Le Figaro Étudiant",
    },
    {
      position: "Top 10",
      title: "Écoles d'Informatique",
      description: "Classement des formations en informatique 2023",
      year: "2023",
      source: "L'Étudiant",
    },
    {
      position: "Top 15",
      title: "Établissements Européens",
      description: "Classement européen des établissements innovants 2022",
      year: "2022",
      source: "Times Higher Education",
    },
    {
      position: "Top 3",
      title: "Insertion Professionnelle",
      description: "Taux d'insertion professionnelle des diplômés",
      year: "2023",
      source: "Ministère de l'Enseignement Supérieur",
    },
  ]

  const awards = [
    {
      year: "2023",
      title: "Trophée de l'Excellence Académique",
      description:
        "Remis par l'Association des Directeurs d'IUT pour la qualité exceptionnelle de nos formations et notre taux de réussite de 95%.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "2022",
      title: "Prix de l'Incubateur de l'Année",
      description:
        "Notre incubateur de startups a été reconnu comme le plus performant de sa catégorie, avec plus de 30 entreprises lancées en 3 ans.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "2021",
      title: "Médaille d'Or de la Recherche Appliquée",
      description:
        "Décernée par le CNRS pour nos travaux en intelligence artificielle et leur application dans l'industrie.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      year: "2020",
      title: "Prix de l'Engagement Sociétal",
      description:
        "Reconnaissance de nos actions en faveur de l'égalité des chances et de l'inclusion sociale dans l'enseignement supérieur.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const successStories = [
    {
      title: "Programme d'Excellence Académique",
      description:
        "Notre programme d'excellence a permis à 98% de nos étudiants de trouver un emploi dans les 6 mois suivant leur diplôme, avec un salaire moyen supérieur de 15% à la moyenne nationale.",
      metrics: ["98% d'insertion", "+15% salaire", "6 mois"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Partenariats Internationaux",
      description:
        "Nos accords avec plus de 50 universités dans 25 pays permettent à nos étudiants de bénéficier d'une expérience internationale enrichissante et reconnue.",
      metrics: ["50 universités", "25 pays", "200 étudiants/an"],
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Innovation Technologique",
      description:
        "Nos laboratoires de recherche ont déposé 15 brevets en 3 ans et collaborent avec des entreprises du Fortune 500 sur des projets d'innovation.",
      metrics: ["15 brevets", "Fortune 500", "3 ans"],
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-20">
        <div className="container mx-auto md:px-8 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Distinctions & Reconnaissances</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Découvrez les nombreuses reconnaissances qui témoignent de l'excellence de notre institut
          </p>
          <div className="flex space-x-2 justify-center">
            <Button variant="link" className="text-white" asChild>
              <Link href="/a-propos">À Propos</Link>
            </Button>
            <span className="text-white">/</span>
            <Button variant="link" className="text-white" disabled>
              Distinctions
            </Button>
          </div>
        </div>
      </section>

      {/* Certifications & Accréditations */}
      <section className="py-16 bg-white">
        <div className="container mx-auto md:px-8 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Certifications & Accréditations</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nos certifications attestent de la qualité de nos formations et de notre engagement vers l'excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex p-6">
                  <div className="mr-6 flex-shrink-0">
                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                      <Image
                        src={cert.logo || "/placeholder.svg"}
                        alt={cert.title}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Badge className="mr-2">{cert.category}</Badge>
                      <span className="text-sm text-blue-600 font-medium">{cert.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{cert.title}</h3>
                    <p className="text-gray-600">{cert.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Classements */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto md:px-8 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Classements</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Notre position dans les classements nationaux et internationaux témoigne de notre excellence académique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rankings.map((ranking, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-2">{ranking.position}</div>
                  <CardTitle className="text-lg">{ranking.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{ranking.description}</p>
                  <div className="text-sm text-gray-500">
                    <p>{ranking.source}</p>
                    <p>{ranking.year}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prix & Récompenses */}
      <section className="py-16 bg-white">
        <div className="container mx-auto md:px-8 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Prix & Récompenses</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Les prix que nous avons reçus reconnaissent notre engagement dans l'innovation et l'excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={award.image || "/placeholder.svg"} alt={award.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 text-white">{award.year}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-orange-500" />
                    {award.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto md:px-8 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nos réussites concrètes qui démontrent l'impact positif de notre approche éducative
            </p>
          </div>

          <div className="space-y-12">
            {successStories.map((story, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                  </div>
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{story.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{story.description}</p>
                  <div className="flex flex-wrap gap-4">
                    {story.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="bg-blue-100 md:px-8 px-4 py-2 rounded-lg">
                        <span className="text-blue-800 font-semibold">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages de Partenaires */}
      <section className="py-16 bg-white">
        <div className="container mx-auto md:px-8 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Témoignages de Partenaires</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ce que disent nos partenaires de la qualité de nos formations et de nos diplômés
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Les diplômés de l'IUT se distinguent par leur excellence technique et leur capacité d'adaptation. Ils
                  intègrent rapidement nos équipes et contribuent significativement à nos projets d'innovation."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">MS</span>
                  </div>
                  <div>
                    <p className="font-semibold">Marie Schneider</p>
                    <p className="text-gray-500">DRH, Microsoft France</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                </div>
                <p className="text-gray-600 italic mb-4">
                  "Notre partenariat avec l'IUT nous permet d'accéder à des talents exceptionnels. La qualité de la
                  formation et l'approche pratique préparent parfaitement les étudiants aux défis du monde
                  professionnel."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-orange-600 font-bold">JD</span>
                  </div>
                  <div>
                    <p className="font-semibold">Jean Dupuis</p>
                    <p className="text-gray-500">Directeur Innovation, Orange</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reconnaissance Internationale */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto md:px-8 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Reconnaissance Internationale</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <Globe className="w-12 h-12 text-white mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-blue-100">Partenaires Internationaux</div>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-white mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">25</div>
              <div className="text-blue-100">Prix Internationaux</div>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-white mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">Top 15</div>
              <div className="text-blue-100">Classement Européen</div>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-white mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">95%</div>
              <div className="text-blue-100">Satisfaction Étudiants</div>
            </div>
          </div>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            Notre réputation dépasse les frontières et nous place parmi les établissements d'excellence en Europe
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold"
            asChild
          >
            <Link href="/formations">Découvrir nos formations</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
