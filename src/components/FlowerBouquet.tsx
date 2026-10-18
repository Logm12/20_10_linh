import React from 'react';

interface FlowerBouquetProps {
  caption: string;
}

export const FlowerBouquet: React.FC<FlowerBouquetProps> = ({ caption }) => {
  return (
    <div className="bouquet-wrapper" role="region" aria-label="Bó hoa chúc mừng 20/10">
      <div className="bouquet-card">
        {/* SVG Bó hoa vẽ nét mảnh tinh tế, màu sắc hồng pastel và xanh nhạt hài hòa */}
        <svg
          viewBox="0 0 320 380"
          className="bouquet-svg"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            {/* Gradient cho các cánh hoa */}
            <radialGradient id="roseGradient1" cx="40%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#FFF0F3" />
              <stop offset="50%" stopColor="#F4ACB7" />
              <stop offset="100%" stopColor="#A94F6A" />
            </radialGradient>
            <radialGradient id="roseGradient2" cx="45%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FFE5EC" />
              <stop offset="65%" stopColor="#E5989B" />
              <stop offset="100%" stopColor="#8C3F56" />
            </radialGradient>
            <radialGradient id="roseGradient3" cx="50%" cy="45%" r="55%">
              <stop offset="0%" stopColor="#FFF5F7" />
              <stop offset="60%" stopColor="#F7B2BD" />
              <stop offset="100%" stopColor="#B85D77" />
            </radialGradient>
            <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9BB89F" />
              <stop offset="100%" stopColor="#6C8C70" />
            </linearGradient>
            <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ADC7B1" />
              <stop offset="100%" stopColor="#7B9D7F" />
            </linearGradient>
            <linearGradient id="wrapGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#F9ECEF" />
              <stop offset="100%" stopColor="#EAD2D8" />
            </linearGradient>
            <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A94F6A" />
              <stop offset="100%" stopColor="#8C3F56" />
            </linearGradient>
            <filter id="softShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#513B45" floodOpacity="0.08" />
            </filter>
          </defs>

          {/* Giấy bọc bó hoa (Bouquet wrapping paper) */}
          <g filter="url(#softShadow)">
            {/* Lớp bọc sau */}
            <path
              d="M100 210 L160 350 L220 210 Z"
              fill="url(#wrapGrad)"
              opacity="0.9"
            />
            {/* Vạt bọc trái */}
            <path
              d="M85 195 L160 345 L135 200 Z"
              fill="#E5CBD1"
              stroke="#D2B4BC"
              strokeWidth="0.75"
            />
            {/* Vạt bọc phải */}
            <path
              d="M235 195 L160 345 L185 200 Z"
              fill="#DEC3CA"
              stroke="#D2B4BC"
              strokeWidth="0.75"
            />
          </g>

          {/* Cành lá bạch đàn và lá phụ viền ngoài (Eucalyptus & foliage) */}
          <g stroke="#56725A" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            {/* Lá vươn sang trái */}
            <path d="M160 220 Q110 160 70 145" fill="none" />
            <path d="M70 145 C60 135 75 125 85 135 C95 145 80 155 70 145 Z" fill="url(#leafGrad)" />
            <path d="M95 160 C85 150 100 140 110 150 C118 160 105 168 95 160 Z" fill="url(#leafGrad2)" />
            <path d="M125 180 C115 170 130 160 140 170 C148 180 135 188 125 180 Z" fill="url(#leafGrad)" />

            {/* Lá vươn sang phải */}
            <path d="M160 220 Q210 160 250 145" fill="none" />
            <path d="M250 145 C260 135 245 125 235 135 C225 145 240 155 250 145 Z" fill="url(#leafGrad)" />
            <path d="M225 160 C235 150 220 140 210 150 C202 160 215 168 225 160 Z" fill="url(#leafGrad2)" />
            <path d="M195 180 C205 170 190 160 180 170 C172 180 185 188 195 180 Z" fill="url(#leafGrad)" />

            {/* Cành lá nhỏ vươn cao */}
            <path d="M160 200 Q160 110 160 85" fill="none" />
            <ellipse cx="160" cy="85" rx="7" ry="12" fill="url(#leafGrad2)" />
            <ellipse cx="152" cy="110" rx="6" ry="10" transform="rotate(-25 152 110)" fill="url(#leafGrad)" />
            <ellipse cx="168" cy="110" rx="6" ry="10" transform="rotate(25 168 110)" fill="url(#leafGrad)" />
          </g>

          {/* Các bông hoa nhỏ điểm xuyết (Baby's breath / filler flowers) */}
          <g fill="#FFF9FA" stroke="#D892A5" strokeWidth="0.8">
            <circle cx="105" cy="120" r="4.5" />
            <circle cx="215" cy="120" r="4.5" />
            <circle cx="125" cy="98" r="4" />
            <circle cx="195" cy="98" r="4" />
            <circle cx="160" cy="130" r="3.5" />
          </g>

          {/* Bông hồng trái (Left Rose) */}
          <g transform="translate(115, 160) scale(0.85)">
            <ellipse cx="0" cy="0" rx="30" ry="26" fill="url(#roseGradient2)" stroke="#8C3F56" strokeWidth="0.8" />
            <path d="M-18 -6 C-22 14 0 25 18 16 C25 6 15 -14 -4 -16 C-12 -16 -18 -10 -18 -6 Z" fill="url(#roseGradient3)" stroke="#8C3F56" strokeWidth="0.75" />
            <path d="M-10 -2 C-12 8 2 15 12 10 C16 4 10 -8 -2 -9 C-7 -9 -10 -5 -10 -2 Z" fill="#FFF0F3" stroke="#A94F6A" strokeWidth="0.75" />
            <circle cx="1" cy="2" r="4" fill="#A94F6A" />
          </g>

          {/* Bông hồng phải (Right Rose) */}
          <g transform="translate(205, 160) scale(0.85)">
            <ellipse cx="0" cy="0" rx="30" ry="26" fill="url(#roseGradient2)" stroke="#8C3F56" strokeWidth="0.8" />
            <path d="M-18 -6 C-22 14 0 25 18 16 C25 6 15 -14 -4 -16 C-12 -16 -18 -10 -18 -6 Z" fill="url(#roseGradient3)" stroke="#8C3F56" strokeWidth="0.75" />
            <path d="M-10 -2 C-12 8 2 15 12 10 C16 4 10 -8 -2 -9 C-7 -9 -10 -5 -10 -2 Z" fill="#FFF0F3" stroke="#A94F6A" strokeWidth="0.75" />
            <circle cx="1" cy="2" r="4" fill="#A94F6A" />
          </g>

          {/* Bông hồng chính tâm (Center Main Rose) */}
          <g transform="translate(160, 168)">
            {/* Lớp cánh ngoài */}
            <path
              d="M-36 0 C-36 -28 36 -28 36 0 C36 28 -36 28 -36 0 Z"
              fill="url(#roseGradient1)"
              stroke="#A94F6A"
              strokeWidth="0.85"
            />
            {/* Lớp cánh trung gian */}
            <path
              d="M-28 -4 C-28 -22 28 -22 28 -4 C28 18 -28 18 -28 -4 Z"
              fill="url(#roseGradient2)"
              stroke="#8C3F56"
              strokeWidth="0.8"
            />
            <path
              d="M-18 -2 C-20 12 2 18 16 12 C22 4 14 -12 -2 -14 C-10 -14 -16 -8 -18 -2 Z"
              fill="url(#roseGradient3)"
              stroke="#8C3F56"
              strokeWidth="0.8"
            />
            {/* Tâm xoáy hoa hồng */}
            <path
              d="M-10 0 C-11 7 2 11 9 7 C13 2 8 -7 -1 -8 C-6 -8 -9 -4 -10 0 Z"
              fill="#FFF0F3"
              stroke="#A94F6A"
              strokeWidth="0.8"
            />
            <circle cx="0" cy="1" r="3.5" fill="#A94F6A" />
          </g>

          {/* Nơ ruy băng thắt bó hoa (Bouquet Ribbon) */}
          <g filter="url(#softShadow)">
            {/* Nơ trái */}
            <path
              d="M160 270 C140 250 115 255 125 275 C135 295 155 275 160 270 Z"
              fill="url(#ribbonGrad)"
            />
            {/* Nơ phải */}
            <path
              d="M160 270 C180 250 205 255 195 275 C185 295 165 275 160 270 Z"
              fill="url(#ribbonGrad)"
            />
            {/* Nút thắt nơ */}
            <ellipse cx="160" cy="272" rx="7" ry="5.5" fill="#752F44" />
            {/* Dải ruy băng rủ xuống */}
            <path
              d="M157 277 Q145 310 135 335 Q140 338 148 333 Q155 305 160 277 Z"
              fill="#A94F6A"
            />
            <path
              d="M163 277 Q175 310 185 335 Q180 338 172 333 Q165 305 160 277 Z"
              fill="#8C3F56"
            />
          </g>
        </svg>

        {/* Dòng chữ chúc kèm bó hoa */}
        <p className="bouquet-caption">{caption}</p>
      </div>
    </div>
  );
};
