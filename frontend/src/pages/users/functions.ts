import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../services/user/user.service";

export const useUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
