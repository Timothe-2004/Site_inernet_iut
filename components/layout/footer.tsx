import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto md:px-8 px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
             <Image 
             src={"/images/logo-iut.webp"}
             alt="IUT Logo"
             width={40}
             height={40}
             className="h-10 w-10 rounded-full"
             />
            </div>
            <p className="text-gray-300 text-sm">
              Institut Universitaire de Technologie - Haute École de Gestion. Excellence académique et innovation depuis
              2001.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/formations" className="text-gray-300 hover:text-white transition-colors">
                  Formations
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-gray-300 hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/vie-etudiante" className="text-gray-300 hover:text-white transition-colors">
                  Vie Étudiante
                </Link>
              </li>
              <li>
                <Link href="/recherche" className="text-gray-300 hover:text-white transition-colors">
                  Recherche
                </Link>
              </li>
              <li>
                <Link href="/entreprises" className="text-gray-300 hover:text-white transition-colors">
                  Entreprises
                </Link>
              </li>
              <li>
                <Link href="/alumni" className="text-gray-300 hover:text-white transition-colors">
                  Alumni
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">
                 Arafath
                  <br />
                Parakou, Bénin
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">+229 **********</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-300 text-sm">contact@iut-up.bj</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">Restez informé de nos actualités et événements</p>
            <div className="space-y-2">
              <Input type="email" placeholder="Votre email" className="bg-gray-800 border-gray-700 text-white" />
              <Button className="w-full bg-orange-500 hover:bg-orange-600">S'abonner</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Institut Universitaire de Technologie. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/mentions-legales" className="text-gray-400 hover:text-white text-sm transition-colors">
                Mentions Légales
              </Link>
              <Link
                href="/politique-confidentialite"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Politique de Confidentialité
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
