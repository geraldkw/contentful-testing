import heroImg from './assets/stars.svg';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
          <h1 className=''>Weblinks Page</h1>
          <p>My Weblinks</p>
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
