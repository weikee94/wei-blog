import React, { Component } from 'react';
import styles from "../../styles/Post.module.css";
import Head from "next/head";
import Link from 'next/link'

class RnAndroid extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Head>
                    <title>RN Android</title>
                </Head>
                <main className={styles.main}>
                    <article>
                        <h1 className={styles.title}>
                            RN Android
                        </h1>
                        <div>
                            <time className={styles.date}>January 17, 2020</time>
                        </div>
                    <p>Before running rn project on android device make sure run below command.</p>
                    <code>
                    export PATH="/Users/yourusername/Library/Android/sdk/platform-tools":$PATH
                    </code>
                    <p>Build release apk</p>
                    <code>
                        cd android && ./gradlew assembleRelease
                    </code>
                    </article>
                </main>
            </div>
        );
    }
}

export default RnAndroid;