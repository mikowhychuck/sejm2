import { getSeating, getVotingsInSeating } from "@/lib/api";
import Link from "next/link";
import classes from "./seating.module.css";

export default async function Seating({id}:{id : string}){
  const seatingData = await getSeating(id);
  const votingsData = await getVotingsInSeating(id);
  return (
    <>
      <h1>{seatingData.title}</h1>
      {votingsData.length < 1 ? <h2>Brak głosowań w tym posiedzeniu</h2> : <></>}
      <div className={classes.votingscontainer}>
        <h2>Lista głosowań</h2>
      <table>
        <tbody>
          {votingsData.map((v:any)=>{
            return (
              <tr key={v.votingNumber}>
                <td>{v.votingNumber}</td>
                <td>
                  <Link href={`/seatings/${id}/${v.votingNumber}`}>
                    {v.topic}
                  </Link>
                  </td>
                <td>ZA {v.yes}</td>
                <td>PRZECIW {v.no}</td>
                <td>WSZTRZYMAŁO SIĘ {v.abstain}</td>
                <td>GŁOSOWAŁO {v.totalVoted}</td>
              </tr>
           );
          }
        )}
        </tbody> 
      </table>
      </div>

    </>
  );
}