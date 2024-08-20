interface AuthStore {
    user: User | null;
    error: string | null;
    login: (username: string, password: string) => void;
    logout: () => void;
    setUser: (user: User) => void;
    fetchUser: () => Promise<User>;
}

export type {AuthStore}