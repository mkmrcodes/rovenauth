import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  const { data: session, status } = useSession();
  //const loading = status === 'loading';

  return (
    <div>
      <Head>
        <title>Roven Auth</title>
        <meta name='description' content='next-auth prisma postgres example' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        {!session && (
          <div>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
          </div>
        )}
        {session?.user && (
          <div>
            <Image
              src={session.user.image as string}
              alt='user image'
              width={100}
              height={100}
            />
            <div>
              Signed in as {session.user.email} <br />
              <button onClick={() => signOut()}>Sign out</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
