import Part from "./Part";

const Content = ({ parts }) => {
  const mappedParts = parts.map((part) => (
    <Part key={part.id} name={part.name} exercises={part.exercises} />
  ));

  const totalExercises = parts.reduce((acc, part) => acc + part.exercises, 0);

  return (
    <div>
      {mappedParts}
      <h3>total of {totalExercises} exercises</h3>;
    </div>
  );
};

export default Content;
