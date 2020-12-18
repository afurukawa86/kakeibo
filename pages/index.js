import Head from 'next/head'
import styles from '../styles/Index.module.css'
import Logo from '../components/Logo/Logo'
import Categoria from '../components/Categoria/Categoria'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>kakeibo</title>
        <link href="https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap" rel="stylesheet"></link>
        <meta name='robots' content='index/follow' />
        <meta name='description' content='controle financeiro pessoal' />
      </Head>

      <div className={styles.left}>
        <div className={styles.left__logo}>
          <Logo />
        </div>
        <section className={styles.left__categoria}>
          <Categoria />
        </section>
      </div>

      <div className={styles.right}>
        <nav className={styles.right__nav}>
          nav
        </nav>
        <main className={styles.right__conteudo}>
          conteudo
        </main>
      </div>
    </div>
  )
}