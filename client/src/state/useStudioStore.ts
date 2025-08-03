import { create } from 'zustand';

interface Track {
  id: string;
  name: string;
}

interface StudioState {
  tracks: Track[];
  addTrack: (name: string) => void;
  removeTrack: (id: string) => void;
}

export const useStudioStore = create<StudioState>((set) => ({
  tracks: [],
  addTrack: (name) =>
    set((state) => ({
      tracks: [...state.tracks, { id: Date.now().toString(), name }],
    })),
  removeTrack: (id) =>
    set((state) => ({ tracks: state.tracks.filter((t) => t.id !== id) })),
}));
