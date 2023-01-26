import { useState, useEffect } from "react";
import Persons from "./components/Persons";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Notification from "./components/Notification";
import Error from "./components/Error";
import personsService from "./services/persons";
import axios from "axios";
import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [notification, setNotification] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  console.log(persons);

  useEffect(() => {
    console.log("effect");
    personsService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const handleClick = (event) => {
    event.preventDefault();
    const personsObject = {
      name: newName,
      number: newNumber,
    };
    if (persons.some((person) => person.name === newName)) {
      if (
        window.confirm(
          `${newName} is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const personToUpdate = persons.find(
          (person) => person.name === newName
        );
        personsService
          .update(personToUpdate.id, { ...personToUpdate, number: newNumber })
          .then((prevPersons) => {
            setPersons(
              persons.map((person) =>
                person.name === newName
                  ? { ...person, number: newNumber }
                  : person
              )
            );
            setNewName("");
            setNewNumber("");
            setNotification(`Number of ${newName} is changed`);
            setTimeout((info) => {
              setNotification(null);
            }, 5000);
          })
          .catch((error) => {
            setErrorMessage(
              `Information of ${newName} has already been removed from server`
            );
            setTimeout((error) => {
              setNotification(null);
            }, 5000);
          });
      }
    } else {
      personsService
        .create(personsObject)
        .then((response) => {
          setPersons([
            ...persons,
            { name: newName, number: newNumber, id: persons.length + 1 },
          ]);

          setNewName("");
          setNewNumber("");
          setNotification(`Added ${newName}`);
          setTimeout((info) => {
            setNotification(null);
          }, 5000);
        })
        .catch((error) => {
          setErrorMessage(
            `Information of ${newName} has already been removed from server`
          );
          setTimeout((error) => {
            setNotification(null);
          }, 5000);
        });
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const removeUser = (id) => {
    axios.delete(`http://localhost:3001/persons/${id}`);
    setPersons(
      persons.filter((person) => {
        return person.id !== id;
      })
    );
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Error errorMessage={errorMessage} />
      <Notification notification={notification} />
      <Filter searchTerm={searchTerm} handleSearchChange={handleSearchChange} />

      <h2>add a new</h2>
      <PersonForm
        handleClick={handleClick}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons
        persons={persons}
        searchTerm={searchTerm}
        deletePerson={removeUser}
      />
    </div>
  );
};

export default App;
