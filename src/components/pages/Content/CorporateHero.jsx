import React,{useRef} from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const CorporateHero = () => {
  return (
    <div className="bg-white">
      <TextParallaxContent
        subheading="Corporate Travel"
        heading="Effortless Rides for Your Team"
        colorClass="bg-blue-600" // Background color for section 1
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        subheading="Cleaner Rides"
        heading="Experience the Cleanest Rides in the Industry"
        colorClass="bg-green-600" // Background color for section 2
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        subheading="Reliable"
        heading="On-time, Every Time"
        colorClass="bg-gray-800" // Background color for section 3
      >
        <ExampleContent />
      </TextParallaxContent>
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ subheading, heading, children, colorClass }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyColorBackground colorClass={colorClass} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyColorBackground = ({ colorClass }) => {
  return (
    <div
      className={`sticky z-0 overflow-hidden ${colorClass} h-full`}
    >
      {/* You can further customize the background color */}
    </div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white "
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Streamlined Transportation for Corporate Teams
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Our cab service is designed for corporate professionals who need reliable, comfortable, and eco-friendly rides. From the moment you book a ride to the time you arrive at your destination, we ensure a smooth and professional experience.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        With clean vehicles, punctual drivers, and corporate-friendly services, we take care of the transportation so you can focus on your work.
      </p>
      <button className="w-full rounded bg-neutral-900 px-9 py-4 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
        Book Now <FiArrowUpRight className="inline" />
      </button>
    </div>
  </div>
);
export default CorporateHero;

