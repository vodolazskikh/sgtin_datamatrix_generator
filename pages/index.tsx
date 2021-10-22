import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import React, { useRef, useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const svg = useRef(null);
  const [sgtin, setSgtin] = useState("");

  if (typeof window === "undefined") {
    return null;
  }

  const { DATAMatrix } = require("src/helpers/dm");
  const setCode = (e: any) => {
    if (svg.current) {
      const sgtin = e.target.value;
      setSgtin(sgtin);
      const gtin = sgtin.slice(0, 14);
      const serial = sgtin.slice(14, sgtin.length);
      const key = "1234";
      const tail = "1".repeat(44);

      const value = `01${gtin}21${serial}91${key}92${tail}`;
      (svg.current as any).innerHTML = "";
      (svg.current as any).appendChild(DATAMatrix(value));
    }
  };
  console.log(svg.current);
  return (
    <div className={styles.container}>
      <Head>
        <title>dataMatrix generator</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          генератор датаматриксов для отладки сканнера в честном знаке
        </h1>
        <div className={styles.row}>
          <div
            className={styles.title}
            style={{ color: sgtin.length !== 27 ? "red" : "black" }}
          >
            Введите sgtin
          </div>
          <input type="text" onChange={setCode} className={styles.input} />
          <div className={styles.datamatrix} ref={svg} />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
