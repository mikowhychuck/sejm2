import Head from 'next/head';
import '@/app/globals.css';
import MPList from '@/components/mp-list';
import { getMPs } from '@/lib/api';

export default async function Home() {
  const MPs = await getMPs();
  return (
    <div className="container">
      <Head>
        <title>Lista Posłów</title>
      </Head>
      <h1>Lista Posłów</h1>
      <MPList mps={MPs} />
    </div>
  );
}
