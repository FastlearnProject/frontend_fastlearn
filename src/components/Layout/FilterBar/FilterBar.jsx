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
    <div className="p-4 bg-gray-100 rounded-md mb-6">
      <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
        <input
          type="text"
          name="name"
          placeholder="Buscar por nombre"
          value={filters.name}
          onChange={handleChange}
          className="p-2 mb-2 md:mb-0 border rounded-md"
        />
        <input
          type="text"
          name="category"
          placeholder="Buscar por categoría"
          value={filters.category}
          onChange={handleChange}
          className="p-2 mb-2 md:mb-0 border rounded-md"
        />
        <input
          type="text"
          name="tags"
          placeholder="Buscar por tags"
          value={filters.tags}
          onChange={handleChange}
          className="p-2 mb-2 md:mb-0 border rounded-md"
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
