"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, FileText, Users, CheckCircle, Clock, AlertCircle, Upload, Mail, Phone } from "lucide-react"

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    formation: "",
    niveau: "",
    motivation: "",
  })

  const calendrierAdmissions = [
    {
      periode: "Janvier - Mars 2024",
      etape: "Ouverture des candidatures",
      description: "Dépôt des dossiers de candidature en ligne",
      status: "completed",
    },
    {
      periode: "Avril 2024",
      etape: "Étude des dossiers",
      description: "Examen des candidatures par les commissions d'admission",
      status: "completed",
    },
    {
      periode: "Mai 2024",
      etape: "Entretiens de motivation",
      description: "Entretiens individuels pour les candidats présélectionnés",
      status: "current",
    },
    {
      periode: "Juin 2024",
      etape: "Résultats d'admission",
      description: "Publication des résultats et confirmations d'inscription",
      status: "upcoming",
    },
    {
      periode: "Juillet - Août 2024",
      etape: "Inscriptions administratives",
      description: "Finalisation des inscriptions et paiement des frais",
      status: "upcoming",
    },
    {
      periode: "Septembre 2024",
      etape: "Rentrée académique",
      description: "Début des cours et accueil des nouveaux étudiants",
      status: "upcoming",
    },
  ]

  const documentsRequis = {
    licence: [
      "Copie légalisée du diplôme du Baccalauréat",
      "Relevés de notes du Baccalauréat",
      "Acte de naissance",
      "Certificat médical",
      "4 photos d'identité récentes",
      "Lettre de motivation manuscrite",
      "CV détaillé",
    ],
    master: [
      "Copie légalisée de la Licence",
      "Relevés de notes de la Licence (toutes les années)",
      "Acte de naissance",
      "Certificat médical",
      "4 photos d'identité récentes",
      "Lettre de motivation manuscrite",
      "CV détaillé",
      "Attestations d'expérience professionnelle (si applicable)",
      "Lettres de recommandation (2 minimum)",
    ],
  }

  const fraisInscription = {
    licence: {
      inscription: "50 000 FCFA",
      scolarite: "200 000 FCFA/an",
      total: "250 000 FCFA",
    },
    master: {
      inscription: "75 000 FCFA",
      scolarite: "300 000 FCFA/an",
      total: "375 000 FCFA",
    },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Candidature soumise:", formData)
    // Ici, vous ajouteriez la logique pour traiter la candidature
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/placeholder.svg?height=600&width=1200" alt="Admissions IUT" fill className="object-cover" />
        </div>
        <div className="relative container mx-auto md:px-8 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Admissions</h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Rejoignez l'IUT de Parakou et construisez votre avenir professionnel avec nos formations d'excellence
          </p>
          <div className="flex space-x-2 justify-center mb-8">
            <Button variant="link" className="text-white" asChild>
              <Link href="/formations">Formations</Link>
            </Button>
            <span className="text-white">/</span>
            <Button variant="link" className="text-white" disabled>
              Admissions
            </Button>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto md:px-8 px-4">
          <Tabs defaultValue="candidature" className="w-full">
            <TabsList className="grid w-full md:grid-cols-4 grid-cols-2 mb-12">
              <TabsTrigger value="candidature" className="text-lg">
                Candidater
              </TabsTrigger>
              <TabsTrigger value="calendrier" className="text-lg">
                Calendrier
              </TabsTrigger>
              <TabsTrigger value="documents" className="text-lg">
                Documents
              </TabsTrigger>
              <TabsTrigger value="frais" className="text-lg">
                Frais
              </TabsTrigger>
            </TabsList>

            {/* Candidature Tab */}
            <TabsContent value="candidature">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Formulaire de Candidature</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Remplissez ce formulaire pour déposer votre candidature à l'IUT de Parakou
                </p>
              </div>

              <div className="max-w-2xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Informations personnelles</CardTitle>
                    <CardDescription>
                      Veuillez remplir tous les champs obligatoires marqués d'un astérisque (*)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="nom">Nom *</Label>
                          <Input
                            id="nom"
                            value={formData.nom}
                            onChange={(e) => handleChange("nom", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="prenom">Prénom *</Label>
                          <Input
                            id="prenom"
                            value={formData.prenom}
                            onChange={(e) => handleChange("prenom", e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="telephone">Téléphone *</Label>
                        <Input
                          id="telephone"
                          type="tel"
                          value={formData.telephone}
                          onChange={(e) => handleChange("telephone", e.target.value)}
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="formation">Formation souhaitée *</Label>
                        <Select onValueChange={(value) => handleChange("formation", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Choisissez une formation" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="gestion-banques">Licence - Gestion des Banques</SelectItem>
                            <SelectItem value="gestion-entreprises">Licence - Gestion des Entreprises</SelectItem>
                            <SelectItem value="gestion-commerciale">Licence - Gestion Commerciale</SelectItem>
                            <SelectItem value="informatique-gestion">Licence - Informatique de Gestion</SelectItem>
                            <SelectItem value="transport-logistique">
                              Licence - Gestion des Transports et Logistique
                            </SelectItem>
                            <SelectItem value="master-cca">Master - Comptabilité Contrôle et Audit</SelectItem>
                            <SelectItem value="master-gtl">Master - Gestion des Transports et Logistiques</SelectItem>
                            <SelectItem value="master-airh">Master - Administration et Ingénierie des RH</SelectItem>
                            <SelectItem value="master-gec">Master - Gestion et Expertise Commerciale</SelectItem>
                            <SelectItem value="master-glia">
                              Master - Génie Logiciel et Intégration d'Application
                            </SelectItem>
                            <SelectItem value="master-siad">
                              Master - Système d'Information et d'Aide à la Décision
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="niveau">Niveau d'études actuel *</Label>
                        <Select onValueChange={(value) => handleChange("niveau", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Sélectionnez votre niveau" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bac">Baccalauréat</SelectItem>
                            <SelectItem value="bac1">Bac+1</SelectItem>
                            <SelectItem value="bac2">Bac+2</SelectItem>
                            <SelectItem value="licence">Licence</SelectItem>
                            <SelectItem value="autre">Autre</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="motivation">Lettre de motivation *</Label>
                        <Textarea
                          id="motivation"
                          rows={6}
                          value={formData.motivation}
                          onChange={(e) => handleChange("motivation", e.target.value)}
                          placeholder="Expliquez vos motivations pour intégrer cette formation..."
                          required
                        />
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex items-start">
                          <AlertCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                          <div className="text-sm text-blue-800">
                            <p className="font-semibold mb-1">Important :</p>
                            <p>
                              Ce formulaire constitue une pré-candidature. Vous devrez ensuite fournir les documents
                              officiels requis pour finaliser votre dossier.
                            </p>
                          </div>
                        </div>
                      </div>

                      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                        <Upload className="w-5 h-5 mr-2" />
                        Soumettre ma candidature
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Calendrier Tab */}
            <TabsContent value="calendrier">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Calendrier des Admissions</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Suivez les étapes importantes du processus d'admission pour l'année académique 2024-2025
                </p>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                  {calendrierAdmissions.map((etape, index) => (
                    <Card
                      key={index}
                      className={`${
                        etape.status === "current"
                          ? "border-blue-500 bg-blue-50"
                          : etape.status === "completed"
                            ? "border-green-500 bg-green-50"
                            : "border-gray-200"
                      }`}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="mr-4 mt-1">
                            {etape.status === "completed" && <CheckCircle className="w-6 h-6 text-green-600" />}
                            {etape.status === "current" && <Clock className="w-6 h-6 text-blue-600" />}
                            {etape.status === "upcoming" && <Calendar className="w-6 h-6 text-gray-400" />}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-xl font-semibold text-gray-800">{etape.etape}</h3>
                              <Badge
                                variant={
                                  etape.status === "completed"
                                    ? "default"
                                    : etape.status === "current"
                                      ? "secondary"
                                      : "outline"
                                }
                                className={
                                  etape.status === "completed"
                                    ? "bg-green-100 text-green-800"
                                    : etape.status === "current"
                                      ? "bg-blue-100 text-blue-800"
                                      : ""
                                }
                              >
                                {etape.periode}
                              </Badge>
                            </div>
                            <p className="text-gray-600">{etape.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-12 bg-orange-50 p-6 rounded-lg">
                  <div className="flex items-start">
                    <AlertCircle className="w-6 h-6 text-orange-600 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-orange-800 mb-2">Dates importantes à retenir</h3>
                      <ul className="text-orange-700 space-y-1">
                        <li>• Date limite de candidature : 31 Mars 2024</li>
                        <li>• Entretiens de motivation : Mai 2024</li>
                        <li>• Résultats définitifs : 30 Juin 2024</li>
                        <li>• Rentrée académique : 2 Septembre 2024</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Documents Tab */}
            <TabsContent value="documents">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Documents Requis</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Liste des documents à fournir selon le niveau de formation souhaité
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-6 h-6 mr-2 text-blue-600" />
                      Licence Professionnelle
                    </CardTitle>
                    <CardDescription>Documents requis pour les candidatures en Licence</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {documentsRequis.licence.map((doc, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-6 h-6 mr-2 text-purple-600" />
                      Master Professionnel
                    </CardTitle>
                    <CardDescription>Documents requis pour les candidatures en Master</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {documentsRequis.master.map((doc, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12">
                <Card>
                  <CardHeader>
                    <CardTitle>Modalités de dépôt</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Dépôt en ligne</h4>
                        <p className="text-gray-600 mb-4">
                          Scannez vos documents et déposez-les via notre plateforme en ligne sécurisée.
                        </p>
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          <Upload className="w-4 h-4 mr-2" />
                          Déposer en ligne
                        </Button>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Dépôt physique</h4>
                        <p className="text-gray-600 mb-4">
                          Apportez vos documents originaux et copies au secrétariat de l'IUT.
                        </p>
                        <div className="text-sm text-gray-600">
                          <p>Horaires : Lundi-Vendredi 8h-16h</p>
                          <p>Lieu : Secrétariat IUT-UP</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Frais Tab */}
            <TabsContent value="frais">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frais de Scolarité</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Informations sur les frais d'inscription et de scolarité pour l'année académique 2024-2025
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center text-blue-600">Licence Professionnelle</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span>Frais d'inscription</span>
                        <span className="font-semibold">{fraisInscription.licence.inscription}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span>Frais de scolarité (par an)</span>
                        <span className="font-semibold">{fraisInscription.licence.scolarite}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-blue-100 rounded-lg border-2 border-blue-200">
                        <span className="font-semibold">Total première année</span>
                        <span className="font-bold text-blue-600 text-lg">{fraisInscription.licence.total}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-center text-purple-600">Master Professionnel</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span>Frais d'inscription</span>
                        <span className="font-semibold">{fraisInscription.master.inscription}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <span>Frais de scolarité (par an)</span>
                        <span className="font-semibold">{fraisInscription.master.scolarite}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-purple-100 rounded-lg border-2 border-purple-200">
                        <span className="font-semibold">Total première année</span>
                        <span className="font-bold text-purple-600 text-lg">{fraisInscription.master.total}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Modalités de paiement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Paiement comptant</h4>
                      <p className="text-gray-600 text-sm">Remise de 5% sur les frais de scolarité</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Calendar className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Paiement échelonné</h4>
                      <p className="text-gray-600 text-sm">Possibilité de payer en 3 tranches</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="w-6 h-6 text-orange-600" />
                      </div>
                      <h4 className="font-semibold mb-2">Bourses d'études</h4>
                      <p className="text-gray-600 text-sm">Bourses disponibles selon critères sociaux</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto md:px-8 px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Besoin d'aide ?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Notre équipe d'admission est là pour vous accompagner dans votre candidature
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold mb-2">Par téléphone</h3>
                <p className="text-gray-600 mb-3">+229 XX XX XX XX</p>
                <p className="text-sm text-gray-500">Lundi-Vendredi 8h-17h</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold mb-2">Par email</h3>
                <p className="text-gray-600 mb-3">admissions@iut-up.edu.bj</p>
                <p className="text-sm text-gray-500">Réponse sous 24h</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold mb-2">Sur place</h3>
                <p className="text-gray-600 mb-3">Secrétariat IUT-UP</p>
                <p className="text-sm text-gray-500">Parakou, Bénin</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto md:px-8 px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Commencez votre candidature dès maintenant</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Ne manquez pas cette opportunité de rejoindre l'une des meilleures institutions de formation du Bénin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold"
              asChild
            >
              <Link href="#candidature">Candidater maintenant</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-blue-600 hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold"
              asChild
            >
              <Link href="/formations">Voir les formations</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
