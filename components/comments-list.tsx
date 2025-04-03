import { getComments } from "@/lib/comments";
import classes from './comments-list.module.css';
import NewCommentForm from "./new-comment-form";
import { createPost } from "@/actions/comments";

export default async function CommentList({seatingId} : {seatingId: number} ){
  const comments = await getComments(seatingId);

  return (
    <>
      <div className={classes.container}>
        <NewCommentForm action={createPost} seatingId={seatingId}/>
        {comments.reverse().map((comment: any)=>{
          return <div key={comment.id} className={classes.comment}>{comment.content}</div>;
        })}
      </div>
    </>
  );
}