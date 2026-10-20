/**
 * Toàn bộ nội dung thư và chuỗi giao diện được tách riêng tại đây
 * để dễ dàng xem và chỉnh sửa khi cần thiết.
 */

export interface LetterContent {
  header: {
    dateBadge: string;
    envelopeTitle: string;
    envelopeSubtitle: string;
    openButtonText: string;
    openedStatusText: string;
  };
  letter: {
    salutation: string;
    paragraphs: string[];
    closing: string;
    signature: string;
  };
  flowerGift: {
    buttonText: string;
    flowerTitle: string;
    flowerCaption: string;
  };
}

export const content: LetterContent = {
  header: {
    dateBadge: "20 tháng 10",
    envelopeTitle: "Gửi Ngọc Linh",
    envelopeSubtitle: "Anh có một lời chúc và đôi điều muốn gửi em.",
    openButtonText: "Mở thư nhé",
    openedStatusText: "Thư đã mở",
  },
  letter: {
    salutation: "Gửi Ngọc Linh,",
    paragraphs: [
      "Chúc em một ngày 20/10 thật vui vẻ nhó, nhận được nhiều lời chúc dễ thương và có thời gian làm những điều em thích. Mong em luôn được yêu quý, được lắng nghe và được trân trọng.",
      "Anh cũng có một điều muốn nói với em: anh rất xin lỗi vì đã nói chuyện thiếu tôn trọng em ở trường đợt vừa rùi. Anh đã sai khi cư xử như vậy, và anh hối hận vì điều đó nhìu lắm huhu.",
      "Anh rất trân quý mối quan hệ của anh em mình, và anh hiểu rằng lời xin lỗi cần đi cùng cách cư xử tốt hơn. Anh sẽ chú ý hơn đến lời nói, lắng nghe em và tôn trọng những điều khiến em không thoải mái.",
      "Anh mong em có thể bỏ qua cho anh. Nhưng em không cần phải trả lời ngay hay cảm thấy mình phải tha thứ chỉ vì nhận được lá thư này. Nếu em muốn chia sẻ gì thêm, anh sẵn lòng nghe nha.",
      "Chúc em bé một ngày 20/10 thật nhẹ nhàng và nhiều niềm vui.",
    ],
    closing: "",
    signature: "Anh Long",
  },
  flowerGift: {
    buttonText: "Một bó hoa nhỏ cho em",
    flowerTitle: "Bó hoa nhỏ tặng em",
    flowerCaption: "Chúc em một ngày 20/10 thật vui vẻ.",
  },
};
