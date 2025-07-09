
import React from 'react';

const ExerciseScienceSite = () => {
  const cards = [
    {
      title: "About Me",
      subtitle: "Strength • Recovery • Military",
      image: null,
      details: [
        "Master’s in Exercise Science",
        "Specialist in mental performance & injury prevention",
        "Tactical & elite performance expertise",
        "Passionate about EHS and increasing safety performance in high stake worksites",
        "Exercise Scientist"
      ],
      whyItMatters: "Delivering high-level programming rooted in biomechanics, military elites and health science."
    },
    {
      title: "Mental Performance",
      subtitle: "Elite Mindset Training",
      image: "/zoned-in/images/mental-performance.gif",
      details: [
        "Performance psychology coaching",
        "Cognitive drills under stress",
        "Biofeedback and recovery tracking",
        "Resilience & tactical breathing exercises"
      ],
      whyItMatters: "Boosts confidence and decision-making under operational stress."
    },
    {
      title: "Military Performance",
      subtitle: "Combat Readiness Optimization",
      image: "/zoned-in/images/military-performance.gif",
      details: [
        "Tactical movement drills",
        "Simulated stress scenarios",
        "Pre-mission neuro-priming routines",
        "Load-bearing endurance circuits",
        "Hydration protocols for high-heat ops",
        "Supplements to support recovery and clarity",
        "Power development"
      ],
      whyItMatters: "Enhances decision-making speed and movement efficiency in high-risk environments."
    },
    {
      title: "Nutrition",
      subtitle: "Fueling Performance & Recovery",
      image: "/zoned-in/images/nutrition.gif",
      details: [
        "Macro/micronutrient balancing for endurance",
        "Hydration strategies under physical stress",
        "Meal prep for high output"
      ],
      whyItMatters: "The right fuel reduces inflammation, boosts stamina and cognitive clarity."
    },
    {
      title: "Biomechanics",
      subtitle: "Human Motion Analysis",
      image: "/zoned-in/images/biomechanics-pitch.gif",
      details: [
        "Kinematic joint tracking",
        "Motion efficiency diagnostics",
        "Injury pattern detection"
      ],
      whyItMatters: "Breaks down athletic movements to improve efficiency and prevent overuse injuries."
    },
    {
      title: "Injury Prevention",
      subtitle: "Staying Mission Ready",
      image: "/zoned-in/images/injury-prevention.avif",
      details: [
        "Prehab routines for shoulders, hips, hamstrings",
        "Return-to-play protocols",
        "Postural restoration & load management",
        "Load management strategies"
      ],
      whyItMatters: "Avoiding injury means uninterrupted training cycles and peak availability."
    },
    {
      title: "EHS & Ergonomics",
      subtitle: "Environmental Health, Safety & Ergonomics in Action",
      image: "/zoned-in/images/ehs-card-image.png",
      details: [
        "Ergonomic workstation assessments",
        "Stretching & mobility for industrial athletes",
        "Root cause analysis of incidents and near-misses",
        "Data-driven ergonomics reports",
        "PPE compliance checks and fit-testing protocols",
        "Job hazard analysis for high-risk tasks"
      ],
      whyItMatters: "Reduces downtime and ensures elite output in tactical and industrial environments."
    },
    {
      title: "My Research",
      subtitle: "Applied Human Performance Studies",
      image: null,
      details: [
        "Sprint mechanics and hamstring injury research",
        "Sleep and resilience in tactical populations",
        "Energy systems monitoring in field athletes"
      ],
      whyItMatters: "Research guides our evidence-based training and recovery strategies."
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-4">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-green-400">Zeroed In by Rhayko</h1>
        <p className="text-gray-400 text-sm">Elite Human Performance Systems</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-2xl shadow-md p-6 transform transition-transform duration-300 hover:scale-105 hover:shadow-green-400/30 hover:ring-2 hover:ring-green-300"
          >
            {card.image && (
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-52 object-cover rounded-xl mb-4"
              />
            )}
            <h2 className="text-xl font-bold text-white mb-1">{card.title}</h2>
            <h3 className="font-medium text-gray-400 mb-2">{card.subtitle}</h3>
            <ul className="list-disc list-inside mb-2 text-sm text-gray-300">
              {card.details.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-300">
              <strong>Why It Matters:</strong> {card.whyItMatters}
            </p>
          </div>
        ))}
      </div>

      <footer className="text-center text-sm text-gray-500 mt-10">
        © 2025 All rights reserved. <a href="mailto:Rhayko.schwartz@gmail.com" className="underline">Rhayko.schwartz@gmail.com</a>
      </footer>
    </div>
  );
};

export default ExerciseScienceSite;
