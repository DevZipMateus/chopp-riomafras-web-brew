import { useEffect, useState } from "react";
import Header from "@/components/Header";

const Vitrine = () => {
  const [iframeHeight, setIframeHeight] = useState("calc(100vh - 143px)");

  useEffect(() => {
    const calculateHeight = () => {
      // 80px (header) + 63px (badge do MonteSite) = 143px
      const height = window.innerHeight - 80 - 63;
      setIframeHeight(`${height}px`);
    };

    calculateHeight();
    window.addEventListener("resize", calculateHeight);

    return () => window.removeEventListener("resize", calculateHeight);
  }, []);

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      {/* Header fixo */}
      <Header />

      {/* Iframe ocupando o espaço entre header e badge */}
      <div className="flex-1 w-full" style={{ marginTop: "80px" }}>
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

      {/* Badge do MonteSite fixo na parte inferior */}
      <div 
        className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 flex items-center justify-center"
        style={{ height: "63px" }}
      >
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Desenvolvido por</span>
          <a
            href="https://montesite.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
          >
            <svg 
              className="h-5 w-5" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
              <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
              <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
            MONTESITE
          </a>
        </div>
      </div>
    </div>
  );
};

export default Vitrine;
