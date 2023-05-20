import { vitalscan } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const VitalScan = () => (
  <section id="VitalScan" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        VitalScan <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      A Vital Value Extractor from the reports given by the user to get elobarated view of user health stats.
      </p>

      <Button styles={`mt-10`} name={`Vindex`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={vitalscan} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default VitalScan;