import {
  ClientSafeProvider,
  getSession,
  LiteralUnion,
  signIn,
} from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';

import { clientSignInSchema } from '@/utils/lib/yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TSignIn } from '@/utils/lib/types';
import TwSignInInput from '../forms/TwSignInInput';
import TwSubmitBtn from '../forms/TwSubmitBtn';
import { BuiltInProviderType } from 'next-auth/providers';

interface IProps {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}
const SignIn = ({ providers }: IProps) => {
  const router = useRouter();
  const [isMsgSentProgress, setIsMsgSentProgress] = useState(false);
  const [showDialog, setShowDialog] = useState<{
    show: boolean;
    title: string;
    msg: string;
  }>({ show: false, title: '', msg: '' });

  async function signInUser(values: TSignIn) {
    const result = await signIn<'credentials'>('credentials', {
      redirect: false,
      username: values.email,
      password: values.password,
    });
    console.log('signresult:', result);
    if (result?.error) {
      setShowDialog({
        show: true,
        title: 'HATA',
        msg: 'Şifrenizi/E-Posta adresinizi kontrol ederek tekrar deneyiniz.',
      });
      return;
    }

    const session = await getSession();
    //console.log('session after login:', session?.user);
    if (!session) {
      router.replace('/');
    }
  }

  const methods = useForm({
    mode: 'onTouched',
    resolver: yupResolver(clientSignInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const {
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (values: TSignIn) => {
    //console.log(values);
    setIsMsgSentProgress(true);
    try {
      await signInUser(values);
    } catch (error) {
      //console.log(error);
    }
    setIsMsgSentProgress(false);
    reset();
  };

  return (
    <div className={'w-full mx-auto bg-white mb-32'}>
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={'border-r border-l border-b rounded-b-sm'}
        >
          <div
            className={
              'w-full flex flex-col justify-center items-center px-8 py-6 text-black'
            }
          >
            <input name='csrfToken' type='hidden' />
            <TwSignInInput label='Email' id='email' type='text' />
            <TwSignInInput label='Password' id='password' type='password' />
            <Link href='/forgotpassword' passHref>
              <a className={'self-end py-1 text-xs underline cursor-pointer'}>
                Forgot Password
              </a>
            </Link>
            <TwSubmitBtn
              type='submit'
              className='w-full text-base text-white mt-4 py-2 px-6 rounded-sm inline-flex justify-center tracking-widest'
            >
              {!isSubmitting ? (
                <div>Sign In</div>
              ) : (
                <div
                  style={{ borderTopColor: 'transparent' }}
                  className='border-solid animate-spin rounded-full border-gray-200 border-4 h-6 w-6 text-center'
                ></div>
              )}
            </TwSubmitBtn>
          </div>
        </form>
      </FormProvider>
      <div className='flex justify-center items-center'>
        {Object.values(providers!).map((provider) => {
          if (provider.name === 'Google') {
            return (
              <button
                key={provider.name}
                className='w-1/2 bg-neutral-50 border text-sm py-1 px-2 inline-flex items-center justify-center hover:bg-neutral-100'
                onClick={() => signIn(provider.id)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  width='36'
                  height='36'
                  viewBox='0 0 48 48'
                >
                  <defs>
                    <path
                      id='a'
                      d='M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z'
                    />
                  </defs>
                  <clipPath id='b'>
                    <use xlinkHref='#a' overflow='visible' />
                  </clipPath>
                  <path clipPath='url(#b)' fill='#FBBC05' d='M0 37V11l17 13z' />
                  <path
                    clipPath='url(#b)'
                    fill='#EA4335'
                    d='M0 11l17 13 7-6.1L48 14V0H0z'
                  />
                  <path
                    clipPath='url(#b)'
                    fill='#34A853'
                    d='M0 37l30-23 7.9 1L48 0v48H0z'
                  />
                  <path
                    clipPath='url(#b)'
                    fill='#4285F4'
                    d='M48 48L17 24l-4-3 35-10z'
                  />
                </svg>
                <div className={'flex flex-col text-left pl-2'}>
                  <div className='text-xs font-semibold'>Google</div>
                  <div className={'text-xs text-neutral-700'}>
                    ile giriş yap
                  </div>
                </div>
              </button>
            );
          } else if (provider.name === 'Facebook') {
            return (
              <button
                key={provider.name}
                className='w-1/2 bg-neutral-50 border text-sm py-1 px-2 inline-flex items-center justify-center hover:bg-neutral-100'
                onClick={() => signIn(provider.id)}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='36'
                  height='36'
                  viewBox='0 0 24 24'
                  fill='#4C6EA8'
                >
                  <path d='M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z' />
                </svg>
                <div className={'flex flex-col text-left pl-2'}>
                  <div className='text-xs font-semibold'>Facebook</div>
                  <div className={'text-xs text-neutral-700'}>
                    ile giriş yap
                  </div>
                </div>
              </button>
            );
          }
        })}
      </div>
    </div>
  );
};
export default SignIn;
