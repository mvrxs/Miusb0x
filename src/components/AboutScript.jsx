import React, { useState } from 'react';

const AboutScript = () => {
  const [formulario, setFormulario] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const enviarFormulario = (e) => {
    e.preventDefault();
    // Falta la lógica de envío de formulario
    console.log('Formulario enviado:', formulario);
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="w-[50%] mx-auto p-6 bg-zinc-800 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-zinc-200 text-center">Tell us about anything</h2>
        <form onSubmit={enviarFormulario}>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-sm font-medium text-white-100">
              Name:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formulario.nombre}
              onChange={handleChange}
              required
              className="mt-1 p-2 w-full bg-zinc-700 border border-zinc-500 rounded-md text-white focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
            />
          </div>

  
        <div className="mb-4">
          <label htmlFor="apellidos" className="block text-sm font-medium text-white-100">
            Surnames:
          </label>
          <input
            type="text"
            id="apellidos"
            name="apellidos"
            value={formulario.apellidos}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full bg-zinc-700 border border-zinc-500 rounded-md text-white focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-white-100">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formulario.email}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border bg-zinc-700 border-zinc-500 rounded-md text-white focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor="asunto" className="block text-sm font-medium text-white-100">
            Subject:
          </label>
          <input
            type="text"
            id="asunto"
            name="asunto"
            value={formulario.asunto}
            onChange={handleChange}
            required
            className="mt-1 p-2 w-full border bg-zinc-700 border-zinc-500 rounded-md text-white focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor="mensaje" className="block text-sm font-medium text-white-100">
            Tell us:
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formulario.mensaje}
            onChange={handleChange}
            required
            rows="4"
            className="mt-1 p-2 w-full border bg-zinc-700 border-zinc-500 rounded-md text-white focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200"
          ></textarea>
        </div>
  
        <div className="text-center">
            <button
                type="submit"
                className="w-[40%] inline-block bg-indigo-500 text-white p-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-200"
            >
                SEND
            </button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default AboutScript;