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
          Welcome to <a href="https://nextjs.org">wei-blog</a>
        </h1>

        <p className={styles.description}>
          Hello, I'm Wei Kee. I'm a software engineer.
        </p>

        
        <ul>
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
    
    </ul>
      </main>

      <footer className={styles.footer}>
        <p>© Wei Kee Haw</p>
      </footer>
    </div>
  );
}
