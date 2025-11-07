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
    <div className="h-screen overflow-hidden flex flex-col">
      {/* Header fixo com 80px de altura */}
      <div className="h-20 flex-shrink-0">
        <Header />
      </div>

      {/* Iframe ocupando o espaço restante */}
      <div className="flex-1 w-full overflow-hidden">
        <iframe
          src="https://v4.egestor.com.br/vitrine/?s=choppriomafra"
          style={{
            width: "100%",
            height: iframeHeight,
            border: "none",
          }}
          title="Demonstração de Vitrine"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default Vitrine;
