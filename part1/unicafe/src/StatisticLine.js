const StatisticLine = (props) => {
  return (
    <tbody>
      {props.text === "positive" ? (
        <tr>
          <td>{props.text}</td>
          <td>{props.value} %</td>
        </tr>
      ) : (
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      )}
    </tbody>
  );
};

export default StatisticLine;
