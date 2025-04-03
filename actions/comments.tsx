'use server';

import { addComment } from "@/lib/comments";
import { revalidatePath } from "next/cache";

export async function createPost(
  prevState: { errors?: string[] },
  formData: FormData
) {
  const content = formData.get('content') as string;
  const seatingId = formData.get('seatingId');

  let errors: string[] = [];

  if (!content || content.trim().length === 0) {
    errors.push('Content is required.');
  }

  if (errors.length > 0) {
    return { errors };
  }

  await addComment(Number(seatingId), content);
  revalidatePath('/', 'layout');

  return { success: true };
}
