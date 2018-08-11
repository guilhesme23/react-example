import React, { Component } from 'react';
import ImageSection from './Components/image-section';
import TextSection from './Components/text-section';

class App extends Component {
  render() {
    return <div>
        <ImageSection source="img/city3.jpg" content="React Example" height="100vh" />
        <TextSection title="First Section" theme="dark">
          Donec cursus euismod nulla, eu pellentesque nibh faucibus id. Nunc
          a congue massa. Pellentesque faucibus erat augue, nec maximus diam
          vestibulum vel. Etiam et velit euismod, rutrum ex in, venenatis
          ex. Interdum et malesuada fames ac ante ipsum primis in faucibus.
          Nam eu sapien eget nulla consequat rhoncus vitae eu neque. Integer
          aliquet tellus quis pulvinar molestie. Donec finibus dolor semper
          elit euismod, ac egestas enim varius. Phasellus venenatis egestas
          sapien, blandit porttitor neque efficitur eu. Mauris faucibus
          tortor in orci egestas imperdiet. Proin bibendum tortor quis
          imperdiet molestie.
        </TextSection>
      </div>;
  }
}

export default App;
