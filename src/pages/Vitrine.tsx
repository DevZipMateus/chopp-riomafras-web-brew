import { useEffect, useState } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState("calc(100vh - 143px)");

  useEffect(() => {
    const calculateHeight = () => {
      // 80px (header) + 63px (badge) = 143px
      const height = window.innerHeight - 80 - 63;
      setIframeHeight(`${height}px`);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);

    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      {/* Header fixo */}
      <Header />

      {/* Iframe começando logo abaixo do header fixo (80px) */}
      <div className="w-full" style={{ marginTop: "80px" }}>
        <iframe
          src="https://v4.egestor.com.br/vitrine/?s=choppriomafra"
          style={{
            width: "100%",
            height: iframeHeight,
            border: "none",
            display: "block",
          }}
          title="Demonstração de Vitrine"
          allowFullScreen
        />
      </div>

      {/* Badge do Montesite fixo na parte inferior */}
      <div 
        className="fixed bottom-0 left-0 right-0 bg-secondary/95 backdrop-blur-sm border-t border-border shadow-lg z-50"
        style={{ height: "63px" }}
      >
        <div className="h-full flex items-center justify-center px-4">
          <div className="flex items-center gap-3 text-secondary-foreground">
            <svg 
              className="h-6 w-6 text-primary" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              />
            </svg>
            <span className="text-sm font-medium">
              Vitrine powered by{" "}
              <a 
                href="https://montesite.com.br" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors font-semibold"
              >
                MonteSite
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vitrine;
