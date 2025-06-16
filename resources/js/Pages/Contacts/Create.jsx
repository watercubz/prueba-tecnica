import { Link, useForm } from "@inertiajs/react";
import React from "react";
import { Plus, User, MapPin, Building, Check, X } from "lucide-react";

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        province: "",
        city: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/contacts", {
            onSuccess: () => reset(),
        });
    };

    return (
        <div className="min-h-screen bg-gray-50/50">
            <div className="container mx-auto px-4 py-8 max-w-2xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-semibold text-gray-900 mb-2">
                        Crear Contacto
                    </h1>
                    <p className="text-gray-600">
                        Añade un nuevo contacto al sistema
                    </p>
                </div>

                <div className="bg-white rounded-lg border border-gray-200 p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <Plus className="w-4 h-4 text-gray-500" />
                        <h2 className="text-lg font-medium text-gray-900">
                            Información del contacto
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                                    <User className="w-3 h-3" />
                                    Nombre *
                                </label>
                                <input
                                    type="text"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    placeholder="Ingresa el nombre completo..."
                                    className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent ${
                                        errors.name
                                            ? "border-red-300 focus:ring-red-500"
                                            : "border-gray-300"
                                    }`}
                                />
                                {errors.name && (
                                    <p className="text-xs text-red-600 flex items-center gap-1">
                                        <X className="w-3 h-3" />
                                        {errors.name}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    Ciudad *
                                </label>
                                <input
                                    type="text"
                                    value={data.city}
                                    onChange={(e) =>
                                        setData("city", e.target.value)
                                    }
                                    placeholder="Ingresa la ciudad..."
                                    className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent ${
                                        errors.city
                                            ? "border-red-300 focus:ring-red-500"
                                            : "border-gray-300"
                                    }`}
                                />
                                {errors.city && (
                                    <p className="text-xs text-red-600 flex items-center gap-1">
                                        <X className="w-3 h-3" />
                                        {errors.city}
                                    </p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                                    <Building className="w-3 h-3" />
                                    Provincia *
                                </label>
                                <input
                                    type="text"
                                    value={data.province}
                                    onChange={(e) =>
                                        setData("province", e.target.value)
                                    }
                                    placeholder="Ingresa la provincia..."
                                    className={`w-full px-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent ${
                                        errors.province
                                            ? "border-red-300 focus:ring-red-500"
                                            : "border-gray-300"
                                    }`}
                                />
                                {errors.province && (
                                    <p className="text-xs text-red-600 flex items-center gap-1">
                                        <X className="w-3 h-3" />
                                        {errors.province}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 justify-end pt-4 border-t border-gray-200">
                            <Link
                                href="/"
                                className="px-4 py-2 text-sm font-medium text-white bg-red-500 border border-red-400 rounded-md hover:bg-red-600"
                            >
                                cancelar
                            </Link>
                            <button
                                type="submit"
                                disabled={processing}
                                className="px-4 py-2 text-sm font-medium text-white bg-gray-900 border border-transparent rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            >
                                <Plus className="w-4 h-4 mr-1" />
                                Crear Registro
                            </button>
                        </div>
                    </form>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-md">
                    <h3 className="text-sm font-medium text-blue-900 mb-2">
                        Información
                    </h3>
                    <ul className="text-xs text-blue-800 space-y-1">
                        <li>
                            • Todos los campos marcados con (*) son obligatorios
                        </li>
                        <li>
                            • El registro se guardará automáticamente en el
                            sistema
                        </li>
                    </ul>
                </div>

                {(data.name || data.city || data.province) && (
                    <div className="mt-6 bg-white rounded-lg border border-gray-200 p-6">
                        <h3 className="text-lg font-medium text-gray-900 mb-4">
                            Vista Previa
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-2">
                                <User className="w-4 h-4 text-gray-400" />
                                <span className="text-sm text-gray-600">
                                    Nombre:
                                </span>
                                <span className="text-sm font-medium text-gray-900">
                                    {data.name || "Sin especificar"}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-gray-400" />
                                <span className="text-sm text-gray-600">
                                    Ciudad:
                                </span>
                                <span className="text-sm font-medium text-gray-900">
                                    {data.city || "Sin especificar"}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Building className="w-4 h-4 text-gray-400" />
                                <span className="text-sm text-gray-600">
                                    Provincia:
                                </span>
                                <span className="text-sm font-medium text-gray-900">
                                    {data.province || "Sin especificar"}
                                </span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
