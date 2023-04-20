import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = "Rin";
export const SiteTitle = name + "'s Site";

export default function Layout({ children, home }) {
    return( 
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      {home ? (<><p>This is Home</p></>) : (<><p>Not Home</p></>) }

      <main>{children}</main>
      {!home && (<Link href="/">Go home?</Link>)}
    </div>)
  }
  