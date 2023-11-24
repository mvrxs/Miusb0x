import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  currentMusic: { playlist: null, song: null, songs: [] },
  volume: 1,
  setVolume: (volume) => set({ volume }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),

  nextSong: () => set((state) => {
    const currentIndex = state.currentMusic.songs.findIndex(song => song.id === state.currentMusic.song.id);
    const nextIndex = (currentIndex + 1) % state.currentMusic.songs.length;
    const nextSong = state.currentMusic.songs[nextIndex];
    return { currentMusic: { ...state.currentMusic, song: nextSong } };
  }),



  prevSong: () => set((state) => {
    const currentTime = state.currentMusic.song.currentTime || 0;
    const currentIndex = state.currentMusic.songs.findIndex(song => song.id === state.currentMusic.song.id);

    // Si la canción actual es la primera, ir a la última
    const prevIndex = currentIndex === 0 ? state.currentMusic.songs.length - 1 : currentIndex - 1;
    const prevSong = state.currentMusic.songs[prevIndex];

    // Verificar el tiempo transcurrido desde el último clic en el botón previo
    const now = Date.now();
    const elapsedTime = now - (state.lastPrevClickTime || 0);

    // Si ha pasado más de 5 segundos desde el último clic, reiniciar la canción al principio
    if (elapsedTime > 1500) {
      return {
        currentMusic: {
          ...state.currentMusic,
          song: { ...state.currentMusic.song, currentTime: 0 },
        },
        lastPrevClickTime: now, // Actualizar el tiempo del último clic
      };
    }

    // Si no ha pasado mucho tiempo, simplemente ir a la canción anterior
    return {
      currentMusic: { ...state.currentMusic, song: { ...prevSong, currentTime: 0 } },
      lastPrevClickTime: now, // Actualizar el tiempo del último clic
    };
  }),



  shuffle: () => set((state) => {
    // Obtener una lista aleatoria de canciones
    const shuffledSongs = [...state.currentMusic.songs].sort(() => Math.random() - 0.5);

    // Encontrar el índice de la canción actual en la lista original
    const currentIndex = state.currentMusic.songs.findIndex(song => song.id === state.currentMusic.song.id);

    // Encontrar el índice de la canción actual en la lista aleatoria
    const newIndex = shuffledSongs.findIndex(song => song.id === state.currentMusic.song.id);

    // Si la canción actual no está en la lista aleatoria, reproducir la primera canción aleatoria
    const nextIndex = newIndex === -1 ? 0 : (newIndex + 1) % shuffledSongs.length;
    const nextSong = shuffledSongs[nextIndex];

    return { currentMusic: { ...state.currentMusic, songs: shuffledSongs, song: nextSong } };
  }), 

}))