import { Link } from "react-router-dom";

function PetList({ pets }) {
  return (
    <div>
      <h1>Pet List</h1>
      {pets?.length > 0 ? (
        <ul>
          {pets?.map((pet) => (
            <Link key={pet._id} to={`/pets/${pet._id}`}>
              <li>{pet.name}</li>
            </Link>
          ))}
        </ul>
      ) : (
        <h2>No pets!</h2>
      )}
    </div>
  );
}

export default PetList;