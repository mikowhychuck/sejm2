'use client';
import { useActionState } from "react";
import classes from './comments-list.module.css';

interface NewCommentFormProps {
  action: (state: any, formData: FormData) => any;
  seatingId: number;
}

export default function NewCommentForm({ action, seatingId }: NewCommentFormProps) {
  const [state, formAction] = useActionState(async (prevState: any, formData: any) => {
    formData.append('seatingId', seatingId.toString()); // Dodajemy seatingId do formData
    return await action(prevState, formData);
  }, {});

  return (
    <form action={formAction} className={classes.form}>
      <p>
        <label htmlFor="content"></label>
        <input className={classes.input} type="text" id="content" name="content" />
      </p>
      <button type="submit" className={classes.button}>Post Comment</button>
    </form>
  );
}
