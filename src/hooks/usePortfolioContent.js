import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../firebase";
import { DEFAULT_PORTFOLIO_CONTENT } from "../data/defaultPortfolioContent";

const CONTENT_PATH = "portfolioContent";

export const usePortfolioContent = () => {
  const [content, setContent] = useState(DEFAULT_PORTFOLIO_CONTENT);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const contentRef = ref(db, CONTENT_PATH);

    const unsubscribe = onValue(
      contentRef,
      (snapshot) => {
        const remoteContent = snapshot.val();
        setContent(remoteContent || DEFAULT_PORTFOLIO_CONTENT);
        setIsLoading(false);
      },
      () => {
        setContent(DEFAULT_PORTFOLIO_CONTENT);
        setIsLoading(false);
      },
    );

    return () => unsubscribe();
  }, []);

  return { content, isLoading };
};
