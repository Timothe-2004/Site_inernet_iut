import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function GouvernancePage() {
  const directors = [
     {
      name: "Prof. Aboubacar Kissira",
      role: "Directeur",
      bio: "Professeur Titulaires",
      image: "/images/Directeur.webp",
    },
     {
      name: "Prof. Lokonon Boris",
      role: "Directeur Adjoint",
      bio: "Maître de Conférences agrégé",
      image: "/images/DA.webp",
    },
    {
      name: "Mme. Clotide GANVO",
      role: "Directrice de la Recherche",
      bio: "Spécialiste en Genre et Inclusion Sociale",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Mme...",
      role: "Chef Division Scolarité",
      bio: "...",
      image: "/placeholder.svg?height=300&width=300",
    },
      {
      name: "Mr...",
      role: "Comptable",
      bio: "...",
      image: "/placeholder.svg?height=300&width=300",
    },
        {
      name: "Mr...",
      role: "Comptable Ad",
      bio: "...",
      image: "/placeholder.svg?height=300&width=300",
    }
  ]

  const departments = [
    {
      name: "Département Informatique",
      head: "Prof. Jean Leroy",
      programs: ["Licence Informatique", "Master Cybersécurité", "Master Data Science"],
      description:
        "Le département Informatique forme des experts en développement logiciel, cybersécurité, intelligence artificielle et gestion de données. Nos laboratoires de pointe permettent aux étudiants de travailler sur des projets concrets avec des technologies de dernière génération.",
    },
    {
      name: "Département Gestion",
      head: "Prof. Claire Moreau",
      programs: ["Licence Gestion d'Entreprise", "Master Management Digital", "Master Finance"],
      description:
        "Le département Gestion prépare les futurs managers et dirigeants d'entreprise. Nos formations allient théorie et pratique, avec de nombreuses études de cas, simulations d'entreprise et projets en collaboration avec des entreprises partenaires.",
    },
    {
      name: "Département Commerce",
      head: "Prof. Michel Blanc",
      programs: ["Licence Commerce International", "Master Marketing Digital", "Master Négociation d'Affaires"],
      description:
        "Le département Commerce forme des professionnels du marketing, de la vente et du commerce international. Nos étudiants développent des compétences en négociation, stratégie commerciale et marketing digital, essentielles dans l'économie mondialisée.",
    },
    {
      name: "Services Administratifs",
      head: "Mme. Sylvie Petit",
      departments: ["Scolarité", "Ressources Humaines", "Comptabilité", "Services Généraux"],
      description:
        "Les services administratifs assurent le bon fonctionnement quotidien de l'institut. Ils accompagnent les étudiants dans leurs démarches administratives et veillent à la qualité des infrastructures et des services proposés.",
    },
  ]

  const committees = [
    {
      name: "Conseil d'Administration",
      role: "Définit la stratégie globale de l'établissement",
      meetings: "Trimestriel",
      members: "Direction, représentants académiques, entreprises partenaires, collectivités",
    },
    {
      name: "Conseil Scientifique",
      role: "Oriente la politique de recherche et d'innovation",
      meetings: "Bimestriel",
      members: "Directeurs de recherche, professeurs, chercheurs externes",
    },
    {
      name: "Conseil Pédagogique",
      role: "Supervise la qualité des formations et l'innovation pédagogique",
      meetings: "Mensuel",
      members: "Directeur des études, responsables de formation, représentants étudiants",
    },
    {
      name: "Comité d'Éthique",
      role: "Veille au respect des principes éthiques dans la recherche et l'enseignement",
      meetings: "Trimestriel",
      members: "Professeurs, experts externes, juristes",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-20">
        <div className="container mx-auto md:px-8 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Gouvernance</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Découvrez l'équipe de direction et l'organisation de notre institut
          </p>
          <div className="flex space-x-2 justify-center">
            <Button variant="link" className="text-white" asChild>
              <Link href="/a-propos">À Propos</Link>
            </Button>
            <span className="text-white">/</span>
            <Button variant="link" className="text-white" disabled>
              Gouvernance
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto md:px-8 px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Équipe de Direction</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Notre équipe de direction est composée de professionnels expérimentés, engagés dans l'excellence
                  académique et l'innovation pédagogique.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 mb-16">
                {directors.map((director, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="relative h-64 md:h-full">
                          <Image
                            src={director.image || "/placeholder.svg"}
                            alt={director.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>
                      <div className="md:w-2/3 p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-1">{director.name}</h3>
                        <p className="text-blue-600 font-medium mb-4">{director.role}</p>
                        <p className="text-gray-600">{director.bio}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Mot du Directeur</h3>
                <div className="max-w-3xl mx-auto bg-blue-50 p-8 rounded-lg">
                  <p className="text-gray-600 italic mb-4">
                    "À l'IUT, nous sommes engagés à offrir une éducation d'excellence qui prépare nos étudiants aux
                    défis du monde contemporain. Notre approche pédagogique innovante, combinée à des partenariats
                    solides avec le monde professionnel, permet à nos diplômés de se démarquer sur le marché du travail
                    et de contribuer positivement à la société."
                  </p>
                  <p className="text-gray-800 font-medium">Prof. Aboubacar Kissira, Directeur</p>
                </div>
              </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto md:px-8 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Documents Officiels</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Consultez nos documents officiels pour en savoir plus sur notre gouvernance et notre organisation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Statuts de l'IUT</h3>
                <p className="text-gray-600 mb-4">Les statuts officiels de l'Institut Universitaire de Technologie</p>
                <Button variant="outline">Télécharger (PDF)</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Règlement Intérieur</h3>
                <p className="text-gray-600 mb-4">
                  Le règlement intérieur applicable à l'ensemble de la communauté de l'IUT
                </p>
                <Button variant="outline">Télécharger (PDF)</Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-8 h-8 text-blue-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Charte Éthique</h3>
                <p className="text-gray-600 mb-4">Notre charte éthique définissant nos engagements et nos valeurs</p>
                <Button variant="outline">Télécharger (PDF)</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto md:px-8 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Une Question sur notre Organisation ?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold"
            asChild
          >
            <Link href="/contact">Nous contacter</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
