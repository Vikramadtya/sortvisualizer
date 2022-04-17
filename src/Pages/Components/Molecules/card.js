import { Link } from "react-router-dom";
import imageMap from "../../imageMap";

const Card = ({ data }) => {
  //   const temp = images("./bubble.svg");
  return (
    <Link to={`/sort/${data.url}`}>
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={imageMap.user} alt="logo" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{data.sortName}</p>
              <p className="subtitle is-6">{data.author}</p>
            </div>
          </div>
          <div className="content">{data.description.substring(0, 50)} ...</div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
