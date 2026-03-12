import { Button } from "@/components/ui/button";
import { useState } from "react";
import { SiInstagram } from "react-icons/si";
import Section from "./Section";

export default function VideoSection() {
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setHasError(true);
  };

  return (
    <Section>
      <div className="mb-12 text-center">
        <h2 className="mb-4 font-display">Watch Our Videos on Instagram</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-6">
          See how KK Euro Express delivers excellence across Europe and beyond.
        </p>
        <Button asChild size="lg" className="gap-2">
          <a
            href="https://instagram.com/kkeuroexpress_banga"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiInstagram className="h-5 w-5" />
            Follow us on Instagram
          </a>
        </Button>
      </div>

      <div className="max-w-4xl mx-auto">
        {!hasError ? (
          <div className="relative rounded-lg overflow-hidden shadow-soft bg-muted/30">
            <video
              controls
              className="w-full h-auto"
              onError={handleError}
              preload="metadata"
            >
              <source src="/assets/watch-our-video.mp4" type="video/mp4" />
              <track kind="captions" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <div className="relative rounded-lg overflow-hidden shadow-soft bg-muted/30">
            <img
              src="/assets/video-fallback.jpeg"
              alt="KK Euro Express office storefront with courier service signage"
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </div>
    </Section>
  );
}
