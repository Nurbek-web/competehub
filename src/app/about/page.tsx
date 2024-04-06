"use client";

import Image from "next/image";
import {
  AwaitedReactNode,
  JSXElementConstructor,
  Key,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";

import getData from "@/firebase/firestore/getData";

export default function Home() {
  return (
    <>
      <div className="container mx-auto ">
        <div className="text-center px-3 lg:px-0">
          <h1 className="my-4 text-2xl text-[#EEEEEE] md:text-3xl lg:text-5xl font-black leading-tight">
            Welcome to CompeteHub
          </h1>
          <p className="leading-normal text-[#EEEEEE] text-base md:text-xl lg:text-2xl mb-8">
            Your Gateway to High School Excellence
          </p>

          <a href="/">
            <button className="mx-auto lg:mx-0 bg-[#393E46] hover:bg-[#525966] text-[#EEEEEE] font-extrabold rounded my-2 md:my-6 py-4 px-8 shadow-lg w-48">
              Explore
            </button>
          </a>
        </div>
      </div>
      <section className="bg-[#393E46] border-b py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
          <h2 className="w-full my-2 text-5xl font-black leading-tight text-center text-[#EEEEEE]">
            Opportunities
          </h2>
          <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-[#00ADB5] rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <div className="w-full font-bold text-xl text-gray-800 px-6 mt-6">
                  Stay Informed
                </div>
                <p className="text-gray-700 text-base px-6 mb-5">
                  Our platform keeps you up-to-date with the latest news,
                  announcements, and deadlines for upcoming events, ensuring
                  that you never miss out on a chance to showcase your skills
                  and talents.
                </p>
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-[#00ADB5] rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <div className="w-full font-bold text-xl text-gray-800 px-6 mt-6">
                  Access Resources
                </div>
                <p className="text-gray-700 text-base px-6 mb-5">
                  Whether you're looking for study materials, practice tests, or
                  guidance on how to excel in competitions, CompeteHub provides
                  a wealth of resources to support your journey towards success.
                </p>
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-[#00ADB5] rounded-t rounded-b-none overflow-hidden shadow">
              <a
                href="#"
                className="flex flex-wrap no-underline hover:no-underline"
              >
                <div className="w-full font-bold text-xl text-gray-800 px-6 mt-6">
                  Discover a World of Opportunities
                </div>
                <p className="text-gray-700 text-base px-6 mb-5">
                  From prestigious Olympiads to local competitions, from
                  academic challenges to extracurricular programs, we curate a
                  diverse array of opportunities that cater to every interest
                  and passion.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
35;
