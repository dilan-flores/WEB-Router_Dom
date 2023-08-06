import { Link, Outlet, useLocation } from 'react-router-dom'

const Dashboard = () => {
    // inicializamos la función
    const location = useLocation()
    // Obtenemos la url actual: en este caso: http://localhost:3000/metro
    const urlActual = location.pathname

    return (
        <div className='md:flex md:min-h-screen'>
            <div className='md:w-1/4 bg-sky-900 px-5 py-10'>
                <h2 className='text-4xl font-black text-center text-white underline'>Fundamentos</h2>
                <nav className='mt-10'>
                    {/* inicialización del componente */}
                    <Link to='/fundamentos/usestate' className={`${urlActual === '/fundamentos/usestate' ? 'text-blue-300 underline' : 'text-white'} text-2xl block mt-2 hover:text-blue-200`}>useState</Link>

                    <Link to='/fundamentos/useffect' className={`${urlActual === '/fundamentos/useffect' ? 'text-blue-300 underline' : 'text-white'} text-2xl block mt-2 hover:text-blue-200`}>useEffect</Link>

                    <Link to='/' className=" text-white text-2xl block mt-4 hover:text-red-300 text-center bg-red-900 p-1 rounded-lg">Salir</Link>

                </nav>

            </div>
            <div className='md:w-3/4 p-10 md:h-screen overflow-y-scroll'>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard