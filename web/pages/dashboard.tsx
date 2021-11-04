import React, { useState, useEffect } from 'react'
import styles from '../styles/Dashboard.module.scss'
import axios from 'axios'
import Head from 'next/head'

function toApprove(id: any) {
    try {
        axios.put(`http://localhost:8080/api/questions/moderator/${id}`, { isApproved: 'true' }).then(function (response) {
            // handle success
            console.log(response)
        })
    } catch (err) {
        console.log(err)
    }
}

function Contribute() {
    const [questions, setQuestions] = useState<any[]>([])

    useEffect(() => {
        if (localStorage.getItem('token')) {
            try {
                axios.get(`http://localhost:8080/api/questions`).then(function (response) {
                    // handle success
                    setQuestions(response.data)
                })
            } catch (err) {
                console.log(err)
            }
        } else {
            alert("You're not logged in.")
            window.location.href = '/admin'
        }
    }, [])
    return (
        <>
            <Head>
                <title>Drona | Dashboard</title>
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/256x256.png"></link>
                <meta name="theme-color" content="#fff" />
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/256x256.png" />
            </Head>
            <div className="questions mt2">
                {questions.map(question => {
                    return (
                        <div key={question._id}>
                            <article className={styles.question} style={{ height: '250px', textAlign: 'center' }}>
                                <div key={question._id} className={styles.questionContent}>
                                    <h1 className={styles.questionTitle} key={question._id}>
                                        {question.title}
                                    </h1>
                                    <br />
                                    <p className={styles.questionMessage}>{question.message}</p>
                                    <br />
                                    {question.isApproved ? (
                                        <button className={styles.btnSuccess}> ✅ Approved</button>
                                    ) : (
                                        <button className={styles.btnDanger} onClick={() => toApprove(question._id)}>
                                            {' '}
                                            🙋🏻 Approve
                                        </button>
                                    )}
                                </div>
                            </article>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Contribute
