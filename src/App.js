import {useState, useEffect} from 'react';
import Player from './components/Player';

function App() {
  const [songs] = useState([
    {
      title: "Safest_Place_To_Hide",
      artist:"Backstreet Boys",
      img_src:"./images/song-1.jpg",
      src:"./music/Safest_Place_To_Hide.mp3"
    },
    {
      title: "Mileya_Mileya",
      artist:"Rekha Bhardwaj",
      img_src:"./images/song-2.jpg",
      src:"./music/Mileya_Mileya.mp3"
    },
    {
      title: "Tose-Naina",
      artist:"Arjit Singh",
      img_src:"./images/song-3.jpg",
      src:"./music/Tose-Naina.mp3"
    },
    {
      title: "Tu_Kisi_Rail_Si",
      artist:"Swanand Kirkire",
      img_src:"./images/song-4.jpg",
      src:"./music/Tu_Kisi_Rail_Si.mp3 "
    }
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length -1) {
        return 0;
      } else {
        return currentSongIndex +1;
      }
    });
  }, [currentSongIndex, songs.length]);
  return (
    <div className="App">
      <Player currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
              nextSongIndex={nextSongIndex}
              songs={songs}
      />        
    </div>
  );
}

export default App;
