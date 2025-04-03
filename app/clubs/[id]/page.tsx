import MPList from '@/components/mp-list';
import { getClub, getMPsFromClub } from '@/lib/api';
import classes from './clubs-details.module.css';

export default async function ClubDetailsPage({params}: { params: {id : string} }){
  const { id } = await params;
  
  const club = await getClub(id);
  const mps = await getMPsFromClub(id);
  console.log(mps);
  return (
    <div className="container">
      <div className={classes.clubheader}>
        <h1>{club.name}</h1>
        <img 
          src={`https://api.sejm.gov.pl/sejm/term10/clubs/${club.id}/logo`} 
          alt={`Logo ${club.name}`} 
          className={classes.clublogo}
        />
        <p>Liczba Posłów: {club.membersCount}</p>
      </div>

      <div className={classes.mplisicontainer}>
        <h2>Lista Posłów</h2>
        <MPList mps={mps} />
      </div>
    </div>
  );
}