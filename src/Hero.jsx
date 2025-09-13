import heroImg from './assets/stars.svg';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1 className=''>Resources Page</h1>
          <p className='hero-'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
            commodi placeat omnis odio.
          </p>
        </div>
      </div>
      <img
        src={heroImg}
        alt='moon in blob shaped sky with planets orbiting'
        style={{ width: 440 }}
        className='img-container'
      />
    </div>
  );
};
export default Hero;
