import React, { Component } from 'react';
import styles from "../../styles/Post.module.css";
import Head from "next/head";
import Link from 'next/link'



class WebPerformance extends Component {
    render() {
        return (
            <div className={styles.container}>
          
                <Head>
                    <title>Web Performance</title>
                </Head>
                <main className={styles.main}>
                    <article>
                        <h1 className={styles.title}>Web Performance</h1>
                        <div>
                            <time className={styles.date}>January 2, 2020</time>
                        </div>
                    <div>
                    <p>There are several tools that you can use for inspect how well the web performance, including: </p>
                    <ul>
                        <li>Light House</li>
                        <li>Chrome Audits</li>
                        <li>Pingdom</li>
                        <li>Sitechecker Pro</li>
                        <li>Pagespeed Insights</li>
                        <li>Webpagetest</li>
                    </ul>
                    </div>
                    </article>
                </main>
                <div className={styles.footer}>
                    <Link href="/"><a >
                    ← Back to home
                        </a></Link>
                </div>
            </div>
        );
    }
}

export default WebPerformance;