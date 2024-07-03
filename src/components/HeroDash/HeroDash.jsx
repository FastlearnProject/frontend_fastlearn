const HeroDash = ({userData}) => {
  if (!userData) {
    return null; 
  }
  return (
    <>
      <section className="flex flex-col md:flex-row mx-4 md:mx-24">
        <article className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10 my-5">
          <div className="rounded-full bg-primary md:w-72 md:h-72 flex items-center justify-center">
            <img src="" alt="" className="max-w-full max-h-full" />
          </div>
          <div className="flex flex-col space-y-2 text-md">
            <span ><b>Nombre completo: </b>{userData.nombre}</span>
            <span ><b>Correo: </b>{userData.correo}</span>
            <span ><b>Fecha de nacimiento: </b>{userData.fechaNacimiento}</span>
            <span ><b>Telefono: </b>{userData.telefono}</span>
            <textarea name="" id="" placeholder="Cuentanos de ti" className="p-2"></textarea>
          </div>
        </article>
      </section>
      <section className="flex flex-col md:flex-row justify-around mx-4 md:mx-24 my-4">
        <button
          className="btn w-full md:w-3/12 my-2 md:my-0 bg-primary text-white"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Editar Información
        </button>
        <button
          className="btn w-full md:w-3/12 my-2 md:my-0 bg-red-500 text-white"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Eliminar cuenta
        </button>
      </section>

      {/* Modales */}
      <div className="modal">
        {/* Editar cuenta */}
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Editar Información</h3>
            <p className="py-4">Presiona ESC o clic en <b>cancelar</b> para cerrar</p>
            <form action="" className="flex flex-col space-y-5">
              <input
                type="text"
                placeholder={userData.nombre}
                name="nombre"
                value=""
                className="px-2 py-3 outline-primary"
              />
              <input
                type="email"
                placeholder={userData.correo}
                name="email"
                value=""
                className="px-2 py-3 outline-primary"
              />
              <input
                type="tel"
                placeholder={userData.telefono}
                name="telefono"
                value=""
                className="px-2 py-3 outline-primary"
              />
              <textarea
                placeholder="Descripción"
                name="descripcion"
                value=""
                className="px-2 py-3 outline-primary"
              ></textarea>
              <button type="button" className="btn bg-primary hover:bg-green-500 text-white">Actualizar</button>
              <button type="button" className="btn hover:bg-green-500 hover:text-white" onClick={() => document.getElementById("my_modal_1").close()}>Cancelar</button>
            </form>
          </div>
        </dialog>

        {/* Eliminar cuenta */}
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-red-700">
              ¿Estás seguro de eliminar tu cuenta?
            </h3>
            <p className="py-4">Presiona ESC o clic en cancelar para cerrar</p>
            <button className="w-full bg-red-700 py-4 text-white rounded-md">
              Si, quiero eliminar mi cuenta
            </button>
            <div className="modal-action">
              <div className="flex space-x-5">
                <button className="btn hover:bg-green-500" onClick={() => document.getElementById("my_modal_2").close()}>Cerrar</button>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default HeroDash;
