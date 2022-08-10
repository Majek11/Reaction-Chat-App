import create from 'zustand'


const useStore = create((set) => ({
  loading: false,
  isLoggedIn: false,
  devices: [],
  contactsOpen: false,
  chatDetailsOpen: false,
  setLoading: (isLoading) => set((state) => ({ loading: isLoading })),
  setLoggedIn: (isLoggedIn) => set((state) => ({ isLoggedIn })),
  setDevices: (devices) => set((state) => ({ devices })),
  setContactsOpen: (isOpen) => set((state) => ({ contactsOpen: isOpen })),
  setChatDetailsOpen: (isOpen) => set((state) => ({ chatDetailsOpen: isOpen })),
}))

export default useStore