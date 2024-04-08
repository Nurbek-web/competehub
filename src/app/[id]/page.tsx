"use client";

import { useEffect, useState } from "react";

import getDocument from "@/firebase/firestore/getDocument";
import { setDoc } from "firebase/firestore";

export default function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const [comp, setComp] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function getDoc() {
    let doc = await getDocument("competetions", params.id);
    if (doc != 0) {
      doc = doc.data();
      setComp(doc);
    } else setError(true);
    console.log(doc);
    setLoading(false);
  }

  useEffect(() => {
    getDoc();
  }, []);

  return (
    <div>
      {error ? (
        <>Error</>
      ) : (
        <>
          {loading ? (
            <>Loading</>
          ) : (
            <>
              <div className="flex m-6">
                <div>
                  <img
                    src={comp.img}
                    className="w-full rounded-lg"
                    alt="Rise Challenge"
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-white">{comp.title}</h2>
                  <p className="text-gray-600 mt-2">{comp.short_description}</p>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
