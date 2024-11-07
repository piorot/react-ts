import { ImagePreview } from "@/components/ui/image-preview";
import { useEffect } from "react";
import { useLivePreview } from "@/hooks/use-live-preview";

export const LivePreview = () => {
  const [livePreviewTrigger, , livePreview] = useLivePreview();
  useEffect(() => {
    const interval = setInterval(() => {
      livePreviewTrigger();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <ImagePreview image={livePreview.image} />;
};
