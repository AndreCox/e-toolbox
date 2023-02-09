import { Divider } from "../components/Calc/Divider";
import { EStandard } from "../components/Calc/EStandard";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Input, Card, Select, Option } from "@material-tailwind/react";
import closestSeries from "../utils/closestSeries";
import divider from "../utils/divider";
import { useEffect, useState } from "react";
import githubLogo from "../assets/images/github-mark.svg";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>E Toolbox</title>
        <meta
          name="description"
          content="Toolbox Containing Electrical Engineering Calculators"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link
        href="https://github.com/AndreCox/e-toolbox"
        target="_blank"
        rel="noreferrer"
        className="fixed z-50 right-0 top-0 p-2 pl-5 pb-5 bg-gray-300 shadow bg-opacity-50 backdrop-blur-sm rounded-bl-[3rem]"
      >
        <Image
          alt="Github Logo"
          src={githubLogo}
          width={50}
          height={50}
          className="opacity-100 w-12 h-12"
        />
      </Link>
      <main className="space-y-8 p-4 justify-center items-center">
        <h1 className="text-5xl font-bold text-center pt-24">E Toolbox</h1>

        <EStandard />
        <Divider />
        <div className="py-16" />
      </main>
      <div className="fixed bottom-0 left-0 w-full p-2 bg-white rounded-t-lg">
        <p>
          Original Octave code by{" "}
          <span className="text-blue-500 font-bold">Michael Bell</span>
        </p>
        <p>
          GUI and Typescript port by{" "}
          <span className="text-blue-500 font-bold">Andre Cox</span>
        </p>
      </div>
    </div>
  );
}
