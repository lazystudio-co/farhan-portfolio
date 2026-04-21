import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../firebase";

const CONTENT_PATH = "portfolioContent";

export const usePortfolioContent = () => {
  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const contentRef = ref(db, CONTENT_PATH);

    const unsubscribe = onValue(
      contentRef,
      (snapshot) => {
        const remoteContent = snapshot.val();
        setContent(remoteContent || {});
        setIsLoading(false);
      },
      () => {
        setContent({});
        setIsLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  return { content, isLoading };
};
