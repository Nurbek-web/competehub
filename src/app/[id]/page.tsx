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
    doc = doc.data();
    if (doc != 0) {
      setComp(doc);
    } else setError(true);
    console.log(doc);
    // if (doc.data()) setLoading(false);
  }

  useEffect(() => {
    getDoc();
  }, []);

  return <div>My Post: {params.id}</div>;
}
