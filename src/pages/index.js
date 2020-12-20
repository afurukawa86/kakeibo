import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>kakeibo</title>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" />
        <meta name='robots' content='index/follow' />
        <meta name='description' content='controle financeiro pessoal' />
      </Head>
      <Header />
      <Main />
    </>
  )
}