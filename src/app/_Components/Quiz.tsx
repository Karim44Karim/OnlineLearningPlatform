"use client";
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft } from "lucide-react";

interface Option {
  id: string;
  text: string;
}

interface Question {
  id: number;
  question: string;
  options: Option[];
  correctId: string;
}

interface CustomRadioProps {
  id: string;
  text: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const CustomRadio: React.FC<CustomRadioProps> = ({
  id,
  text,
  isSelected,
  onSelect,
}) => (
  <div
    role="button"
    tabIndex={0}
    onClick={() => onSelect(id)}
    onKeyDown={(e) => (e.key === "Enter" || e.key === " " ? onSelect(id) : null)}
    className={`flex items-center gap-4 p-4 rounded-xl shadow-md cursor-pointer transition-colors 
      ${
        isSelected
          ? "bg-indigo-600 text-white"
          : "bg-white text-gray-800 hover:bg-gray-50"
      }
      focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50`}
  >
    <div
      className={`w-6 h-6 flex items-center justify-center rounded-full border-2 flex-shrink-0
        ${isSelected ? "border-white bg-transparent" : "border-gray-300 bg-white"}`}
    >
      {isSelected && <div className="w-2 h-2 rounded-full bg-white"></div>}
    </div>
    <span className="text-lg flex-grow">{text}</span>
  </div>
);

export default function Quiz() {
  const quizData: Question[] = [
    {
      id: 1,
      question:
        "Among the following states of India, which one has the oldest rock formations?",
      options: [
        { id: "assam", text: "Assam" },
        { id: "bihar", text: "Bihar" },
        { id: "karnataka", text: "Karnataka" },
        { id: "up", text: "Uttar Pradesh" },
      ],
      correctId: "karnataka",
    },
    {
      id: 2,
      question: "Which planet is known as the Red Planet?",
      options: [
        { id: "mars", text: "Mars" },
        { id: "venus", text: "Venus" },
        { id: "jupiter", text: "Jupiter" },
        { id: "saturn", text: "Saturn" },
      ],
      correctId: "mars",
    },
    {
      id: 3,
      question: "What is the capital of Australia?",
      options: [
        { id: "sydney", text: "Sydney" },
        { id: "melbourne", text: "Melbourne" },
        { id: "canberra", text: "Canberra" },
        { id: "perth", text: "Perth" },
      ],
      correctId: "canberra",
    },
  ];

  const TOTAL_TIME = 60; // total quiz time (seconds)
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // ✅ Initialize state from localStorage if available
  const [currentStep, setCurrentStep] = useState<number>(() => {
    const saved = localStorage.getItem("quiz_currentStep");
    return saved ? Number(saved) : 0;
  });

  const [answers, setAnswers] = useState<Record<number, string>>(() => {
    const saved = localStorage.getItem("quiz_answers");
    return saved ? JSON.parse(saved) : {};
  });

  const [isFinished, setIsFinished] = useState<boolean>(() => {
    const saved = localStorage.getItem("quiz_isFinished");
    return saved === "true";
  });

  const [timeLeft, setTimeLeft] = useState<number>(() => {
    const saved = localStorage.getItem("quiz_timeLeft");
    return saved ? Number(saved) : TOTAL_TIME;
  });

  const currentQuestion = quizData[currentStep];
  const selectedOptionId = answers[currentQuestion?.id] ?? "";

  // ✅ Save progress to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem("quiz_currentStep", String(currentStep));
    localStorage.setItem("quiz_answers", JSON.stringify(answers));
    localStorage.setItem("quiz_isFinished", String(isFinished));
    localStorage.setItem("quiz_timeLeft", String(timeLeft));
  }, [currentStep, answers, isFinished, timeLeft]);

  // ✅ Timer logic for the whole quiz
  useEffect(() => {
    if (isFinished) return;

    if (timerRef.current) clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          setIsFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isFinished]);

  const handleOptionSelect = (id: string): void => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: id }));
  };

  const handleNext = (): void => {
    if (currentStep < quizData.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleBack = (): void => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleRestart = (): void => {
    setAnswers({});
    setCurrentStep(0);
    setIsFinished(false);
    setTimeLeft(TOTAL_TIME);

    // ✅ Clear saved progress
    localStorage.removeItem("quiz_currentStep");
    localStorage.removeItem("quiz_answers");
    localStorage.removeItem("quiz_isFinished");
    localStorage.removeItem("quiz_timeLeft");
  };

  const score = Object.entries(answers).filter(([qid, ans]) => {
    const q = quizData.find((q) => q.id === Number(qid));
    return q?.correctId === ans;
  }).length;

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-indigo-900 text-white p-8 text-center">
        <h2 className="text-4xl font-bold mb-4">🎉 Quiz Completed!</h2>
        <p className="text-2xl mb-6">
          You scored{" "}
          <span className="font-bold text-yellow-400">{score}</span> out of{" "}
          {quizData.length}
        </p>
        {timeLeft === 0 && (
          <p className="text-yellow-400 text-lg mb-4">
            ⏰ Time’s up! Your answers were auto-submitted.
          </p>
        )}
        <button
          onClick={handleRestart}
          className="px-8 py-3 bg-yellow-400 text-indigo-900 font-bold text-lg rounded-xl shadow-lg hover:bg-yellow-500 transition-colors"
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full p-4 bg-indigo-900 min-h-screen">
      {/* Header */}
      <header className="flex flex-col gap-4">
        <div className="flex justify-between items-center w-full">
          <ChevronLeft
            className={`text-white w-8 h-8 cursor-pointer ${
              currentStep === 0 ? "opacity-30 cursor-not-allowed" : ""
            }`}
            onClick={handleBack}
            aria-label="Go back"
          />
          <div className="flex items-center justify-center bg-yellow-400 text-indigo-900 font-bold px-4 py-2 rounded-full shadow-lg min-w-[100px]">
            <span className="text-lg">⏲️ {formatTime(timeLeft)}</span>
          </div>
          <div className="w-8"></div>
        </div>

        {/* Steps */}
        <div className="flex justify-center gap-3 mb-6">
          {quizData.map((_, index) => (
            <div
              key={index}
              aria-current={index === currentStep ? "step" : undefined}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-lg font-bold transition-colors 
                ${
                  index === currentStep
                    ? "bg-white text-indigo-900 border-2 border-yellow-400"
                    : "bg-indigo-700 text-white opacity-70"
                }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </header>

      {/* Quiz Card */}
      <div className="flex-grow bg-white p-6 rounded-3xl shadow-2xl flex flex-col gap-6">
        <div className="text-2xl font-bold text-gray-800">
          <span className="mr-2">{currentStep + 1}.</span>
          {currentQuestion.question}
        </div>

        <div className="flex flex-col gap-4">
          {currentQuestion.options.map((option) => (
            <CustomRadio
              key={option.id}
              id={option.id}
              text={option.text}
              isSelected={selectedOptionId === option.id}
              onSelect={handleOptionSelect}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="p-4 mt-4">
        <button
          onClick={handleNext}
          disabled={!selectedOptionId}
          className={`w-full py-3 font-bold text-xl rounded-xl shadow-lg transition-colors
            ${
              selectedOptionId
                ? "bg-yellow-400 text-indigo-900 hover:bg-yellow-500"
                : "bg-gray-400 text-gray-800 cursor-not-allowed"
            }`}
        >
          {currentStep === quizData.length - 1 ? "Finish Quiz" : "Next Question"}
        </button>
      </footer>
    </div>
  );
}
