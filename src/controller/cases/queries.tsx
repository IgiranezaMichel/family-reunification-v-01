/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@apollo/client"
import { LIST_OF_CASE } from "../../graphql/query/cases"
import { useEffect, useState } from "react";

export const useCaseList = () => {
  const result = useQuery(LIST_OF_CASE);
  const [response, setResponse] = useState({ code: 0, responseContent: [], responseReady: false });

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (result.data) {
          const caseList = await result.data.caseList;
          setResponse({ ...response, responseContent: caseList, responseReady: true });
        }
      } catch (error) {
        console.error('Error fetching case list:', error);
      }
    };

    fetchData();
  }, [result]);

  return { response, result };
};
