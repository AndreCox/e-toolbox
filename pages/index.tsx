import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Input, Card, Select, Option } from "@material-tailwind/react";
import closestSeries from "../backend/closestSeries";
import { useEffect, useState } from "react";
import githubLogo from "../assets/images/github-mark.svg";

export default function Home() {
  const [Eseries, setEseries] = useState(3);
  const [ArbitraryValue, setArbitraryValue] = useState(0);
  const [StandardValue, setStandardValue] = useState(0);
  const [Error, setError] = useState(0);

  useEffect(() => {
    let output = closestSeries(Eseries, ArbitraryValue);
    setStandardValue(output.out);
    setError(output.out_err);
  }, [Eseries, ArbitraryValue]);

  return (
    <div className="">
      <Head>
        <title>Next Template</title>
        <meta name="description" content="Generated with next-template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <a
        href="https://github.com/AndreCox/e-toolbox"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          alt="Github Logo"
          src={githubLogo}
          width={70}
          height={70}
          className="fixed right-0 top-0 p-2"
        />
      </a>

      <main className="min-h-screen space-y-8 p-4 flex flex-1 flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-center">E Toolbox</h1>

        <Card className="p-2">
          <h2 className="text-center text-2xl p-2 mb-4">E Series Calculator</h2>
          <div className="p-2 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Select
              label="E Series Value"
              onChange={(e) => {
                setEseries(Number(e));
              }}
            >
              <Option value="3">3</Option>
              <Option value="6">6</Option>
              <Option value="12">12</Option>
              <Option value="24">24</Option>
              <Option value="48">48</Option>
              <Option value="96">96</Option>
              <Option value="192">192</Option>
            </Select>
            <Input
              label="Arbitrary Value"
              type="number"
              onChange={(e) => {
                setArbitraryValue(Number(e.target.value));
              }}
            />
          </div>
          <div className="p-4 flex sm:flex-row flex-col text-center justify-around">
            <div>
              <h3>Standard Value</h3>
              <h3 className="text-blue-500 font-bold text-center text-lg">
                {isNaN(StandardValue) ? "0" : StandardValue}
              </h3>
            </div>
            <div>
              <h3>Standard Error</h3>
              <h3 className="text-blue-500 font-bold text-center text-lg">
                {isNaN(Error) ? "0" : (Error * 100).toFixed(4)}%
              </h3>
            </div>
          </div>
        </Card>
      </main>
      <div className="fixed bottom-0 left-0 w-full p-2 ">
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
