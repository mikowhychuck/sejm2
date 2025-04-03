import { getMP } from "@/lib/api";

export default async function MPDetails({ params }: { params: { id: string } }){
  const mp = await getMP(params.id);
  console.log(mp);
  return (
    <>
      <div className='container'>
        <div>
          <h1> Poseł {mp.firstLastName}</h1>
          <img src={`https://api.sejm.gov.pl/sejm/term10/MP/${mp.id}/photo`} alt="Opis obrazka" />
        </div>
        <p> Klub/Koło: {mp.club}</p>
        <p> Okręg: {mp.districtNum} {mp.districtName}, województwo {mp.voivodeship}</p>
        <p> Wykształcenie: {mp.educationLevel}</p>
        <p> Profesja: {mp.profession} </p>
        <p> Email: {mp.email}</p>
      </div>

    </>
  ); 
}