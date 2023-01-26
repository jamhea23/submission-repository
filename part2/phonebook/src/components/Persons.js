const Persons = ({ persons, searchTerm, deletePerson }) => {
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const removePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      deletePerson(id);
    }
  };

  return (
    <div>
      {filteredPersons.map((person) => (
        <p key={person.name}>
          {person.name} {person.number}
          <button onClick={() => removePerson(person.id, person.name)}>
            delete
          </button>
        </p>
      ))}
    </div>
  );
};

export default Persons;
