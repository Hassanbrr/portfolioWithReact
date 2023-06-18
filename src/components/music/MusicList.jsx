import { useState } from "react";
import "./Music.css";
import { Icon } from "@iconify/react";

const Music = ({ data }) => {
  return (
    <>
      <div class="card col s12 m4 l3">
        <div class="card-image waves-effect waves-block waves-light">
          <div
            className="music-img"
            style={{ backgroundImage: `url('/media/${data.img}')` }}
          ></div>
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">
            {data.title}
          </span>

          <p>{data.description}</p>
          <br />
          <span class="btn-play btn-floating btn-m waves-effect waves-light">
            <Icon icon="uil:play" className="play" width={"25px"} />
          </span>
        </div>
      </div>
      
    </>
  );
};

const MusicList = () => {
  const [musicData, setMusicData] = useState([
    {
      title: "Hassan",
      description: "It's a Hard Life",
      img: "music-1.jpg",
    },
    {
      title: "Hassan",
      description: "You Take My Breath Away",
      img: "music-2.jpg",
    },
    {
      title: "Hassan",
      description: "Bohemian Rhapsody",
      img: "music-3.jpg",
    },
    {
      title: "Hassan",
      description: "Bohemian Rhapsody",
      img: "music-4.jpg",
    },
  ]);

  return (
    <>
      <div className="container row">
        {musicData.map((music) => (
          <Music data={music} />
        ))}
      </div>
    </>
  );
};

export default MusicList;
