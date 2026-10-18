import React, { useRef } from 'react';
import { LetterContent } from '../content';
import { FlowerBouquet } from './FlowerBouquet';

interface LetterProps {
  content: LetterContent;
  showFlower: boolean;
  onToggleFlower: () => void;
  letterRef?: React.RefObject<HTMLDivElement | null>;
}

export const Letter: React.FC<LetterProps> = ({
  content,
  showFlower,
  onToggleFlower,
  letterRef,
}) => {
  const flowerSectionRef = useRef<HTMLDivElement | null>(null);

  const handleFlowerClick = () => {
    onToggleFlower();
    // Khi mở bó hoa, cuộn nhẹ để nhìn thấy rõ ràng
    setTimeout(() => {
      flowerSectionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }, 100);
  };

  return (
    <article
      id="letter-content-section"
      className="letter-paper-sheet"
      ref={letterRef}
      tabIndex={-1}
      aria-label="Nội dung lá thư"
    >
      {/* Họa tiết trang trí đầu lá thư */}
      <div className="letter-header-flourish" aria-hidden="true">
        <svg viewBox="0 0 120 28" className="flourish-svg" fill="none">
          <path
            d="M10 14 C35 14 45 4 60 14 C75 24 85 14 110 14"
            stroke="#D8A5B3"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="60" cy="14" r="3" fill="#A94F6A" />
          <circle cx="48" cy="11" r="1.5" fill="#D8A5B3" />
          <circle cx="72" cy="17" r="1.5" fill="#D8A5B3" />
        </svg>
      </div>

      {/* Lời mở đầu thư */}
      <h2 className="letter-salutation">{content.letter.salutation}</h2>

      {/* Toàn bộ các đoạn thư được hiển thị đầy đủ ngay lập tức */}
      <div className="letter-body">
        {content.letter.paragraphs.map((paragraph, index) => (
          <p key={index} className="letter-paragraph">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Lời kết và chữ ký */}
      <div className="letter-footer">
        {content.letter.closing && (
          <p className="letter-closing">{content.letter.closing}</p>
        )}
        <p className="letter-signature">{content.letter.signature}</p>
      </div>

      {/* Đường phân cách thanh mảnh cuối thư */}
      <div className="letter-divider" aria-hidden="true">
        <span className="divider-line" />
        <span className="divider-symbol">❦</span>
        <span className="divider-line" />
      </div>

      {/* Phần nút tặng hoa và bó hoa minh họa */}
      <div className="flower-interaction-area" ref={flowerSectionRef}>
        <button
          type="button"
          className="flower-toggle-button"
          onClick={handleFlowerClick}
          aria-expanded={showFlower}
          aria-controls="bouquet-gift-display"
        >
          <span className="flower-btn-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V12m0 0a4.5 4.5 0 1 0 4.5 4.5M12 12a4.5 4.5 0 1 1-4.5 4.5" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
              <path d="M12 16.5V22" />
            </svg>
          </span>
          <span>{content.flowerGift.buttonText}</span>
        </button>

        {/* Bó hoa minh họa hiển thị khi bấm nút */}
        {showFlower && (
          <div id="bouquet-gift-display" className="bouquet-display-container">
            <FlowerBouquet caption={content.flowerGift.flowerCaption} />
          </div>
        )}
      </div>
    </article>
  );
};
