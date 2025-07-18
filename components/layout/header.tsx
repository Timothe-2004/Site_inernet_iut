"use client"
import Image from "next/image";
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigationItems = [
    {
      title: "Accueil",
      href: "/",
    },
    {
      title: "À Propos",
      href: "/a-propos",
      submenu: [
        { title: "Histoire & Mission", href: "/a-propos/histoire" },
        { title: "Gouvernance", href: "/a-propos/gouvernance" },
        // { title: "Distinctions", href: "/a-propos/distinctions" },
      ],
    },
    {
      title: "Formations",
      href: "/formations",
      submenu: [
        { title: "Licences et Masters", href: "/formations" },
        { title: "Admissions", href: "/formations/admissions" },
      ],
    },
    {
      title: "Recherche",
      href: "/recherche",
      submenu: [
        // { title: "Laboratoires", href: "/recherche/laboratoires" },
        { title: "Enseignants-Chercheurs", href: "/recherche/enseignants" },
        { title: "Publications", href: "/recherche/publications" },
      ],
    },
    {
      title: "Vie Étudiante",
      href: "/vie-etudiante",
    },
    {
      title: "Actualités",
      href: "/actualites",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto md:px-8 px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/logo-iut.webp"
            alt="IUT Logo"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger className="text-blue-600 hover:text-blue-700">
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-3">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background md:px-8 px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      >
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className=":hidden flex items-center space-x-4">
            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <div key={item.title}>
                      <Link
                        href={item.href}
                        className="text-lg font-medium text-blue-600 hover:text-blue-700 block py-2"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                      {item.submenu && (
                        <div className="ml-4 space-y-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              className="text-sm text-gray-600 hover:text-blue-600 block py-1"
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
