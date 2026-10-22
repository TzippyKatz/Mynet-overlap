import { useMutation, useQueryClient } from "@tanstack/react-query";
import { contentService } from "../../services/content/content.service";

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: contentService.createPost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["posts"] }),
  });
};
