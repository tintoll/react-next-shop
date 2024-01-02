import { db } from "@/firebase/firebase";
import {
  DocumentData,
  WhereFilterOp,
  collection,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import React, { useState } from "react";

const useFetchDocuments = (
  collectionName: string,
  arg: [string, WhereFilterOp, string]
) => {
  const [documents, setDocuments] = useState<DocumentData[]>([]);

  const getDocuments = async () => {
    const q = query(
      collection(db, collectionName),
      where(arg[0], arg[1], arg[2])
    );
    const querySnapshot = await getDocs(q);
    let documentArrays: DocumentData[] = [];
    querySnapshot.forEach((doc) => {
      const data = {
        id: doc.id,
        ...doc.data(),
      };
    });

    setDocuments(documentArrays);
  };

  return { documents };
};

export default useFetchDocuments;
