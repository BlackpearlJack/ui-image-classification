"use client";
import { PlayerCard, UploadCard, ResultsCard } from "@/components/card.components";
import { Player, Results } from "@/config/type";
import React, { useState } from "react";

export default function Home() {
  const players: Player[] = [
    { name: "Chris Hemsworth", image: "/images/photo_2.jpg", dataPlayer: "Chris_Hemsworth" },
    { name: "Demi Lovato", image: "/images/photo_3.jpg", dataPlayer: "Demi_Lovato" },
    { name: "Ina Garten", image: "/images/photo_5.jpg", dataPlayer: "Ina_Garten" },
    { name: "Isabel Allende", image: "/images/photo_1.jpg", dataPlayer: "Isabel_Allende" },
    { name: "Lamine Yamal", image: "/images/photo_4.jpg", dataPlayer: "Lamine_Yamal" },
  ];

  const [showResults, setShowResults] = useState(false); // State to toggle between UploadCard and ResultsCard
  const [resultData, setResultData] = useState<Results | null>(null); // State to hold result data

  const handleClassify = (result: Results) => {
    setResultData(result); // Set the result data
    setShowResults(true); // Show the ResultsCard
  };

  const handleBack = () => {
    setShowResults(false); // Go back to the UploadCard
    setResultData(null); // Clear result data
  };

  return (
    <div
      className="flex flex-col m-auto items-center p-5 min-h-screen gap-5 bg-cover bg-no-repeat bg-center
    bg-[url('/images/nature-cover.jpg')]"
    >
      {/* Image Cards Grid */}
      <div className="w-full md:w-4/5 flex flex-col md:flex-row gap-5 justify-center">
        {players.map((player) => (
          <PlayerCard
            key={player.dataPlayer}
            name={player.name}
            image={player.image}
            dataPlayer={player.dataPlayer}
            className="md:w-1/2 lg:w-1/3 xl:w-1/4"
          />
        ))}
      </div>

      {/* Conditional Rendering for UploadCard or ResultsCard */}
      {showResults && resultData ? (
        <ResultsCard
          image={resultData.image} // Pass the image path
          message={resultData.message} // Pass the classification message
          onBack={handleBack} // Pass the back handler
          probabilities={resultData.probabilities || []} // Ensure probabilities are passed
        />
      ) : (
        <UploadCard onClassify={handleClassify} /> // Pass the classify handler
      )}
    </div>
  );
}