import React, { useState } from "react";

const ChooseUs = () => {
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <div className="space-y-5 p-8">
      <h4 className="text-primary  text:xl md:text-3xl font-medium flex items-center gap-2">
        <span className="text-42xl">🩺</span> Why Choose Us
      </h4>
      <div className=" flex gap-8">
        <div className="w-1/2">
          <h1 className="font-bold text-4xl">
            Why patients trust us with their care
          </h1>
          <p className="text-xl mt-5">
            Our commitment to excellence, compassion, and personalized treatment
            has earned the trust of countless patients. Discover what sets our
            care apart. Discover what sets our care apart.
          </p>
        </div>
        <div className="text-xl space-y-2">
          <p>✅ We offer flexible hours to fit your busy schedule.</p>
          <p>✅ Team is committed to making you feel comfortable.</p>
          <p>✅ We ensure you receive prompt and effective care.</p>
          <p>✅ Helping you manage your health at every stage of life.</p>
        </div>
      </div>
      <div className="relative w-11/12 mx-auto">
        {!playVideo ? (
          <div className="relative">
            {/* Video Thumbnail */}
            <img
              src="/src/assets/annie-spratt-pKpipZVVEC0-unsplash.jpg" // Change this to your thumbnail image
              alt="Video Thumbnail"
              className="w-full  object-cover rounded-xl"
            />
            {/* Play Button */}
            <button
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-xl"
              onClick={() => setPlayVideo(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        ) : (
          <iframe
            width="1100"
            height="600"
            src="https://www.youtube.com/embed/NzTKMU5Np14?si=1TyndLrayhw5aTXw"
            title="YouTube video player"
            frameborder="0"
            allow="autoplay; encrypted-media;"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="rounded-xl"
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default ChooseUs;
