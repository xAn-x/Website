"use client";

import { useEffect, useState } from "react";

const scenes = [
  {
    name: "football",
    prompt: "matchday@home ~",
    status: "90+3′ · still watching",
    art: String.raw`      .-""""-.
    .'  .--.   '.
   /   /    \    \
  |   |  /\  |    |
  |   |  \/  |    |
   \   \    /    /
    '.  '--'  .'
      '-.__.-'`,
  },
  {
    name: "arch",
    prompt: "deepanshu@arch ~",
    status: "Arch Linux · btw",
    art: String.raw`         /\
        /  \
       /    \
      /  /\  \
     /__/  \___`,
  },
  {
    name: "coffee",
    prompt: "brew@home ~",
    status: "coffee break · now",
    art: String.raw`       ( (
        ) )
     .------.
     |      |]
     \      /
      '----'
     /______/`,
  },
];

export default function AsciiSwitch() {
  const [sceneIndex, setSceneIndex] = useState(0);
  const [motionEnabled, setMotionEnabled] = useState(true);
  const scene = scenes[sceneIndex];

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setMotionEnabled(!preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!motionEnabled) return undefined;
    const interval = window.setInterval(() => {
      setSceneIndex((currentIndex) => (currentIndex + 1) % scenes.length);
    }, 3000);
    return () => window.clearInterval(interval);
  }, [motionEnabled]);

  return (
    <aside
      className="ascii-card"
      aria-label="A small rotating collection of football, Arch Linux, and coffee ASCII art"
    >
      <div className="terminal-top" aria-hidden="true">
        <i />
        <i />
        <i />
        <span>{scene.prompt}</span>
      </div>
      <div className="ascii-content">
        <pre className="ascii-art" key={scene.name} aria-hidden="true">
          {scene.art.trim()}
        </pre>
        <div className="terminal-data" aria-hidden="true">
          <span>{scene.name.toUpperCase()}</span>
          <div key={`${scene.name}-status`} className="ascii-status">
            {scene.status}
          </div>
          <div className="ascii-progress">
            {scenes.map((item, index) => (
              <i
                className={index === sceneIndex ? "is-active" : ""}
                key={item.name}
              />
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
