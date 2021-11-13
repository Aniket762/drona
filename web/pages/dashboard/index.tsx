import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/dashboardindex.module.scss'

function Contribute() {
    const [questions, setQuestions] = useState<any[]>([])

    useEffect(() => {
        if (localStorage.getItem('token')) {
            let teamName = 'Betaoverflow'
        } else {
            alert("You're not logged in.")
            window.location.href = '/admin'
        }
    })
    return (
        <>
            <Head>
                <title>Drona | Dashboard</title>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/256x256.png"></link>
                <meta name="description" content="Empowering everyone to code with IBM's eye" />
                <link rel="icon" href="/256x256.png" />
            </Head>
            <div className={styles.dashboard}>
                <div className={styles.image}>
                    <img
                        src="https://res.cloudinary.com/dguy8qpzi/image/upload/v1636662966/profile_yn5nhh_rmpxa1.png"
                        alt="Profile picture"
                        className="profile_img"
                    />
                    <h1>Hey Admin 👋 </h1>
                </div>
                <div className={styles.cards}>
                    <div className={styles.card1}>
                        <div className={styles.card1text}>
                            <Link href="/dashboard/questionVerify">Verify Question!</Link>
                        </div>
                        <img
                            src="https://res.cloudinary.com/dguy8qpzi/image/upload/v1636662966/image-removebg-preview_13_nu0xyn.png"
                            alt="verify"
                        />
                    </div>
                    <div className={styles.card2}>
                        <div className={styles.card2text}>
                            <Link href="/dashboard/opportunityVerify">Verify Opportunity!</Link>
                        </div>
                        <img
                            src="https://res.cloudinary.com/dguy8qpzi/image/upload/v1636662966/image-removebg-preview_14_g4af4t.png"
                            alt="verify"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contribute
