import 'assets/scss/main.scss';

import module from './app.module.scss';

import MainForm from './main-form';
// eslint-disable-next-line no-unused-vars
const img = require('assets/images/image.jpg');
const imgmobile = require('assets/images/image-mobile.jpg');
const imgmobilewebp = require('assets/images/image-mobile.webp');
const imgwebp = require('assets/images/image.webp');

const App = () => {
  return (
    <div class={module.layout}>
      <picture>
        <source
          media="(min-width: 768px)"
          srcset="images/image.webp"
          type="image/webp"
        />
        <source
          media="(max-width: 767px)"
          srcset="images/image-mobile.webp"
          type="image/webp"
        />
        <source
          media="(min-width: 768px)"
          srcset="images/image.jpg"
          type="image/jpeg"
        />
        <source
          media="(max-width: 767px)"
          srcset="images/image-mobile.jpg"
          type="image/jpeg"
        />
        <img
          class={module.image}
          srcset="images/image.jpg 1024px,
           images/image-mobile.jpg 767px"
          src="images/image.jpg"
          alt="Background image"
        />
      </picture>
      <MainForm></MainForm>
      <div class={module.footer}></div>
    </div>
  );
};

export default App;
