import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';

export default function Home() {
  return (
    <div className="h-screen bg-gray-50">
      <Head>
        <title>kakeibo</title>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <meta name='robots' content='index/follow' />
        <meta name='description' content='controle financeiro pessoal' />
      </Head>
      <Header />
      <Main />
    </div>
  )
}