import { useQuery } from "@tanstack/react-query";
import { userService } from "../../services/user/user.service";
import { QUERY_KEYS } from "../../utils/queryKeys";

export const useUsers = () =>
  useQuery({
    queryKey: QUERY_KEYS.USERS,
    queryFn: userService.getUsers,
  });
