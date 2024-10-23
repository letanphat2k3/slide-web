// App.js
import React from 'react';
import './App.css';
import { Slide } from './component/Slide/Slide';
import { Button } from './component/Button/Button';
import { useSlide } from './hook/useSlide';

function App() {
  const images = [
    "https://picsum.photos/300/200?image=0",
    "https://picsum.photos/300/200?image=1",
    "https://picsum.photos/300/200?image=2",
    "https://picsum.photos/300/200?image=3",
    "https://picsum.photos/300/200?image=4",
  ];

  const { currentIndex, nextSlide, prevSlide, restartSlide } = useSlide(images);

  return (
    <div className="App">
      <Slide currentImage={images[currentIndex]} />
      <div className="button-group">
        <Button onClick={prevSlide}>Previous</Button>
        <Button onClick={nextSlide}>Next</Button>
        <Button onClick={restartSlide}>Restart</Button>
      </div>
    </div>
  );
}

export default App;
