import React from 'react';

interface EnvelopeProps {
  dateBadge: string;
  title: string;
  subtitle: string;
  buttonText: string;
  isOpen: boolean;
  onOpen: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({
  dateBadge,
  title,
  subtitle,
  buttonText,
  isOpen,
  onOpen,
}) => {
  return (
    <section className="envelope-hero-section" aria-label="Phong bì thư">
      <div className={`envelope-container ${isOpen ? 'is-open' : ''}`}>
        {/* Tiêu đề và dẫn dắt ở màn hình đầu */}
        <header className="hero-header">
          <span className="date-badge">{dateBadge}</span>
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
        </header>

        {/* Phong thư hồng phấn #F6D5DF */}
        <div className="envelope-card" aria-hidden="true">
          {/* Nắp phong bì (Envelope Flap) */}
          <div className="envelope-flap" />

          {/* Thân phong bì (Envelope Body) */}
          <div className="envelope-pocket">
            {/* Lớp lót và họa tiết viền phong thư */}
            <div className="envelope-inner-fold left-fold" />
            <div className="envelope-inner-fold right-fold" />
            <div className="envelope-inner-fold bottom-fold" />

            {/* Giấy thư hé lộ từ trong phong bì */}
            <div className="envelope-letter-preview">
              <div className="preview-lines">
                <span className="preview-line line-1" />
                <span className="preview-line line-2" />
                <span className="preview-line line-3" />
              </div>
            </div>

            {/* Dấu niêm phong hoa sáp (Wax Seal) */}
            <div className="envelope-seal" aria-hidden="true">
              <svg viewBox="0 0 44 44" className="seal-svg">
                <circle cx="22" cy="22" r="20" fill="#A94F6A" />
                <circle cx="22" cy="22" r="17" fill="none" stroke="#DCA2B3" strokeWidth="1" strokeDasharray="2 2" />
                {/* Họa tiết hoa nhỏ trên con dấu */}
                <path
                  d="M22 13 C20 16 16 18 16 22 C16 25 18 28 22 30 C26 28 28 25 28 22 C28 18 24 16 22 13 Z"
                  fill="#FFF5F7"
                  opacity="0.95"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Nút mở thư */}
        {!isOpen && (
          <div className="envelope-action-wrap">
            <button
              type="button"
              className="open-letter-button"
              onClick={onOpen}
              aria-expanded={isOpen}
              aria-controls="letter-content-section"
            >
              <span className="button-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                </svg>
              </span>
              <span>{buttonText}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
