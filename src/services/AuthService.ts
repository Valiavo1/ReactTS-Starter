const AuthService = {
    validateToken: async (token: string | null): Promise<boolean> => {
        if (!token) return false;

        try {
            // Simulated token validation (replace with actual API call)
            await new Promise(resolve => setTimeout(resolve, 1000));
            // Simulate validation logic
            return token === 'mockToken';
        } catch (error) {
            console.error('Token validation failed:', error);
            return false;
        }
    }
};

export default AuthService;
