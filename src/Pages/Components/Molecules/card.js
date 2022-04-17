import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link to={`/sort/${data.url}`}>
      <div className="card">
        <div clclassNameass="card-image">
          <figure className="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt=""
            />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img
                  src="https://bulma.io/images/placeholders/96x96.png"
                  alt=""
                />
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
