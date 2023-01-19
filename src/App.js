const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10 },

      { name: "Using props to pass data", exercises: 7 },

      { name: "State of a component", exercises: 14 },
    ],
  };

  const Header = (props) => {
    console.log(props);
    return <h1>{props.course}</h1>;
  };

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
