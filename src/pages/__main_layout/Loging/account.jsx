import { Link } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import { CreateAccount } from './CreateAccount';

const ladas = [
{
  pais:'México',
  icon:'https://cdn-icons-png.flaticon.com/256/330/330433.png',
  lada:'+52'
},
{
  pais:'Argentina',
  icon:'https://cdn-icons-png.flaticon.com/256/330/330487.png',
  lada:'+54'
},
{
  pais:'USA',
  icon:'https://cdn-icons-png.flaticon.com/256/330/330459.png',
  lada:'+1'
},
{
  pais:'Brasil',
  icon:'https://cdn-icons-png.flaticon.com/256/4087/4087479.png',
  lada:'+55'
},
{
  pais:'Chile',
  icon:'https://cdn-icons-png.flaticon.com/256/330/330554.png',
  lada:'+56'
},

]



export default function Loging() {
  // const [email, setEmail] = useState('');
  const [forgotPasswordClicked, setForgotPasswordClicked] = useState(false);
  const [createAccount,setCreateAccount]=useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(true);
  const [showForgotPassword, setShowForgotPassword] = useState(true);
  const [telefono, setTelefono] = useState('');
  const [ladaSeleccionada, setLadaSeleccionada] = useState('');
  const [sowcorreo,setShowCorreo] = useState(false);

  const handleShowCorreo = () => {
    setShowCorreo(false)
  }

  const handleNotShowCorreo = () => {
    setShowCorreo(true)
  }

  const handleLadaChange = (e) => {
    setLadaSeleccionada(e.target.value);
  };

  const handleTelefonoChange = (e) => {
    const inputTelefono = e.target.value;
    const telefonoNumerico = inputTelefono.replace(/\D/g, '');
    if (telefonoNumerico.length <= 11) {
      setTelefono(telefonoNumerico);
    }
  };

  const handleCancelCA = () => {
    setShowCreateAccount(false);
  };
  const handleCancelFP = () => {
    setShowForgotPassword(false);
  };

  // Función para manejar el clic en "Forgot your password?"
  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
    setForgotPasswordClicked(true);
  };

  const handleSignIn = (e) => {
    e.preventDefault();
  };

  const handleCreateAccount = () => {
    setShowCreateAccount(true); 
    setCreateAccount(true);
  }

  if(createAccount && showCreateAccount){
    return <CreateAccount onCancel={handleCancelCA}/>
  }

  if (forgotPasswordClicked && showForgotPassword) {
    return <ForgotPassword initialEmail={telefono} onCancel={handleCancelFP}/>;
  }


  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          /> */}
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">¡Te damos la bienvenida a Conexion Emprendedora!</h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSignIn}>
              {sowcorreo ? (
                <>
                <button
                  type="submit"
                  onClick={handleShowCorreo}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Telefono
                </button>
                <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Correo
                </label>
                <div className="mt-1">
                  <input
                    id="Correo"
                    name="Correo"
                    placeholder="Correo"
                    type="Correo"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>
              </>
              ):(
              <>
              <button
                  type="submit"
                  onClick={handleNotShowCorreo}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Correo
                </button>
              <div className='flex flex-row'>
              <div className="w-1/3 block text-sm font-medium text-gray-700">
              <select
                id="ladas"
                value={ladaSeleccionada}
                onChange={handleLadaChange}
                className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
              >
                <option value="" disabled hidden>Lada</option>
                {ladas.map((lada, index) => (
                  <option key={index} value={lada.lada}>
                    {lada.lada}
                  </option>
                ))}
              </select>
              </div>

              <div className="w-full">
                <input
                  id="telefono"
                  name="telefono"
                  type="text"
                  placeholder="Número de Teléfono"
                  value={telefono}
                  onChange={handleTelefonoChange}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              </div>
              </>
              )}

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    placeholder="Contraseña"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                    Remember Me
                  </label>
                </div>

                <div className="text-sm">
                  <button type="button" onClick={handleForgotPasswordClick} className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </button>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  iniciar sesión
                </button>
              </div>
              <div className='flex flex-col'>

                <p className='items-center justify-center'>¿No tienes cuenta con Conexion Emprendedora? </p> 
                <button
                  className='underline decoration-solid items-center justify-center'
                  type="button"
                  onClick={handleCreateAccount}
                > crear cuenta</button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
              <div>
              <a
                href="https://www.bing.com/ck/a?!&&p=b2167c4477a6ab8aJmltdHM9MTcxMjEwMjQwMCZpZ3VpZD0zMWU5MWJiZC0xNzBkLTYzMDEtMDMwYy0wODU4MTZlMzYyNzgmaW5zaWQ9NTIwNQ&ptn=3&ver=2&hsh=3&fclid=31e91bbd-170d-6301-030c-085816e36278&psq=iniciar+sesi%c3%b3n+google&u=a1aHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL2xvZ2luP2hsPWVz&ntb=1"
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                  <span className="sr-only">Iniciar sesión con Google</span>
                  <svg enableBackground="new 0 0 512 512" viewBox="0 0 512 512" className="w-5 h-5">
                    <g>
                      <path d="M42.4,145.9c15.5-32.3,37.4-59.6,65-82.3c37.4-30.9,80.3-49.5,128.4-55.2c56.5-6.7,109.6,4,158.7,33.4   c12.2,7.3,23.6,15.6,34.5,24.6c2.7,2.2,2.4,3.5,0.1,5.7c-22.3,22.2-44.6,44.4-66.7,66.8c-2.6,2.6-4,2.4-6.8,0.3   c-64.8-49.9-159.3-36.4-207.6,29.6c-8.5,11.6-15.4,24.1-20.2,37.7c-0.4,1.2-1.2,2.3-1.8,3.5c-12.9-9.8-25.9-19.6-38.7-29.5   C72.3,169,57.3,157.5,42.4,145.9z" fill="#E94335"/>
                      <path d="M126,303.8c4.3,9.5,7.9,19.4,13.3,28.3c22.7,37.2,55.1,61.1,97.8,69.6c38.5,7.7,75.5,2.5,110-16.8   c1.2-0.6,2.4-1.2,3.5-1.8c0.6,0.6,1.1,1.3,1.7,1.8c25.8,20,51.7,40,77.5,60c-12.4,12.3-26.5,22.2-41.5,30.8   c-43.5,24.8-90.6,34.8-140.2,31C186.3,501.9,133,477.5,89,433.5c-19.3-19.3-35.2-41.1-46.7-66c10.7-8.2,21.4-16.3,32.1-24.5   C91.6,329.9,108.8,316.9,126,303.8z" fill="#34A853"/>
                      <path d="M429.9,444.9c-25.8-20-51.7-40-77.5-60c-0.6-0.5-1.2-1.2-1.7-1.8c8.9-6.9,18-13.6,25.3-22.4   c12.2-14.6,20.3-31.1,24.5-49.6c0.5-2.3,0.1-3.1-2.2-3c-1.2,0.1-2.3,0-3.5,0c-40.8,0-81.7-0.1-122.5,0.1c-4.5,0-5.5-1.2-5.4-5.5   c0.2-29,0.2-58,0-87c0-3.7,1-4.7,4.7-4.7c74.8,0.1,149.6,0.1,224.5,0c3.2,0,4.5,0.8,5.3,4.2c6.1,27.5,5.7,55.1,2,82.9   c-3,22.2-8.4,43.7-16.7,64.5c-12.3,30.7-30.4,57.5-54.2,80.5C431.6,443.8,430.7,444.3,429.9,444.9z" fill="#4285F3"/>
                      <path d="M126,303.8c-17.2,13.1-34.4,26.1-51.6,39.2c-10.7,8.1-21.4,16.3-32.1,24.5C34,352.1,28.6,335.8,24.2,319   c-8.4-32.5-9.7-65.5-5.1-98.6c3.6-26,11.1-51,23.2-74.4c15,11.5,29.9,23.1,44.9,34.6c12.9,9.9,25.8,19.7,38.7,29.5   c-2.2,10.7-5.3,21.2-6.3,32.2c-1.8,20,0.1,39.5,5.8,58.7C125.8,301.8,125.9,302.8,126,303.8z" fill="#FABB06"/>
                    </g>
                  </svg>
                </a>
              </div>

              <div className="h-12">
                <a
                  href="https://www.enko.org/mx/encoppel/login"
                  className="w-full inline-flex justify-center items-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Iniciar secion con Fundacion Coopel</span>
                  <img className="w-8 h-5 object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVdzXdk-lwjd95V5zSymNrSPhcYU8H2x3dDlrB901X6A&s" alt="Fundacion Coopel Logo"/>
                </a>
              </div>

                <div>
                      <a
                        href="https://www.bing.com/ck/a?!&&p=0574d44a5bbeacf9JmltdHM9MTcxMjEwMjQwMCZpZ3VpZD0zMWU5MWJiZC0xNzBkLTYzMDEtMDMwYy0wODU4MTZlMzYyNzgmaW5zaWQ9NTIwNg&ptn=3&ver=2&hsh=3&fclid=31e91bbd-170d-6301-030c-085816e36278&psq=facebook+login&u=a1aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tLw&ntb=1"
                        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Sign in with Facebook</span>
                        <svg className="w-5 h-5" aria-hidden="true" fill="#1775f1" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}