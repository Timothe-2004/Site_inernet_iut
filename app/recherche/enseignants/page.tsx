import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  BookOpen,
  Mail,
  Phone,
  Search,
  Filter,
  Award,
  Users,
  GraduationCap,
} from "lucide-react";

export default function EnseignantsPage() {
  const enseignants = [
    {
      nom: "Dr. Souleimane Adeyemi ADEKAMBI",
      titre: "Maître de Conférence",
      specialite: "Sciences Agro-economiques",
      departement: "Gestion Commerciale",
      formation: "Doctorat en Agro-economie",
      publications: 8,
      image: "/images/Pr-Adékambi.webp",
      bio: " chercheur en agro-économie, acteur dans l’intégration des petits producteurs agricoles aux marchés à revenus élevés via l’évaluation de politiques agricoles et les stratégies marketing.",
    },
    {
      nom: "Dr. Sosthène AHOTONDJI",
      titre: "Maître Assistant",
      specialite: "Sciences de Gestion",
      departement: "Gestion Commerciales",
      formation: "Doctorat en Science de Gestion",
      publications: 8,
      image: "/placeholder.svg",
      bio: "Spécialiste en comportement du consommateur et en gestion(Expert en. Marketing et Stratégies",
    },
    {
      nom: "Dr. Emile AÏFA",
      titre: "Maître Assistant",
      specialite: "Sciences Economiques",
      departement: "Gestion des Entreprises, Gestion des Banques",
      formation: "Doctorat en Sciences Economiques",
      publications: 8,
      image: "/images/Pr-Aifa.webp",
      bio: "Enseigne et publie sur l’économie agricole, l’entrepreneuriat étudiant, et la rentabilité des cultures vivrières au Bénin.",
    },
    {
      nom: "Dr. Mêton-Mêton ATINDEHOU",
      titre: "Docteur",
      specialite: "Informatique",
      departement: "Informatique de Gestion",
      formation:
        "Doctorat en Sciences de l'Informatique - Université Catholique de Louvain",
      publications: 8,
      image: "/images/Dr-Atindehou.png",
      bio: "Enseignant-chercheur spécialisé en langage formel, avec une expertise approfondie en programmation des systèmes d'information.",
    },
    {
      nom: "Prof. Djaoudath ALIDOU",
      titre: "Maitre de Conférences agrégé",
      specialite: "Sciences de Gestion",
      departement: "Gestion des Entreprises, Gestion des Banques",
      formation: "Doctorat en Sciences de Gestion - Université de Bourgogne",
      publications: 8,
      image: "/images/Pr-Djaoudath.png",
      bio: " professeure agrégée à l’Université de Parakou, coordinatrice nationale du projet SWEDD‑Bénin (empowerment féminin et dividende démographique au Sahel), et ancienne conseillère technique au ministère du Plan.",
    },
    {
      nom: "Dr. Fadonougbo BOKO",
      titre: "Maître Assistant",
      specialite: "Sciences Economique",
      departement: "Gestion des Banques, Gestion des Entreprises",
      formation: "Doctorat en Science Economique",
      publications: 8,
      image: "/images/BOKO.jpg",
      bio: "Expert en microcrédit, instabilité économique et dette des pays en développement.",
    },
    {
      nom: "Dr. Vinablo Kodjo Dominique DAGBELOU",
      titre: "Maître Assistant",
      specialite: "Sciences Agro-economiques",
      departement: "Gestion Commerciale",
      formation: "Doctorat en Agro-economie",
      publications: 8,
      image: "/images/Pr-Dagbelou.png",
      bio: "Acteur dans l’intégration des petits producteurs agricoles aux marchés à revenus élevés via l’évaluation de politiques agricoles et les stratégies marketing.",
    },
    {
      nom: "Dr. Hermine DAMENOU",
      titre: "Maître Assistant",
      specialite: "Management et Entrepreneuriat",
      departement: "Gestion des Ressources Humaines, Gestion Commerciale",
      formation: "Doctorat en Sciences de Gestion - Université de Perpignan",
      publications: 8,
      image: "/images/Pr-Damenou.jpg",
      bio: "Enseignante‑chercheuse en sciences de gestion.",
    },
    {
      nom: "Dr. Fousséni Mama GOMINA",
      titre: "Maître Assistant",
      specialite: "Sciences de Gestion",
      departement: "Gestion des Transports et Logistique",
      formation: "Doctorat en Sciences de Gestion",
      publications: 8,
      image: "/images/Pr-Gomina.png",
      bio: "Enseignant Chercheur expert en commerce international, transport et logistique.",
    },
    {
      nom: "Dr. Messan LIHOUSSOU",
      titre: "Maître de Conférence",
      specialite: "Géographie des Transports",
      departement: "Gestion des Transports et Logistique",
      formation: "Doctorat en géographie des transports",
      publications: 8,
      image: "/images/Pr-Lihoussou.png",
      bio: "Chercheur en logistique agricole et gouvernance portuaire, s’intéresse aux chaînes logistiques dans le Borgou et au transport via corridors régionaux.",
    },
    {
      nom: "Prof. Ange Mikaël MOUSSE",
      titre: "Maître de Conférences",
      specialite: "Informatique",
      departement: "Informatique de Gestion",
      formation:
        "Doctorat en Sciences de Informatique - Université du Litoral Côte D'Opale",
      publications: 8,
      image: "/images/Pr-Moussé.png",
      bio: "Maître de Conférences CAMES et docteur en informatique, spécialisé en vision par ordinateur et apprentissage artificiel. Il enseigne et mène ses recherches à l’Institut Universitaire de Technologie de Parakou depuis 2018.",
    },
    {
      nom: "Prof.  Henri TCHOKPONHOUE",
      titre: "Maître de Conférence",
      specialite: "Ressources Humaines",
      departement: "Gestion des Ressources Humaines",
      formation: "Doctorat en Sciences de Gestion",
      publications: 8,
      image: "/images/Pr-Tchokponhoue.jpg",
      bio: "Enseignant‑chercheur à l’IUT de l’Université de Parakou, spécialisé en gestion des ressources humaines (RH).",
    },
    {
      nom: "Dr. Habibou WOROUCOUBOU",
      titre: "Maître Assistant",
      specialite: "Sciences de Gestion",
      departement: "Gestion des Entreprises, Gestion des Banques",
      formation: "Doctorat en Sciences de Gestion",
      publications: 8,
      image: "/images/Pr-Woroucoubou.jpg",
      bio: "Spécialiste des relations entre volume de transactions, rendement et volatilité sur les marchés boursiers africains.",
    },
  ];

  const departements = [
    "Tous les départements",
    "Gestion des Banques",
    "Gestion des Entreprises",
    "Gestion Commerciale",
    "Informatique de Gestion",
    "Gestion des Transports et Logistique",
    "Comptabilité Contrôle et Audit",
    "Administration et Ingénierie des RH",
    "Génie Logiciel et Intégration d'Application",
  ];

  const grades = [
    "Tous les grades",
    "Professeur Titulaire",
    "Professeur des Universités",
    "Professeur Associé",
    "Maître de Conférences",
    "Maître Assistant",
    "Chargé de Cours",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/placeholder.svg?height=600&width=1200"
            alt="Enseignants IUT"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative container mx-auto md:px-8 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Nos Enseignants-Chercheurs
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Découvrez notre corps professoral d'excellence, composé
            d'enseignants-chercheurs reconnus dans leurs domaines
          </p>
          <div className="flex space-x-2 justify-center mb-8">
            <Button variant="link" className="text-white" asChild>
              <Link href="/recherche">Recherche</Link>
            </Button>
            <span className="text-white">/</span>
            <Button variant="link" className="text-white" disabled>
              Enseignants-Chercheurs
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto md:px-8 px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">25+</div>
              <div className="text-gray-600 font-medium">
                Enseignants-Chercheurs
              </div>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">6</div>
              <div className="text-gray-600 font-medium">Départements</div>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-2">
                150+
              </div>
              <div className="text-gray-600 font-medium">Publications</div>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-2">20+</div>
              <div className="text-gray-600 font-medium">
                Projets de Recherche
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto md:px-8 px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Rechercher un enseignnnnnnant..."
                className="pl-10"
              />
            </div>
            <div className="flex flex-col gap-2 justify-between items-center space-x-4 md:flex-row">
              <Filter className="w-4 h-4 text-gray-600" />
              <Select>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Département" />
                </SelectTrigger>
                <SelectContent>
                  {departements.map((dept) => (
                    <SelectItem
                      key={dept}
                      value={dept.toLowerCase().replace(/\s+/g, "-")}
                    >
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Grade" />
                </SelectTrigger>
                <SelectContent>
                  {grades.map((grade) => (
                    <SelectItem
                      key={grade}
                      value={grade.toLowerCase().replace(/\s+/g, "-")}
                    >
                      {grade}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Enseignants Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto md:px-8 px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enseignants.map((enseignant, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48 w-full">
                  <Image
                    src={enseignant.image || "/placeholder.svg"}
                    alt={enseignant.nom}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-wrap">
                    {enseignant.nom}
                  </CardTitle>
                  <CardDescription>
                    <Badge className="mb-2">{enseignant.titre}</Badge>
                    <br />
                    {enseignant.specialite}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">
                        Département :
                      </h4>
                      <p className="text-sm text-gray-600">
                        {enseignant.departement}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-gray-700">
                        Formation :
                      </h4>
                      <p className="text-sm text-gray-600">
                        {enseignant.formation}
                      </p>
                    </div>

                    <div className="text-center">
                      <div className="bg-blue-50 p-2 rounded">
                        <div className="font-bold text-blue-600">
                          {enseignant.publications}
                        </div>
                        <div className="text-xs text-gray-600">
                          Publications
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto md:px-8 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Rejoignez notre équipe pédagogique
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            L'IUT de Parakou recrute régulièrement des enseignants-chercheurs
            qualifiés pour renforcer son corps professoral
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold"
              asChild
            >
              <Link href="/contact">Postuler</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold"
              asChild
            >
              <Link href="/recherche/laboratoires">Voir nos laboratoires</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
