import { createUserRepository } from "./user.repository.js";

export const createUserManager = (
    userRepository: ReturnType<typeof createUserRepository>,
) => {
    const createUser = async (
        username: string,
        displayedName: string,
    ) => {
        return userRepository.createUser(username, displayedName);
    };

    const getAllUsers = async () => {
        return userRepository.getAllUsers();
    };

    return {
        createUser,
        getAllUsers,
    };
};
