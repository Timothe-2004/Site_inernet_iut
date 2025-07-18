import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Microscope, Users, BookOpen, Award, TrendingUp, Globe } from "lucide-react"

export default function RecherchePage() {
  const stats = [
    { number: "8", label: "Laboratoires", icon: Microscope },
    { number: "45", label: "Chercheurs", icon: Users },
    { number: "120+", label: "Publications/an", icon: BookOpen },
    { number: "15", label: "Brevets", icon: Award },
  ]

  const laboratories = [
    {
      name: "Lab IA & Machine Learning",
      director: "Dr. Sophie Legrand",
      description:
        "Recherche avancée en intelligence artificielle, apprentissage automatique et traitement du langage naturel",
      specialties: ["Deep Learning", "NLP", "Computer Vision", "Robotique"],
      projects: 12,
      publications: 25,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Cybersécurité & Cryptographie",
      director: "Prof. Marc Dubois",
      description: "Développement de solutions de sécurité informatique et de protection des données",
      specialties: ["Cryptographie", "Sécurité Réseau", "Blockchain", "Forensique"],
      projects: 8,
      publications: 18,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Innovation Managériale",
      director: "Prof. Claire Martin",
      description: "Étude des nouvelles formes d'organisation et de management dans l'économie digitale",
      specialties: ["Management Agile", "Transformation Digitale", "Leadership", "Innovation"],
      projects: 6,
      publications: 15,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Systèmes Distribués",
      director: "Dr. Thomas Leroy",
      description: "Recherche sur les architectures distribuées, le cloud computing et l'IoT",
      specialties: ["Cloud Computing", "IoT", "Microservices", "Edge Computing"],
      projects: 10,
      publications: 22,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const researchers = [
    {
      name: "Dr. Sophie Legrand",
      title: "Directrice de Recherche",
      speciality: "Intelligence Artificielle",
      publications: 45,
      hIndex: 18,
      image: "/placeholder.svg?height=150&width=150",
      bio: "Experte reconnue en IA avec 15 ans d'expérience dans la recherche appliquée",
    },
    {
      name: "Prof. Marc Dubois",
      title: "Professeur des Universités",
      speciality: "Cybersécurité",
      publications: 38,
      hIndex: 15,
      image: "/placeholder.svg?height=150&width=150",
      bio: "Spécialiste en cryptographie et sécurité des systèmes d'information",
    },
    {
      name: "Dr. Claire Martin",
      title: "Maître de Conférences",
      speciality: "Management de l'Innovation",
      publications: 32,
      hIndex: 12,
      image: "/placeholder.svg?height=150&width=150",
      bio: "Recherche sur les nouvelles formes d'organisation et le leadership digital",
    },
    {
      name: "Dr. Thomas Leroy",
      title: "Chargé de Recherche",
      speciality: "Systèmes Distribués",
      publications: 28,
      hIndex: 10,
      image: "/placeholder.svg?height=150&width=150",
      bio: "Expert en architectures cloud et systèmes distribués à grande échelle",
    },
  ]

  const publications = [
    {
      title: "Deep Learning for Autonomous Systems: A Comprehensive Survey",
      authors: "S. Legrand, M. Dubois, T. Leroy",
      journal: "IEEE Transactions on Neural Networks",
      year: "2024",
      citations: 45,
      type: "Article",
    },
    {
      title: "Blockchain-based Security Framework for IoT Networks",
      authors: "M. Dubois, S. Legrand",
      journal: "Journal of Network Security",
      year: "2024",
      citations: 32,
      type: "Article",
    },
    {
      title: "Agile Management in Digital Transformation",
      authors: "C. Martin, P. Rousseau",
      journal: "Harvard Business Review",
      year: "2023",
      citations: 28,
      type: "Article",
    },
    {
      title: "Edge Computing Architectures for Real-time Applications",
      authors: "T. Leroy, S. Legrand, M. Dubois",
      journal: "ACM Computing Surveys",
      year: "2023",
      citations: 38,
      type: "Article",
    },
  ]

  const projects = [
    {
      title: "IA pour la Santé Connectée",
      funding: "2.5M€",
      duration: "2022-2025",
      partners: ["CHU Paris", "Philips Healthcare", "CNRS"],
      description: "Développement d'algorithmes d'IA pour l'analyse prédictive en santé",
    },
    {
      title: "Cybersécurité Industrielle 4.0",
      funding: "1.8M€",
      duration: "2023-2026",
      partners: ["Schneider Electric", "Thales", "ANSSI"],
      description: "Solutions de sécurité pour les systèmes industriels connectés",
    },
    {
      title: "Management Agile & Performance",
      funding: "800K€",
      duration: "2021-2024",
      partners: ["Capgemini", "Orange", "BNP Paribas"],
      description: "Impact des méthodes agiles sur la performance organisationnelle",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-20">
        <div className="container mx-auto md:px-8 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Recherche & Innovation</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Découvrez nos laboratoires de recherche, nos équipes et nos projets innovants qui façonnent l'avenir
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600" asChild>
              <Link href="#laboratoires">Nos laboratoires</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="/contact">Collaborer avec nous</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto md:px-8 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">La Recherche en Chiffres</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto md:px-8 px-4">
          <Tabs defaultValue="laboratoires" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="laboratoires" className="text-lg">
                Laboratoires
              </TabsTrigger>
              <TabsTrigger value="chercheurs" className="text-lg">
                Chercheurs
              </TabsTrigger>
              <TabsTrigger value="publications" className="text-lg">
                Publications
              </TabsTrigger>
            </TabsList>

            {/* Laboratoires Tab */}
            <TabsContent value="laboratoires" id="laboratoires">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nos Laboratoires de Recherche</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Nos laboratoires de pointe mènent des recherches innovantes dans des domaines stratégiques
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {laboratories.map((lab, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image src={lab.image || "/placeholder.svg"} alt={lab.name} fill className="object-cover" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-800">{lab.name}</CardTitle>
                      <CardDescription>Directeur : {lab.director}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{lab.description}</p>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Spécialités :</h4>
                        <div className="flex flex-wrap gap-2">
                          {lab.specialties.map((specialty, i) => (
                            <Badge key={i} variant="secondary">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2 text-blue-600" />
                          {lab.projects} projets actifs
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="w-4 h-4 mr-2 text-green-600" />
                          {lab.publications} publications
                        </div>
                      </div>
                      <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700" asChild>
                        <Link href={`/recherche/laboratoires`}>En savoir plus</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Chercheurs Tab */}
            <TabsContent value="chercheurs">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nos Enseignants-Chercheurs</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Rencontrez notre équipe de chercheurs reconnus internationalement
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {researchers.map((researcher, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="mx-auto mb-4 relative w-32 h-32 rounded-full overflow-hidden">
                        <Image
                          src={researcher.image || "/placeholder.svg"}
                          alt={researcher.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardTitle className="text-lg">{researcher.name}</CardTitle>
                      <CardDescription>{researcher.title}</CardDescription>
                      <Badge className="mx-auto">{researcher.speciality}</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">{researcher.bio}</p>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <div className="font-semibold text-blue-600">{researcher.publications}</div>
                          <div className="text-gray-500">Publications</div>
                        </div>
                        <div>
                          <div className="font-semibold text-green-600">{researcher.hIndex}</div>
                          <div className="text-gray-500">H-Index</div>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mt-4" asChild>
                        <Link href={`/recherche/enseignants`}>Voir le profil</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Publications Tab */}
            <TabsContent value="publications">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Publications Récentes</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Découvrez nos dernières publications dans des revues scientifiques de premier plan
                </p>
              </div>
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{pub.title}</h3>
                          <p className="text-gray-600 mb-2">{pub.authors}</p>
                          <p className="text-blue-600 font-medium">
                            {pub.journal} ({pub.year})
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge>{pub.type}</Badge>
                          <div className="text-sm text-gray-500 mt-2">{pub.citations} citations</div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Lire l'article
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link href="/recherche/publications">Voir toutes les publications</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Projets de Recherche */}
      <section className="py-16 bg-white">
        <div className="container mx-auto md:px-8 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Projets de Recherche</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Nos projets de recherche collaboratifs avec des partenaires industriels et académiques
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-800">{project.title}</CardTitle>
                  <div className="flex justify-between items-center">
                    <Badge className="bg-green-100 text-green-800">{project.funding}</Badge>
                    <span className="text-sm text-gray-500">{project.duration}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Partenaires :</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.partners.map((partner, i) => (
                        <Badge key={i} variant="outline">
                          {partner}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto md:px-8 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Collaborez avec Nous</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center">
              <Globe className="w-12 h-12 text-white mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">25+</div>
              <div className="text-blue-100">Partenaires Industriels</div>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-white mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">15</div>
              <div className="text-blue-100">Universités Partenaires</div>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-white mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">8M€</div>
              <div className="text-blue-100">Financements Obtenus</div>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-white mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">35</div>
              <div className="text-blue-100">Projets Actifs</div>
            </div>
          </div>
          <p className="text-lg text-blue-100 mb-8 max-w-3xl mx-auto">
            Rejoignez notre écosystème de recherche et d'innovation pour développer les solutions de demain
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold"
              asChild
            >
              <Link href="/contact">Proposer un partenariat</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold"
              asChild
            >
              <Link href="/recherche/laboratoires">Visiter nos labs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
