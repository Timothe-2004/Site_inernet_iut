import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Building, GraduationCap } from "lucide-react"

export default function HistoirePage() {
  const timeline = [
    {
      year: "2001",
      title: "Fondation de l'IUT",
      description: "Création de l'Institut Universitaire de Technologie avec 3 formations initiales",
      image: "/images/decanat.jpeg",
    },
    {
      year: "2017",
      title: "Ouverture des masters",
      description: "Extension des formations avec l'ajout de masters professionnels et recherche",
      image: "/images/etudiants-dans-la-cour.jpeg",
    },
    {
      year: "2020",
      title: "Construction du nouveau bloc administratif",
      description: "Inauguration d'un bâtiment moderne pour accueillir les services administratifs et pédagogiques",
      image: "/images/decanat.jpeg",
    },
    {
      year: "2021",
      title: "Inauguration de la salle numérique",
      description: "Mise en place d'une salle équipée de technologies avancées pour l'enseignement numérique",
      image: "/images/inauguration-salle-numérique.jpeg",
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-20">
        <div className="container mx-auto md:px-8 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Histoire & Mission</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Découvrez l'histoire de l'IUT, notre évolution et les valeurs qui nous animent
          </p>
          <div className="flex space-x-2 justify-center">
            <Button variant="link" className="text-white" asChild>
              <Link href="/a-propos">À Propos</Link>
            </Button>
            <span className="text-white">/</span>
            <Button variant="link" className="text-white" disabled>
              Histoire & Mission
            </Button>
          </div>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-16 bg-white">
        <div className="container mx-auto md:px-8 px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Notre Histoire</h2>
              <p className="text-lg text-gray-600 mb-6">
                Fondé en 2001, l'Institut Universitaire de Technologie est né de la volonté de créer un établissement
                d'enseignement supérieur alliant excellence académique et professionnalisation. Au fil des années, l'IUT
                s'est développé pour devenir une référence dans la formation de cadres et d'experts dans les domaines de
                la technologie, de la gestion et du commerce.
              </p>
              <p className="text-lg text-gray-600">
                Notre croissance constante témoigne de notre capacité à nous adapter aux évolutions du marché du travail
                et aux besoins des entreprises, tout en maintenant un niveau d'exigence élevé dans nos formations.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden">
              <Image
                src="/images/decanat.jpeg"
                alt="Histoire de l'IUT"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Timeline détaillée */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Notre Évolution</h2>
            <div className="space-y-16">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="md:w-1/2">
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                  </div>
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{item.year}</div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">{item.title}</h3>
                    <p className="text-lg text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Notre Mission */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto md:px-8 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Notre Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'IUT a pour mission de former des professionnels compétents, créatifs et responsables, capables de
              relever les défis du monde contemporain et de contribuer positivement à la société.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Formation d'Excellence</h3>
                <p className="text-gray-600 mb-4">
                  Nous nous engageons à offrir des formations de haute qualité, alliant théorie et pratique, pour
                  préparer nos étudiants aux exigences du monde professionnel. Nos programmes sont constamment mis à
                  jour pour intégrer les dernières avancées technologiques et les meilleures pratiques du secteur.
                </p>
                <p className="text-gray-600">
                  Notre approche pédagogique privilégie l'apprentissage par projet, les études de cas réels et les
                  stages en entreprise pour garantir une expérience d'apprentissage complète et pertinente.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">Recherche & Innovation</h3>
                <p className="text-gray-600 mb-4">
                  Notre institut s'engage dans la recherche appliquée et fondamentale pour contribuer à l'avancement des
                  connaissances et au développement de solutions innovantes aux défis contemporains.
                </p>
                <p className="text-gray-600">
                  Nos laboratoires de recherche travaillent en étroite collaboration avec des partenaires industriels et
                  académiques, créant un écosystème d'innovation qui bénéficie à nos étudiants, à nos chercheurs et à la
                  société dans son ensemble.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Nos Valeurs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ces valeurs fondamentales guident toutes nos actions et décisions au quotidien.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto md:px-8 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Partagez Notre Vision</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Rejoignez notre communauté et participez à l'aventure de l'excellence académique et de l'innovation
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
              className="border-white text-blue-600 hover:bg-blue-500 hover:text-white px-8 py-3 text-lg font-semibold"
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
