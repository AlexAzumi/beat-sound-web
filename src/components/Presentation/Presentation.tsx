const Presentation = () => {
  return (
    <div className='flex w-screen h-screen justify-center items-center bg-primary'>
      <div className='flex flex-col items-start w-1/2'>
        <h1 className='text-6xl text-white font-extrabold mb-10 drop-shadow-xl animate-fadeFromBotton'>
          Beat Sound
        </h1>
        <img
          src='/img/screenshot-beta.png'
          className='w-full shadow-xl animate-fadeFromBottonWithDelay transition-all hover:-translate-y-2'
        />
      </div>
    </div>
  );
};

export default Presentation;
