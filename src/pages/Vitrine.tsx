import { useEffect, useState } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState("calc(100vh - 143px)");

  useEffect(() => {
    const calculateHeight = () => {
      // 80px (header) + 63px (badge automático do sistema) = 143px
      const height = window.innerHeight - 80 - 63;
      setIframeHeight(`${height}px`);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);

    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  return (
    <>
      {/* Header fixo */}
      <Header />

      {/* Iframe - o badge do MonteSite já existe automaticamente */}
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
    </>
  );
};

export default Vitrine;
