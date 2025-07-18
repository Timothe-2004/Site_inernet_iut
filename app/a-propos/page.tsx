import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, BookOpen, Building, GraduationCap } from "lucide-react"

export default function AProposPage() {
  const timeline = [
    {
      year: "2001",
      title: "Fondation de l'IUT",
      description: "Création de l'Institut Universitaire de Technologie avec 3 formations initiales",
    },
    {
      year: "2005",
      title: "Expansion des formations",
      description: "Ajout de 5 nouvelles filières et ouverture du premier laboratoire de recherche",
    },
    {
      year: "2010",
      title: "Internationalisation",
      description: "Premiers partenariats internationaux et programmes d'échange avec des universités étrangères",
    },
    {
      year: "2015",
      title: "Nouveau campus",
      description: "Inauguration du campus moderne avec des infrastructures de pointe",
    },
    {
      year: "2020",
      title: "Excellence académique",
      description: "Reconnaissance nationale pour la qualité des formations et de la recherche",
    },
    {
      year: "2023",
      title: "Innovation technologique",
      description: "Lancement du pôle d'innovation et de l'incubateur de startups",
    },
  ]

  const values = [
    {
      icon: BookOpen,
      title: "Excellence académique",
      description: "Nous visons l'excellence dans tous nos programmes d'enseignement et de recherche",
    },
    {
      icon: Users,
      title: "Inclusion et diversité",
      description: "Nous valorisons la diversité des profils et des parcours au sein de notre communauté",
    },
    {
      icon: Building,
      title: "Ancrage professionnel",
      description: "Nos formations sont conçues en étroite collaboration avec le monde de l'entreprise",
    },
    {
      icon: GraduationCap,
      title: "Innovation pédagogique",
      description: "Nous développons constamment de nouvelles approches pédagogiques adaptées aux enjeux actuels",
    },
  ]

  const directors = [
    {
      name: "Prof. Aboubacar Kissira",
      role: "Directeur",
      bio: "Professeur des universités",
      image: "/images/Directeur.webp",
    },
    {
      name: "Prof. Lokonon Boris",
      role: "Directeur Adjoint",
      bio: "Maître de Conférences agrégé",
      image: "/images/DA.webp",
    },
    {
      name: "Dr. Sophie Legrand",
      role: "Directrice de la Recherche",
      bio: "Chercheuse reconnue en intelligence artificielle, auteure de nombreuses publications scientifiques internationales",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      name: "M. Pierre Dubois",
      role: "Directeur des Relations Entreprises",
      bio: "Ancien cadre dirigeant dans le secteur bancaire, spécialiste des partenariats public-privé",
      image: "/placeholder.svg?height=150&width=150",
    },
  ]

  const distinctions = [
    {
      year: "2023",
      title: "Certification ISO 9001:2015",
      description: "Reconnaissance de l'excellence de notre système de management de la qualité",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      year: "2022",
      title: "Label Grande École du Numérique",
      description: "Reconnaissance nationale pour nos formations en informatique et technologies digitales",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      year: "2021",
      title: "Prix de l'Innovation Pédagogique",
      description: "Décerné par le Ministère de l'Enseignement Supérieur pour nos méthodes d'apprentissage innovantes",
      logo: "/placeholder.svg?height=80&width=80",
    },
    {
      year: "2020",
      title: "Classement SMBG",
      description: "Top 5 des meilleures formations en management et gestion d'entreprise",
      logo: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-20">
        <div className="container mx-auto md:px-8 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">À Propos de l'IUT</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Découvrez notre histoire, nos valeurs et notre engagement pour l'excellence académique
          </p>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto md:px-8 px-4">
          <Tabs defaultValue="histoire" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="histoire" className="text-lg">
                Histoire & Mission
              </TabsTrigger>
              <TabsTrigger value="gouvernance" className="text-lg">
                Gouvernance
              </TabsTrigger>
              <TabsTrigger value="distinctions" className="text-lg">
                Distinctions
              </TabsTrigger>
            </TabsList>

            {/* Histoire & Mission Tab */}
            <TabsContent value="histoire">
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Notre Histoire</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    Fondé en 2001, l'Institut Universitaire de Technologie est né de la volonté de créer un
                    établissement d'enseignement supérieur alliant excellence académique et professionnalisation. Au fil
                    des années, l'IUT s'est développé pour devenir une référence dans la formation de cadres et
                    d'experts dans les domaines de la technologie, de la gestion et du commerce.
                  </p>
                  <p className="text-lg text-gray-600">
                    Notre croissance constante témoigne de notre capacité à nous adapter aux évolutions du marché du
                    travail et aux besoins des entreprises, tout en maintenant un niveau d'exigence élevé dans nos
                    formations.
                  </p>
                </div>
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Histoire de l'IUT"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Timeline */}
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Notre Évolution</h2>
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

                  {/* Timeline Items */}
                  <div className="space-y-12">
                    {timeline.map((item, index) => (
                      <div
                        key={index}
                        className={`relative flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                      >
                        {/* Timeline Dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white z-10"></div>

                        {/* Content */}
                        <div
                          className={`w-5/12 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"} relative z-20`}
                        >
                          <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-2xl font-bold text-blue-600 mb-2">{item.year}</div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mission & Values */}
              <div>
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre Mission & Nos Valeurs</h2>
                  <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                    Notre mission est de former des professionnels compétents, créatifs et responsables, capables de
                    relever les défis du monde contemporain et de contribuer positivement à la société.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {values.map((value, index) => {
                    const IconComponent = value.icon
                    return (
                      <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <IconComponent className="w-8 h-8 text-blue-600" />
                          </div>
                          <CardTitle>{value.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600">{value.description}</p>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            </TabsContent>

            {/* Gouvernance Tab */}
            <TabsContent value="gouvernance">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Notre Gouvernance</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  L'IUT est dirigé par une équipe de professionnels expérimentés, engagés dans l'excellence académique
                  et l'innovation pédagogique.
                </p>
              </div>

              {/* Direction */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Équipe de Direction</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {directors.map((director, index) => (
                    <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="mx-auto mb-4 relative w-32 h-32 rounded-full overflow-hidden">
                          <Image
                            src={director.image || "/placeholder.svg"}
                            alt={director.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardTitle>{director.name}</CardTitle>
                        <CardDescription className="text-blue-600 font-medium">{director.role}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">{director.bio}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Organigramme */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Organigramme</h3>
                <div className="bg-gray-100 p-8 rounded-lg">
                  <div className="text-center mb-8">
                    <div className="inline-block bg-blue-600 text-white p-4 rounded-lg">
                      <p className="font-bold">Direction Générale</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="text-center">
                      <div className="bg-blue-500 text-white p-3 rounded-lg">
                        <p className="font-medium">Direction des Études</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-500 text-white p-3 rounded-lg">
                        <p className="font-medium">Direction de la Recherche</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-500 text-white p-3 rounded-lg">
                        <p className="font-medium">Direction Relations Entreprises</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="bg-blue-400 text-white p-2 rounded-lg">
                        <p className="font-medium">Département Informatique</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-400 text-white p-2 rounded-lg">
                        <p className="font-medium">Département Gestion</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-400 text-white p-2 rounded-lg">
                        <p className="font-medium">Département Commerce</p>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="bg-blue-400 text-white p-2 rounded-lg">
                        <p className="font-medium">Services Administratifs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conseil d'Administration */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Conseil d'Administration</h3>
                <Card>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-6">
                      Le Conseil d'Administration de l'IUT est composé de représentants du monde académique, du secteur
                      privé et des collectivités territoriales. Il définit la stratégie de l'établissement et veille à
                      sa mise en œuvre.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-4">Membres académiques</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Représentants du corps professoral</li>
                          <li>Représentants des chercheurs</li>
                          <li>Représentants du personnel administratif</li>
                          <li>Représentants des étudiants</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg mb-4">Membres externes</h4>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                          <li>Dirigeants d'entreprises partenaires</li>
                          <li>Représentants des collectivités locales</li>
                          <li>Experts du secteur éducatif</li>
                          <li>Anciens diplômés</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Distinctions Tab */}
            <TabsContent value="distinctions">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Nos Distinctions</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  L'IUT est fier d'avoir reçu de nombreuses reconnaissances témoignant de la qualité de ses formations
                  et de sa recherche.
                </p>
              </div>

              {/* Certifications */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Certifications & Accréditations</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {distinctions.map((distinction, index) => (
                    <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                      <div className="flex p-6">
                        <div className="mr-6">
                          <div className="w-20 h-20 bg-gray-100 rounded-lg flex items-center justify-center">
                            <Image
                              src={distinction.logo || "/placeholder.svg"}
                              alt={distinction.title}
                              width={80}
                              height={80}
                              className="object-contain"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-sm text-blue-600 font-medium mb-1">{distinction.year}</div>
                          <h4 className="text-xl font-semibold text-gray-800 mb-2">{distinction.title}</h4>
                          <p className="text-gray-600">{distinction.description}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Classements */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Classements</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="text-center">
                    <CardHeader>
                      <div className="text-4xl font-bold text-blue-600 mb-2">Top 5</div>
                      <CardTitle>Meilleures Écoles de Gestion</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Classement national des écoles de gestion 2023</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardHeader>
                      <div className="text-4xl font-bold text-blue-600 mb-2">Top 10</div>
                      <CardTitle>Écoles d'Informatique</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Classement des formations en informatique 2023</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardHeader>
                      <div className="text-4xl font-bold text-blue-600 mb-2">Top 15</div>
                      <CardTitle>Établissements Européens</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">Classement européen des établissements innovants 2022</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Success Stories */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Success Stories</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">
                        Prix de l'Innovation Pédagogique 2021
                      </h4>
                      <p className="text-gray-600 mb-4">
                        Notre approche "Learning by Doing" a été récompensée pour son efficacité et son caractère
                        innovant. Cette méthode, qui place l'étudiant au cœur de projets concrets, a démontré des
                        résultats exceptionnels en termes d'acquisition de compétences et d'insertion professionnelle.
                      </p>
                      <Button variant="outline" className="mt-2">
                        En savoir plus
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold text-gray-800 mb-4">Incubateur de l'Année 2022</h4>
                      <p className="text-gray-600 mb-4">
                        Notre incubateur de startups a été reconnu comme le plus performant de sa catégorie, avec plus
                        de 30 entreprises lancées en 3 ans et un taux de survie à 5 ans de 85%. Plusieurs de nos
                        startups ont levé des fonds significatifs et connaissent une croissance internationale.
                      </p>
                      <Button variant="outline" className="mt-2">
                        En savoir plus
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto md:px-8 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Rejoignez l'Excellence</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Découvrez nos formations d'excellence et devenez acteur de votre réussite professionnelle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold"
              asChild
            >
              <Link href="/formations">Découvrir nos formations</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold"
              asChild
            >
              <Link href="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
