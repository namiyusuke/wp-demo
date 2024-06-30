import React from "react";
import { getPost } from "@/app/posts/[id]/data";
export default async function page({ params: { id } }) {
  const post = await getPost(id);
  return (
    <>
      <h1>{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </>
  );
}
