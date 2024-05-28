import Video1 from "../assets/video/drone1.mp4";

const VideoShot = () => {
  return (
    <div className="flex justify-center items-center relative h-screen bg-black">
      <video
        src={Video1}
        className="absolute w-full h-full object-cover"
        autoPlay
        muted
        loop
      ></video>
      <div className="z-10 text-center text-white " >
      <div className="backdrop-blur-lg text-center mt-20 text-white bg-black/20 md:text-3xl text-2xl font-bold md:p-8 p-6 md:px-16 rounded-2xl  ">
        Your Trusted Real Estate Partner
      </div>
        
      </div>
    </div>
  );
};

export default VideoShot;
