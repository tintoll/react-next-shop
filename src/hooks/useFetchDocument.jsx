import { db } from "@/firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";

const useFetchDocument = (collectionName, documentID) => {
  const [document, setDocument] = useState(null);

  const getDocument = useCallback(async () => {
    const docRef = doc(db, collectionName, documentID);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const obj = {
        id: documentID,
        ...docSnap.data(),
      };
      setDocument(obj);
    } else {
      toast.error("Document not found");
    }
  }, [collectionName, documentID]);

  return { document };
};

export default useFetchDocument;
