const Notification = ({ notification }) => {
  if (notification === null) {
    return null;
  }
  return (
    <div className="info">
      <h2>{notification}</h2>
    </div>
  );
};

export default Notification;
