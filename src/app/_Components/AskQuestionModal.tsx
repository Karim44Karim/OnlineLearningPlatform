"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function AskQuestionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [questionText, setQuestionText] = useState("");

  useEffect(() => {
    const saved = sessionStorage.getItem("askQuestionText");
    if (saved) setQuestionText(saved);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("askQuestionText", questionText);
  }, [questionText]);

  return (
    <>
      <div>Ask a Question</div>
      <div>Type your question below.</div>

      <textarea
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        placeholder="Type your question here..."
        className="w-full p-3 border rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-green-500"
        rows={5}
      />

      <Button
        className="my-4 py-3 px-8 text-white bg-[#41B69D] rounded-lg cursor-pointer hover:bg-[#4b9c8a]"
        onClick={() => setIsOpen(false)}
      >
        Submit
      </Button>
    </>
  );
}
