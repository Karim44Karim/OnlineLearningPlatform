import React from "react";
import {
  BadgeQuestionMark,
  BookOpenText,
  MessageCircleMore,
  Trophy,
} from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import AskQuestionModal from "./AskQuestionModal";

export default function LocalNav() {
  const navItems = [
    {
      icon: <BookOpenText className="w-6 h-6 text-blue-600" />,
      label: "Curriculum",
      link: "#curriculum",
      dialog: null, // no dialog
    },
    {
      icon: <MessageCircleMore className="w-6 h-6 text-green-600" />,
      label: "Comments",
      link: "#comments",
      dialog: null,// no dialog
    },
    {
      icon: <BadgeQuestionMark className="w-6 h-6 text-purple-600" />,
      label: "Ask a Question",
      link: null,
      dialog: <AskQuestionModal />, 
    },
    {
      icon: <Trophy className="w-6 h-6 text-yellow-500" />,
      label: "Leaderboard",
      link: "#leaderboard",
      dialog: (
        <div className="text-center text-[#080264]">
          <h3>Course Name Shown Here</h3>
          <h4 className="font-bold">Leaderboard</h4>
          <div className="flex justify-center items-center bg-[#F5F9FA] p-4 rounded-sm">
            <div>
              عظيم يا صديقى.. أداءك فى الكورس ده أفضل من 60% من باقى الطلبة..
              كمل عايز أشوف اسمك فى الليدر بورد هنا
            </div>
            <div className="text-6xl">💪</div>
          </div>
          {new Array(3).fill("").map((_, index) => (
            <div key={index} className="bg-[#F5F9FA] p-4 rounded-sm mt-10">
              <div className="w-full h-16 bg-white border rounded-sm"></div>
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <ul className="flex gap-6 items-center py-4 px-6 w-5/12">
      {navItems.map((item, idx) => (
        <li
          key={idx}
          className="relative group cursor-pointer flex items-center justify-center transition-transform duration-200 ease-out hover:scale-110 border rounded-full p-2"
        >
          {item.dialog ? (
            <Dialog>
              <DialogTrigger asChild>
                <div className="cursor-pointer flex items-center justify-center">
                  {item.icon}
                  <span className="absolute top-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity z-50">
                    {item.label}
                  </span>
                </div>
              </DialogTrigger>
              <DialogContent>{item.dialog}</DialogContent>
            </Dialog>
          ) : (
            <Link href={item.link} className="flex items-center justify-center">
              {item.icon}
              <span className="absolute top-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                {item.label}
              </span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
