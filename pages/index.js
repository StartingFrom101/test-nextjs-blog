import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';

// Static import
import {getSortedPostsData} from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {props: {allPostsData}};
}

// LAYOUT 
export default function Home({allPostsData}) {
  return (
    <Layout home>
      
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div>
      <main>
      <h1 className="title">
         Read <Link href="/posts/first-post">this page!</Link>
      </h1>


        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>
        
        <p className={styles.description}>
          Read the first post <Link href="/posts/first-post">here!</Link>
        </p>

        <div >

            {allPostsData.map( ({id, date, title}) => (
              <div className={styles.card}>
                <Link href={`/posts/${id}`}>
                 <h2>{title}</h2>
                </Link>
                 <p>{date}</p>
                 <little>{id}</little>
                </div>
            ) )}

        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
     </div>
    </Layout>
  )
}
