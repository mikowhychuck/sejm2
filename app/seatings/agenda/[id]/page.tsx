import { getSeating } from "@/lib/api";

export default async function SeatingAgenda({params}: {params: {id: number}}, agenda:string){
  const { id } = await params;
  const seatingData = await getSeating(id);

  return (
    <>
      <h1>{id}</h1>
      <div dangerouslySetInnerHTML={{ __html: seatingData.agenda }} />
    </>
  );
}