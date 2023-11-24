import { Pause, Play } from "./Player"
import { usePlayerStore } from '@/store/playerStore'

export function CardPlayButton({ id, size = 'small' }) {
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic
  } = usePlayerStore(state => state)

  const isPlayingPlaylist = isPlaying && currentMusic?.playlist.id === id

  const handleClick = () => {
    if (isPlayingPlaylist) {
      setIsPlaying(false);
      return;
    }

    const apiUrl = `/api/get-info-playlist.json?id=${id}`;
    console.log("API URL:", apiUrl);

    /*     fetch(apiUrl)
          .then((res) => res.json())
          .then((data) => {
            const { songs, playlist } = data;
    
            console.log(songs, playlist)
    
             setIsPlaying(true);
            setCurrentMusic({ songs, playlist, song: songs[0] });
          })
          .catch((error) => {
            console.error("Error fetching playlist data:", error);
          }); */

    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        const { songs, playlist } = data;

        console.log(songs, playlist);

        if (songs && songs.length > 0) {
          const firstSongId = songs[0]._id;

          const songUrl = `/music/${playlist.albumId}/${firstSongId}.mp3`;

          setIsPlaying(true);
          setCurrentMusic({ songs, playlist, song: { ...songs[0], url: songUrl } });
        } else {
          console.error("La lista de canciones está vacía.");
        }
      })
      .catch((error) => {
        console.error("Error fetching playlist data:", error);
      });


  };


  const iconClassName = size === 'small' ? 'w-4 h-4' : 'w-5 h-5'


  return (
    <button onClick={handleClick} className="card-play-button rounded-full bg-purple-500 p-4 hover:scale-105 transition hover:bg-purple-400">
      {isPlayingPlaylist ? <Pause className={iconClassName} /> : <Play className={iconClassName} />}
    </button>
  )
}


/*     SINCRONIZAMOS ENTRE 2 COMPONENTES TOTALMENTE SEPARADOS EN ASRTO CON REACT
 */
