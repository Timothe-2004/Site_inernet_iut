import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Search, Filter, Download, ExternalLink, Calendar, Users, Award } from "lucide-react"

export default function PublicationsPage() {
  const publications = [
    {
      titre: "L'inclusion financière au Bénin : défis et opportunités",
      auteurs: ["Dr. Adjovi BOCO", "Prof. Mariam KORA"],
      revue: "Revue Africaine de Finance et de Développement",
      annee: "2024",
      type: "Article de revue",
      resume:
        "Cette étude analyse les mécanismes d'inclusion financière au Bénin et propose des stratégies pour améliorer l'accès aux services financiers pour les populations rurales.",
      motsCles: ["Inclusion financière", "Microfinance", "Développement rural", "Bénin"],
      citations: 12,
      doi: "10.1234/rafd.2024.001",
      pdf: "/placeholder.pdf",
    },
    {
      titre: "Entrepreneuriat féminin et développement économique en Afrique de l'Ouest",
      auteurs: ["Prof. Mariam KORA", "Dr. Aminata TRAORE"],
      revue: "Journal of African Business Studies",
      annee: "2024",
      type: "Article de revue",
      resume:
        "Analyse comparative de l'entrepreneuriat féminin dans cinq pays d'Afrique de l'Ouest et son impact sur le développement économique régional.",
      motsCles: ["Entrepreneuriat féminin", "Développement économique", "Afrique de l'Ouest", "Genre"],
      citations: 8,
      doi: "10.1234/jabs.2024.002",
      pdf: "/placeholder.pdf",
    },
    {
      titre: "Digitalisation des PME béninoises : enjeux et perspectives",
      auteurs: ["Dr. Rachid ALASSANE", "Dr. Emmanuel DOSSOU"],
      revue: "Revue Internationale de Management et Innovation",
      annee: "2023",
      type: "Article de revue",
      resume:
        "Étude sur l'adoption des technologies numériques par les PME au Bénin et les facteurs de succès de leur transformation digitale.",
      motsCles: ["Digitalisation", "PME", "Transformation numérique", "Bénin"],
      citations: 15,
      doi: "10.1234/rimi.2023.003",
      pdf: "/placeholder.pdf",
    },
    {
      titre: "Optimisation des chaînes logistiques en Afrique subsaharienne",
      auteurs: ["Prof. Fatima MOUSSA", "Dr. Sèdjro HOUNTON"],
      revue: "African Journal of Supply Chain Management",
      annee: "2023",
      type: "Article de revue",
      resume:
        "Proposition d'un modèle d'optimisation des chaînes logistiques adapté aux contraintes infrastructurelles de l'Afrique subsaharienne.",
      motsCles: ["Supply Chain", "Logistique", "Optimisation", "Afrique subsaharienne"],
      citations: 20,
      doi: "10.1234/ajscm.2023.004",
      pdf: "/placeholder.pdf",
    },
    {
      titre: "Intelligence artificielle appliquée à l'agriculture béninoise",
      auteurs: ["Dr. Emmanuel DOSSOU", "Dr. Rachid ALASSANE"],
      revue: "Conférence Internationale sur l'IA en Afrique",
      annee: "2023",
      type: "Communication de conférence",
      resume:
        "Présentation d'une application mobile utilisant l'IA pour aider les agriculteurs béninois dans la gestion de leurs cultures.",
      motsCles: ["Intelligence artificielle", "Agriculture", "Application mobile", "Bénin"],
      citations: 5,
      doi: "10.1234/ciia.2023.005",
      pdf: "/placeholder.pdf",
    },
    {
      titre: "Normes comptables OHADA et gouvernance d'entreprise",
      auteurs: ["Dr. Kossi AGBODJI"],
      revue: "Revue de Comptabilité et Audit Africain",
      annee: "2023",
      type: "Article de revue",
      resume:
        "Analyse de l'impact des normes comptables OHADA sur la gouvernance des entreprises en Afrique francophone.",
      motsCles: ["OHADA", "Comptabilité", "Gouvernance", "Afrique francophone"],
      citations: 18,
      doi: "10.1234/rcaa.2023.006",
      pdf: "/placeholder.pdf",
    },
    {
      titre: "E-commerce et transformation du commerce de détail au Bénin",
      auteurs: ["Dr. Sèdjro HOUNTON", "Prof. Mariam KORA"],
      revue: "Cahiers du Commerce Électronique Africain",
      annee: "2022",
      type: "Article de revue",
      resume:
        "Étude de l'évolution du commerce électronique au Bénin et de son impact sur les pratiques commerciales traditionnelles.",
      motsCles: ["E-commerce", "Commerce de détail", "Transformation digitale", "Bénin"],
      citations: 22,
      doi: "10.1234/ccea.2022.007",
      pdf: "/placeholder.pdf",
    },
    {
      titre: "Management interculturel dans les organisations africaines",
      auteurs: ["Dr. Aminata TRAORE", "Prof. Mariam KORA"],
      revue: "African Management Review",
      annee: "2022",
      type: "Article de revue",
      resume:
        "Analyse des défis du management interculturel dans les organisations multinationales opérant en Afrique.",
      motsCles: ["Management interculturel", "Organisations", "Afrique", "Diversité culturelle"],
      citations: 14,
      doi: "10.1234/amr.2022.008",
      pdf: "/placeholder.pdf",
    },
  ]

  const ouvrages = [
    {
      titre: "Manuel de Gestion Bancaire en Afrique de l'Ouest",
      auteurs: ["Dr. Adjovi BOCO"],
      editeur: "Éditions Universitaires Africaines",
      annee: "2023",
      pages: "320 pages",
      isbn: "978-2-123456-78-9",
      resume:
        "Ouvrage de référence sur les pratiques bancaires en Afrique de l'Ouest, destiné aux étudiants et professionnels du secteur financier.",
    },
    {
      titre: "Entrepreneuriat et Innovation en Afrique",
      auteurs: ["Prof. Mariam KORA", "Dr. Aminata TRAORE"],
      editeur: "Presses Universitaires du Bénin",
      annee: "2022",
      pages: "280 pages",
      isbn: "978-2-123456-79-0",
      resume:
        "Analyse des écosystèmes entrepreneuriaux africains et des facteurs d'innovation dans le contexte économique continental.",
    },
    {
      titre: "Logistique et Transport en Afrique Subsaharienne",
      auteurs: ["Prof. Fatima MOUSSA"],
      editeur: "Éditions Harmattan Afrique",
      annee: "2021",
      pages: "350 pages",
      isbn: "978-2-123456-80-6",
      resume:
        "Étude approfondie des systèmes de transport et de logistique en Afrique subsaharienne avec des propositions d'amélioration.",
    },
  ]

  const theses = [
    {
      titre: "Impact de la digitalisation sur la performance des PME béninoises",
      auteur: "AKPOVI Jean-Baptiste",
      directeur: "Dr. Rachid ALASSANE",
      annee: "2023",
      type: "Thèse de Doctorat",
      universite: "Université d'Abomey-Calavi",
      resume:
        "Thèse analysant l'impact de l'adoption des technologies numériques sur la performance économique des PME au Bénin.",
    },
    {
      titre: "Microfinance et réduction de la pauvreté en milieu rural béninois",
      auteur: "DOSSOU Marie-Claire",
      directeur: "Dr. Adjovi BOCO",
      annee: "2022",
      type: "Thèse de Doctorat",
      universite: "Université de Parakou",
      resume:
        "Recherche sur l'efficacité des institutions de microfinance dans la lutte contre la pauvreté rurale au Bénin.",
    },
    {
      titre: "Stratégies marketing pour les entreprises agroalimentaires en Afrique de l'Ouest",
      auteur: "KONE Abdoulaye",
      directeur: "Dr. Sèdjro HOUNTON",
      annee: "2022",
      type: "Thèse de Doctorat",
      universite: "Université de Lomé",
      resume:
        "Développement de stratégies marketing adaptées aux spécificités du secteur agroalimentaire ouest-africain.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-12 sm:py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/placeholder.svg?height=600&width=1200" alt="Publications IUT" fill className="object-cover" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Publications & Travaux
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Découvrez les publications scientifiques et travaux de recherche de nos enseignants-chercheurs
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-6 sm:mb-8 text-sm sm:text-base">
            <Button variant="link" className="text-white p-0 h-auto" asChild>
              <Link href="/recherche">Recherche</Link>
            </Button>
            <span className="text-white">/</span>
            <Button variant="link" className="text-white p-0 h-auto" disabled>
              Publications
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <BookOpen className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1 sm:mb-2">150+</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Publications</div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-1 sm:mb-2">25+</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Chercheurs</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-orange-600 mb-1 sm:mb-2">500+</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Citations</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-1 sm:mb-2">2024</div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">Dernière publication</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-6 sm:py-8 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {/* Search Bar */}
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                placeholder="Rechercher une publication..." 
                className="pl-10 w-full text-sm sm:text-base" 
              />
            </div>
            
            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-gray-600 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-600 hidden sm:inline">Filtres:</span>
                </div>
                <div className="flex gap-2 sm:gap-4 flex-1 sm:flex-initial">
                  <Select>
                    <SelectTrigger className="flex-1 sm:w-[120px] text-sm">
                      <SelectValue placeholder="Année" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2023">2023</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                      <SelectItem value="2021">2021</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="flex-1 sm:w-[140px] text-sm">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="article">Article de revue</SelectItem>
                      <SelectItem value="conference">Communication</SelectItem>
                      <SelectItem value="ouvrage">Ouvrage</SelectItem>
                      <SelectItem value="these">Thèse</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Tabs */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 sm:mb-12 h-auto">
              <TabsTrigger value="articles" className="text-xs sm:text-sm lg:text-base p-2 sm:p-3">
                <span className="hidden sm:inline">Articles & Communications</span>
                <span className="sm:hidden">Articles</span>
              </TabsTrigger>
              <TabsTrigger value="ouvrages" className="text-xs sm:text-sm lg:text-base p-2 sm:p-3">
                Ouvrages
              </TabsTrigger>
              <TabsTrigger value="theses" className="text-xs sm:text-sm lg:text-base p-2 sm:p-3">
                <span className="hidden sm:inline">Thèses dirigées</span>
                <span className="sm:hidden">Thèses</span>
              </TabsTrigger>
            </TabsList>

            {/* Articles Tab */}
            <TabsContent value="articles">
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 sm:p-6">
                      {/* Mobile Layout */}
                      <div className="block sm:hidden space-y-4">
                        <div className="flex items-start justify-between">
                          <Badge className="text-xs">{pub.type}</Badge>
                          <div className="text-xs text-gray-500 text-right">
                            <div>{pub.citations} citations</div>
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">{pub.titre}</h3>
                          <p className="text-sm text-gray-600 mb-2">
                            <strong>Auteurs :</strong> {pub.auteurs.join(", ")}
                          </p>
                          <p className="text-sm text-blue-600 font-medium mb-3">
                            {pub.revue} ({pub.annee})
                          </p>
                          <p className="text-sm text-gray-600 mb-4 line-clamp-3">{pub.resume}</p>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold mb-2 text-sm">Mots-clés :</h4>
                          <div className="flex flex-wrap gap-1">
                            {pub.motsCles.map((mot, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {mot}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2">
                          <Button variant="outline" size="sm" className="flex-1 text-xs">
                            <Download className="w-3 h-3 mr-2" />
                            PDF
                          </Button>
                          <Button variant="outline" size="sm" className="flex-1 text-xs">
                            <ExternalLink className="w-3 h-3 mr-2" />
                            En ligne
                          </Button>
                        </div>
                      </div>

                      {/* Desktop Layout */}
                      <div className="hidden sm:block">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1 pr-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{pub.titre}</h3>
                            <p className="text-gray-600 mb-2">
                              <strong>Auteurs :</strong> {pub.auteurs.join(", ")}
                            </p>
                            <p className="text-blue-600 font-medium mb-2">
                              {pub.revue} ({pub.annee})
                            </p>
                            <p className="text-gray-600 mb-4">{pub.resume}</p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <Badge className="mb-2">{pub.type}</Badge>
                            <div className="text-sm text-gray-500">
                              <div>{pub.citations} citations</div>
                              <div>DOI: {pub.doi}</div>
                            </div>
                          </div>
                        </div>

                        <div className="mb-4">
                          <h4 className="font-semibold mb-2">Mots-clés :</h4>
                          <div className="flex flex-wrap gap-2">
                            {pub.motsCles.map((mot, i) => (
                              <Badge key={i} variant="outline">
                                {mot}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center space-x-4">
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4 mr-2" />
                            Télécharger PDF
                          </Button>
                          <Button variant="outline" size="sm">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Voir en ligne
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Ouvrages Tab */}
            <TabsContent value="ouvrages">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                {ouvrages.map((ouvrage, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <CardTitle className="text-base sm:text-lg leading-tight">{ouvrage.titre}</CardTitle>
                      <CardDescription className="text-sm">
                        <strong>Auteur(s) :</strong>{" "}
                        {Array.isArray(ouvrage.auteurs) ? ouvrage.auteurs.join(", ") : ouvrage.auteurs}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-2 sm:space-y-3 text-sm">
                        <div>
                          <strong>Éditeur :</strong> {ouvrage.editeur}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:gap-4">
                          <div><strong>Année :</strong> {ouvrage.annee}</div>
                          <div><strong>Pages :</strong> {ouvrage.pages}</div>
                        </div>
                        <div>
                          <strong>ISBN :</strong> {ouvrage.isbn}
                        </div>
                        <div>
                          <strong>Résumé :</strong>
                          <p className="text-gray-600 mt-1 text-sm leading-relaxed">{ouvrage.resume}</p>
                        </div>
                        <Button variant="outline" className="w-full mt-4 text-sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Voir chez l'éditeur
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Thèses Tab */}
            <TabsContent value="theses">
              <div className="space-y-6">
                {theses.map((these, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-4 sm:p-6">
                      {/* Mobile Layout */}
                      <div className="block sm:hidden space-y-4">
                        <div className="flex items-start justify-between">
                          <Badge className="text-xs">{these.type}</Badge>
                          <div className="text-xs text-gray-500">{these.annee}</div>
                        </div>
                        
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800 mb-2 leading-tight">{these.titre}</h3>
                          <div className="space-y-1 text-sm text-gray-600">
                            <p><strong>Doctorant :</strong> {these.auteur}</p>
                            <p><strong>Directeur :</strong> {these.directeur}</p>
                            <p><strong>Université :</strong> {these.universite}</p>
                          </div>
                          <p className="text-sm text-gray-600 mt-3 line-clamp-3">{these.resume}</p>
                        </div>

                        <Button variant="outline" size="sm" className="w-full text-xs">
                          <Download className="w-3 h-3 mr-2" />
                          Télécharger résumé
                        </Button>
                      </div>

                      {/* Desktop Layout */}
                      <div className="hidden sm:block">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1 pr-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{these.titre}</h3>
                            <p className="text-gray-600 mb-2">
                              <strong>Doctorant :</strong> {these.auteur}
                            </p>
                            <p className="text-blue-600 font-medium mb-2">
                              <strong>Directeur de thèse :</strong> {these.directeur}
                            </p>
                            <p className="text-gray-600 mb-2">
                              <strong>Université :</strong> {these.universite}
                            </p>
                            <p className="text-gray-600 mb-4">{these.resume}</p>
                          </div>
                          <div className="text-right flex-shrink-0">
                            <Badge className="mb-2">{these.type}</Badge>
                            <div className="text-sm text-gray-500">{these.annee}</div>
                          </div>
                        </div>

                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Télécharger résumé
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
            Contribuez à la recherche
          </h2>
          <p className="text-base sm:text-lg text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Rejoignez nos équipes de recherche et participez à l'avancement des connaissances dans votre domaine
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold w-full sm:w-auto"
              asChild
            >
              <Link href="/contact">Proposer une collaboration</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold w-full sm:w-auto"
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