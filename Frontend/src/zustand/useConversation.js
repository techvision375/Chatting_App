import { create } from 'zustand'

const useConversation = create((set) => ({
  //state
  selectedConversation: null,
  setselectedConversation : (selectedConversation) => set({ selectedConversation }),
  messages:[],
  setMessage: (messages) => set({ messages }),
 
}));

export default useConversation

