import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Users, TrendingUp, Award, BookOpen, Briefcase, GraduationCap } from "lucide-react"

export default function LicencesPage() {
  const licencesProfessionnelles = [
    {
      title: "Gestion des Banques",
      description:
        "Formation spécialisée dans le secteur bancaire et financier pour former des professionnels compétents",
      duration: "3 ans",
      admission: "BAC séries C, D, G2",
      debouches: [
        "Établissements de crédit",
        "Entreprises commerciales de banque",
        "Organismes financiers",
        "Services de gestion financière",
      ],
      competences: ["Gestion bancaire", "Analyse financière", "Crédit et risque", "Relation clientèle"],
      image: "/placeholder.svg?height=250&width=400",
      color: "bg-blue-600",
    },
    {
      title: "Gestion des Entreprises",
      description:
        "Formation complète en management et gestion d'entreprise pour les futurs dirigeants et gestionnaires",
      duration: "3 ans",
      admission: "BAC séries C, D, G2",
      debouches: [
        "Cabinets comptables",
        "Services comptabilité d'entreprises",
        "Banques et assurances",
        "Administrations publiques",
        "PME et grandes entreprises",
        "Auto-emploi",
      ],
      competences: ["Management", "Comptabilité", "Gestion financière", "Stratégie d'entreprise"],
      image: "/placeholder.svg?height=250&width=400",
      color: "bg-green-600",
    },
    {
      title: "Gestion Commerciale",
      description: "Formation aux techniques commerciales et marketing pour exceller dans le domaine de la vente",
      duration: "3 ans",
      admission: "BAC séries C, D, G2, G3",
      debouches: [
        "Entreprises commerciales",
        "Services commerciaux",
        "Logistique internationale",
        "Entreprises d'export",
        "Sociétés de transit",
        "Agences de communication",
        "Centres commerciaux",
        "Attaché commercial",
        "Chef de produit",
      ],
      competences: ["Techniques de vente", "Marketing", "Communication", "Négociation"],
      image: "/placeholder.svg?height=250&width=400",
      color: "bg-orange-600",
    },
    {
      title: "Informatique de Gestion",
      description: "Formation alliant informatique et gestion pour les systèmes d'information d'entreprise",
      duration: "3 ans",
      admission: "BAC séries C, D",
      debouches: [
        "Centres informatiques",
        "Banques",
        "Entreprises de services",
        "Éditeurs de logiciels",
        "Grandes entreprises informatisées",
        "Analyste programmeur",
        "Chef de programme informatique",
        "Ingénieur logiciel",
        "Administrateur réseaux",
      ],
      competences: ["Programmation", "Base de données", "Réseaux", "Gestion de projet"],
      image: "/placeholder.svg?height=250&width=400",
      color: "bg-purple-600",
    },
    {
      title: "Gestion des Transports et Logistique",
      description: "Formation spécialisée dans la gestion des flux et la logistique moderne",
      duration: "3 ans",
      admission: "BAC séries C, D, G2",
      debouches: [
        "Banques",
        "Sociétés d'assurance",
        "Entreprises de transport",
        "Gestion ferroviaire",
        "Services logistiques",
        "Compagnies aériennes",
        "Agent de fret aéroports",
        "Technicien aviation civile",
      ],
      competences: ["Logistique", "Transport", "Supply Chain", "Gestion des stocks"],
      image: "/placeholder.svg?height=250&width=400",
      color: "bg-red-600",
    },
  ]

  const btsFormations = [
    {
      title: "Comptabilité et Gestion",
      description: "Préparation à l'examen national du BTS en comptabilité et gestion d'entreprise",
      admission: "BAC C, D, E, G2, G3",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Banque et Finance d'Entreprise",
      description: "Formation aux métiers bancaires et à la finance d'entreprise",
      admission: "BAC C, D, E, G2, G3",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Marketing et Action Commerciale",
      description: "Spécialisation en marketing et techniques commerciales",
      admission: "BAC C, D, E, G2, G3",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Management des Ressources Humaines",
      description: "Formation à la gestion des ressources humaines en entreprise",
      admission: "BAC C, D, E, G2, G3",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/placeholder.svg?height=600&width=1200" alt="Campus IUT" fill className="object-cover" />
        </div>
        <div className="relative container mx-auto md:px-8 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Formations Licence</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Découvrez nos Licences Professionnelles et préparations BTS pour construire votre avenir professionnel
          </p>
          <div className="flex space-x-2 justify-center mb-8">
            <Button variant="link" className="text-white" asChild>
              <Link href="/formations">Formations</Link>
            </Button>
            <span className="text-white">/</span>
            <Button variant="link" className="text-white" disabled>
              Licences
            </Button>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto md:px-8 px-4">
          <Tabs defaultValue="licences" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="licences" className="text-lg">
                Licences Professionnelles
              </TabsTrigger>
              <TabsTrigger value="bts" className="text-lg">
                Préparation BTS
              </TabsTrigger>
            </TabsList>

            {/* Licences Professionnelles Tab */}
            <TabsContent value="licences">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Licences Professionnelles</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Formations de 3 ans préparant directement à l'insertion professionnelle dans des secteurs porteurs
                </p>
              </div>

              <div className="space-y-12">
                {licencesProfessionnelles.map((licence, index) => (
                  <div
                    key={index}
                    className={`flex flex-col lg:flex-row gap-8 items-center ${
                      index % 2 === 1 ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    <div className="lg:w-1/2">
                      <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                        <Image
                          src={licence.image || "/placeholder.svg"}
                          alt={licence.title}
                          fill
                          className="object-cover"
                        />
                        <div className={`absolute top-4 left-4 ${licence.color} text-white md:px-8 px-4 py-2 rounded-lg`}>
                          <span className="font-semibold">Licence Professionnelle</span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-1/2">
                      <h3 className="text-3xl font-bold text-gray-800 mb-4">{licence.title}</h3>
                      <p className="text-lg text-gray-600 mb-6">{licence.description}</p>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <div className="font-semibold">{licence.duration}</div>
                          <div className="text-gray-600 text-sm">Durée</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg">
                          <GraduationCap className="w-8 h-8 text-green-600 mx-auto mb-2" />
                          <div className="font-semibold">Bac+3</div>
                          <div className="text-gray-600 text-sm">Niveau</div>
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center">
                          <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
                          Conditions d'admission :
                        </h4>
                        <Badge className="bg-blue-100 text-blue-800">{licence.admission}</Badge>
                      </div>

                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 flex items-center">
                          <Award className="w-5 h-5 mr-2 text-orange-600" />
                          Compétences développées :
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {licence.competences.map((competence, i) => (
                            <Badge key={i} variant="secondary">
                              {competence}
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
                          {licence.debouches.map((debouche, i) => (
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
            </TabsContent>

            {/* BTS Tab */}
            <TabsContent value="bts">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Préparation BTS</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  L'IUT de Parakou prépare également les étudiants à l'examen national du BTS dans plusieurs filières
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {btsFormations.map((bts, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image src={bts.image || "/placeholder.svg"} alt={bts.title} fill className="object-cover" />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-orange-500 text-white">BTS</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-800">{bts.title}</CardTitle>
                      <CardDescription>{bts.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Conditions d'admission :</h4>
                        <Badge className="bg-blue-100 text-blue-800">{bts.admission}</Badge>
                      </div>
                      <Button className="w-full bg-orange-600 hover:bg-orange-700">En savoir plus</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                  Pourquoi choisir la préparation BTS à l'IUT ?
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Users className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Encadrement de qualité</h4>
                    <p className="text-gray-600">Suivi personnalisé par des enseignants expérimentés</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Taux de réussite élevé</h4>
                    <p className="text-gray-600">Excellents résultats aux examens nationaux</p>
                  </div>
                  <div className="text-center">
                    <Briefcase className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Insertion professionnelle</h4>
                    <p className="text-gray-600">Préparation directe au monde du travail</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto md:px-8 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prêt à commencer votre formation ?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Rejoignez l'IUT de Parakou et construisez votre avenir professionnel avec nos formations de qualité
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
              <Link href="/formations/masters">Découvrir les Masters</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
