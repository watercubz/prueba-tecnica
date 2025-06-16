import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { Search, Filter, Calendar, MapPin, User, Building } from "lucide-react";

export default function Contacts({ contacts, filters }) {
    const [filtersState, setFiltersState] = useState(filters);

    function handleSubmit(e) {
        e.preventDefault();
        Inertia.get("/contacts", filtersState, {
            preserveState: true,
            replace: true,
        });
    }

    return (
        <div className="min-h-screen bg-gray-50/50">
            <div className="container mx-auto px-4 py-8 max-w-7xl">
                <div className="mb-8">
                    <h1 className="text-3xl font-semibold text-gray-900 mb-2">
                        Panel de contactos
                    </h1>
                    <p className="text-gray-600">
                        Gestiona y filtra la información de tus contactos
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
                        <div className="flex items-center gap-2 mb-6">
                            <Filter className="w-4 h-4 text-gray-500" />
                            <h2 className="text-lg font-medium text-gray-900">
                                Filtros
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                                    <User className="w-3 h-3" />
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={filtersState.name || ""}
                                    onChange={(e) =>
                                        setFiltersState({
                                            ...filtersState,
                                            name: e.target.value,
                                        })
                                    }
                                    placeholder="Buscar nombre..."
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                                    <MapPin className="w-3 h-3" />
                                    Ciudad
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    value={filtersState.city || ""}
                                    onChange={(e) =>
                                        setFiltersState({
                                            ...filtersState,
                                            city: e.target.value,
                                        })
                                    }
                                    placeholder="Buscar ciudad..."
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                                    <Building className="w-3 h-3" />
                                    Provincia
                                </label>
                                <input
                                    type="text"
                                    name="province"
                                    value={filtersState.province || ""}
                                    onChange={(e) =>
                                        setFiltersState({
                                            ...filtersState,
                                            province: e.target.value,
                                        })
                                    }
                                    placeholder="Buscar provincia..."
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    Fecha Inicio
                                </label>
                                <input
                                    type="date"
                                    name="date_from"
                                    value={filtersState.date_from || ""}
                                    onChange={(e) =>
                                        setFiltersState({
                                            ...filtersState,
                                            date_from: e.target.value,
                                        })
                                    }
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    Fecha Fin
                                </label>
                                <input
                                    type="date"
                                    name="date_to"
                                    value={filtersState.date_to || ""}
                                    onChange={(e) =>
                                        setFiltersState({
                                            ...filtersState,
                                            date_to: e.target.value,
                                        })
                                    }
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2 justify-end">
                            <a
                                href={`/contacts/export?${new URLSearchParams(
                                    filtersState
                                ).toString()}`}
                                className="px-4 py-2 text-sm font-medium text-black bg-green-400 border border-green-300 rounded-md hover:bg-green-500"
                            >
                                Exportar a CSV
                            </a>

                            <button
                                type="button"
                                onClick={() => {
                                    setFiltersState({});
                                    Inertia.get(
                                        "/contacts",
                                        {},
                                        {
                                            preserveState: true,
                                            replace: true,
                                        }
                                    );
                                }}
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                            >
                                Limpiar
                            </button>
                            <button
                                type="submit"
                                className="px-4 py-2 text-sm font-medium text-white bg-gray-900 border border-transparent rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                            >
                                <Search className="w-4 h-4 inline mr-1" />
                                Filtrar
                            </button>
                        </div>
                    </div>
                </form>

                <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-medium text-gray-900">
                            Resultados
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">
                            {contacts.length} contactos encontrados
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        ID
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Nombre
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Ciudad
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Provincia
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Fecha
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {contacts.data.map((contact) => (
                                    <tr
                                        key={contact.id}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            {contact.id}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center">
                                                <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                                                    <span className="text-xs font-medium text-gray-700">
                                                        {contact.name
                                                            .split(" ")
                                                            .map((n) => n[0])
                                                            .join("")}
                                                    </span>
                                                </div>
                                                <div className="text-sm font-medium text-gray-900">
                                                    {contact.name}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {contact.city}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {contact.province}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                            {new Date(
                                                contact.created_at
                                            ).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap"></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <div className="mt-6 mb-4 flex justify-center">
                            {contacts.links.map((link, i) => (
                                <button
                                    key={i}
                                    disabled={!link.url}
                                    dangerouslySetInnerHTML={{
                                        __html: link.label,
                                    }}
                                    onClick={() =>
                                        link.url && Inertia.get(link.url)
                                    }
                                    className={`px-3 py-1 mx-1 rounded-md border ${
                                        link.active
                                            ? "bg-blue-600 text-white"
                                            : "bg-white text-gray-700"
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
