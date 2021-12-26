import AppBar from '../components/AppBar'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ContactForm } from '../components/ContactForm'

const Home: NextPage = () => {
  return (
    <>
    <AppBar/>
    <div className={styles.container}>
      <Head>
        <title>SARAS Engineers</title>
      </Head>
      
      <main className={styles.main}>  
      </main>
    </div>
    <footer className={styles.footer}>
       <div className="row ml-5">
         <div className="col-4">
           <ContactForm/>
         </div>
         <div className="col-4">
           hello
         </div>
         <div className="col-4">
           hello
         </div>
       </div>
    </footer>
    </>
  )
}

export default Home
