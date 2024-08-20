import { create } from "zustand";
import {AuthStore} from "./types/auth_store_types";
import {User} from "../models/User";

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    homes: [],
    error: null,
    login: (username: string, password: string) => {
        setTimeout(() => {
            const mockResponse = {
                user: {
                    userId: "mockUserId",
                    id: "mockId",
                    roleUser: "admin"
                },
                token: "mockToken"
            };

            set({ user: mockResponse.user });

            if (mockResponse.user.roleUser === 'admin')
                localStorage.setItem('X-User-Access', mockResponse.token);
            localStorage.setItem('U-Inf', mockResponse.user.id);
            window.location.reload();
        }, 1500);
    },
    logout: () => {
        localStorage.removeItem("X-User-Access");
        localStorage.removeItem("U-Inf");
        window.location.reload();
    },
    setUser: (user: User) => {
        set({ user });
    },
    fetchUser: () => {
        return new Promise<User>((resolve, reject) => {
            setTimeout(() => {
                const userId = localStorage.getItem('U-Inf');
                if (!userId) {
                    reject(new Error("No user ID found"));
                    return;
                }

                const mockResponse = {
                    user: {
                        id: userId,
                        name: 'admin',
                        roleUser: "admin"
                    }
                };

                set({ user: mockResponse.user });
                resolve(mockResponse.user);
            }, 1500);
        });
    }
}));
