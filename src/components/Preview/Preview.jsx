import React, { useState } from "react";

const Preview = () => {
  const [videoSrc, setVideoSrc] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");
  const [category, setCategory] = useState("");
  const [imageSrc, setImageSrc] = useState(null);

  const categories = ["Categoría 1", "Categoría 2", "Categoría 3"]; // Lista de categorías

  const handleVideoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoSrc(URL.createObjectURL(file));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageSrc(URL.createObjectURL(file));
    }
  };

  const handleAddLink = () => {
    if (newLink) {
      setLinks([...links, newLink]);
      setNewLink("");
    }
  };

  return (
    <div className="container mx-auto p-4 flex flex-wrap">
      <div className="w-full md:w-6/12 flex flex-col justify-start items-start p-2">
        <h1 className="block text-gray-700 text-md mb-2">Video</h1>
        <input
          type="file"
          accept="video/*"
          onChange={handleVideoUpload}
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
        />
        {videoSrc && (
          <video className="mt-4 w-full h-60 object-cover" controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>

      <div className="w-full md:w-6/12 flex flex-col justify-center p-2">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Título
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Descripción
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2 md:mb-0 md:mr-2"
            />
            <button
              onClick={handleAddLink}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Añadir
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Categoría
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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

        <div className="mb-4 space-x-5">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Imagen de Previsualización
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          />
          <button
            className="btn"
            onClick={() => document.getElementById("my_modal_4").showModal()}
          >
            Ver Preview
          </button>
          <dialog id="my_modal_4" className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
              <h3 className="font-bold text-lg">Preview</h3>
              <div className="py-4 flex space-x-10 justify-start items-start">
                {imageSrc && (
                  <img
                    src={imageSrc}
                    alt="Preview"
                    className="mt-4 w-6/12 h-60 object-cover rounded-md"
                  />
                )}
                <div>
                  <p className="mb-2">
                    <strong>Título:</strong> {title}
                  </p>
                  <p className="mb-2">
                    <strong>Descripción:</strong> {description}
                  </p>
                  <p className="mb-2">
                    <strong>Categoría:</strong> {category}
                  </p>
                  <ul className="mt-2">
                    {links.map((link, index) => (
                      <li key={index} className="text-blue-500">
                        {link}
                      </li>
                    ))}
                  </ul>
                  <div className="modal-action">
                    <form method="dialog">
                      <button className="btn">Cerrar</button>
                    </form>
                    <button className="btn bg-primary text-white hover:bg-green-500">Guardar</button>
                  </div>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
};

export default Preview;
