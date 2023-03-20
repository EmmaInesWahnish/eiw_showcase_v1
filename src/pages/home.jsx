import React from "react";
import { IframeComponent } from "../components";
const Home = () => {
  let banner = "https://www.youtube.com/embed/tgbNymZ7vqY";
  console.log("banner", banner);
  return (
    <div width="600px" height="600px">
      <IframeComponent width="100%" height="100%" banner={banner} />
      <div class="container">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
          recusandae ullam? Voluptatibus facere quasi distinctio quo quod,
          voluptas inventore consectetur, quos impedit quis praesentium placeat
          quisquam facilis perferendis consequatur hic!
        </p>
      </div>
    </div>
  );
};

export default Home;
