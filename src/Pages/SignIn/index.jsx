import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

function SignIn() {
  return (
    <div className='m-auto w-2/3'>
      <div className='flex justify-center items-center gap-5 mt-10'>
        <div className='flex-1 bg-[#448c74] px-6 rounded-2xl py-16'>
          <h2 className='text-4xl font-bold text-white text-center mb-6'>
            Sign in
          </h2>
          <form
            action=''
            className='flex flex-col items-center justify-center gap-7'
          >
            <div className='relative w-10/12'>
              <AiOutlineMail className='absolute text-white left-0 top-1/2 -translate-y-1/2 ml-4' />
              <input
                type='email'
                className='flex-1 text-white border border-white/50 bg-[#448c74]  py-4  pl-11 w-full rounded-2xl outline-none placeholder:text-white/50 focus:border-white'
                placeholder='Email address'
              />
            </div>
            <div className='relative w-10/12'>
              <RiLockPasswordLine className='absolute text-white left-0 top-1/2 -translate-y-1/2 ml-4' />
              <input
                type='password'
                className='flex-1 text-white border border-white/50 bg-[#448c74] py-4 pl-11 w-full rounded-2xl outline-none placeholder:text-white/50 focus:border-white'
                placeholder='Password'
              />
            </div>
            <div className='flex justify-between w-10/12'>
              <div className='flex justify-center items-center gap-2'>
                <input type='checkbox' className='w-4 h-4' id='signed' />
                <label htmlFor='signed' className='text-white/70'>keep me signed in</label>
              </div>
              <a href='#' className='text-white font-bold'>Forgot password?</a>
            </div>
            <button className='bg-slate-100 font-bold text-black text-lg py-4 w-10/12 rounded-2xl'>
              Sign in
            </button>
          </form>
        </div>
        <div className='flex-1 px-6 py-16'>
          <h2 className='text-4xl font-bold text-black text-center mb-6'>
            Sign up
          </h2>
          <form
            action=''
            className='flex flex-col justify-center items-center gap-7'
          >
            <div className='flex justify-center  gap-x-7 w-10/12'>
              <input
                type='text'
                className=' text-black border border-gray-300 bg-white w-full py-4 px-5  rounded-2xl outline-none placeholder:text-gray-400 focus:border-black'
                placeholder='Your name'
              />

              <input
                type='email'
                className=' text-black border  border-gray-300 bg-white w-full py-4 px-5 rounded-2xl outline-none placeholder:text-gray-400 focus:border-black'
                placeholder='Email address'
              />
            </div>

            <input
              type='text'
              className='text-black border border-gray-300 bg-white  py-4 px-5  w-10/12 rounded-2xl outline-none placeholder:text-gray-400 focus:border-black'
              placeholder='Password'
            />

            <input
              type='text'
              className='text-black border border-gray-300 bg-white  py-4 px-5  w-10/12 rounded-2xl outline-none placeholder:text-gray-400 focus:border-black'
              placeholder='Comfirm password'
            />

            <button className='bg-[#448c74] text-white font-bold text-lg py-4 w-10/12 rounded-2xl'>
              Sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
