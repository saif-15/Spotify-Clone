import Head from 'next/head';
import SideBar from '../components/SideBar';

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify 2.0</title>
        <link rel="icon" href="/favicon.ico" /> 
      </Head>

     <main>
       <SideBar/>
       {/* <Center/> */}
     </main>

     <div>
       {/* <Player/> */}
     </div>

      
    </div>
  )
}
