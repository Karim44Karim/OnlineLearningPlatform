import { BookOpen, Clock, Globe, User, Users } from 'lucide-react';
import React from 'react'

export default function CourseMaterials() {
  interface CourseDetails {
  instructor: string;
  duration: string;
  lessons: number;
  enrolled: number;
  language: string;
}
  const courseItems = [
    {
      icon: <User className="w-5 h-5 text-gray-500" />,
      label: 'Instructor:',
      value: "Edward Narton",
    },
    {
      icon: <Clock className="w-5 h-5 text-gray-500" />,
      label: 'Duration:',
      value: "2 weeks",
    },
    {
      icon: <BookOpen className="w-5 h-5 text-gray-500" />,
      label: 'Lessons:',
      value: "8",
    },
    {
      icon: <Users className="w-5 h-5 text-gray-500" />,
      label: 'Enrolled:',
      value: `${"65"} students`,
    },
    {
      icon: <Globe className="w-5 h-5 text-gray-500" />,
      label: 'Language:',
      value: "English",
    },
  ];
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm md:shadow-none w-full max-w-sm mx-auto inline-block">
      <h2 className="text-xl mb-4 text-gray-800 pb-2">
        Course Materials
      </h2>
      <ul className="space-y-4">
        {courseItems.map((item) => (
          <li key={item.label} className="flex items-start justify-between border-b border-b-zinc-300 pb-3">
            <div className="flex items-center space-x-3">
              <div className="p-1 bg-gray-50 rounded-full">{item.icon}</div> 
              <span className="text-gray-600 font-medium">
                {item.label}
              </span>
            </div>
            {/* The actual value */}
            <span className="text-gray-800 font-semibold text-right">
              {item.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
