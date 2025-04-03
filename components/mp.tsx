import Link from 'next/link';

export default function MP({ data }: {data: any}) {
    return (
      <div className="mp-tile">
        <Link href={`/mps/${data.id}`}> <h2>{data.lastFirstName}</h2> </Link>
        <img className='mp-photo' src={`https://api.sejm.gov.pl/sejm/term10/MP/${data.id}/photo`}/>
        <p><strong>Klub/Koło:</strong> {data.club}</p>
        <p><strong>Okręg:</strong> {data.districtName}</p>
      </div>
    );
  }
  