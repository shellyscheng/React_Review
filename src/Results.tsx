import Pet from "./Pet";
import { Pet as PetType } from "./APIResponsesTypes";

const Results = ({ pets }: { pets: PetType[] }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h1>no pets found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            id={pet.id}
            animal={pet.animal}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}. ${pet.state}`}
          />
        ))
      )}
    </div>
  );
};

export default Results;
