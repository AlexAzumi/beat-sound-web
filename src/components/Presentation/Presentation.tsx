const Presentation = () => {
  return (
    <div className='flex w-screen h-screen justify-center items-center bg-sky-900'>
      <div className='flex flex-col items-start w-1/2'>
        <h1 className='text-6xl font-bold mb-10 text-white animate-fadeFromBotton'>
          Beat Sound
        </h1>
        <img
          src='/img/screenshot-beta.png'
          className='w-full shadow-lg animate-fadeFromBotton1secDelay opacity-0'
        />
      </div>
    </div>
  );
};

export default Presentation;
