import { Outlet } from 'react-router-dom'

const Login = () => {
    return (
        <div className='text-center'>
            {/* Para renderizar y mantener dinámico */}
            <Outlet /> 
        </div>
    )
}

export default Login