import React, { useState } from "react";
import { FaCalendar } from "react-icons/fa";

function ModalEditarServicio({ isOpen, onClose, data }) {
    if (!isOpen) return null;

    const [formData, setFormData] = useState({
        fecha: data.fecha || "",
        num_solicitud: data.num_solicitud || "",
        nombre: data.nombre || "",
        area: data.area || "",
        piso: data.piso || "",
        red: data.red || "",
        correo: data.correo || "",
        equipo: data.equipo || "",
        marca: data.marca || "",
        modelo: data.modelo || "",
        serie: data.serie || "",
        ip: data.ip || "",
        falla: data.falla || "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-gray-500 bg-opacity-75">
            <div className="relative w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
                <button
                    onClick={onClose}
                    className="absolute text-2xl text-gray-600 top-3 right-3"
                >
                    &times;
                </button>
                <h2 className="mb-6 text-xl font-bold text-center">Revisión de Reporte</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="relative">
                            <label
                                htmlFor="fecha"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                Fecha
                            </label>
                            <div className="flex items-center">
                                <FaCalendar className="mr-2 text-gray-500" />
                                <input
                                    type="date"
                                    name="fecha"
                                    id="fecha"
                                    value={formData.fecha}
                                    onChange={handleChange}
                                    className="block w-full px-2.5 py-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                        </div>
                        <div className="relative">
                            <label
                                htmlFor="num_solicitud"
                                className="block mb-2 text-sm font-medium text-gray-900"
                            >
                                No. de Solicitud
                            </label>
                            <input
                                type="text"
                                name="num_solicitud"
                                id="num_solicitud"
                                value={formData.num_solicitud}
                                onChange={handleChange}
                                className="block w-full px-2.5 py-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>
                    </div>

                    <fieldset>
                        <legend className="mb-2 font-medium">Datos del Usuario:</legend>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {["nombre", "area", "piso", "red", "correo"].map((field) => (
                                <div key={field} className="relative z-0 w-full group">
                                    <input
                                        type="text"
                                        name={field}
                                        id={`floating_${field}`}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        className="block w-full px-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor={`floating_${field}`}
                                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        {field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </fieldset>

                    <fieldset>
                        <legend className="mb-2 font-medium">Datos del Equipo:</legend>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {["equipo", "marca", "modelo", "serie", "ip"].map((field) => (
                                <div key={field} className="relative z-0 w-full group">
                                    <input
                                        type="text"
                                        name={field}
                                        id={`floating_${field}`}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        className="block w-full px-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor={`floating_${field}`}
                                        className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                                    >
                                        {field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </fieldset>

                    <div className="relative z-0 w-full group">
                        <textarea
                            name="falla"
                            id="floating_falla"
                            value={formData.falla}
                            onChange={handleChange}
                            className="block w-full px-4 py-2.5 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="floating_falla"
                            className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                        >
                            Falla Reportada
                        </label>
                    </div>

                    <div className="flex justify-center space-x-4 mt-8">
                        <button
                            type="submit"
                            className="px-6 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700"
                        >
                            Guardar
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ModalEditarServicio;
