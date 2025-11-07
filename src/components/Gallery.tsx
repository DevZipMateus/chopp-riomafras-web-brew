import { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

const Gallery = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const mediaItems = [
    { type: "image", src: gallery1 },
    { type: "video", src: "/chop1.mp4" },
    { type: "image", src: gallery2 },
    { type: "image", src: gallery3 },
    { type: "video", src: "/chop2.mp4" },
    { type: "image", src: gallery4 },
    { type: "image", src: gallery5 },
  ];

  const handleVideoEnd = () => {
    if (api) {
      api.scrollNext();
    }
  };

  useEffect(() => {
    if (!api) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <section id="galeria" className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossa galeria
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Confira nossos produtos e serviços
          </p>
        </div>

        <div className="max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl mx-auto animate-fade-in">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {mediaItems.map((item, index) => (
                <CarouselItem key={index}>
                  <div 
                    className="rounded-lg overflow-hidden shadow-lg hover:shadow-gold transition-all duration-300"
                  >
                    {item.type === "image" ? (
                      <img 
                        src={item.src} 
                        alt={`Galeria ${index + 1}`}
                        className="w-full h-auto object-cover cursor-pointer"
                        onClick={() => setSelectedImage(item.src)}
                      />
                    ) : (
                      <video
                        ref={(el) => (videoRefs.current[`video-${index}`] = el)}
                        src={item.src}
                        autoPlay
                        muted
                        playsInline
                        onEnded={handleVideoEnd}
                        className="w-full h-auto object-cover"
                      />
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden">
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Imagem expandida"
                className="w-full h-full object-contain"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
