import "server-only";
import { POSTS_ENDPOINTS_URL } from "@/lib/wp";
export const getPost = async (id) => {
  const res = await fetch(POSTS_ENDPOINTS_URL + `/` + id, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
};
