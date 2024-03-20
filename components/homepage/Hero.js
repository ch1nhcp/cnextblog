import classes from "./hero.module.css";

import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/sunset.jpg"
          alt="img"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, Im Chinhcp</h1>
      <p> lorem ipsum </p>
    </section>
  );
}

export default Hero;
