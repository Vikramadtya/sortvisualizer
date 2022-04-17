import TableRow from "../Atoms/tableRow";
const ComplexityTable = ({ complexity }) => {
  return (
    <div className="column">
      {" "}
      <div className="columns is-mobile is-centered">
        <div className="column is-narrow ">
          <table className="table">
            <thead>
              <TableRow name="Asymptotic" value="value" />
            </thead>
            <tbody>
              <TableRow name="Worst Case" value={complexity.worst} />
              <TableRow name="Best Case" value={complexity.best} />
              <TableRow name="Average Case" value={complexity.average} />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComplexityTable;
