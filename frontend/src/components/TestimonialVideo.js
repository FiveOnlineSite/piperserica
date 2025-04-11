import { useEffect, useRef } from "react";

const TestimonialVideoSection = () => {
  const sectionRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    // Load YouTube IFrame API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    // Define player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("testimonial-video-iframe", {
        videoId: "7mD8Lpce8x4", // Your YouTube video ID
        playerVars: {
          autoplay: 0,
          mute: 1,
          modestbranding: 1,
          rel: 0,
        },
        events: {
          onReady: (event) => {
            event.target.mute();
          },
        },
      });
    };

    // Use IntersectionObserver to play/pause video
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && playerRef.current) {
          playerRef.current.playVideo();
        } else if (playerRef.current) {
          playerRef.current.pauseVideo();
        }
      },
      { threshold: 0.6 } // Adjust visibility threshold
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className="testimonial-video-section" ref={sectionRef}>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-8">
          <div className="row align-items-center justify-content-center">
            <div id="testimonial-video-iframe" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideoSection;
