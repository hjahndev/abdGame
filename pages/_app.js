import React from 'react';
import '../css/reset.css';
import '../css/style.css';
import Head from 'next/head';

function MyApp({ Component}) {
    return (
      <>
        <Head>
            <meta charSet="utf-8" />
            <title>어두운 바다의 등불이 되어 팬게임</title>
        </Head>
        <Component />
      </>
      
    );
}

  export default MyApp;