import React, { useState } from "react";
import axios from "axios";

const Preview = () => {
  const [videoSrc, setVideoSrc] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");
  const [category, setCategory] = useState("");
  const [imageSrc, setImageSrc] = useState(null);

  const categories = ["Nivel 1", "Nivel 2", "Nivel 3"]; // Lista de categorías

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoSrc(URL.createObjectURL(file));
      // Subir el archivo al servidor aquí si es necesario
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file));
      // Subir el archivo al servidor aquí si es necesario
    }
  };

  const handleAddLink = () => {
    if (newLink) {
      setLinks([...links, newLink]);
      setNewLink("");
    }
  };

  const handleRemoveLink = (index) => {
    setLinks(links.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token no encontrado en localStorage.");
      return;
    }

    const cursoData = {
      imagen: imageSrc,
      video: videoSrc,
      titulo: title,
      descripcion: description,
      linkCurso: links.join(", "),
      tagsCurso: tags,
      categoria: category,
    };

    console.log(cursoData);

    try {
      const response = await axios.post(
        "https://service-fastlearn.onrender.com/cursos/",
        cursoData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        alert("Curso creado exitosamente");
        window.location.reload(true)
        // Limpiar formulario o redirigir al usuario aquí
      } else {
        alert("Error al crear curso");
      }
    } catch (error) {
      console.error("Error en la conexión:", error);
      if (error.response) {
        // El servidor respondió con un código de estado fuera del rango 2xx
        console.error("Datos de error del servidor:", error.response.data);
      } else if (error.request) {
        // La solicitud se realizó pero no se recibió respuesta
        console.error("No se recibió respuesta del servidor:", error.request);
      } else {
        // Ocurrió un error al configurar la solicitud
        console.error("Error al configurar la solicitud:", error.message);
      }
    }
  };

  return (
    <section className="flex flex-wrap w-full">
      <div className="w-full sm:w-5/12 m-5 h-60 flex justify-center items-center border border-dashed border-gray-300">
        {videoSrc ? (
          <video className="w-full h-full object-cover" controls>
            <source src={videoSrc} type="video/mp4" />
            Tu navegador no soporta este formato de video.
          </video>
        ) : (
          <span className="text-gray-500">Sin video</span>
        )}
      </div>

      <div className="w-full sm:w-5/12 m-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Título
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-primary rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Descripción
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-primary rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Tags
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="border border-primary rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Enlaces
            </label>
            <div className="flex flex-col md:flex-row">
              <input
                type="text"
                value={newLink}
                onChange={(e) => setNewLink(e.target.value)}
                className="border border-primary rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mb-2 md:mb-0 md:mr-2"
              />
              <button
                type="button"
                onClick={handleAddLink}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Añadir
              </button>
            </div>
            <ul className="mt-2 space-y-5">
              {links.map((link, index) => (
                <li
                  key={index}
                  className="text-blue-500 flex justify-between items-center"
                >
                  {link}
                  <button
                    type="button"
                    onClick={() => handleRemoveLink(index)}
                    className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                  >
                    Eliminar
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Categoría
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border border-primary rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
              required
            >
              <option value="" disabled>
                Seleccione una categoría
              </option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4 space-x-5 flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Imagen de Previsualización
            </label>
            <div className="flex space-x-5">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                required
              />
              <label
                className="btn"
                onClick={() => document.getElementById("modal-1").showModal()}
              >
                Ver Preview
              </label>
            </div>
            <dialog id="modal-1" className="modal">
              <section className="modal-box w-11/12 max-w-5xl">
                <h3 className="font-bold text-lg">Preview</h3>
                <article className="flex w-full space-x-5">
                  <figure className="flex space-x-10 justify-start items-start">
                    {imageSrc && (
                      <img
                        src={imageSrc}
                        alt="Preview"
                        className="h-60 object-cover rounded-md"
                      />
                    )}
                  </figure>
                  <div className="flex flex-col">
                    <p className="mb-2">
                      <strong>Título:</strong> {title}
                    </p>
                    <p className="mb-2">
                      <strong>Descripción:</strong> {description}
                    </p>
                    <p className="mb-2">
                      <strong>Categoría:</strong> {category}
                    </p>
                    <span>
                      <p className="mb-2">
                        <strong>Links:</strong>
                      </p>
                      <ul className="flex flex-col">
                        {links.map((link, index) => (
                          <a key={index} href={link} className="text-blue-500">
                            {link}
                          </a>
                        ))}
                      </ul>
                    </span>
                    <div className="modal-action flex justify-start">
                      <span
                        className="btn"
                        onClick={() =>
                          document.getElementById("modal-1").close()
                        }
                      >
                        Cerrar
                      </span>
                    </div>
                  </div>
                </article>
              </section>
            </dialog>
          </div>
          <div className="mb-4 space-x-5 flex flex-col">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Subir video
            </label>
            <div className="flex space-x-5">
              <input
                type="file"
                accept="video/*"
                onChange={handleVideoUpload}
                className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                required
              />
            </div>
          </div>
          <button className="btn" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
};

export default Preview;
