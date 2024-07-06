import React from "react";

const FilterBar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleReset = () => {
    setFilters({
      name: "",
      category: "",
      tags: "",
    });
  };

  return (
    <div className="bg-gray-100 rounded-md mb-6">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <input
          type="text"
          name="name"
          placeholder="Buscar por nombre"
          value={filters.name}
          onChange={handleChange}
          className="grow p-2 border-2 border-slate-300 outline-none rounded-lg"
        />
        <input
          type="text"
          name="category"
          placeholder="Buscar por categoría"
          value={filters.category}
          onChange={handleChange}
          className="grow p-2 border-2 border-slate-300 outline-none rounded-lg"
        />
        <input
          type="text"
          name="tags"
          placeholder="Buscar por tags"
          value={filters.tags}
          onChange={handleChange}
          className="grow p-2 border-2 border-slate-300 outline-none rounded-lg"
        />
        <button
          onClick={handleReset}
          className="p-2 bg-red-500 text-white rounded-md"
        >
          Limpiar Filtros
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
