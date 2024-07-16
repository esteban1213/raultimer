"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import BoatImage from "@/public/carnivalcruise.png";

export default function Home() {
  // date for july 19th 2024 10:30 am
  let date = new Date(2024, 6, 19, 10, 30, 0, 0);

  const [timeLeft, setTimeLeft] = useState(
    new Date(date.getTime() - new Date().getTime())
  );

  setInterval(() => {
    setTimeLeft(new Date(date.getTime() - new Date().getTime()));
  }, 1000);

  // update the time left every secong

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: "100vh",
        backgroundColor: "black",

        color: "black",
        // backgroundImage: `url(${BoatImage.src})`, with opacity 0.4
        backgroundImage: `url(${BoatImage.src})`,
        // backgound opacity
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          padding: 30,
          width: "100vw",
          gap: 40,
          // ocean blue rgba(0, 0, 255, 0.5)
          backgroundColor: "rgba(0, 0, 0, 0.6)",

          color: "white",
          textAlign: "center",
        }}
      >
        <h1>The carnival cruise</h1>

        <div>
          <h3>You have</h3>

          <h1>
            {timeLeft.getUTCDate() -
              1 +
              " days " +
              timeLeft.getUTCHours() +
              " hrs " +
              timeLeft.getUTCMinutes() +
              " min " +
              timeLeft.getUTCSeconds() +
              " seconds "}
          </h1>
          <h4>to get ready!</h4>
        </div>
        <h4>
          <p>Event Date</p>
          <br />
          {date.toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          })}
        </h4>
      </div>
    </main>
  );
}
