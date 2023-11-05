import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';

function MyAccount() {
  const { setAccount } = useContext(ShoppingCartContext);
  const [editAccount, setEditAccount] = useState(false);

  const accountLocalStorage = localStorage.getItem('account');
  const parseAccount = JSON.parse(accountLocalStorage);
  const navigate = useNavigate();
  const saveAccount = (event) => {
    event.preventDefault();
    const form = new FormData(event.target);

    const data = {
      name: form.get('name'),
      email: form.get('email'),
      password: form.get('password'),
    };

    localStorage.setItem('account', JSON.stringify(data));
    setAccount(data);
    navigate('/');
  };

  return (
    <>
      <h1 className='text-center font-bold text-lg py-6'>My Account</h1>
      <div>
        <form
          onSubmit={(event) => saveAccount(event)}
          className='flex flex-col gap-5'
        >
          <input
            type='text'
            name='name'
            className=' text-black border border-gray-300 bg-white py-4 px-5 rounded-2xl outline-none placeholder:text-gray-400 focus:border-black  disabled:bg-gray-100'
            placeholder='Your name'
            defaultValue={parseAccount?.name}
            required
            disabled={!editAccount}
          />

          <input
            type='email'
            name='email'
            className=' text-black border  border-gray-300 bg-white py-4 px-5 rounded-2xl outline-none placeholder:text-gray-400 focus:border-black  disabled:bg-gray-100'
            placeholder='Email address'
            required
            defaultValue={parseAccount?.email}
            disabled={!editAccount}
          />
          <input
            type='password'
            name='password'
            className='text-black border border-gray-300 bg-white py-4 px-5 rounded-2xl outline-none placeholder:text-gray-400 focus:border-black  disabled:bg-gray-100'
            placeholder='Password'
            required
            defaultValue={parseAccount?.password}
            disabled={!editAccount}
          />
          {editAccount && (
            <button className='bg-[#9748FF] p-3 rounded-xl text-white font-bold text-lg'>
              Save
            </button>
          )}
        </form>

        {!editAccount && (
          <button
            onClick={() => setEditAccount(true)}
            type='button'
            className='bg-[#9748FF] w-full mt-5 p-3 rounded-xl text-white font-bold text-lg'
          >
            Edit
          </button>
        )}
      </div>
    </>
  );
}

export default MyAccount;
