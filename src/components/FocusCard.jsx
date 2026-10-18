"use client";

import { useEffect, useState } from "react";

const focusAreas = [
  {
    number: "01",
    label: "Machine learning",
    detail: "models → useful products",
  },
  {
    number: "02",
    label: "Backend engineering",
    detail: "systems built to hold up",
  },
  { number: "03", label: "AWS", detail: "cloud infrastructure & scale" },
];

const personalInterests = [
  { number: "01", label: "Football", detail: "match days & tactics" },
  { number: "02", label: "Coffee", detail: "always time for one more" },
  { number: "03", label: "Music", detail: "the right soundtrack matters" },
];

const interestGroups = [
  { label: "At work", prompt: "interests --work", items: focusAreas },
  {
    label: "Off the clock",
    prompt: "interests --personal",
    items: personalInterests,
  },
];

export default function FocusCard() {
  const [groupIndex, setGroupIndex] = useState(0);
  const [motionEnabled, setMotionEnabled] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const group = interestGroups[groupIndex];

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setMotionEnabled(!preference.matches);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!motionEnabled || isPaused) return undefined;

    const interval = window.setInterval(() => {
      setGroupIndex((currentIndex) => (currentIndex + 1) % interestGroups.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused, motionEnabled]);

  return (
    <div className="focus-card-stack">
      <aside
        className="focus-card"
        aria-label="Professional and personal interests"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
      >
        <div className="terminal-top" aria-hidden="true">
          <i />
          <i />
          <i />
          <span>deepanshu@arch ~</span>
        </div>
        <div className="focus-tabs" role="group" aria-label="Choose interests">
          {interestGroups.map((item, index) => (
            <button
              aria-pressed={index === groupIndex}
              className={index === groupIndex ? "is-active" : ""}
              key={item.label}
              onClick={() => setGroupIndex(index)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="focus-panel" key={group.label}>
          <p className="focus-command">
            <span aria-hidden="true">$ </span>
            {group.prompt}
          </p>
          <ol className="focus-list">
            {group.items.map((item) => (
              <li key={item.number}>
                <span className="focus-number">{item.number}</span>
                <span className="focus-area-copy">
                  <span className="focus-label">{item.label}</span>
                  <span className="focus-detail">{item.detail}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </aside>
    </div>
  );
}
