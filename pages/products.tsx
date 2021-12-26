import AppBar from '../components/AppBar'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { AppFooter } from '../components/AppFooter'

const Products: NextPage = () => {
  return (
    <>
    <AppBar/>
    <div className={styles.container}>
      <Head>
        <title>SARAS Engineers</title>
      </Head>
      
      <main className={styles.main}> 
      Products 
      </main>
    </div>
    <AppFooter/>
    </>
  )
}

export default Products
