import program_1 from "../assets/program-1.png";
import program_2 from "../assets/program-2.png";
import program_3 from "../assets/program-3.png";
import Titles from "../utility/Titles";
import program_icon_1 from "../assets/program-icon-1.png";
import program_icon_2 from "../assets/program-icon-2.png";
import program_icon_3 from "../assets/program-icon-3.png";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
const Cards = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const cardMotionOne = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(-100px)",
    config: { duration: 500 },
  });
  const cardMotionTwo = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(100px)",
    config: { duration: 500 },
    delay: 300,
  });
  const cardMotionThree = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0px)" : "translateY(-100px)",
    config: { duration: 500 },
    delay: 600,
  });
  return (
    <div className="cards" name="program">
      <Titles supTitle="OUR PROGRAM" title="What We Offer" />
      <div className="profiles">
        {/* hoon zwadett class caption l2an ana bdi backg lal details tetghayar w caption ytharraku */}
        <animated.div className="eachPrf" ref={ref} style={cardMotionOne}>
          <img src={program_1} alt="" />
          <div className="details">
            <div className="caption">
              <img src={program_icon_1} alt="" />
              <div className="information">Graduation Degree</div>
            </div>
          </div>
        </animated.div>
        <animated.div className="eachPrf" ref={ref} style={cardMotionTwo}>
          <img src={program_2} alt="" />
          <div className="details">
            {/* hoon zwadett class caption l2an ana bdi backg lal details tetghayar w caption ytharraku */}
            <div className="caption">
              <img src={program_icon_2} alt="" />
              <div className="information">Masters Degree </div>
            </div>
          </div>
        </animated.div>
        <animated.div className="eachPrf" ref={ref} style={cardMotionThree}>
          <img src={program_3} alt="" />
          <div className="details">
            {/* hoon zwadett class caption l2an ana bdi backg lal details tetghayar w caption ytharraku */}
            <div className="caption">
              <img src={program_icon_3} alt="" />
              <div className="information">Post Graduation</div>
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default Cards;
