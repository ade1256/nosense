"use client";
import ImgPlay from "@/assets/images/icon_play.svg";
import ImgPause from "@/assets/images/icon_pause.svg";
import ImgNext from "@/assets/images/icon_next.svg";
import { useState } from "react";
import ReactPlayer from "react-player";
const Player = () => {
  const playlist = [
    {
      nameMixtape: "Oscuro Enigma",
      title: "LOCUS STREAM SET VOL.I - CIKO",
      urlYoutube: "https://www.youtube.com/watch?v=LxzOjq6pQtI",
    },
    {
      nameMixtape: "Blissful Dusk",
      title: "LOCUS STREAM SET VOL.I - NASR",
      urlYoutube: "https://www.youtube.com/watch?v=GulArYve8MQ",
    },
    {
      nameMixtape: "Urban Echoes",
      title: "LOCUS STREAM SET VOL.I - DIFFY",
      urlYoutube: "https://www.youtube.com/watch?v=EeJa9kUXjdY",
    },
    {
      nameMixtape: "Urban Echoes",
      title: "LOCUS STREAM SET VOL.II - DVTR",
      urlYoutube: "https://www.youtube.com/watch?v=jsaoOc9eZsE",
    },
  ];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [playerState, setPlayerState] = useState<any>({
    url: playlist[activeIndex].urlYoutube,
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
  });

  const ref = (player: any) => {
    return;
  };

  const load = async (url: string) => {
    setPlayerState({
      url,
      played: 0,
      loaded: 0,
      pip: false,
    });
  };

  const handlePlay = async () => {
    setPlayerState({ ...playerState, playing: true });
  };
  const handlePause = async () => {
    setPlayerState({ ...playerState, playing: false });
  };

  function format(seconds: any) {
    const date = new Date(seconds * 1000);
    const hh = date.getUTCHours();
    const mm = date.getUTCMinutes();
    const ss = pad(date.getUTCSeconds());
    if (hh) {
      return `${hh}:${pad(mm)}:${ss}`;
    }
    return `${mm}:${ss}`;
  }

  function pad(string: any) {
    return ("0" + string).slice(-2);
  }

  const handleDuration = async (duration: any) => {
    setPlayerState({ ...playerState, duration });
  };

  const handleProgress = async (state: any) => {
    // We only want to update time slider if we are not currently seeking
    if (!state.seeking) {
      setPlayerState({
        ...playerState,
        ...state,
      });
    }
  };

  const handleNext = async () => {
    if (playlist.length - 1 === activeIndex) {
      setActiveIndex(0);
      load(playlist[0].urlYoutube);
    } else {
      setActiveIndex(activeIndex + 1);
      load(playlist[activeIndex + 1].urlYoutube);
    }
  };

  //   useEffect(() => {
  //     setPlayerState({
  //         ...playerState,
  //         playing: true
  //     })
  //   }, [])
  return (
    <div className="player">
      <div className="reac-player-wrapper hidden">
        <ReactPlayer
          ref={ref}
          {...playerState}
          onPlay={handlePlay}
          onDuration={handleDuration}
          onProgress={handleProgress}
        />
      </div>
      {!playerState.playing ? (
        <div className="actionbtn" onClick={() => handlePlay()}>
          <img src={ImgPlay.src} alt="play" />
        </div>
      ) : (
        <div className="actionbtn" onClick={() => handlePause()}>
          <img src={ImgPause.src} alt="pause" />
        </div>
      )}
      <div className="time">
        <time
          dateTime={`P${Math.round(
            playerState.duration * (1 - playerState.played)
          )}S`}
        >
          {format(playerState.duration * (1 - playerState.played))}
        </time>
      </div>
      <div className="name">{playlist[activeIndex].nameMixtape}</div>
      <div className="title">{playlist[activeIndex].title}</div>
      <div className="nextbtn" onClick={() => handleNext()}>
        <img src={ImgNext.src} alt="next-song" />
      </div>
    </div>
  );
};

export default Player;
