import { useEffect, useState } from "react";
import type { User } from "@libs/types/user/user.type.js";
import { getUsers } from "../../services/user/user.service";

export const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getUsers()
      .then(setUsers)
      .catch((error: unknown) =>
        setError(
          error instanceof Error ? error.message : "Failed to load users",
        ),
      )
      .finally(() => setIsLoading(false));
  }, []);

  return { users, isLoading, error };
};
