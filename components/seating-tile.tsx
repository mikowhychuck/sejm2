import Link from 'next/link';

export default function SeatingTile({id}: any){
  return (
    <div className="seating-button">
      <Link href={`/seatings/${id}`}>{id}</Link>
    </div>
  );
}