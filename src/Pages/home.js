import CardGallery from "./Components/Organisms/cardGallery";
import manifest from "./manifest";
const Home = () => {
  return (
    <div>
      <div className="container">
        <br />
        <h1 className="title">Home</h1>
        <div className="content">
          <p>Lorem Ipsum</p>
        </div>
        <h2 className="title"> Sorts</h2>
        <CardGallery data={manifest} />
      </div>
    </div>
  );
};

export default Home;
