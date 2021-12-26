import AppBar from '../components/AppBar'
import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ContactForm } from '../components/ContactForm'

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
    <footer className={styles.footer}>
       <div className="row">
       <div className="col-12 col-md-4 col-sm-12 mb-2 " style={{color: '#ffffff', fontWeight: 'bold'}}>
         The Saras Engineers <br/>
         Mobile no. 8982227228 <br/>
         thesarasengineers@gmail.com <br/>
         Plot no.370 - gali no. 3 New bajrangpura Sanwer road 452015 <br/>
         GST NO. - 23CQPPP9512D1ZP <br/>
         </div>
         <div className="col-12 col-md-4 col-sm-12 mb-2">
           <ContactForm/>
         </div>
         <div className="col-12 col-md-4 col-sm-12 mb-2">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2455.5618407616425!2d75.84059805503514!3d22.758491220062737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396303e32565f7b3%3A0x30130836204e1dba!2sThe%20Saras%20Engineers!5e0!3m2!1sen!2sin!4v1640515582626!5m2!1sen!2sin" 
         height="250vh" loading="lazy"></iframe>
         </div>
        
       </div>
    </footer>
    </>
  )
}

export default Products
