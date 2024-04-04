export const CreateAccount = ({onCancel}) => {
  const [password,SetPassword]=useState('');
  const [againPassword,SetAgainPassword]=useState('');
  const [verifyPassword,SetVerifyPassword]=useState(false);
  const [message,SetMessage] = useState('');
  const [showCliente, setShowCliente] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedItems([...selectedItems, value]);
    } else {
      setSelectedItems(selectedItems.filter(item => item !== value));
    }
  };

  const handleSelectChange = (e) => {
    setShowCliente(e.target.value === 'si');
  };


  const handleCancelClick = () => {
    onCancel();
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    // Verificar si la contraseña y la confirmación coinciden y si todos los campos requeridos están llenos
    if (verifyPassword && password !== '' && againPassword !== '') {
      console.log('Misma Contraseña');
      SetMessage('');
    } else {
      console.log('Las contraseñas no coinciden');
      SetMessage('Las contraseñas no coinciden');
    }
  };

  return (
    <>
    <div className="flex justify-center items-center">
      <div className="bg-white flex w-1/2 h-1/2 rounded-xl">
        <form className="p-10 space-y-8 divide-gray-200 w-full " onSubmit={handleSubmit}>
        <div className="text-center mb-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Crea una cuenta</h3>
          <p className="max-w-2xl text-sm text-gray-500">Para empezar, vamos a añadir algunos detalles sobre ti.</p>
        </div>

        {message && (
                <div className="mt-3 p-3 bg-red-100 rounded-md text-sm text-gray-900">
                  <p>{message}</p>
                </div>
        )}

          <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
              <div className="mt-6 sm:mt-5 space-y-6 sm:space-y-5">
                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Nombre
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <div className="max-w-lg flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        autoComplete="nombre"
                        placeholder="nombre"
                        required
                        className="flex-1 block w-full focus:ring-primary-500 focus:border-primary-500 min-w-0 rounded-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label htmlFor="primer_apellido" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Primer apellido
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <div className="max-w-lg flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="primer_apellido"
                        id="primer_apellido"
                        autoComplete="primer_apellido"
                        placeholder="primer apellido"
                        required
                        className="flex-1 block w-full focus:ring-primary-500 focus:border-primary-500 min-w-0 rounded-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label htmlFor="contraseña" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Contraseña
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <div className="max-w-lg flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="contraseña"
                        id="contraseña"
                        autoComplete="contraseña"
                        placeholder="contraseña"
                        required
                        className="flex-1 block w-full focus:ring-primary-500 focus:border-primary-500 min-w-0 rounded-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label htmlFor="confirmar-contraseña" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Confirmar contraseña
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <div className="max-w-lg flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="confirmar-contraseña"
                        id="confirmar-contraseña"
                        autoComplete="confirmar-contraseña"
                        placeholder="confirmar contraseña"
                        required
                        className="flex-1 block w-full focus:ring-primary-500 focus:border-primary-500 min-w-0 rounded-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <label htmlFor="confirmar-contraseña" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                    Telefono
                  </label>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <div className="max-w-lg flex rounded-md shadow-sm">
                      <input
                        type="text"
                        name="telefono"
                        id="telefono"
                        autoComplete="telefono"
                        placeholder="telefono"
                        required
                        className="flex-1 block w-full focus:ring-primary-500 focus:border-primary-500 min-w-0 rounded-md sm:text-sm border-gray-300"
                      />
                    </div>
                  </div>
                </div>


                
                <div className=" sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <div className="m-y-5">
                  <label >¿Eres cliente?</label>
                  </div>
                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="max-w-lg flex rounded-md shadow-sm">
                      <select
                        onChange={handleSelectChange}
                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      >
                        <option value="" disabled selected>Selecciona una opcion</option>
                        <option value="si">Si</option>
                        <option value="no">No</option>
                      </select>
                      </div>
                      
                      {
                        showCliente ? 
                        <div className=" sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
                  <div className="m-y-5">
                  <label >Selecciona una opcion</label>
                  </div>

                    <div className="mt-1 sm:mt-0 sm:col-span-2">
                      <div className="max-w-lg flex rounded-md shadow-sm">
                      <select
                        className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                      >
                        <option value="" disabled selected>Selecciona una opcion</option>
                        <option > Afore coppel</option>
                        <option >Credito coopel</option>
                        <option >Cliente coopel</option>
                      </select>
                      </div>
                      
                    </div>

                        </div>
                        : null
                      }

                    </div>
                </div>
                
                


              </div>
            </div>


          <div className="pt-5">
                <div className="flex flex-row sm:flex-row w-full items-center">
                  <input
                    id="autorizacion"
                    aria-describedby="autorizacion-description"
                    name="autorizacion"
                    type="checkbox"
                    className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
                    required
                  />
                  <button className="m-l-2 font-bold text-primary underline decoration-solid block w-full">
                    Leer las condiciones de la página Conexion Emprendedora
                  </button>
                </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                onClick={handleCancelClick}
                className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </>
  )

}
