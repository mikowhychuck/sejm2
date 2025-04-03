import CurrentSeating from '@/components/current-seating';
import SeatingsList from '@/components/seatings-list';

export default function Home(){
return (
  <>
  <h2>Wszelka władza społeczności ludzkiej początek swój bierze z woli narodu.</h2>
  <div className="main-content">
    <img src="/image.png" alt="Sala plenarna Sejmu" className="main-image" />
    <CurrentSeating />
  </div>
    <SeatingsList />
  </>

);
}
