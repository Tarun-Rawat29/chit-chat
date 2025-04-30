import { create } from "zustand";
import { createAuthSlice } from "./slices/auth-slices.js";
import { createChatSlice } from "./slices/chat-slices.js";

export const useAppStore= create()((...a) => ({
    ...createAuthSlice(...a),
    ...createChatSlice(...a),
}));