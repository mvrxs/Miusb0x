import { usePlayerStore } from "@/store/playerStore"
import { useEffect, useRef, useState } from "react"
import { Slider } from "./Slider"
import Popup from "./Popup"

export const Pause = ({ className }) => (
    <svg className={className} role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
)

export const Play = ({ className }) => (
    <svg className={className} role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
)

export const Next = () => (
    <svg fill="currentColor" role="presentation" height="16" width="16" aria-hidden="true" aria-label="siguiente" viewBox="0 0 16 16"><path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path></svg>
);

export const Back = () => (
    <svg fill="currentColor" role="presentation" height="16" width="16" aria-hidden="true" aria-label="anterior" viewBox="0 0 16 16"><path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path></svg>
)

export const Shuffle = () => (
    <svg fill="currentColor" role="presentation" height="16" width="16" aria-hidden="true" aria-label="mezcla" viewBox="0 0 16 16"><path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.724-.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 3.75 13.15.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z"></path><path d="m7.5 10.723.98-1.167.957 1.14a2.25 2.25 0 0 0 1.724.804h1.947l-1.017-1.018a.75.75 0 1 1 1.06-1.06l2.829 2.828-2.829 2.828a.75.75 0 1 1-1.06-1.06L13.109 13H11.16a3.75 3.75 0 0 1-2.873-1.34l-.787-.938z"></path></svg>
)

export const Repeat = () => (
    <svg fill="currentColor" role="presentation" height="16" width="16" aria-hidden="true" aria-label="mezcla" viewBox="0 0 16 16"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path></svg>
)

export const VolumeSilence = () => (
    <svg fill="currentColor" role="presentation" height="16" width="16" aria-hidden="true" aria-label="Volumen apagado" viewBox="0 0 16 16"><path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path><path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path></svg>
)

export const Volume = () => (
    <svg fill="currentColor" role="presentation" height="16" width="16" aria-hidden="true" aria-label="Volumen alto" id="volume-icon" viewBox="0 0 16 16"><path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path><path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path></svg>
)

export const Singer = () => (
    <svg fill="currentColor" role="presentation" height="16" width="16" aria-hidden="true" aria-label="artista" viewBox="0 0 50 50"><path d="M8 15c3.86 0 7-3.14 7-7s-3.14-7-7-7-7 3.14-7 7 3.14 7 7 7zM8 3c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zM18 7h31v2H18zM8 32c3.86 0 7-3.14 7-7s-3.14-7-7-7-7 3.14-7 7 3.14 7 7 7zm0-12c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zM18 24h31v2H18zM8 49c3.86 0 7-3.14 7-7s-3.14-7-7-7-7 3.14-7 7 3.14 7 7 7zm0-12c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zM18 41h31v2H18z" /></svg>)

const CurrentSong = ({ image, title, artists }) => {
    return (
        <div
            className={`
        flex items-center gap-5 relative
        overflow-hidden
      `}>
            <picture className="w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden">
                <img src={image} alt={title} />
            </picture>

            <div className="flex flex-col">
                <h3 className="font-semibold text-sm block">
                    {title}
                </h3>
                <span className="text-xs opacity-80">
                    {artists?.join(', ')}
                </span>
            </div>

        </div>
    )
}

/**
 * Componente que muestra el control de tiempo de la canción.
 * @param {Object} props - Propiedades del componente.
 * @param {Object} props.audio - Referencia al elemento de audio.
 * @returns {JSX.Element} Componente de React que muestra el control de tiempo de la canción.
 */
