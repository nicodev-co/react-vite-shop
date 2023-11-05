import { useContext, useRef } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { ShoppingCartContext } from '../../Context';

function SignIn() {
  const { account, setAccount, setSignOut } = useContext(ShoppingCartContext);
  const form = useRef(null);

  const accountLocalStorage = localStorage.getItem('account');
  const parseAccount = JSON.parse(accountLocalStorage);
  const noAccountLocalStorage = parseAccount
    ? Object.keys(parseAccount).length === 0
    : true;
  const noAccountLocalState = account
    ? Object.keys(account).length === 0
    : true;
  const hasUserAccount = !noAccountLocalStorage || !noAccountLocalState;

  const handleSignIn = () => {
    localStorage.setItem('sign-out', JSON.stringify(false));
    setSignOut(false);
    return <Navigate replace to={'/'} />;
  };

  const createAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };

    localStorage.setItem('account', JSON.stringify(data));
    setAccount(data);
    handleSignIn();
  };

  return (
    <div className='m-auto w-2/3'>
      <div className='flex justify-center items-center gap-5 mt-10'>
        <div className='flex-1 bg-[#448c74] px-6 rounded-2xl py-16'>
          <h2 className='text-4xl font-bold text-white text-center mb-6'>
            Sign in
          </h2>
          <form className='flex flex-col items-center justify-center gap-7'>
            <div className='relative w-10/12'>
              <AiOutlineMail className='absolute text-white left-0 top-1/2 -translate-y-1/2 ml-4' />
              <input
                type='email'
                className='flex-1 text-white border border-white/50 bg-[#448c74]  py-4  pl-11 w-full rounded-2xl outline-none placeholder:text-white/50 focus:border-white'
                placeholder='Email address'
                defaultValue={parseAccount?.email}
                required
                readOnly={hasUserAccount}
                disabled={!hasUserAccount}
              />
            </div>
            <div className='relative w-10/12'>
              <RiLockPasswordLine className='absolute text-white left-0 top-1/2 -translate-y-1/2 ml-4' />
              <input
                type='password'
                defaultValue={parseAccount?.password}
                className='flex-1 text-white border border-white/50 bg-[#448c74] py-4 pl-11 w-full rounded-2xl outline-none placeholder:text-white/50 focus:border-white'
                placeholder='Password'
                readOnly={hasUserAccount}
                required
                disabled={!hasUserAccount}
              />
            </div>
            <div className='flex justify-between w-10/12'>
              <div className='flex justify-center items-center gap-2'>
                <input type='checkbox' className='w-4 h-4' id='signed' />
                <label htmlFor='signed' className='text-white/70'>
                  keep me signed in
                </label>
              </div>
              <a href='#' className='text-white font-bold'>
                Forgot password?
              </a>
            </div>
            <Link to={'/'} className='w-10/12'>
              <button
                onClick={() => handleSignIn()}
                className='bg-slate-100 font-bold text-black text-lg py-4 w-full rounded-2xl'
                disabled={!hasUserAccount}
              >
                Sign in
              </button>
            </Link>
          </form>
        </div>
        <div className='flex-1 px-6 py-16'>
          <h2 className='text-4xl font-bold text-black text-center mb-6'>
            Sign up
          </h2>
          <form
            ref={form}
            className='flex flex-col justify-center items-center gap-7'
          >
            <div className='flex justify-center  gap-x-7 w-10/12'>
              <input
                type='text'
                name='name'
                className=' text-black border border-gray-300 bg-white w-full py-4 px-5 rounded-2xl outline-none placeholder:text-gray-400 focus:border-black  disabled:bg-gray-100'
                placeholder='Your name'
                required
                disabled={hasUserAccount}
              />

              <input
                type='email'
                name='email'
                className=' text-black border  border-gray-300 bg-white w-full py-4 px-5 rounded-2xl outline-none placeholder:text-gray-400 focus:border-black  disabled:bg-gray-100'
                placeholder='Email address'
                required
                disabled={hasUserAccount}
              />
            </div>

            <input
              type='password'
              name='password'
              className='text-black border border-gray-300 bg-white py-4 px-5 w-10/12 rounded-2xl outline-none placeholder:text-gray-400 focus:border-black  disabled:bg-gray-100'
              placeholder='Password'
              required
              disabled={hasUserAccount}
            />

            <input
              type='password'
              name='confirm-password'
              className='text-black border border-gray-300 bg-white py-4 px-5 w-10/12 rounded-2xl outline-none placeholder:text-gray-400 focus:border-black disabled:bg-gray-100'
              placeholder='Confirm password'
              required
              disabled={hasUserAccount}
            />
            <Link to={'/'} className='w-10/12'>
              <button
                className='bg-[#448c74] text-white font-bold text-lg py-4 w-full rounded-2xl text-center disabled:bg-[#448c74cc]'
                onClick={() => createAccount()}
                disabled={hasUserAccount}
              >
                Sign up
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
