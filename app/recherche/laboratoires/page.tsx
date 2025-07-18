import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Microscope, Users, BookOpen, TrendingUp, Building, Shield, Brain, Cloud } from "lucide-react"

export default function LaboratoiresPage() {
  const laboratories = [
    {
      id: "lab-ia",
      name: "Laboratoire IA & Machine Learning",
      director: "Dr. Sophie Legrand",
      description:
        "Notre laboratoire d'intelligence artificielle est à la pointe de la recherche en apprentissage automatique, traitement du langage naturel et vision par ordinateur. Nous développons des solutions IA innovantes pour l'industrie et la société.",
      specialties: ["Deep Learning", "NLP", "Computer Vision", "Robotique", "IA Explicable"],
      projects: 12,
      publications: 25,
      staff: 8,
      students: 15,
      equipment: ["Cluster GPU Tesla V100", "Robots NAO", "Caméras haute résolution", "Serveurs de calcul"],
      partnerships: ["Google AI", "Microsoft Research", "INRIA", "CEA"],
      image: "/placeholder.svg?height=300&width=400",
      icon: Brain,
    },
    {
      id: "lab-cyber",
      name: "Laboratoire Cybersécurité & Cryptographie",
      director: "Prof. Marc Dubois",
      description:
        "Spécialisé dans la sécurité informatique, notre laboratoire développe des solutions de protection avancées pour les systèmes d'information et les infrastructures critiques.",
      specialties: ["Cryptographie", "Sécurité Réseau", "Blockchain", "Forensique", "Audit de Sécurité"],
      projects: 8,
      publications: 18,
      staff: 6,
      students: 12,
      equipment: [
        "Laboratoire de tests d'intrusion",
        "Analyseurs de réseau",
        "Serveurs sécurisés",
        "Outils forensiques",
      ],
      partnerships: ["ANSSI", "Thales", "Orange Cyberdéfense", "CNIL"],
      image: "/placeholder.svg?height=300&width=400",
      icon: Shield,
    },
    {
      id: "lab-management",
      name: "Laboratoire Innovation Managériale",
      director: "Prof. Claire Martin",
      description:
        "Ce laboratoire étudie les nouvelles formes d'organisation et de management dans l'économie digitale, avec un focus sur l'agilité et l'innovation organisationnelle.",
      specialties: ["Management Agile", "Transformation Digitale", "Leadership", "Innovation", "Entrepreneuriat"],
      projects: 6,
      publications: 15,
      staff: 5,
      students: 10,
      equipment: [
        "Salles de créativité",
        "Outils de simulation",
        "Plateformes collaboratives",
        "Studios d'enregistrement",
      ],
      partnerships: ["Capgemini", "BNP Paribas", "Orange", "CNAM"],
      image: "/placeholder.svg?height=300&width=400",
      icon: Users,
    },
    {
      id: "lab-systemes",
      name: "Laboratoire Systèmes Distribués",
      director: "Dr. Thomas Leroy",
      description:
        "Recherche sur les architectures distribuées, le cloud computing et l'Internet des Objets pour développer les infrastructures numériques de demain.",
      specialties: ["Cloud Computing", "IoT", "Microservices", "Edge Computing", "Blockchain"],
      projects: 10,
      publications: 22,
      staff: 7,
      students: 18,
      equipment: ["Infrastructure cloud privée", "Capteurs IoT", "Serveurs edge", "Réseaux 5G"],
      partnerships: ["AWS", "Microsoft Azure", "IBM", "Orange Labs"],
      image: "/placeholder.svg?height=300&width=400",
      icon: Cloud,
    },
  ]

  const facilities = [
    {
      name: "Centre de Calcul Haute Performance",
      description: "Infrastructure de calcul avec 500 cœurs CPU et 32 GPU pour les calculs intensifs",
      capacity: "500 TFlops",
      usage: "IA, Simulation, Modélisation",
    },
    {
      name: "Laboratoire de Prototypage",
      description: "Espace équipé d'imprimantes 3D, découpeuses laser et outils de fabrication numérique",
      capacity: "24/7",
      usage: "Prototypage, Tests, Validation",
    },
    {
      name: "Salle Blanche",
      description: "Environnement contrôlé pour la manipulation de composants électroniques sensibles",
      capacity: "Classe 1000",
      usage: "Microélectronique, Capteurs",
    },
    {
      name: "Centre de Données Sécurisé",
      description: "Infrastructure réseau et stockage avec redondance et sécurité renforcée",
      capacity: "100 TB",
      usage: "Hébergement, Sauvegarde, Tests",
    },
  ]

  const currentProjects = [
    {
      title: "IA pour la Santé Connectée",
      lab: "Lab IA & Machine Learning",
      funding: "2.5M€",
      duration: "2022-2025",
      description:
        "Développement d'algorithmes d'IA pour l'analyse prédictive en santé et l'aide au diagnostic médical",
      partners: ["CHU Paris", "Philips Healthcare", "CNRS"],
      status: "En cours",
    },
    {
      title: "Cybersécurité Industrielle 4.0",
      lab: "Cybersécurité & Cryptographie",
      funding: "1.8M€",
      duration: "2023-2026",
      description: "Solutions de sécurité pour les systèmes industriels connectés et l'industrie 4.0",
      partners: ["Schneider Electric", "Thales", "ANSSI"],
      status: "En cours",
    },
    {
      title: "Management Agile & Performance",
      lab: "Innovation Managériale",
      funding: "800K€",
      duration: "2021-2024",
      description: "Étude de l'impact des méthodes agiles sur la performance organisationnelle",
      partners: ["Capgemini", "Orange", "BNP Paribas"],
      status: "Phase finale",
    },
    {
      title: "Edge Computing pour l'IoT",
      lab: "Systèmes Distribués",
      funding: "1.2M€",
      duration: "2023-2025",
      description: "Architectures de calcul en périphérie pour les applications IoT temps réel",
      partners: ["Orange Labs", "AWS", "CEA"],
      status: "En cours",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-20">
        <div className="container mx-auto md:px-8 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Nos Laboratoires</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Découvrez nos laboratoires de recherche de pointe et leurs domaines d'expertise
          </p>
          <div className="flex space-x-2 justify-center">
            <Button variant="link" className="text-white" asChild>
              <Link href="/recherche">Recherche</Link>
            </Button>
            <span className="text-white">/</span>
            <Button variant="link" className="text-white" disabled>
              Laboratoires
            </Button>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto md:px-8 px-4">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="overview" className="text-lg">
                Vue d'ensemble
              </TabsTrigger>
              <TabsTrigger value="facilities" className="text-lg">
                Infrastructures
              </TabsTrigger>
              <TabsTrigger value="projects" className="text-lg">
                Projets
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nos Laboratoires de Recherche</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Quatre laboratoires spécialisés dans des domaines stratégiques de la technologie et du management
                </p>
              </div>

              <div className="space-y-16">
                {laboratories.map((lab, index) => {
                  const IconComponent = lab.icon
                  return (
                    <div
                      key={index}
                      className={`flex flex-col lg:flex-row gap-8 items-center ${
                        index % 2 === 1 ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      <div className="lg:w-1/2">
                        <div className="relative h-80 rounded-lg overflow-hidden">
                          <Image src={lab.image || "/placeholder.svg"} alt={lab.name} fill className="object-cover" />
                        </div>
                      </div>
                      <div className="lg:w-1/2">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                            <IconComponent className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800">{lab.name}</h3>
                            <p className="text-blue-600">Directeur : {lab.director}</p>
                          </div>
                        </div>
                        <p className="text-lg text-gray-600 mb-6">{lab.description}</p>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                          <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">{lab.staff}</div>
                            <div className="text-gray-600">Chercheurs</div>
                          </div>
                          <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">{lab.students}</div>
                            <div className="text-gray-600">Doctorants</div>
                          </div>
                          <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold text-orange-600">{lab.projects}</div>
                            <div className="text-gray-600">Projets</div>
                          </div>
                          <div className="text-center p-4 bg-gray-50 rounded-lg">
                            <div className="text-2xl font-bold text-purple-600">{lab.publications}</div>
                            <div className="text-gray-600">Publications</div>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Domaines d'expertise :</h4>
                          <div className="flex flex-wrap gap-2">
                            {lab.specialties.map((specialty, i) => (
                              <Badge key={i} variant="secondary">
                                {specialty}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold mb-3">Partenaires :</h4>
                          <div className="flex flex-wrap gap-2">
                            {lab.partnerships.map((partner, i) => (
                              <Badge key={i} className="bg-blue-100 text-blue-800">
                                {partner}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <Button className="bg-blue-600 hover:bg-blue-700">Découvrir le laboratoire</Button>
                      </div>
                    </div>
                  )
                })}
              </div>
            </TabsContent>

            {/* Facilities Tab */}
            <TabsContent value="facilities">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Infrastructures & Équipements</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Des infrastructures de pointe pour soutenir nos activités de recherche et d'innovation
                </p>
              </div>

              {/* Facilities Overview */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
                {facilities.map((facility, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Building className="w-5 h-5 mr-2 text-blue-600" />
                        {facility.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">{facility.description}</p>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <span className="text-sm text-gray-500">Capacité :</span>
                          <div className="font-semibold text-blue-600">{facility.capacity}</div>
                        </div>
                        <div>
                          <span className="text-sm text-gray-500">Usage :</span>
                          <div className="font-semibold text-green-600">{facility.usage}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Equipment by Lab */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Équipements par Laboratoire</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {laboratories.map((lab, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-lg">{lab.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <h4 className="font-semibold mb-3">Équipements principaux :</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-600">
                          {lab.equipment.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Projects Tab */}
            <TabsContent value="projects">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Projets de Recherche Actuels</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Découvrez les projets de recherche en cours dans nos laboratoires
                </p>
              </div>

              <div className="space-y-8">
                {currentProjects.map((project, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-8">
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h3 className="text-2xl font-bold text-gray-800 mr-4">{project.title}</h3>
                            <Badge
                              className={
                                project.status === "En cours"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-orange-100 text-orange-800"
                              }
                            >
                              {project.status}
                            </Badge>
                          </div>
                          <p className="text-blue-600 font-medium mb-2">{project.lab}</p>
                          <p className="text-gray-600 mb-4">{project.description}</p>
                        </div>
                        <div className="lg:ml-8 lg:text-right">
                          <div className="text-2xl font-bold text-green-600">{project.funding}</div>
                          <div className="text-gray-500">{project.duration}</div>
                        </div>
                      </div>

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
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto md:px-8 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos Laboratoires en Chiffres</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Microscope className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600 font-medium">Laboratoires</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">26</div>
              <div className="text-gray-600 font-medium">Chercheurs</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">36</div>
              <div className="text-gray-600 font-medium">Projets Actifs</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">80</div>
              <div className="text-gray-600 font-medium">Publications/an</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto md:px-8 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Collaborez avec nos Laboratoires</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Rejoignez notre écosystème de recherche et développez avec nous les innovations de demain
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
              <Link href="/recherche/enseignants">Rencontrer nos chercheurs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
