import { Icon } from "@iconify/react";
import "../../Css/Resume.css";

const Resume = () => {
  return (
    <>
      <div className="resume">
        <div className="education">
          <h4>Education</h4>
          <br />

          {/* first */}
          <div className="content">
            <h5>
              <Icon icon="mdi:piano" /> Pianist
            </h5>
            <h6>
              <span style={{ color: "#da0037" }}>2000</span> Music Schools in
              Karaj
            </h6>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              reiciendis, quisquam possimus saepe consequatur corporis animi
              iste minus nihil optio error unde enim dolorem eaque ea voluptatum
              aut eos suscipit. Lorem, ipsum dolor sit amet consectetur
              adipisicing .
            </p>
          </div>
          <br />
          {/* second */}
          <div className="content">
            <h5>
              <Icon icon="game-icons:guitar" /> Guitarists
            </h5>
            <h6>
              <span style={{ color: "#da0037" }}>2005</span> Music Schools in
              Tehran
            </h6>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              reiciendis, quisquam possimus saepe consequatur corporis animi
              iste minus nihil optio error unde enim dolorem eaque ea voluptatum
              aut eos suscipit. Lorem, ipsum dolor sit amet consectetur
              adipisicing .
            </p>
          </div>
          <br />
        </div>
        <div className="experience">
          <h4>Experience</h4>
          <br />
          <div className="content">
            <h5>
              <Icon icon="icon-park-twotone:rock-gesture" /> Join to a Rock Band
            </h5>
            <h6>
              <span style={{ color: "#da0037" }}>2008</span>
            </h6>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              reiciendis, quisquam possimus saepe consequatur corporis animi
              iste minus nihil optio error unde enim dolorem eaque ea voluptatum
              aut eos suscipit. Lorem, ipsum dolor sit amet consectetur
              adipisicing .
            </p>
          </div>
          <br />
          <div className="content">
            <h5>
              <Icon icon="ph:microphone-stage-duotone" width={"30px"} /> Concert
              in US
            </h5>
            <h6>
              <span style={{ color: "#da0037" }}>2012</span>
            </h6>

            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              reiciendis, quisquam possimus saepe consequatur corporis animi
              iste minus nihil optio error unde enim dolorem eaque ea voluptatum
              aut eos suscipit. Lorem, ipsum dolor sit amet consectetur
              adipisicing .
            </p>
          </div>
          <br />
        </div>
      </div>
      {/* <div className="skills"></div> */}
    </>
  );
};

export default Resume;
