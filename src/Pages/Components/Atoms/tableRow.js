const TableRow = ({ name, value, isHeading }) => {
  if (isHeading) {
    return (
      <tr>
        <th>{name}</th>
        <th>{value}</th>
      </tr>
    );
  }
  return (
    <tr>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  );
};

export default TableRow;
