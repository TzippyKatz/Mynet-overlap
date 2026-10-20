import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/content/content.service";

export const usePosts = () =>
  useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
