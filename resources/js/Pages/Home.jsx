import React, { useState } from "react";

import { Menu, X, Users, Settings, BarChart3, User } from "lucide-react";
import { Link, usePage } from "@inertiajs/react";
export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const currentUrl = usePage().url;

    const navigation = [
        { name: "Inicio", href: "/", icon: User },
        { name: "contactos", href: "/contacts", icon: User },
        { name: "Crear contacto", href: "/contacts/create", icon: User },
    ];

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-3">
                        <div className="h-8 w-8 bg-gray-900 rounded-md flex items-center justify-center text-white text-sm font-bold">
                            D
                        </div>
                        <span className="text-xl font-semibold text-gray-900">
                            DAITE SRL
                        </span>
                    </div>

                    <div className="hidden md:flex space-x-4">
                        {navigation.map(({ name, href, icon: Icon }) => (
                            <Link
                                key={name}
                                href={href}
                                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${
                                    currentUrl === href
                                        ? "bg-gray-900 text-white"
                                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                }`}
                            >
                                <Icon className="w-4 h-4" />
                                {name}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <div className="text-right">
                            <p className="text-sm font-medium text-gray-900">
                                ¡Bienvenido!
                            </p>
                            <p className="text-xs text-gray-500">
                                {usePage().props.auth?.user?.name || "Usuario"}
                            </p>
                        </div>
                        <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-gray-600" />
                        </div>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-900"
                        >
                            {isMenuOpen ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
                    <div className="px-3 py-2 border-b border-gray-100 mb-2">
                        <div className="flex items-center space-x-3">
                            <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">
                                <User className="w-4 h-4 text-gray-600" />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-900">
                                    ¡Bienvenido!
                                </p>
                                <p className="text-xs text-gray-500">
                                    {usePage().props.auth?.user?.name ||
                                        "Usuario"}
                                </p>
                            </div>
                        </div>
                    </div>

                    {navigation.map(({ name, href, icon: Icon }) => (
                        <Link
                            key={name}
                            href={href}
                            className={`block px-3 py-2 rounded-md text-base font-medium flex items-center gap-3 ${
                                currentUrl === href
                                    ? "bg-gray-900 text-white"
                                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Icon className="w-4 h-4" />
                            {name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}
