import React, { Component } from 'react'
import styles from "../../styles/Post.module.css";
import Head from "next/head";
import Link from 'next/link'


export default class ReactRouterRefresh extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Head><title>React Router Error On Refresh</title></Head>
                <main className={styles.main}>
                    <article>
                        <h1 className={styles.title}>Fixing 'cannot GET/URL' error on refresh with React Router</h1>
                        <time className={styles.date}>August 3, 2018</time>
                    </article>
                    <p>Who ever using webpack-dev-server might ran into this issues. What we need to do is actually tell the dev-server to redirect all request to <strong>/index.html</strong>.</p>
                    <p>You need to configure two properties on your webpack config which is <strong>publicPath</strong> and <strong>historyApiFallback</strong> </p>
                    <code>
                    publicPath: '/',
                    historyApiFallback: true,
                    </code>
                </main>
            </div>
        )
    }
}
