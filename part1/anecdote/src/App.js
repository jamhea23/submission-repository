import { useState } from "react";

const App = () => {
  const anecdotes = [
    { name: "If it hurts, do it more often.", votes: 0 },
    {
      name: "Adding manpower to a late software project makes it later!",
      votes: 0,
    },
    {
      name: "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
      votes: 0,
    },
    {
      name: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      votes: 0,
    },

    { name: "Premature optimization is the root of all evil.", votes: 0 },
    {
      name: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      votes: 0,
    },
    {
      name: "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
      votes: 0,
    },
    { name: "The only way to go fast, is to go well.", votes: 0 },
  ];
  const [vote, setVote] = useState([...anecdotes]);
  const [selected, setSelected] = useState(0);

  let previousRandomNum;

  const nextAnecdote = () => {
    let randomNum = Math.floor(Math.random() * vote.length);
    if (randomNum === previousRandomNum) {
      nextAnecdote();
    } else {
      previousRandomNum = randomNum;
    }

    setSelected(randomNum);
    console.log("previous", previousRandomNum);
    console.log("current", randomNum);
  };

  //
  // let randomNum;

  // const getNewRandomNum = () => {
  //   randomNum = Math.floor(Math.random() * max);
  //   if (randomNum === previousRandomNum) {
  //     getNewRandomNum();
  //   }
  //   previousRandomNum = randomNum;
  //   return randomNum;
  // }

  const addVote = () => {
    setVote((prevVote) =>
      prevVote.map((anecdote, index) => {
        if (index === selected) {
          return { ...anecdote, votes: anecdote.votes + 1 };
        }
        return anecdote;
      })
    );
  };

  const highestVotes = vote.reduce(
    (prev, current) => (prev.votes > current.votes ? prev : current),
    1
  );

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{vote[selected].name}</p>
      <p>has {vote[selected].votes} votes</p>

      <button onClick={addVote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>

      <h2>Anecdote with most votes</h2>
      <p>{highestVotes.name}</p>
      <p>
        has {highestVotes.votes} vote{highestVotes.votes > 1 ? "s" : ""}
      </p>
    </div>
  );
};

export default App;
