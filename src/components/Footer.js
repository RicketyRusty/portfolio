import React from "react";
import Socials from "./Socials";
import Link from "next/link";
import Button from "./Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S GET
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              STARTED
            </h1>
            <Button type="primary" onClick={() => window.open()}>Schedule a call</Button>
            <Button type="primary" onClick={() => window.open("https://drive.google.com/file/d/1gh_yFvsdIugYjN9pbDrrsAAFZxqm9A7-/view?usp=drive_link")}>Get Resume</Button>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <Link href="" className="underline underline-offset-1">Anamitra Saikia</Link>
      </h1>
    </>
  );
};

export default Footer;
