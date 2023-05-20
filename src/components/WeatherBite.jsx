import {weatherBite} from '../assets';
import styles, { layout } from "../style";
import Button from "./Button";

const WeatherBite = () => (
  <section id="WeatherBite" className={layout.section1}>
    <div className={layout.sectionImg1}>
      <img src={weatherBite} alt="Weather Bite" className="w-[100%] h-[100%]" />
    </div>

    <div className={layout.sectionInfo1} >
      <h2 className={styles.heading2}>
        WeatherBite <br className="sm:block hidden" /> in few easy
        steps.
      </h2> 
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Food recommendation system that suggests the best foods to eat based on the current weather conditions. 
      </p>

      <Button styles={`mt-10`} name={`demon`}/>
    </div>
  </section>
);

export default WeatherBite;