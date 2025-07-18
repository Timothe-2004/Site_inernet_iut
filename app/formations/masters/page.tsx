import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, TrendingUp, Award, BookOpen, Briefcase, GraduationCap, Target } from "lucide-react"

export default function MastersPage() {
  const mastersProfessionnels = [
    {
      title: "Comptabilité Contrôle et Audit (CCA)",
      description: "Formation d'experts en comptabilité, contrôle de gestion et audit pour les entreprises et cabinets",
      specialites: ["Comptabilité approfondie", "Contrôle de gestion", "Audit interne/externe", "Normes IFRS"],
      debouches: [
        "Expert-comptable",
        "Auditeur interne/externe",
        "Contrôleur de gestion",
        "Directeur administratif et financier",
        "Consultant en gestion",
      ],
      image: "/placeholder.svg?height=250&width=400",
      color: "bg-blue-600",
    },
    {
      title: "Gestion des Transports et Logistiques (GTL)",
      description: "Spécialisation dans la gestion des flux, supply chain et logistique internationale",
      specialites: [
        "Supply Chain Management",
        "Logistique internationale",
        "Transport multimodal",
        "Optimisation des flux",
      ],
      debouches: [
        "Responsable logistique",
        "Supply Chain Manager",
        "Responsable transport",
        "Consultant en logistique",
        "Directeur des opérations",
      ],
      image: "/placeholder.svg?height=250&width=400",
      color: "bg-green-600",
    },
    {
      title: "Administration et Ingénierie des Ressources Humaines (AIRH)",
      description: "Formation complète en gestion des ressources humaines et développement organisationnel",
      specialites: ["Gestion des talents", "Droit social", "Développement RH", "Management des équipes"],
      debouches: [
        "Directeur des ressources humaines",
        "Responsable recrutement",
        "Consultant RH",
        "Responsable formation",
        "Gestionnaire de paie",
      ],
      image: "/placeholder.svg?height=250&width=400",
      color: "bg-purple-600",
    },
    {
      title: "Gestion et Expertise Commerciale (GEC)",
      description: "Expertise en stratégies commerciales, marketing et développement des ventes",
      specialites: ["Stratégie commerciale", "Marketing digital", "Négociation", "Management commercial"],
      debouches: [
        "Directeur commercial",
        "Responsable marketing",
        "Chef des ventes",
        "Consultant commercial",
        "Business Developer",
      ],
      image: "/placeholder.svg?height=250&width=400",
      color: "bg-orange-600",
    },
    {
      title: "Génie Logiciel et Intégration d'Application (GLIA)",
      description: "Formation avancée en développement logiciel et architecture des systèmes d'information",
      specialites: ["Développement logiciel", "Architecture SI", "Intégration d'applications", "Gestion de projet IT"],
      debouches: [
        "Architecte logiciel",
        "Chef de projet IT",
        "Ingénieur développement",
        "Consultant technique",
        "Directeur technique",
      ],
      image: "/placeholder.svg?height=250&width=400",
      color: "bg-indigo-600",
    },
    {
      title: "Système d'Information et d'Aide à la Décision (SIAD)",
      description: "Spécialisation en business intelligence, data analytics et systèmes décisionnels",
      specialites: ["Business Intelligence", "Data Analytics", "Systèmes décisionnels", "Big Data"],
      debouches: [
        "Data Analyst",
        "Consultant BI",
        "Chef de projet SIAD",
        "Responsable informatique décisionnelle",
        "Data Scientist",
      ],
      image: "/placeholder.svg?height=250&width=400",
      color: "bg-red-600",
    },
  ]

  const admissionInfo = {
    conditions: "Licence Professionnelle en Gestion ou en Économie",
    duree: "2 ans",
    niveau: "Bac+5",
    modalites: [
      "Étude du dossier académique",
      "Entretien de motivation",
      "Test de niveau (selon la filière)",
      "Validation de l'expérience professionnelle",
    ],
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/placeholder.svg?height=600&width=1200" alt="Campus IUT Masters" fill className="object-cover" />
        </div>
        <div className="relative container mx-auto md:px-8 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Masters Professionnels</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Spécialisez-vous avec nos Masters Professionnels et accédez aux postes à responsabilités
          </p>
          <div className="flex space-x-2 justify-center mb-8">
            <Button variant="link" className="text-white" asChild>
              <Link href="/formations">Formations</Link>
            </Button>
            <span className="text-white">/</span>
            <Button variant="link" className="text-white" disabled>
              Masters
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto md:px-8 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nos Masters Professionnels</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              L'IUT de Parakou propose 6 Masters Professionnels conçus pour former des cadres supérieurs et des experts
              dans leurs domaines de spécialisation. Ces formations de haut niveau allient théorie avancée et pratique
              professionnelle.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
              <div className="text-gray-600 font-medium">Masters Professionnels</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">2</div>
              <div className="text-gray-600 font-medium">Années d'études</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">Bac+5</div>
              <div className="text-gray-600 font-medium">Niveau de sortie</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Insertion professionnelle</div>
            </div>
          </div>
        </div>
      </section>

      {/* Masters List */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto md:px-8 px-4">
          <div className="space-y-16">
            {mastersProfessionnels.map((master, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                    <Image src={master.image || "/placeholder.svg"} alt={master.title} fill className="object-cover" />
                    <div className={`absolute top-4 left-4 ${master.color} text-white md:px-8 px-4 py-2 rounded-lg`}>
                      <span className="font-semibold">Master Professionnel</span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{master.title}</h3>
                  <p className="text-lg text-gray-600 mb-6">{master.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-blue-600" />
                      Spécialisations :
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {master.specialites.map((specialite, i) => (
                        <Badge key={i} variant="secondary">
                          {specialite}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2 text-green-600" />
                      Débouchés professionnels :
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {master.debouches.map((debouche, i) => (
                        <li key={i}>{debouche}</li>
                      ))}
                    </ul>
                  </div>

                  <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/contact">Candidater maintenant</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto md:px-8 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Conditions d'Admission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Découvrez les conditions et modalités d'admission pour intégrer nos Masters Professionnels
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-6 h-6 mr-2 text-blue-600" />
                  Conditions d'accès
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Diplôme requis :</h4>
                    <Badge className="bg-blue-100 text-blue-800">{admissionInfo.conditions}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <div className="font-semibold">{admissionInfo.duree}</div>
                      <div className="text-gray-600 text-sm">Durée</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-lg">
                      <GraduationCap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <div className="font-semibold">{admissionInfo.niveau}</div>
                      <div className="text-gray-600 text-sm">Niveau</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 mr-2 text-orange-600" />
                  Modalités de sélection
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {admissionInfo.modalites.map((modalite, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-orange-600 font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="text-gray-600">{modalite}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Avantages Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto md:px-8 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Pourquoi choisir nos Masters ?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Excellence Académique</h3>
                <p className="text-gray-600">
                  Formations de haut niveau dispensées par des enseignants-chercheurs et des professionnels reconnus
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Orientation Professionnelle</h3>
                <p className="text-gray-600">
                  Formations conçues en partenariat avec les entreprises pour répondre aux besoins du marché
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Insertion Garantie</h3>
                <p className="text-gray-600">
                  Taux d'insertion professionnelle élevé grâce à notre réseau d'entreprises partenaires
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto md:px-8 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prêt à vous spécialiser ?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Rejoignez nos Masters Professionnels et donnez une nouvelle dimension à votre carrière
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold"
              asChild
            >
              <Link href="/contact">Candidater maintenant</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold"
              asChild
            >
              <Link href="/formations/licences">Voir les Licences</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
