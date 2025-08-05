"use client";

import React, { useState, FormEvent } from "react";

type PromptInputProps = {
  onSubmit: (prompt: string) => void;
};

export default function PromptInput({ onSubmit }: PromptInputProps) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;
    onSubmit(prompt.trim());
    setPrompt("");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6">
      <label
        htmlFor="prompt"
        className="block mb-2 font-semibold text-eggplant"
      >
        Enter your prompt:
      </label>
      <input
        id="prompt"
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Type something..."
        className="w-full p-2 rounded border border-paleBlue text-deepPlum"
      />
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-paleBlue text-white rounded hover:bg-navyBlue"
      >
        Submit
      </button>
    </form>
  );
}
