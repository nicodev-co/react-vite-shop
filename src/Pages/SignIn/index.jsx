import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';

function SignIn() {
  return (
    <>
      <div className='flex justify-around items-center gap-5 mt-10 w-3/4'>
        <div className='flex-1 jus bg-[rgb(151,72,255)] p-6 rounded-2xl'>
          <h3 className='text-xl font-bold text-white text-center mb-6'>
            Sign In
          </h3>
          <form
            action=''
            className='flex flex-col items-center justify-center gap-3'
          >
            <div className='relative w-10/12'>
              <AiOutlineMail className='text-white/50  absolute left-0 top-1/2 -translate-y-1/2 ml-4 focus:border-white' />
              <input
                type='email'
                className='flex-1 text-white border border-white/50 bg-[rgb(151,72,255)]  p-2 pl-9 w-full rounded-2xl outline-none placeholder:text-white/50 focus:border-white'
                placeholder='Email address'
              />
            </div>
            <div className='relative w-10/12'>
              <RiLockPasswordLine className='text-white/50 absolute left-0 top-1/2 -translate-y-1/2 ml-4' />
              <input
                type='password'
                className='flex-1 text-white border border-white/50 bg-[rgb(151,72,255)]  p-2 pl-9 w-full rounded-2xl outline-none placeholder:text-white/50 focus:border-white'
                placeholder='Password'
              />
            </div>
            <button className='bg-slate-100 py-2 px-6  rounded-lg'>
              {' '}
              Sign In
            </button>
          </form>
        </div>
        <div className='flex flex-1 bg-zinc-600 justify-center items-center'>
          <form action=''>
            <input type='text' className='border border-blue-500' />
            <input type='text' className='border border-blue-500' />

            <input type='password' className='border border-blue-500' />
            <input type='password' className='border border-blue-500' />
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
