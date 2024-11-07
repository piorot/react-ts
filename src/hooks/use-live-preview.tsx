import { useCallback, useState } from "react";

type Status = "IDLE" | "LOADING" | "ERROR";
type UseLivePreview = [() => Promise<void>, Status, { image: string | null }];
export const useLivePreview = (): UseLivePreview => {
  const noImage =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='rgba(255,255,255,1)'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-size='24' fill='rgba(0,0,0,0.5)'%3ENo content yet%3C/text%3E%3C/svg%3E";

  const [imagePreview, setImagePreview] = useState<{ image: string | null }>({
    image: noImage,
  });

  const [status, setStatus] = useState<Status>("IDLE");

  const fetchLivePreview = useCallback(async () => {
    setStatus("LOADING");
    try {
      const response = await fetch("http://192.168.1.22:8080/capture", {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();

      setImagePreview({
        image: data.image,
      });
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setStatus("IDLE");
    }
  }, []);

  return [fetchLivePreview, status, imagePreview];
};
