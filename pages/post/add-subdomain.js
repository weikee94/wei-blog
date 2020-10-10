import React, { Component } from 'react'
import styles from "../../styles/Post.module.css";
import Head from "next/head";
import Link from 'next/link'

export default class AddSubdomain extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Head>
                    <title>How to Add a Subdomain to Your Domain</title>
                </Head>
                <main className={styles.main}>
                    <article>
                        <h1 className={styles.title}>How to Add a Subdomain to Your Domain</h1>
                        <div>
                            <time className={styles.date}>October 10, 2020</time>
                        </div>
                        <p>Create a New Hostname with and A Record</p>
                        <p>What we need to do is just simply add a new hostname to your domain and point it to a target IP address. We will demonstrate the example by using digital ocean control panel.</p>
                        <p>In order to add the hostname, simply go to <strong>Networking</strong> tab,  click the domain tabs and domain name you would like to add the new hostname to.</p>
                        <img className={styles.postimage} src="/add-subdomain.png" alt="add-subdomain" />
                    </article>

                </main>
                <div className={styles.footer}>
                    <Link href="/"><a >
                    ← Back to home
                        </a></Link>
                </div>
            </div>
        )
    }
}
