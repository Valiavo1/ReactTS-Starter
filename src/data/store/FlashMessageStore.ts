import {create} from "zustand";
import {FlashMessageState} from "./types/flash_message_store_types";

export const useFlashMessageStore = create<FlashMessageState>((set) => ({
  message: null,
  type: null,
  showMessage: false,
  setMessage: (showMessage: boolean, message: string, type: 'success' | 'error' | 'info') => {
    set({ message, showMessage, type });
    setTimeout(() => {
      set({ message: null, showMessage: false, type: null });
    }, 3000);
  },
}));