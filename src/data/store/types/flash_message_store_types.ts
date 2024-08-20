
interface FlashMessageState {
    message: string | null;
    type: 'success' | 'error' | 'info' | null;
    showMessage: boolean;
    setMessage: (showMessage: boolean, message: string, type: 'success' | 'error' | 'info') => void;
}

export type {FlashMessageState}