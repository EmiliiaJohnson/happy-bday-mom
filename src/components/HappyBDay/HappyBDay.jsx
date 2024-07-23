import React, { useEffect } from "react";
import confetti from "https://cdn.skypack.dev/canvas-confetti";
import "./happy-bday.css";

function HappyBDay() {
  function fireConfetti() {
    confetti({
      particleCount: 300,
      startVelocity: 30,
      spread: 3600,
      origin: {
        x: Math.random(),
        y: Math.random(),
      },
    });
    confetti({
      particleCount: 100,
      startVelocity: 20,
      spread: 2000,
      origin: {
        x: Math.random(),
        y: Math.random(),
      },
    });
    fire(0.25);
    fire(0.2);
    fire(0.35);
    fire(0.1);
    fire(0.1);
  }
  function fire(particleRatio) {
    confetti({
      spread: Math.floor(Math.random() * 100) + 100,
      particleCount: Math.floor(200 * particleRatio),
      ticks: 400,
      shapes: ["circle", "circle", "square"],
      colors: ["#ff0000", "#ffe700", "#49ff00", "#0092ff", "#c900ff"],
    });
  }
  useEffect(() => {
    fireConfetti();
  });
  return (
    <div className="bday-wrapper">
      <img
        className="cat-img"
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3RoMXJpczNlb3U5bGZjNnA0bGwzYXJsMGRoNHB5NzJqajR0bXRqcCZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/BXjqytvu9bKzCUHdzz/giphy.gif"
        alt="dancing cat"
      />
      <h1 className="bday__text">Happy Birthday!!!</h1>
      <button
        className="bday__button"
        onClick={() => {
          var sound = new Audio(
            "https://www.soundjay.com/drinks/sounds/glass-clink-1.mp3"
          );
          sound.play();
          fireConfetti();
        }}
      >
        <img
          className="bday__img"
          src="https://em-content.zobj.net/source/apple/81/party-popper_1f389.png"
          alt=""
        />
      </button>
    </div>
  );
}

export default HappyBDay;
