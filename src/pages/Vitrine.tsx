import { useEffect, useState } from "react";
import Header from "@/components/Header";
import logo from "@/assets/logo.png";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState("calc(100vh - 143px)");

  useEffect(() => {
    const calculateHeight = () => {
      // 80px (header) + 63px (badge existente) = 143px
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

      {/* Badge personalizado fixo na parte inferior */}
      <div 
        className="fixed bottom-0 left-0 right-0 bg-secondary border-t border-primary/20 shadow-lg z-50"
        style={{ height: "63px" }}
      >
        <div className="h-full flex items-center justify-center px-4">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Chopp RioMafra" 
              className="h-10 w-auto"
            />
            <span className="text-sm font-medium text-secondary-foreground">
              Vitrine Online - Chopp RioMafra
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vitrine;
