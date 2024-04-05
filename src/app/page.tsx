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
  const [competetions, setCompetetions]: any = useState();
  const [loading, setLoading] = useState(true);

  async function getCompetitions() {
    console.log("Getting data ....");
    try {
      let querySnapshot = await getData("competetions");
      let competitionsArray = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setCompetetions(competitionsArray);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    console.log("Getting data ....");

    getCompetitions();
  }, []);
  console.log("Getting data ....");

  return (
    <>
      <div>
        <nav className="flex items-center bg-[#00ADB5] justify-between flex-wrap  p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            <svg
              className="fill-current h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg>
            <span className="font-semibold text-xl tracking-tight">
              CompeteHub
            </span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <a
                href="#responsive-header"
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >
                About
              </a>
            </div>
          </div>
        </nav>
      </div>
      <div className="">
        {loading ? (
          <>Loading ...</>
        ) : (
          competetions.map(
            (competition: {
              id: Key | null | undefined;
              data: {
                img: any;
                short_description: any;
                title:
                  | string
                  | number
                  | boolean
                  | ReactElement<any, string | JSXElementConstructor<any>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | Promise<AwaitedReactNode>
                  | null
                  | undefined;
              };
            }) => {
              console.log(competition.id, " => ", competition.data);
              return (
                <div
                  key={competition.id}
                  className="flex flex-col items-center space-x-4 m-4"
                >
                  <a
                    href="#"
                    className="flex flex-col items-center bg-white border bg-[#393E46] rounded-lg shadow md:flex-row md:max-w-xl hover:bg-[#525966] dark:border-[#393E46] dark:bg-[#393E46] dark:hover:[#525966]"
                  >
                    <img
                      className="object-cover w-full max-w-30	rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                      src={competition.data.img}
                      alt=""
                    />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {competition.data.title}
                      </h5>
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {competition.data.short_description}
                      </p>
                    </div>
                  </a>
                </div>
              );
            }
          )
        )}
      </div>
    </>
  );
}
35;
