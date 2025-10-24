import React from 'react';

// 2. Local assets (Images, SVGs, etc.)
import img1 from '../../public/thumbnail.png';

// 3. Local Components
import MyVideoPlayer from './_Components/MyVideoPlayer';
import LocalNav from './_Components/LocalNav';
import CourseMaterials from './_Components/CourseMaterials';
import ProgressBar from './_Components/ProgressBar';
import Topics from './_Components/Topics';
import Comments from './_Components/Comments';

/**
 * Renders the main Course Details page layout.
 * This component uses a three-column grid layout on medium and larger screens.
 */
export default function Home() {
  // Main Header
  const Header = (
    <>
      {/* Breadcrumbs */}
      <div className="flex gap-2 text-zinc-600 py-2 md:col-span-2">
        <a href="#">Home</a>
        <span>&gt;</span>
        <a href="#">Courses</a>
        <span>&gt;</span>
        <a href="#">Course Details</a>
      </div>

      {/* Course Title */}
      <h1 className="text-4xl font-semibold pb-6 md:col-span-2">
        Starting SEO as your Home Based Business
      </h1>
    </>
  );

  //VideoPlayer
    const VideoPlayer = (
    <>
      {/* Primary Content Sections: Video Player, Navigation, and Materials */}
      <section className="sticky top-2 z-30 md:static md:col-span-2">
        <MyVideoPlayer
          url={"https://www.youtube.com/embed/LXb3EKWsInQ?si=3DudCYzkawRXn26V"}
          thumbnail={img1}
        />
      </section>
    </>
  );

  // Navigation and materials
    const LocalNavAndContent = (
      <>
        {/* Breadcrumbs */}
        {/* Primary Content Sections: Video Player, Navigation, and Materials */}
        <section className="md:col-span-2">
          <LocalNav />
          <div className='md:shadow-sm rounded-lg bg-white'>
            <CourseMaterials />
            {/* The duplicate CourseMaterials is hidden on small screens */}
            <div className="hidden md:inline-block md:w-1/2 ">
              <CourseMaterials />
            </div>
          </div>
        </section>
      </>
    );

  // Sidebar/Ancillary content (Occupies column 3 on desktop)
  const Sidebar = (
    <div className="md:col-start-3 md:absolute md:right-0 md:top-10 md:w-1/3">
      <h2 className="text-2xl font-semibold text-gray-800 py-5 px-10">
        Topics for This Course
      </h2>
      <ProgressBar />
      <section id="curriculum mt-20">
        <Topics />
      </section>
    </div>
  );

  // Comments Section (Spans columns 1 and 2, but must come after the Sidebar in source order)
  const CommentsSection = (
    <section id="comments" className="md:col-span-2 pt-10">
      <Comments />
    </section>
  );

  //footer section
  const Footer = (
    <footer className='bg-black text-white text-center md:col-span-3 w-full'>
      Recruitment test project by Karim Radwan. 2025.
    </footer>
  );

  return (
    <div className="p-4 bg-[#FCFCFD] grid grid-cols-1 grid-rows-1 md:grid-cols-3">
      {Header}
      {VideoPlayer}
      {LocalNavAndContent}
      {Sidebar}
      {CommentsSection}
      {Footer}
    </div>
  );
}