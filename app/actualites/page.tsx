import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Calendar, Clock, User, Search, Filter } from "lucide-react"
import Link from "next/link"

export default function ActualitesPage() {
  // const featuredNews = {
  //   title: "L'IUT obtient la certification ISO 9001:2015",
  //   excerpt: "Une reconnaissance de l'excellence de nos formations et de notre engagement qualité",
  //   content:
  //     "L'Institut Universitaire de Technologie vient d'obtenir la prestigieuse certification ISO 9001:2015, témoignant de la qualité exceptionnelle de ses formations et de son système de management. Cette certification confirme notre engagement constant vers l'amélioration continue et la satisfaction de nos étudiants.",
  //   category: "Qualité",
  //   date: "15 Nov 2024",
  //   author: "Direction de l'IUT",
  //   image: "/placeholder.svg?height=400&width=600",
  //   readTime: "3 min",
  // }

  const allNews = [
    {
      title: "Inauguration de la salle numérique de l'IUT de Parakou",
      excerpt: "L’une des priorités du gouvernement contenu dans son programme d’actions, est la généralisation de l’usage du numérique dans le système éducatif béninois",
      category: "Evénement",
      date: "15 Nov 2024",
      author: "Gouvernement du Bénin",
      image: "/images/etudiants-en-salle-2.webp",
      readTime: "3 min",
       link: "https://www.gouv.bj/article/1708/mise-service-deux-salles-numeriques-parakou-gouvernement-facilite-etudiants-personnes-vivant-avec-handicap-visuel/",
    },
    {
      title: "Cybersécurité : 35 étudiantes de l'IUT et de la FASEG formé",
      excerpt: "Du lundi 24 au vendredi 28 avril 2023, 35 étudiantes de la Faculté des Sciences Économiques et de Gestion (Faseg) et de l’Institut Universitaire de Technologie (Iut)",
      category: "Événement",
      date: "10 Nov 2024",
      author: "Daabaaru",
      image: "/images/etudiants-en-salle-1.webp",
      readTime: "1 min",
      link: "https://daabaaru.bj/cybersecurite-au-benin-35-etudiantes-de-la-faseg-et-de-liut-de-lup-formees/",
    },
    {
      title: "L’innovation numérique célébrée lors de la JEIG 2025",
      excerpt: "Une journée d’échanges sur l’innovation numérique a rassemblé plus de 200 étudiants à l’Université de Parakou, portée par l’Association des Étudiants en Informatique de Gestion avec le soutien de partenaires tech.",
      category: "Réussite",
      date: "8 Nov 2024",
      author: "Département Informatique",
      image: "/images/etudiants-a-JEIG.jpeg",
      readTime: "4 min",
      link: "https://www.linkedin.com/company/isocbenin/posts/?feedView=all",
    },
  ]

  const categories = ["Tous", "Qualité", "Partenariat", "Événement", "Réussite", "Recherche", "International"]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Actualités & Événements</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Suivez toute l'actualité de l'IUT et ne manquez aucun événement important
          </p>
        </div>
      </section>

      {/* Featured News */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">À la Une</h2>
          </div>
          <Card className="overflow-hidden max-w-4xl mx-auto">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src={featuredNews.image || "/placeholder.svg"}
                  alt={featuredNews.title}
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <Badge className="bg-blue-600 text-white">{featuredNews.category}</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {featuredNews.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {featuredNews.readTime}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{featuredNews.title}</h3>
                <p className="text-gray-600 mb-4">{featuredNews.excerpt}</p>
                <p className="text-gray-600 mb-6">{featuredNews.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-1" />
                    {featuredNews.author}
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700">Lire l'article complet</Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section> */}

      {/* Search and Filter */}
      {/* <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Rechercher dans les actualités..." className="pl-10" />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={category === "Tous" ? "default" : "outline"}
                    size="sm"
                    className={category === "Tous" ? "bg-blue-600 hover:bg-blue-700" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* All News */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Toutes les Actualités</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-blue-600 text-white">{article.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-blue-800 line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      {article.author}
                    </div>
                    <Link href={article.link || "#"}>
                     <Button variant="outline" size="sm">
                      Lire plus
                    </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <Button variant="outline" disabled>
                Précédent
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">1</Button>
              <Button variant="outline">2</Button>
              <Button variant="outline">3</Button>
              <Button variant="outline">Suivant</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
