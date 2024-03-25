const HeroVideo = ({ children, videoUrl = "/videos/hero-1.mp4" }) => {
  return (
    <div className="flex items-center justify-center w-full h-[600px]">
      <video
        className="absolute top-0 left-0 w-full h-[600px] object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-[600px] bg-black opacity-40 z-10"></div>
      {children}
    </div>
  );
};

export default HeroVideo;
