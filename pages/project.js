import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Card from "../components/homepage/Card";
import Navbar from "../components/Navbar";
export default function Home() {
  return (
    <div>
      <Head>
        <title>
          GirlScipt Summer of Code 2022 | GirlScript Foundation India
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div classname=" items-center justify-center">
        <p className="font-serif text-center text-2xl font-extrabold text-black-100">
          <p className="text-primary_orange-0 text-5xl text center font-extrabold mb-10">
            Projects 2021
          </p>
          "unfinished project are the symbol of progress,
          <br /> not of imperfection"
        </p>
      </div>
    </div>
  );
}
