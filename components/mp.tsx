import Link from 'next/link';
import classes from './mp.module.css';

export default function MP({ data }: {data: any}) {
    return (
      <div className={classes.mptile}>
        <Link href={`/mps/${data.id}`}> <h2>{data.lastFirstName}</h2> </Link>
        <img className={classes.mpphoto} src={`https://api.sejm.gov.pl/sejm/term10/MP/${data.id}/photo`}/>
        <p><strong>Klub/Koło:</strong> {data.club}</p>
        <p><strong>Okręg:</strong> {data.districtName}</p>
      </div>
    );
  }
  