const SongControl = ({ audio }) => {
    const [currentTime, setCurrentTime] = useState(0)

    useEffect(() => {
        audio.current.addEventListener('timeupdate', handleTimeUpdate)

        return () => {
            audio.current.removeEventListener('timeupdate', handleTimeUpdate)
        }
    }, [])

    const handleTimeUpdate = () => {
        setCurrentTime(audio.current.currentTime)
    }

    const formatTime = time => {
        if (time == null) return `0:00`

        const seconds = Math.floor(time % 60)
        const minutes = Math.floor(time / 60)

        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    const duration = audio?.current?.duration ?? 0

    return (
        <div className="flex gap-x-3 text-xs pt-2">
            <span className="opacity-50 w-12 text-right">{formatTime(currentTime)}</span>

            <Slider
                value={[currentTime]}
                max={audio?.current?.duration ?? 0}
                min={0}
                className="w-[600px]"
                onValueChange={(value) => {
                    const [newCurrentTime] = value
                    audio.current.currentTime = newCurrentTime
                    if (shufflePending) {
                        handleClickShuffle(); // Llamar a handleClickShuffle al cambiar el tiempo
                    }
                }}
            />

            <span className="opacity-50 w-12">
                {duration ? formatTime(duration) : '0:00'}
            </span>
        </div>
    )
}


/**
 * Componente que muestra un control de volumen y un slider para ajustar el volumen del reproductor, si clickamos en el icono de volumen se silencia el reproductor.
 * Si volvemos a clickar se recupera el volumen anterior.
 * @returns {JSX.Element} Componente de control de volumen.
 */
const VolumeControl = () => {
    const volume = usePlayerStore(state => state.volume)
    const setVolume = usePlayerStore(state => state.setVolume)
    const previousVolumeRef = useRef(volume)

    const isVolumeSilenced = volume < 0.1

    const handleClickVolumen = () => {
        if (isVolumeSilenced) {
            setVolume(previousVolumeRef.current)
        } else {
            previousVolumeRef.current = volume
            setVolume(0)
        }
    }

    return (
        <div className="flex justify-center gap-x-2 text-white">
            <button className="opacity-70 hover:opacity-100 transition" onClick={handleClickVolumen}>
                {isVolumeSilenced ? <VolumeSilence /> : <Volume />}
            </button>

            <Slider
                defaultValue={[100]}
                max={100}
                min={0}
                value={[volume * 100]}
                className="w-[95px]"
                onValueChange={(value) => {
                    const [newVolume] = value
                    const volumeValue = newVolume / 100
                    setVolume(volumeValue)
                }}
            />
        </div>
    )
}

export function Player() {
    const { currentMusic, isPlaying, setIsPlaying, volume, nextSong, prevSong, shuffle } = usePlayerStore(state => state)
    const [isShuffleActive, setShuffleActive] = useState(false);
    const [shufflePending, setShufflePending] = useState(false);
    const audioRef = useRef()

    useEffect(() => {
        isPlaying
            ? audioRef.current.play()
            : audioRef.current.pause()
    }, [isPlaying])

    useEffect(() => {
        audioRef.current.volume = volume
    }, [volume])

    useEffect(() => {
        const { song, playlist } = currentMusic
        if (song) {
            const src = `/music/${playlist?.id}/0${song.id}.mp3`
            audioRef.current.src = src
            audioRef.current.volume = volume
            audioRef.current.play()
            console.log('Playing', src)
        }
    }, [currentMusic])

    useEffect(() => {
        if (shufflePending) {
            setShuffleActive(true);
            setShufflePending(false);
        }
    }, [shufflePending]);


    const handleClickPrev = () => {
        prevSong()
    }
    const handleClick = () => {
        setIsPlaying(!isPlaying)
    }

    const handleClickNext = () => {
        nextSong()
    }

    const [isRepeatActive, setRepeatActive] = useState(false);
    const [isArtitstActive, setArtitstActive] = useState(false);
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleClickShuffle = () => {
        shuffle()
        setShuffleActive(true);
    }

    const handleClickRepeat = () => {
        setRepeatActive(!isRepeatActive);
    }

    const handleClickArtists = () => {
        setArtitstActive(!isArtitstActive);
        setPopupOpen(!isPopupOpen);
    }

    return (
        <div className="flex flex-row justify-between w-full px-1 z-50">
            <div className="w-[200px]">
                <CurrentSong {...currentMusic.song} />
            </div>

            <div className="grid place-content-center gap-4 flex-1">
                <div className="flex justify-center flex-col items-center">
                    <div className={`flex ${currentMusic.song ? 'justify-center' : 'justify-between'} gap-4`}>

                        {/* currentMusic.song && */ (/* button className={`p-2 ${isShuffleActive ? 'text-green-500' : ''}`} onClick={handleClickShuffle}> <Shuffle /> </button> */
                            <button className={`p-2 ${isShuffleActive ? 'text-green-500' : ''}`} onClick={handleClickShuffle}>
                                <Shuffle />
                            </button>

                        )}

                        {/* currentMusic.song && */ (
                            <button className="p-2" onClick={handleClickPrev}>
                                <Back />
                            </button>
                        )}
                        <button className="bg-white rounded-full p-2" onClick={handleClick}>
                            {isPlaying ? <Pause /> : <Play />}
                        </button>
                        {/* currentMusic.song && */ (
                            <button className="p-2" onClick={handleClickNext}>
                                <Next />
                            </button>
                        )}

                        {/* currentMusic.song && */ (
                            <button className={`p-2 ${isRepeatActive ? 'text-purple-500' : ''}`} onClick={handleClickRepeat}>
                                <Repeat />
                            </button>
                        )}

                    </div>
                    <SongControl audio={audioRef} />
                    <audio ref={audioRef} />
                </div>
            </div>
            <div className="grid place-content-center p-2">
                {(
                    <button className={`p-2 ${isArtitstActive ? 'text-purple-400' : ''}`} onClick={handleClickArtists}>
                        <Singer />
                    </button>
                )}
            </div>
            <div className={`bg-zinc-0 rounded-md p-0 w-0`}>
                <div className={`popup ${isPopupOpen ? 'open fixed transform -translate-x-1/2 z-50' : 'hidden'}`}>
                    <Popup isOpen={isPopupOpen} onClose={() => setPopupOpen(false)} transition: persist />
                </div>
            </div>
            <div className="grid place-content-center">
                <VolumeControl />
            </div>
        </div>
    )
}