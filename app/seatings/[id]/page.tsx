import CommentList from "@/components/comments-list";
import Seating from "@/components/seating";

export default async function SeatingDetails({params} : {params : {id: string}}){
  const { id } = await params;
  const seatingId = parseInt(id, 10);
  return <>
    <Seating id={id} />
    <CommentList seatingId={seatingId} />
  </>
}