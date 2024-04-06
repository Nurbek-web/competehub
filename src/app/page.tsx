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
                    href=""
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
