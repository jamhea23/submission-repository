const Error = ({ errorMessage }) => {
  if (errorMessage === null) {
    return null;
  }
  return (
    <div className="error">
      <h2>{errorMessage}</h2>
    </div>
  );
};

export default Error;
