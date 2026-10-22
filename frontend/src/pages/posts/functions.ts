import { useQuery } from "@tanstack/react-query";
import { contentService } from "../../services/content/content.service";

export const usePosts = () =>
  useQuery({
    queryKey: ["posts"],
    queryFn: contentService.getPosts,
  });
