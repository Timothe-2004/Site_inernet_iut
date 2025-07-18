import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Users, TrendingUp, Award, BookOpen, Briefcase } from "lucide-react"

export default function FormationsPage() {
  const licences = [
    {
      title: "Licence Gestion des Banques",
      description:
        "Formation spécialisée dans le secteur bancaire et financier pour former des professionnels compétents",
      duration: "3 ans",
      students: "80 étudiants/an",
      employment: "95%",
      salary: "Excellent",
      skills: ["Gestion bancaire", "Analyse financière", "Crédit et risque", "Relation clientèle"],
      image: "/images/GB.webp",
    },
    {
      title: "Licence Gestion des Entreprises",
      description: "Formation complète en management et gestion d'entreprise pour les futurs dirigeants",
      duration: "3 ans",
      students: "20 étudiants/an",
      employment: "96%",
      salary: "Très bon",
      skills: ["Management", "Comptabilité", "Gestion financière", "Stratégie"],
      image: "/images/GE.webp",
    },
    {
      title: "Licence Gestion Commerciale",
      description: "Formation aux techniques commerciales et marketing pour exceller dans la vente",
      duration: "3 ans",
      students: "20 étudiants/an",
      employment: "94%",
      salary: "Bon",
      skills: ["Techniques de vente", "Marketing", "Communication", "Négociation"],
      image: "/images/GC.webp",
    },
    {
      title: "Licence Informatique de Gestion",
      description: "Formation alliant informatique et gestion pour les systèmes d'information",
      duration: "3 ans",
      students: "70 étudiants/an",
      employment: "98%",
      salary: "Excellent",
      skills: ["Programmation", "Base de données", "Réseaux", "Gestion de projet"],
      image: "/images/IG.webp",
    },
    {
      title: "Licence Gestion des Transports et Logistique",
      description: "Formation spécialisée dans la gestion des flux et la logistique moderne",
      duration: "3 ans",
      students: "30 étudiants/an",
      employment: "93%",
      salary: "Bon",
      skills: ["Logistique", "Transport", "Supply Chain", "Gestion des stocks"],
      image: "/images/GTL.webp",
    },
    {
      title: "Licence Gestion des Ressources Humaines",
      description: "Formation complète en gestion des ressources humaines et développement organisationnel",
      duration: "3 ans",
      students: "20 étudiants/an",
      employment: "93%",
      salary: "Bon",
      skills: ["Gestion des talents", "Droit du travail", "Développement RH", "Management"],
      image: "/images/GRH.webp",
    }
  ]

  const masters = [
    {
      title: "Master Comptabilité Contrôle et Audit (CCA)",
      description: "Formation d'experts en comptabilité, contrôle de gestion et audit",
      duration: "2 ans",
      students: "30 étudiants/an",
      employment: "100%",
      salary: "Excellent",
      skills: ["Comptabilité approfondie", "Contrôle de gestion", "Audit", "Normes IFRS"],
      image: "/images/GE.webp",
    },
    {
      title: "Master Gestion des Transports et Logistiques (GTL)",
      description: "Spécialisation dans la gestion des flux et supply chain management",
      duration: "2 ans",
      students: "25 étudiants/an",
      employment: "100%",
      salary: "Excellent",
      skills: ["Supply Chain", "Logistique internationale", "Transport", "Optimisation"],
     image: "/images/GTL-master.webp",
    },
    {
      title: "Master Administration et Ingénierie des RH (AIRH)",
      description: "Formation complète en gestion des ressources humaines",
      duration: "2 ans",
      students: "35 étudiants/an",
      employment: "98%",
      salary: "Très bon",
      skills: ["Gestion des talents", "Droit social", "Développement RH", "Management"],
      image: "/images/GRH.webp",
    },
    {
      title: "Master Gestion et Expertise Commerciale (GEC)",
      description: "Expertise en stratégies commerciales et marketing avancé",
      duration: "2 ans",
      students: "40 étudiants/an",
      employment: "98%",
      salary: "Excellent",
      skills: ["Stratégie commerciale", "Marketing digital", "Négociation", "Business Development"],
      image: "/images/GC.webp",
    },
    {
      title: "Master Génie Logiciel et Intégration d'Application (GLIA)",
      description: "Formation avancée en développement logiciel et architecture SI",
      duration: "2 ans",
      students: "20 étudiants/an",
      employment: "100%",
      salary: "Excellent",
      skills: ["Développement logiciel", "Architecture SI", "Intégration", "Gestion de projet IT"],
     image: "/images/IG-master.webp",
    },
    {
      title: "Master Système d'Information et d'Aide à la Décision (SIAD)",
      description: "Spécialisation en business intelligence et data analytics",
      duration: "2 ans",
      students: "25 étudiants/an",
      employment: "100%",
      salary: "Excellent",
      skills: ["Business Intelligence", "Data Analytics", "Systèmes décisionnels", "Big Data"],
      image: "/images/IG-master.jpeg",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-20">
        <div className="container mx-auto md:px-8 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Nos Formations</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Découvrez nos formations d'excellence reconnues par les entreprises et adaptées aux enjeux de demain
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600" asChild>
              <Link href="#formations">Découvrir nos formations</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white hover:bg-white text-blue-600 hover:text-blue-600"
              asChild
            >
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section id="formations" className="py-16 bg-white">
        <div className="container mx-auto md:px-8 px-4">
          <Tabs defaultValue="licences" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="licences" className="text-lg">
                Licences (Bac+3)
              </TabsTrigger>
              <TabsTrigger value="masters" className="text-lg">
                Masters (Bac+5)
              </TabsTrigger>
            </TabsList>

            <TabsContent value="licences">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Formations Licence</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Nos licences professionnelles vous préparent à l'insertion professionnelle immédiate ou à la poursuite
                  d'études
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {licences.map((formation, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={formation.image || "/placeholder.svg"}
                        alt={formation.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-blue-600 text-white">Bac+3</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-800">{formation.title}</CardTitle>
                      <CardDescription>{formation.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-blue-600" />
                          {formation.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2 text-blue-600" />
                          {formation.students}
                        </div>
                        <div className="flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                          {formation.employment}
                        </div>
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-2 text-orange-600" />
                          {formation.salary}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Compétences clés :</h4>
                        <div className="flex flex-wrap gap-2">
                          {formation.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">En savoir plus</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="masters">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Formations Master</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Nos masters vous permettent d'acquérir une expertise de haut niveau et d'accéder aux postes à
                  responsabilités
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {masters.map((formation, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={formation.image || "/placeholder.svg"}
                        alt={formation.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-orange-600 text-white">Bac+5</Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-blue-800">{formation.title}</CardTitle>
                      <CardDescription>{formation.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-blue-600" />
                          {formation.duration}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2 text-blue-600" />
                          {formation.students}
                        </div>
                        <div className="flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                          {formation.employment}
                        </div>
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-2 text-orange-600" />
                          {formation.salary}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Compétences clés :</h4>
                        <div className="flex flex-wrap gap-2">
                          {formation.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">En savoir plus</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto md:px-8 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Processus d'Admission</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Découvrez les étapes pour intégrer nos formations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>1. Candidature</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Déposez votre dossier de candidature en ligne avec vos relevés de notes et lettre de motivation
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle>2. Sélection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Étude de votre dossier par notre commission d'admission et entretien de motivation si nécessaire
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>3. Intégration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Confirmation de votre admission et début de votre parcours d'excellence à l'IUT
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600" asChild>
              <Link href="/contact">Candidater maintenant</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
