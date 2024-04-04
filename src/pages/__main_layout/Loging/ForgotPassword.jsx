import { Link } from 'react-router-dom';
import { emails } from '@/data/correos.data';


const ForgotPassword = ({initialEmail,onCancel}) => {
  console.log(initialEmail)
  // const [email, setEmail] = useState(initialEmail || '');
  const [message, setMessage] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const [profileImg, setProfileImg] = useState('');
  const [usuario,setUsuario] =useState('');
  const [telefono, setTelefono] = useState(initialEmail || '');
  const [messageSent, setMessageSent] = useState(false);

  console.log("message= "+ message)
  console.log("tel= "+ telefono)
  console.log(initialEmail)

  const handleTelefonoChange = (e) => {
    const inputTelefono = e.target.value;
    const telefonoNumerico = inputTelefono.replace(/\D/g, '');
    if (telefonoNumerico.length <= 11) {
      setTelefono(telefonoNumerico);
    }
  };

  const handleCancelClick = () => {
    onCancel();
  };

  const searchEmail = () => {
    const telefonoNumerico = parseInt(telefono, 10); // Convertir el teléfono a un número
    const foundEmail = emails.find((item) => item.tel === telefonoNumerico);
    if (foundEmail) {
      setMessage(false);
      setShowProfile(true);
      setProfileImg(foundEmail.img);
      setUsuario(foundEmail.nombrePerfil);
      console.log("lo encontro");
    } else {
      setMessage(true);
      setShowProfile(false);
      console.log("no encontro");
    }
  };

  const handleResetPassword = () => {
    setMessageSent(true);
  };

  useEffect(() => {
    searchEmail();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchEmail();
  };

  return (
    <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Olvidaste tu contraseña</h3>
            <div>
            {message && telefono && (
                <div className="mt-3 p-3 bg-red-100 rounded-md text-sm text-gray-900">
                  <p>Correo no encontrado. Verifica si está bien escrito.</p>
                </div>
              )}
              {!showProfile && (
                <>
                <div className="mt-2 max-w-xl text-sm text-gray-500">
                  <p>Ingresa tu correo electrónico para buscar tu cuenta.</p>
                 </div>

                  <form className="mt-5 sm:flex sm:items-center">
                  <div className="w-full sm:max-w-xs mb-4">
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      id="telefono"
                      name="telefono"
                      type="text"
                      placeholder="Número de Teléfono"
                      value={telefono}
                      onChange={handleTelefonoChange}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </form>
                <div className="flex mt-3">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="flex-1 inline-flex justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    >
                      Buscar
                    </button>
                    <button
                      type="button"
                      onClick={handleCancelClick}
                      className="flex-1 ml-3 inline-flex justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    >
                      Cancelar
                    </button>
                  </div>
                </>
              )}
              {messageSent && (
                <div className="mt-3 p-3 bg-green-100 rounded-md text-sm text-gray-900">
                  <p>Se envió un mensaje a tu correo electrónico para restablecer tu contraseña.</p>
                </div>
              )}
              {showProfile && (
                <>
                <div className="flex justify-center items-center mt-8 mb-4">
                  <img src={profileImg} alt="Imagen de perfil" className='border border-1 border-black rounded-full w-1/3 h-1/3 ' />
                </div>
                <div className='flex flex-col justify-center items-center'>
                  <p>Iniciar sesión como <span className="font-bold">{usuario}</span></p>
                  <p className='text-gray-500'>{telefono}</p>
                  <p>¿Eres tu?</p>
                </div>
                <div className="flex mt-10 ">
                    <button
                      type="submit"
                      onClick={handleResetPassword}
                      className="flex-1 inline-flex justify-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    >
                      Reponer Contraseña
                    </button>
                    <button
                      type="button"
                      onClick={handleCancelClick}
                      className="flex-1 ml-3 inline-flex justify-center items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    >
                      Cancelar
                    </button>
                  </div>
                
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
