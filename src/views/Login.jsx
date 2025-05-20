import React, { useState } from 'react'
import Button from '../components/Buttons/Button'
import '../assets/css/Login.css';
const Login = () => {

    let [isViewable, setIsViewable] = useState(true);
    const openFace = '🙂';
    const closeFace = '☺️';

    const handleLogin = () =>{
        alert('i m logging in');
        console.log('logged in')
    }

    return (
        <>
            <form className='w-full h-screen flex items-center justify-center bg_img'>

                <div className='relative flex flex-col items-center justify-between shadow-sm rounded w-[50%] h-[50%] border bg-white border-amber-50 p-5'>

                    <div className='grid grid-cols-2 w-full gap-5'>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-xl text-black font-semibold'>Aadhi Construction</h2>
                            <h6>🤝Vanakkam</h6>
                        </div>

                        <div className='flex flex-col relative p-3'>
                            <p className='absolute bg-white px-1 top-0 left-[1.5rem] text-sm font-medium text-gray-600'>username<span className='text-red-600 mx-1'>*</span></p>
                            <input className='text-[15px] border-2 p-2 border-gray-400 h-[40px] rounded' type='text' placeholder='Enter User Name' required />
                        </div>
                        <div className='flex flex-col relative p-3'>
                            <p className='absolute bg-white px-1 top-0 left-[1.5rem] text-sm font-medium text-gray-600'>email<span className='text-red-600 mx-1'>*</span></p>
                            <input className='text-[15px] border-2 p-2 border-gray-400 h-[40px] rounded' type={isViewable ? 'text' : 'password'} placeholder='Enter User Name' required />
                        </div>
                        <div className='flex flex-col relative p-3'>
                            <p className='absolute bg-white px-1 top-0 left-[1.5rem] text-sm font-medium text-gray-600'>password<span className='text-red-600 mx-1'>*</span></p>
                            <input className='text-[15px] border-2 p-2 border-gray-400 h-[40px] rounded' type={isViewable ? 'text' : 'password'} placeholder='Enter User Name' required />
                            <span onClick={() => setIsViewable(isViewable = !isViewable)} className='absolute right-[1rem] top-[1.1rem] cursor-pointer'>{isViewable ? closeFace : openFace}</span>
                        </div>

                        <div className='col-span-2 flex items-center justify-center gap-3'>
                            <Button label="Login"
                                color={"primary"}
                                id="button"
                                variant="outline"
                                tooltip="Login"
                                icon={null}
                                isDisable={false}
                                loading={false}
                                size={'sm'}
                                width={'w-[5rem]'}
                                action={handleLogin} />
                            <Button label="Download"
                                color={"success"}
                                id="button"
                                variant="outline"
                                tooltip="Click to download"
                                icon={null}
                                isDisable={false}
                                loading={false}
                                size={'sm'}
                                width={'w-[5rem]'}
                                action={() => alert('Downloading...')} />
                        </div>
                    </div>


                </div>

            </form>
        </>
    )
}

export default Login