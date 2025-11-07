import { useEffect, useState } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState("100vh");

  useEffect(() => {
    const calculateHeight = () => {
      // Calcula a altura total disponível menos o header (80px)
      const height = window.innerHeight - 80;
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
      <div className="w-full" style={{ marginTop: "80px", height: `calc(100vh - 80px)` }}>
        <iframe
          src="https://v4.egestor.com.br/vitrine/?s=choppriomafra"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            display: "block",
          }}
          title="Demonstração de Vitrine"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Vitrine;
