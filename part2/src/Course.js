import Header from "./Header";
import Content from "./Content";

const Course = ({ name, parts }) => {
  return (
    <div>
      <Header header={name} />
      <Content parts={parts} />
    </div>
  );
};

export default Course;
