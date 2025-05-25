"use client";

import React, { useState, useEffect } from "react";

const backgrounds = [
  { type: "image", src: "/assets/images/NaSArticle.png" },
  { type: "image", src: "/assets/images/RobertsonFoundation.jpg" },
  { type: "image", src: "/assets/images/CB.png" },
  { type: "image", src: "/assets/images/Graduation3.png" },
];

export default function LatestRibbon() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(i => (i + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const bg = backgrounds[index];

  return (
    <section
      id="latest"
      className="relative overflow-hidden py-32 min-h-[85vh]"
    >
      {index === 0 ? (
        <>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={bg.src}
              alt="Research Article"
              className="max-w-4xl max-h-[65vh] object-contain rounded-lg"
              style={{ boxShadow: "0 24px 48px rgba(0,0,0,0.14)" }}
            />
            <a
              href="/files/NaSArticle.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-8 left-8 inline-flex items-center text-sm font-medium text-neutral-900 underline transform transition-transform hover:scale-105 active:scale-95 focus:outline-none"
            >
              View the White Paper →
            </a>
          </div>
        </>
      ) : index === 1 ? (
        <div className="absolute inset-0" style={{ backgroundColor: '#171513' }}>
          <img
            src={bg.src}
            alt="Robertson Foundation"
            className="absolute inset-0 w-full h-full object-cover scale-[0.8]"
          />
          <a
            href="/work/robertson-foundation"
            className="absolute bottom-8 left-8 text-white text-sm font-medium underline transform transition-transform hover:scale-105 active:scale-95 focus:outline-none"
          >
            Visit the Robertson Foundation →
          </a>
        </div>
      ) : index === 2 ? (
        <>
          <h2
            className="absolute top-0 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-[7rem] tracking-wide z-20"
            style={{ fontFamily: "Willington", color: "#5C3A21" }}
          >
            My Latest Book
          </h2>
          <div className="absolute inset-0">
            <img
              src={bg.src}
              alt="Book Cover"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <a
              href="https://www.amazon.com/gp/product/B0F4XWYDJB?ref_=dbs_m_mng_rwt_calw_tpbk_1&storeType=ebooks"
              className="absolute bottom-8 left-8 transform transition-transform hover:scale-105 active:scale-95 focus:outline-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/assets/images/AmazonButton.png"
                alt="Buy on Amazon"
                className="h-8 rounded-2xl"
              />
            </a>
          </div>
        </>
      ) : index === 3 ? (
        <>
          <h2
            className="absolute top-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap text-[7rem] text-center leading-[0.8] z-20"
            style={{
              fontFamily: "Willington",
              color: "#4B3018",
              textShadow: "2px 2px 4px rgba(0,0,0,0.15)"
            }}
          >
            Mississippi College
            <br />
            Graduation
          </h2>
          <div className="absolute inset-0">
            <img
              src={bg.src}
              alt="Graduation"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <a
              href="/creative-studio/masters-graduation"
              className="absolute bottom-8 left-8 text-neutral-900 text-sm font-medium underline transform transition-transform hover:scale-105 active:scale-95 focus:outline-none"
            >
              View M.S. Graduation Shoot →
            </a>
          </div>
        </>
      ) : null}
    </section>
  );
}