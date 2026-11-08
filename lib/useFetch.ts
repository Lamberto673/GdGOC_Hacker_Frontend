"use client";
import { useEffect, useState } from "react";
import { getData } from "./api";

export const useFetch = <T>(path: string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reload, setReload] = useState(0);

  useEffect(() => {
    getData<T>(path)
      .then((result) => {
        setData(result);
        setError(null);
      })
      .catch((err: Error) => setError(err.message))
      .finally(() => setLoading(false));
  }, [path, reload]);

  const retry = () => {
    setLoading(true);
    setReload(reload + 1);
  };

  return { data, loading, error, retry };
};
