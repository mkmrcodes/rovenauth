/* eslint-disable react/no-unescaped-entities */
import type { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  useSession,
} from 'next-auth/react';
import SignIn from '@/src/components/auth/SignIn';
import Loading from '@/src/components/shared/Loader';
import Layout from '@/src/components/shared/Layout';
import { BuiltInProviderType } from 'next-auth/providers';

interface IProps {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}

const SignInPage: NextPage<IProps> = ({ providers }) => {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (session) {
    router.replace('/');
  }

  return (
    <Layout>
      {status === 'loading' ? (
        <Loading />
      ) : (
        <div className='font-display mt-8 md:mt-16'>
          <div className={'max-w-sm mx-auto shadow-card '}>
            <div className={'mt-4 p-2 text-text-dark bg-text-dark text-center'}>
              <h1
                className={'font-display text-2xl font-bold text-neutral-100 '}
              >
                SIGN IN
              </h1>
            </div>

            <div className='bg-dark'>
              <SignIn providers={providers} />
            </div>

            {/* <div>
                  <SignUp />
                </div> */}
          </div>
        </div>
      )}
    </Layout>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const providers = await getProviders();
  return {
    props: { providers },
  };
};
export default SignInPage;
