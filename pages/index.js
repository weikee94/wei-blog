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

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
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
    
    </ul>
      </main>

      <footer className={styles.footer}>
        <p>© Wei Kee Haw</p>
      </footer>
    </div>
  );
}
