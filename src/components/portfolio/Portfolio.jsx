import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import "./portfolio.scss";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU795aXk9fnU3Gb8BNp0ZwzyZeTic2td9wyLQW4MQEr-fyd64ZGCgaEAqCNFecAI0wyiU&usqp=CAU",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iste. Autem vitae temporibus error obcaecati accusantium, inventore sapiente praesentium incidunt?",
  },
  {
    id: 2,
    title: "Next.js Commerce",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmlricRkpkPoiEPZqfSt1bbPCsafZA9RX_zq_L9S6PlPCcN71hazakVPsims5kTRcAoSY&usqp=CAU",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iste. Autem vitae temporibus error obcaecati accusantium, inventore sapiente praesentium incidunt?",
  },
  {
    id: 3,
    title: "Music App",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKB6k_YyW6MlkUKBDqAy5aPWxXAm2TumRBgZStoc1P5VknBmlpGz-trIl-HTZTW1swRcg&usqp=CAU",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iste. Autem vitae temporibus error obcaecati accusantium, inventore sapiente praesentium incidunt?",
  },
  {
    id: 4,
    title: "Chat App",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhAefCwyf7x2HqCTdWnxIlZS6kjz6RT1xIVmtA-wyH1eQDiPRZ7m0eliK1cACkGEUJfq8&usqp=CAU",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iste. Autem vitae temporibus error obcaecati accusantium, inventore sapiente praesentium incidunt?",
  },
  {
    id: 4,
    title: "Chat App",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhAefCwyf7x2HqCTdWnxIlZS6kjz6RT1xIVmtA-wyH1eQDiPRZ7m0eliK1cACkGEUJfq8&usqp=CAU",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, iste. Autem vitae temporibus error obcaecati accusantium, inventore sapiente praesentium incidunt?",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX: scaleX }}
          className="progressBar"
        ></motion.div>
      </div>

      {items.map((item) => (
        <Single key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;
