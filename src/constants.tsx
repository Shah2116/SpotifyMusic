import { Track } from "react-native-track-player";

  export const playListData: Track[] = [
    {
        id: 1,
        title: 'Raabta',
        artist: 'Jubin Nautiyal',
        album: 'Raabta-Jubin',
        artwork: "https://pagalnew.com/coverimages/Raabta-Jubin-Nautiyal-500-500.jpg",
        url: require('./assets/audio/Raabta Jubin Nautiyal 320 Kbps.mp3'),
    },
    {
        id: 2,
        title: 'Jawan Track Song',
        artist:'Anirudh',
        alblum: 'Jawan Movie',
        artwork: 'https://pagalnew.com/covericons/album/jawan-2023-80-80.png',
        url: require('./assets/audio/Jawan Title Track Anirudh Ravichander 320 Kbps.mp3'),
    }
  ]