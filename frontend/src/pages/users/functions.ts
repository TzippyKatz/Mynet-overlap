import { useQuery } from "@tanstack/react-query";
import { userService } from "../../services/user/user.service";

export const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: userService.getUsers,
  });
