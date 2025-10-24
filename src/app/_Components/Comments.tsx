import React from "react";
import Image, { StaticImageData } from "next/image";
import img1 from "../../../public/user1-image.webp";

export default function Comments() {
  const comments: {
    name: string;
    image?: StaticImageData;
    date: string;
    text: string;
  }[] = [
    {
      name: "Student Name Goes Here",
      image: img1,
      date: "Oct 23 2025",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero sed ipsum incidunt delectus voluptas...",
    },
    {
      name: "Student Name Goes Here",
      image: img1,
      date: "Oct 23 2025",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero sed ipsum incidunt delectus voluptas...",
    },
    {
      name: "Student Name Goes Here",
      image: img1,
      date: "Oct 23 2025",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero sed ipsum incidunt delectus voluptas...",
    },
  ];

  return (
    <>
      <h2 className="text-xl font-semibold mb-4 text-gray-800 pb-2">
        Comments
      </h2>

      <div className="space-y-6">
        {comments.map((comment, index) => (
          <div
            key={index}
            className={`flex gap-4 items-start justify-start ${
              index == comments.length - 1 ? "" : "border-b-1"
            } p-6`}
          >
            <div className="flex-shrink-0">
              {comment.image && (
                <Image
                  src={comment.image}
                  alt={`${comment.name}'s profile`}
                  width={60}
                  height={60}
                  className="rounded-full object-cover"
                />
              )}
            </div>
            <div className="flex flex-col text-gray-700">
              <div className="font-semibold text-gray-600 mb-3">
                {comment.name}
              </div>
              <div className="text-sm text-gray-500 mb-2">{comment.date}</div>
              <div className="text-sm leading-relaxed text-gray-500">
                {comment.text}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-[#FBFBFC] p-4 rounded-sm">
        <textarea className="w-full bg-white rounded-md p-6 shadow-lg" name="newComment" id="newComment" placeholder="Write a comment"></textarea>
        <button className="my-4 py-3 px-8 text-white bg-[#41B69D] rounded-lg cursor-pointer hover:bg-[#4b9c8a]">Submit Review →</button>
      </div>
    </>
  );
}
