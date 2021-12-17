import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className='text-2xl font-bold underline'>Hello world!</h1>
    </div>
  );
}
