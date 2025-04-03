import { getCurrentSeating } from "@/lib/api";
import Link from "next/link";

export default async function CurrentSeating() {
  const data = await getCurrentSeating();
  const num = data.number;
  return (
    <div>
      <h1>Aktualne Posiedzenie: </h1>
      <h2>{data.title}</h2>
      <div className="horizontal-buttons">
        <div className="button"><Link href={`/seatings/${num}`}>lista głosowań i komentarze</Link></div>
      </div>
    </div>
  );
}