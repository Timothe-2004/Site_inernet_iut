import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Home, Utensils, Dumbbell, Heart, Calendar } from "lucide-react"

export default function VieEtudiantePage() {
  const services = [
    {
      icon: Home,
      title: "Logement",
      description: "Résidences universitaires modernes et logements étudiants partenaires",
      details: ["450 places en résidence", "Studios meublés", "Aide au logement", "Caution solidaire"],
    },
    {
      icon: Utensils,
      title: "Restauration",
      description: "Restaurants universitaires et espaces de convivialité",
      details: ["1 restaurants sur campus", "Menus équilibrés", "Options locales", "Tarifs étudiants"],
    },
    {
      icon: Heart,
      title: "Santé & Bien-être",
      description: "Services médicaux",
      details: ["Infirmerie sur site", "Médecin généraliste", "Prévention santé"],
    },
    {
      icon: Dumbbell,
      title: "Sport",
      description: "Installations sportives et activités variées",
      details: ["Terrain de sport", "Plusieurs activités", "Compétitions inter-filières"],
    },
  ]

  const associations = [
    {
      name: "ASETIP",
      type: "Bureau des Étudiants",
      description: "Organisation d'événements, soirées et activités pour dynamiser la vie étudiante",
      members: "300+ membres",
      color: "from-blue-500 to-blue-600",
    },
    {
      name: "ASEIG",
      type: "Bureau des Etudiants en Informatique de Gestion",
      description: "Promotion des activités informatiques, organisation de hackathons et ateliers de développement",
      members: "+200 membres",
      color: "from-green-500 to-green-600",
    },
    {
      name: "Club Football",
      type: "Association Sportive",
      description: "Équipe de football de l'IUT, participations aux championnats universitaires",
      members: "30 joueurs",
      color: "from-purple-500 to-purple-600",
    },
     {
      name: "Club de Basket",
      type: "Association Sportive",
      description: "Équipe de basketball de l'IUT, participations aux championnats universitaires",
      members: "30 joueurs",
      color: "from-red-500 to-red-600",
    },
  ]

  const events = [
    {
      date: "30 Juillet",
      title: "Journée des Etudiants à l'IUT",
      type: "Événement majeur",
       description: "Une journée festive dédiée aux étudiants de l'IUT, rythmée par des animations, des activités sportives, de la musique et un carnaval haut en couleur pour célébrer la diversité et la créativité du campus."
    },
     {
      date: "Fin Mars",
      title: "Journée des Etudiants en Informatique de Gestion",
      type: "Événement majeur",
      description: "Journée dédiée aux étudiants en informatique de gestion avec ateliers, conférences et networking",
    },
    {
      date: "30 Juillet",
      title: "Gala de l'IUT",
      type: "Événement majeur",
      description: "Soirée de prestige réunissant étudiants, diplômés et partenaires",
    },
    {
      date: "Fin Mars",
      title: "Tournoi Inter-filières",
      type: "Sport",
      description: "Compétition sportive regroupant toutes les filières de l'IUT",
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-20">
        <div className="container mx-auto md:px-8 md:px-8 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Vie Étudiante</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Découvrez un campus dynamique où l'excellence académique se conjugue avec une vie étudiante riche en
            opportunités, rencontres et expériences enrichissantes.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto md:px-8 px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services aux étudiants</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un accompagnement complet pour votre réussite et votre bien-être tout au long de vos études.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {service.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-600 rounded-full" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Associations Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto md:px-8 px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Associations étudiantes</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rejoignez nos associations dynamiques et développez vos compétences tout en créant des liens durables.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {associations.map((asso, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${asso.color}`} />
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">{asso.name}</CardTitle>
                      <Badge variant="secondary" className="mt-2">
                        {asso.type}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-gray-900">{asso.members.split(" ")[0]}</div>
                      <div className="text-sm text-gray-600">{asso.members.split(" ").slice(1).join(" ")}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{asso.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto md:px-8 px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Événements à venir</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ne manquez aucun des événements qui rythment la vie de notre campus.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2 mb-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-blue-600 font-medium">{event.date}</span>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <Badge variant="outline">{event.type}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}