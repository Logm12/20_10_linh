import { useState, useRef, useEffect } from 'react';
import { content } from './content';
import { Envelope } from './components/Envelope';
import { Letter } from './components/Letter';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFlower, setShowFlower] = useState(false);
  const letterRef = useRef<HTMLDivElement | null>(null);

  const handleOpenLetter = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (isOpen && letterRef.current) {
      // Cho thời gian nắp phong bì hé mở nhẹ (400ms), sau đó cuộn mượt và focus tới thư
      const timer = setTimeout(() => {
        letterRef.current?.scrollIntoView({
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 'auto'
            : 'smooth',
          block: 'start',
        });
        letterRef.current?.focus({ preventScroll: true });
      }, 400);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleToggleFlower = () => {
    // Luôn giữ trạng thái hiển thị rõ ràng, không nhân bản phần tử
    setShowFlower(true);
  };

  return (
    <main className="app-main-layout">
      {/* Vùng trang trí nền hoa văn cánh hoa rơi rất nhẹ, cố định không cản tương tác */}
      <div className="background-decorations" aria-hidden="true">
        <span className="petal petal-1" />
        <span className="petal petal-2" />
        <span className="petal petal-3" />
        <span className="petal petal-4" />
      </div>

      <div className="content-wrapper">
        {/* Màn hình đầu: Phong thư */}
        <Envelope
          dateBadge={content.header.dateBadge}
          title={content.header.envelopeTitle}
          subtitle={content.header.envelopeSubtitle}
          buttonText={content.header.openButtonText}
          isOpen={isOpen}
          onOpen={handleOpenLetter}
        />

        {/* Luồng lá thư trong trang: hiển thị khi mở, cuộn tự nhiên trên mọi thiết bị */}
        {isOpen && (
          <div className="letter-stream-wrapper animate-reveal">
            <Letter
              content={content}
              showFlower={showFlower}
              onToggleFlower={handleToggleFlower}
              letterRef={letterRef}
            />
          </div>
        )}
      </div>

      <footer className="app-footer" aria-hidden="true">
        <p className="footer-note">20.10 • Một ngày thật nhẹ nhàng và an vui</p>
      </footer>
    </main>
  );
}
