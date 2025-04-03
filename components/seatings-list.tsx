import SeatingTile from '@/components/seating-tile';
import { getNumOfSeatings } from '@/lib/api';

export default async function SeatingsList() {
  const numberOfSeating = await getNumOfSeatings();
  const numberOfSeatingArray = Array.from({length: numberOfSeating}, (_, i) => i +1 );
  return(
  <>
    <h1> Posiedzenia: </h1> 
    <div className="center-wrapper">
      <div className="seating-container">
        {numberOfSeatingArray.map((seating) => {
          return <SeatingTile key={seating} id={seating} />;
        }
        )}
      </div>
    </div>
  </>
  );
}

