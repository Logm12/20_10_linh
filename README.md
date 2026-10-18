# Một lá thư gửi Ngọc Linh (20/10)

Trang web lời chúc 20 tháng 10 và tâm sự chân thành gửi Ngọc Linh, thiết kế theo phong cách thiệp giấy trang nhã, ưu tiên trải nghiệm điện thoại.

## Công nghệ sử dụng

- **Framework**: React 19 + TypeScript + Vite
- **Giao diện**: CSS thuần, vector SVG thủ công (phong bì, dấu sáp, bó hoa)
- **Kiểu chữ**: Cormorant Garamond (tiêu đề serif) & Be Vietnam Pro (nội dung sans-serif)

## Cấu trúc thư mục

```text
├── src/
│   ├── components/
│   │   ├── Envelope.tsx       # Phong bì tương tác & nút mở
│   │   ├── FlowerBouquet.tsx  # Bó hoa SVG thủ công
│   │   └── Letter.tsx         # Giấy thư, nội dung thư & nút tặng hoa
│   ├── content.ts             # Toàn bộ nội dung lá thư & chuỗi giao diện
│   ├── App.tsx                # Luồng mở thư & quản lý trạng thái
│   ├── index.css              # Bảng màu, typography, responsive & animation
│   └── main.tsx               # Điểm khởi chạy React
├── index.html                 # Cấu hình SEO noindex, tiêu đề, favicon SVG
├── package.json
└── vite.config.ts
```

## Chạy trên máy cục bộ (Local)

1. Cài đặt các gói phụ thuộc:
   ```bash
   npm install
   ```

2. Khởi chạy máy chủ phát triển:
   ```bash
   npm run dev
   ```

3. Mở trình duyệt tại đường dẫn hiển thị trên terminal (mặc định `http://localhost:5173`).

## Vị trí chỉnh sửa lời thư và giao diện

Tất cả câu từ và nội dung hiển thị đều được gom lại tại tập tin:
`src/content.ts`

- **Lời mở đầu & các đoạn thư**: đối tượng `content.letter`
- **Tiêu đề phong bì & nút bấm**: đối tượng `content.header`
- **Lời chúc kèm bó hoa**: đối tượng `content.flowerGift`

Sau khi chỉnh sửa, trang web chạy `npm run dev` sẽ tự động cập nhật ngay lập tức.

## Kiểm tra kiểu và đóng gói (Build)

1. Kiểm tra lỗi kiểu TypeScript:
   ```bash
   npm run typecheck
   ```

2. Đóng gói sản phẩm:
   ```bash
   npm run build
   ```

Thư mục kết quả đóng gói là `dist/`.

## Triển khai (Deployment)

### Triển khai tự động qua Vercel + GitHub

1. Đẩy mã nguồn lên kho lưu trữ GitHub (`https://github.com/Logm12/20_10_linh`).
2. Dự án được liên kết với Vercel. Mỗi lần có commit mới đẩy lên nhánh chính, Vercel sẽ tự động build và cập nhật bản chạy mới nhất.
