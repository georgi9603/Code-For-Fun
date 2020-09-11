import React from 'react';
import './App.css';
import Video from "./components/Video";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          videoURL="https://v77.tiktokcdn.com/2e7dde31028986e2c749802c18611cda/5f5c2656/video/tos/useast2a/tos-useast2a-ve-0068c003/a29b7dda161f489e8c1f18317fa6c581/?a=1233&br=2836&bt=1418&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009111937170101880612031B003D27&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajxka3A7czd4dTMzZzczM0ApNzs4NjQ6ZzxnNzxmaDhmOWdwMC5sMjM1MS9fLS02MTZzcy0vNDI2MzNeLzY0Y19gL2E6Yw%3D%3D&vl=&vr="
          likes={1000}
          messages={420}
          shares={20}
        />
        <Video
          videoURL="https://v77.tiktokcdn.com/2e7dde31028986e2c749802c18611cda/5f5c2656/video/tos/useast2a/tos-useast2a-ve-0068c003/a29b7dda161f489e8c1f18317fa6c581/?a=1233&br=2836&bt=1418&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009111937170101880612031B003D27&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajxka3A7czd4dTMzZzczM0ApNzs4NjQ6ZzxnNzxmaDhmOWdwMC5sMjM1MS9fLS02MTZzcy0vNDI2MzNeLzY0Y19gL2E6Yw%3D%3D&vl=&vr="
          likes={1000}
          messages={420}
          shares={20}
        />
      </div>
    </div>
  );
}

export default App;