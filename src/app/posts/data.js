import "server-only";
import { POSTS_ENDPOINTS_URL } from "@/lib/wp";
export const getPosts = async () => {
  const res = await fetch(POSTS_ENDPOINTS_URL);
  const data = await res.json();
  return data;
};
