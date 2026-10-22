import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userService } from "../../services/user/user.service";

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userService.createUser,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["users"] }),
  });
};
