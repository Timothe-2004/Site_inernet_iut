"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Calendar,
  FileText,
  Download,
  Bell,
  Settings,
  GraduationCap,
  Clock,
  CheckCircle,
  AlertCircle,
  Mail,
  Phone,
} from "lucide-react"

export default function EspaceEtudiantPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [loginData, setLoginData] = useState({ email: "", password: "" })

  // Données simulées pour un étudiant connecté
  const studentData = {
    name: "Marie Dubois",
    studentId: "IUT2024001",
    program: "Master Cybersécurité",
    year: "2ème année",
    email: "marie.dubois@iut-up.fr",
    phone: "+33 6 12 34 56 78",
    avatar: "/placeholder.svg?height=100&width=100",
  }

  const grades = [
    { subject: "Cryptographie Avancée", grade: "16/20", coefficient: 3, date: "15/11/2024" },
    { subject: "Sécurité Réseau", grade: "14/20", coefficient: 2, date: "10/11/2024" },
    { subject: "Audit de Sécurité", grade: "18/20", coefficient: 4, date: "05/11/2024" },
    { subject: "Forensique Numérique", grade: "15/20", coefficient: 2, date: "01/11/2024" },
  ]

  const schedule = [
    { day: "Lundi", time: "9h-12h", subject: "Cryptographie Avancée", room: "Salle 201", type: "Cours" },
    { day: "Lundi", time: "14h-17h", subject: "TP Sécurité Réseau", room: "Lab Info 1", type: "TP" },
    { day: "Mardi", time: "10h-12h", subject: "Audit de Sécurité", room: "Salle 105", type: "TD" },
    { day: "Mercredi", time: "9h-11h", subject: "Forensique Numérique", room: "Lab Info 2", type: "TP" },
    { day: "Jeudi", time: "14h-16h", subject: "Projet Professionnel", room: "Salle 301", type: "Projet" },
    { day: "Vendredi", time: "9h-12h", subject: "Conférence Entreprise", room: "Amphithéâtre", type: "Conférence" },
  ]

  const documents = [
    { name: "Emploi du temps S1 2024", type: "PDF", size: "245 KB", date: "20/09/2024" },
    { name: "Règlement des études", type: "PDF", size: "1.2 MB", date: "15/09/2024" },
    { name: "Guide du stage", type: "PDF", size: "890 KB", date: "10/09/2024" },
    { name: "Attestation de scolarité", type: "PDF", size: "156 KB", date: "05/09/2024" },
  ]

  const notifications = [
    {
      title: "Nouvelle note disponible",
      message: "Votre note de Cryptographie Avancée est disponible",
      date: "15/11/2024",
      type: "grade",
      read: false,
    },
    {
      title: "Rappel : Projet à rendre",
      message: "N'oubliez pas de rendre votre projet d'Audit de Sécurité avant le 20/11",
      date: "12/11/2024",
      type: "deadline",
      read: false,
    },
    {
      title: "Conférence entreprise",
      message: "Conférence Thales sur la cybersécurité - Vendredi 17/11 à 14h",
      date: "10/11/2024",
      type: "event",
      read: true,
    },
  ]

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulation de connexion
    setIsLoggedIn(true)
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-20">
          <div className="container mx-auto md:px-8 px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Espace Étudiant</h1>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Accédez à vos notes, emploi du temps, documents administratifs et bien plus encore
            </p>
          </div>
        </section>

        {/* Login Form */}
        <section className="py-16">
          <div className="container mx-auto md:px-8 px-4">
            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Connexion</CardTitle>
                  <CardDescription>Connectez-vous avec vos identifiants étudiants</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email étudiant</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="prenom.nom@iut-up.fr"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="password">Mot de passe</Label>
                      <Input
                        id="password"
                        type="password"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Se connecter
                    </Button>
                  </form>
                  <div className="mt-6 text-center space-y-2">
                    <Link href="#" className="text-blue-600 hover:underline text-sm">
                      Mot de passe oublié ?
                    </Link>
                    <div className="text-sm text-gray-600">
                      Problème de connexion ?{" "}
                      <Link href="/contact" className="text-blue-600 hover:underline">
                        Contactez-nous
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto md:px-8 px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">Bonjour, {studentData.name}</h1>
                <p className="text-gray-600">
                  {studentData.program} - {studentData.year}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications (2)
              </Button>
              <Button variant="outline" size="sm" onClick={() => setIsLoggedIn(false)}>
                Déconnexion
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto md:px-8 px-4">
          <Tabs defaultValue="dashboard" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8">
              <TabsTrigger value="dashboard">Tableau de bord</TabsTrigger>
              <TabsTrigger value="grades">Notes</TabsTrigger>
              <TabsTrigger value="schedule">Emploi du temps</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="profile">Profil</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Quick Stats */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <GraduationCap className="w-5 h-5 mr-2 text-blue-600" />
                      Moyenne générale
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600">15.8/20</div>
                    <p className="text-gray-600">Semestre en cours</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-orange-600" />
                      Prochain cours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-semibold">Cryptographie Avancée</div>
                    <p className="text-gray-600">Lundi 9h - Salle 201</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-purple-600" />
                      Projets en cours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600">3</div>
                    <p className="text-gray-600">À rendre ce mois</p>
                  </CardContent>
                </Card>

                {/* Recent Grades */}
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Dernières notes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {grades.slice(0, 3).map((grade, index) => (
                        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <div className="font-medium">{grade.subject}</div>
                            <div className="text-sm text-gray-600">{grade.date}</div>
                          </div>
                          <div className="text-lg font-bold text-blue-600">{grade.grade}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Actions rapides</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger relevé de notes
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="w-4 h-4 mr-2" />
                      Demander attestation
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Calendar className="w-4 h-4 mr-2" />
                      Voir planning complet
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Grades Tab */}
            <TabsContent value="grades">
              <Card>
                <CardHeader>
                  <CardTitle>Mes Notes</CardTitle>
                  <CardDescription>Semestre 1 - 2024/2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {grades.map((grade, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <div className="font-medium">{grade.subject}</div>
                          <div className="text-sm text-gray-600">
                            Coefficient {grade.coefficient} • {grade.date}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-blue-600">{grade.grade}</div>
                          <Badge
                            variant={
                              Number.parseFloat(grade.grade) >= 16
                                ? "default"
                                : Number.parseFloat(grade.grade) >= 12
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {Number.parseFloat(grade.grade) >= 16
                              ? "Excellent"
                              : Number.parseFloat(grade.grade) >= 12
                                ? "Bien"
                                : "À améliorer"}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">Moyenne générale :</span>
                      <span className="text-2xl font-bold text-blue-600">15.8/20</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Schedule Tab */}
            <TabsContent value="schedule">
              <Card>
                <CardHeader>
                  <CardTitle>Emploi du Temps</CardTitle>
                  <CardDescription>Semaine du 18 au 22 Novembre 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {schedule.map((item, index) => (
                      <div key={index} className="flex items-center p-4 border rounded-lg">
                        <div className="w-20 text-center">
                          <div className="font-medium">{item.day}</div>
                          <div className="text-sm text-gray-600">{item.time}</div>
                        </div>
                        <div className="flex-1 ml-4">
                          <div className="font-medium">{item.subject}</div>
                          <div className="text-sm text-gray-600">{item.room}</div>
                        </div>
                        <Badge
                          variant={item.type === "Cours" ? "default" : item.type === "TP" ? "secondary" : "outline"}
                        >
                          {item.type}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Documents Tab */}
            <TabsContent value="documents">
              <Card>
                <CardHeader>
                  <CardTitle>Mes Documents</CardTitle>
                  <CardDescription>Documents administratifs et pédagogiques</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {documents.map((doc, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center">
                          <FileText className="w-8 h-8 text-red-600 mr-3" />
                          <div>
                            <div className="font-medium">{doc.name}</div>
                            <div className="text-sm text-gray-600">
                              {doc.size} • {doc.date}
                            </div>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Télécharger
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Informations personnelles</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label>Nom complet</Label>
                      <Input value={studentData.name} readOnly />
                    </div>
                    <div>
                      <Label>Numéro étudiant</Label>
                      <Input value={studentData.studentId} readOnly />
                    </div>
                    <div>
                      <Label>Formation</Label>
                      <Input value={studentData.program} readOnly />
                    </div>
                    <div>
                      <Label>Année d'études</Label>
                      <Input value={studentData.year} readOnly />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <div className="flex">
                        <Input id="email" value={studentData.email} />
                        <Button variant="outline" className="ml-2">
                          <Mail className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <div className="flex">
                        <Input id="phone" value={studentData.phone} />
                        <Button variant="outline" className="ml-2">
                          <Phone className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      <Settings className="w-4 h-4 mr-2" />
                      Modifier mes informations
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notifications</CardTitle>
                  <CardDescription>Restez informé des dernières actualités</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {notifications.map((notification, index) => (
                      <div
                        key={index}
                        className={`p-4 border rounded-lg ${!notification.read ? "bg-blue-50 border-blue-200" : ""}`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-start">
                            {notification.type === "grade" && (
                              <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                            )}
                            {notification.type === "deadline" && (
                              <AlertCircle className="w-5 h-5 text-orange-600 mr-3 mt-0.5" />
                            )}
                            {notification.type === "event" && (
                              <Calendar className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                            )}
                            <div>
                              <div className="font-medium">{notification.title}</div>
                              <div className="text-gray-600 mt-1">{notification.message}</div>
                              <div className="text-sm text-gray-500 mt-2">{notification.date}</div>
                            </div>
                          </div>
                          {!notification.read && <div className="w-3 h-3 bg-blue-600 rounded-full"></div>}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
}
