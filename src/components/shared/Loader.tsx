import Image from 'next/image';

const Loading = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center fixed inset-0 bg-black opacity-70 z-50'>
      <Image
        unoptimized
        src='/images/loading.svg'
        alt='loading'
        width={50}
        height={50}
      />
    </div>
  );
};

export default Loading;
