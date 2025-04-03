import { getClubs } from '@/lib/api';
import Link from 'next/link';
import classes from './clubs.module.css';

export default async function Clubs(){
  const clubs = await getClubs();
  return (
    <>
    <div className='main-content'>
      <div className={classes.dashboardclubs}>
      {clubs.map((club: any)=>{
        return (
          <div className={classes.tile} key={club.id}>
            <Link href={`/clubs/${club.id}`}>{club.name}</Link>
            <div>
              <img src={`https://api.sejm.gov.pl/sejm/term10/clubs/${club.id}/logo`}></img>
            </div>
          </div>
        );
        }
      )}
      </div>
    </div>
    </>
  );
}