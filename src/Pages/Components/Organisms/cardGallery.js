import Card from "../Molecules/card";
const CardGallery = ({ data }) => {
  let columns = [];
  let cards = [];
  for (let key in data) {
    if (cards.length == 4) {
      columns.push(<div className="columns">{[...cards]}</div>);
      cards = [];
    }

    cards.push(
      <div className="column is-one-quarter">
        <Card data={data[key]} />
      </div>
    );
  }

  columns.push(<div className="columns">{[...cards]}</div>);

  return <div>{columns}</div>;
};

export default CardGallery;
