"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChevronLeft,
  ChevronRight,
  Users,
  GraduationCap,
  Award,
  Building2,
  Calendar,
  ArrowRight,
  Star,
  Quote,
} from "lucide-react"
import { link } from "fs"

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const heroSlides = [
    {
      title: "Institut Universitaire de Technologie",
      subtitle: "Haute École de Gestion",
      description: "Excellence académique et innovation technologique depuis 2001",
      image: "/images/etudiants-en-salle-6.jpeg",
    },
    {
      title: "Formation d'Excellence",
      subtitle: "Préparez votre Avenir",
      description: "Des formations reconnues par les entreprises et adaptées au marché",
      image: "/images/etudiants-en-salle-2.webp",
    },
    {
      title: "Innovation & Recherche",
      subtitle: "Laboratoires de Pointe",
      description: "Participez aux projets de recherche qui façonnent demain",
      image: "/images/etudiantes-en-salle.jpeg",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Dubois",
      role: "Diplômée 2022 - Ingénieure chez TechCorp",
      content:
        "L'IUT m'a donné toutes les clés pour réussir dans le monde professionnel. L'accompagnement personnalisé et la qualité des enseignements sont exceptionnels.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Marc Lefebvre",
      role: "Diplômé 2021 - Chef de projet chez InnovTech",
      content:
        "Les projets concrets et les stages en entreprise m'ont permis d'acquérir une expérience précieuse. Je recommande vivement cette formation.",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      name: "Emma Martin",
      role: "Diplômée 2023 - Consultante en Digital",
      content:
        "L'IUT offre un parfait équilibre entre théorie et pratique. Les enseignants sont à l'écoute et nous préparent vraiment au monde du travail.",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  const partners = [
    { name: "Waxangari Labs", logo: "/images/Waxangari.jpeg" },
    { name: "Baobab", logo: "/images/Baobab.jpeg" },
    { name: "Cabro", logo: "/images/Cabro.jpeg" },
    { name: "UBA", logo: "/images/UBA.jpeg" },
    { name: "AUF", logo: "/images/AUF.jpeg" },
    { name: "Port autonome de Cotonou", logo: "/images/Port.jpeg" },
  ]

  const stats = [
    { number: "2500+", label: "Étudiants", icon: Users },
    { number: "90%", label: "Taux de Réussite", icon: GraduationCap },
    { number: "10+", label: "Entreprises Partenaires", icon: Building2 },
    { number: "20", label: "Formations", icon: Award },
  ]

  const formations = [
    {
      title: "Licence Gestion des Banques",
      description: "Formation spécialisée dans le secteur bancaire et financier",
      duration: "3 ans",
      level: "Bac+3",
      selectivity: "BAC C, D, G2",
      employment: "95%",
      image: "/images/GB.webp",
    },
    {
      title: "Licence Informatique de Gestion",
      description: "Formation alliant informatique et gestion d'entreprise",
      duration: "3 ans",
      level: "Bac+3",
      selectivity: "BAC C, D",
      employment: "98%",
     image: "/images/IG.webp",
    },
    {
      title: "Master Comptabilité Contrôle et Audit",
      description: "Spécialisation en comptabilité, contrôle de gestion et audit",
      duration: "2 ans",
      level: "Bac+5",
      selectivity: "Licence en Gestion/Économie",
      employment: "100%",
        image: "/images/GE.webp",
    },
  ]

  const news = [
    {
      title: "Inauguration de la salle numérique de l'IUT de Parakou",
      category: "Evénement",
      date: "15 Nov 2024",
      excerpt: "L’une des priorités du gouvernement contenu dans son programme d’actions, est la généralisation de l’usage du numérique dans le système éducatif béninois",
     image: "/images/etudiants-en-salle-2.webp",
     link: "https://www.gouv.bj/article/1708/mise-service-deux-salles-numeriques-parakou-gouvernement-facilite-etudiants-personnes-vivant-avec-handicap-visuel/",
    },
    {
      title: "Cybersécurité : 35 étudiantes de l'IUT et de la FASEG formées",
      category: "Partenariat",
      date: "10 Nov 2024",
      excerpt: "Du lundi 24 au vendredi 28 avril 2023, 35 étudiantes de la Faculté des Sciences Économiques et de Gestion (Faseg) et de l’Institut Universitaire de Technologie (Iut)",
      image: "/images/etudiants-en-salle-1.webp",
      link: "https://daabaaru.bj/cybersecurite-au-benin-35-etudiantes-de-la-faseg-et-de-liut-de-lup-formees/",
    },
    {
      title: "L’innovation numérique célébrée lors de la JEIG 2025",
      category: "Événement",
      date: "5 Nov 2024",
      excerpt: "Une journée d’échanges sur l’innovation numérique a rassemblé plus de 200 étudiants à l’Université de Parakou, portée par l’Association des Étudiants en Informatique de Gestion avec le soutien de partenaires tech.",
     image: "/images/etudiants-a-JEIG.jpeg",
      link: "https://www.linkedin.com/company/isocbenin/posts/?feedView=all",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroSlides[currentSlide].image || "/placeholder.svg"}
            alt="Hero background"
            fill
            className="object-cover opacity-20"
          />
        </div>

        <div className="relative z-10 container mx-auto md:px-8 px-4 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-4">{heroSlides[currentSlide].subtitle}</p>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">{heroSlides[currentSlide].description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold rounded-full"
                asChild
              >
                <Link href="/formations">Admission</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-blue-600 hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold rounded-full"
                asChild
              >
                <Link href="/contact">Nous contacter</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Slider Navigation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            />
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-300 transition-colors"
        >
          <ChevronLeft size={48} />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-orange-300 transition-colors"
        >
          <ChevronRight size={48} />
        </button>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto md:px-8 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Depuis 2001, c'est :</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Formations Phares */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto md:px-8 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nos Formations Phares</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto px-8">
              Découvrez nos formations d'excellence reconnues par les entreprises
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {formations.map((formation, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={formation.image || "/placeholder.svg"}
                    alt={formation.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-orange-500 text-white">
                      {formation.level}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-800">{formation.title}</CardTitle>
                  <CardDescription>{formation.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Durée:</span>
                      <span className="text-sm font-medium">{formation.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Sélectivité:</span>
                      <span className="text-sm font-medium">{formation.selectivity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Insertion pro:</span>
                      <span className="text-sm font-medium text-green-600">{formation.employment}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                    <Link href="/formations">Voir plus</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-600">
        <div className="container mx-auto md:px-8 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Témoignages de nos Diplômés</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Découvrez les parcours inspirants de nos anciens étudiants
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Quote className="w-8 h-8 text-orange-400 mr-4" />
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-lg text-white mb-6 italic">"{testimonials[currentTestimonial].content}"</p>
                <div className="flex items-center">
                  <Image
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonials[currentTestimonial].name}</div>
                    <div className="text-blue-200">{testimonials[currentTestimonial].role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto md:px-8 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Actualités & Événements</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Restez informé de toute l'actualité de l'IUT</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {news.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-40">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-orange-500 text-white">{article.category}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                  </div>
                  <CardTitle className="text-lg text-blue-800">{article.title}</CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href={article.link || "#"}>
                      Lire la suite <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/actualites">Voir toutes les actualités</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto md:px-8 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nos Partenaires</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Ils nous font confiance et recrutent nos diplômés</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  width={120}
                  height={60}
                  className="opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto md:px-8 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prêt à rejoindre l'IUT ?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Découvrez nos formations et candidatez dès maintenant pour la rentrée prochaine
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
              className="border-white text-blue-600 hover:text-blue-600 px-8 py-3 text-lg font-semibold"
              asChild
            >
              <Link href="/contact">Prendre rendez-vous</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
