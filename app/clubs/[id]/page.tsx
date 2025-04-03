import MPList from '@/components/mp-list';
import { getClub, getMPsFromClub } from '@/lib/api';

export default async function ClubDetailsPage({params}: { params: {id : string} }){
  const { id } = await params;
  
  const club = await getClub(id);
  const mps = await getMPsFromClub(id);
  console.log(mps);
  return (
    <div className="container">
      <div className="club-header">
        <h1>{club.name}</h1>
        <img 
          src={`https://api.sejm.gov.pl/sejm/term10/clubs/${club.id}/logo`} 
          alt={`Logo ${club.name}`} 
          className="club-logo"
        />
        <p>Liczba Posłów: {club.membersCount}</p>
      </div>

      <div className="mp-list-container">
        <h2>Lista Posłów</h2>
        <MPList mps={mps} />
      </div>
    </div>
  );
}