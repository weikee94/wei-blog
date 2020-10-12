import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Me - Wei Kee Haw</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="wkhaw, developer, blog" />
        <meta
          name="description"
          content="Looking for weikee? Nice to meet you!"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello
        </h1>

        <p className={styles.desc}>
          I'm <strong>Wei Kee</strong>. I'm a software engineer. I've been working in tech as a programmer since 2016. In my spare time, you can catch me cooking, playing guitar, or on the way to running! 
        </p>

        <p className={styles.desc}>
          Check out my <a href="https://www.linkedin.com/in/wei-kee-haw-2806b8109/">LinkedIn</a> to get to know me a bit better, or <a href="mailto:weikee070194@gmail.com">email</a> and say hi. Also, I'll be on the job hunt soon and am open to hearing about new opportunities!
        </p>

        
        {/* <ul>
      <li>
        <Link href="/post/web-performance">
          <a className={styles.blogTitle}>Web Performance</a>
        </Link>
      </li>
      <li>
        <Link href="/post/rn-android">
          <a className={styles.blogTitle}>RN Android</a>
        </Link>
      </li>
      <li>
        <Link href="/post/xcode-error">
          <a className={styles.blogTitle}>Xcode Error</a>
        </Link>
      </li>
      <li>
        <Link href="/post/react-router-refresh">
          <a className={styles.blogTitle}>React Router Refresh</a>
        </Link>
      </li>
      <li>
        <Link href="/post/add-subdomain">
          <a className={styles.blogTitle}>Add Subdomain</a>
        </Link>
      </li>
    
    </ul> */}
      </main>

      <footer className={styles.footer}>
        <p>© Wei Kee Haw</p>
      </footer>
    </div>
  );
}
