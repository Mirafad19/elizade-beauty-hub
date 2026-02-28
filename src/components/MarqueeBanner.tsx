const MarqueeBanner = () => {
  const text = "ELIZADE NIGERIA LIMITED — YOUR TRUSTED TOYOTA PARTNER SINCE 1971 — ";
  
  return (
    <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
      <div className="marquee whitespace-nowrap flex">
        <span className="text-sm font-semibold tracking-[0.3em] uppercase mr-4">
          {text}{text}{text}{text}
        </span>
        <span className="text-sm font-semibold tracking-[0.3em] uppercase mr-4">
          {text}{text}{text}{text}
        </span>
      </div>
    </div>
  );
};

export default MarqueeBanner;
