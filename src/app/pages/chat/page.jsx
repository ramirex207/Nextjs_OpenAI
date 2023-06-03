import logo from './nefrocentro-good2.png'
import Image from 'next/image'
function Chat() {
    return (
        <div className="w-full flex justify-center">
            <div className="w-60 sm:w-96 sm:h-96 h-60 border-2 rounded-xl flex flex-col items-center bg-gradient-to-r from-blue-500 to-green-500">
                <div className="w-20 h-20 bg-teal-950 rounded-full border border-1 border-teal-50 mt-4 mb-4 pt-2">
                    <Image src={logo} width={100} height={100}></Image>
                </div>
                <h1 className="font-bold text-xl text-white mb-8">Iniciar Sesion</h1>
                <div className="flex flex-col w-60 items-center">
                    <div className='flex border border-1 items-center rounded-md text-teal-50 mb-4'>
                        <svg  className='ml-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                        </svg>
                        <input  className="bg-transparent w-48 focus:outline-none italic pl-4" type="text" placeholder='ingrese su correo'></input>
                    </div> 
                        
                    <div className='flex border border-1 items-center rounded-md text-teal-50'>
                        <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">                                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                        </svg>
                        <input  className="bg-transparent w-48 focus:outline-none italic pl-4" type="password" placeholder='ingrese su contraseña'></input>
                    </div> 
                    

                </div>
            </div>
        </div>
    )
}

export default Chat