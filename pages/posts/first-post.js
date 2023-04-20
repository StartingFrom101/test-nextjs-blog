import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/layout";


export default function FirstPost() {
    return (
        
            <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <h1>First Post</h1>
            <h2>
                <Image src="/images/image.jpg"
                width={500}
                height={500}
                />
            </h2>
            </Layout>
    );
  }