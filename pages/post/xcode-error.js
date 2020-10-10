import React, { Component } from 'react';
import styles from "../../styles/Post.module.css";
import Head from "next/head";
import Link from 'next/link'

class XcodeError extends Component {
    render() {
        return (
            <div className={styles.container}>
                 <Head>
                    <title>Xcode Error</title>	

                </Head>
                <main className={styles.main}>
                    <article>
                        <h1 className={styles.title}>Xcode-select directory error</h1>
                        <div>
                            <time className={styles.date}>January 3, 2020</time>
                        </div>
                        <p>
                            <code>xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory '/Library/Developer/CommandLineTools' is a command line tools instance</code>
                        </p>
                        <img className={styles.postimage} src="/xcode-select-error.png" alt="xcode-select-error" />

                        
                    </article>
                </main>
            </div>
        );
    }
}

export default XcodeError;