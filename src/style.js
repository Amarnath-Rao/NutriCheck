const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-primary xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph: "font-poppins font-normal text-primary text-[18px] leading-[30.8px]",

  heading2_1:"font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
  paragraph_1: "font-poppins font-normal text-dimwhite text-[18px] leading-[30.8px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",
  flexStart1: "flex justify-center items-start",
  flexLeft: "flex justify-center items-left",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
  
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  section1: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-0 ml-0 md:mt-0 mt-10 relative`,
  sectionImg1: `flex-1 flex ${styles.flexStart1} md:ml-0 md:mr-40 md:mt-0 mt-10 relative `,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  sectionInfo1: `flex-1 ${styles.flexStart} flex-col md:ml-0`,
};

export default styles;
