export interface Product {
  id: string;
  name: string;
  slug: string;
  subtitle?: string;
  code: string;
  price?: string;
  surface: string;
  thickness: string;
  size: string;
  finish: string;
  color: string;
  applications?: string[];
  collection?: string;
  catalogueUrl?: string;
  description?: string;
  images: string[];
  url: string;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Corchia",
    slug: "corchia",
    code: "ST65",
    surface: "Đá hoa",
    thickness: "9mm",
    size: "1200x2400",
    finish: "Bóng kính",
    color: "Màu Be",
    catalogueUrl:
      "https://drive.google.com/uc?id=1QonkfbgSmO_I78ziRXBq_HkkspkUDRHP",
    description:
      "Công nghệ xuyên sáng cùng khổ lớn vượt giới hạn giúp các sản phẩm trong BST Luce Tech đạt được vẻ đẹp chân thực của tự nhiên.",
    images: [
      "https://slabstone.vn/wp-content/uploads/2024/02/ST65D122-F1-Polished-1200x2400x9mm.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/ST65.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/65_ST65_.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/ST65D122-F1-Polished-1200x2400x9mm.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/ST65D122-F2-Polished-1200x2400x9mm.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/ST65D122-F1-Polished-1200x2400x9mm.png",
    ],
    url: "https://slabstone.vn/san-pham/corchia/",
  },
  {
    id: "2",
    name: "Venato",
    slug: "venato",
    code: "ST64",
    surface: "Đá hoa",
    thickness: "9mm",
    size: "1200x2400",
    finish: "Bóng kính",
    color: "Bóng kính",
    catalogueUrl:
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    description:
      "Công nghệ xuyên sáng cùng khổ lớn vượt giới hạn giúp các sản phẩm trong BST Luce Tech đạt được vẻ đẹp chân thực của tự nhiên.",
    images: [
      "https://slabstone.vn/wp-content/uploads/2024/02/ST64D122-F1-Polished-1200x2400x9mm.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/ST64.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/64_ST64_Venato.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/ST64D122-F1-Polished-1200x2400x9mm.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/ST64D122F2-Polished-1200x2400x9mm.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/ST64D122-F1-Polished-1200x2400x9mm.png",
    ],
    url: "https://slabstone.vn/san-pham/venato/",
  },
  {
    id: "3",
    name: "Wavy",
    slug: "wavy",
    code: "ST66",
    surface: "Đá hoa",
    thickness: "9mm",
    size: "1200x2400",
    finish: "Bóng kính",
    color: "Màu Be",
    catalogueUrl:
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    description:
      "Công nghệ xuyên sáng cùng khổ lớn vượt giới hạn giúp các sản phẩm trong BST Luce Tech đạt được vẻ đẹp chân thực của tự nhiên.",
    images: [
      "https://slabstone.vn/wp-content/uploads/2024/02/TE66D122-F1-copy-2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/02/ST66.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/ST66_Wavy.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/TE66D122-F1-copy-2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/02/TE66D122-F2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/02/TE66D122-F1-copy-2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    ],
    url: "https://slabstone.vn/san-pham/wavy/",
  },
  {
    id: "4",
    name: "Honey Onyx",
    slug: "honey-onyx",
    code: "ST61",
    surface: "Đá hoa",
    thickness: "9mm",
    size: "1200x2400",
    finish: "Bóng kính",
    color: "Màu Be",
    catalogueUrl:
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    description:
      "Công nghệ xuyên sáng cùng khổ lớn vượt giới hạn giúp các sản phẩm trong BST Luce Tech đạt được vẻ đẹp chân thực của tự nhiên.\nNhững đường vân tròn mềm mại của Honey Onyx đem lại sự thư thái, nhẹ nhàng nhưng vẫn không kém phần tinh tế, sang trọng cho không gian.",
    images: [
      "https://slabstone.vn/wp-content/uploads/2024/02/TE61D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/02/sm61.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/61_ST61_Honey-Onyx-1.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/TE61D122-F2-copy__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/02/TE61D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    ],
    url: "https://slabstone.vn/san-pham/honey-onyx/",
  },
  {
    id: "5",
    name: "Arabescato Antique",
    slug: "arabescato-antique",
    code: "ST62",
    surface: "Đá hoa",
    thickness: "9mm",
    size: "1200x2400",
    finish: "Bóng kính",
    color: "Trắng",
    catalogueUrl:
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    description:
      "Công nghệ xuyên sáng cùng khổ lớn vượt giới hạn giúp các sản phẩm trong BST Luce Tech đạt được vẻ đẹp chân thực của tự nhiên.\nNhững đường vân cá tính, mạnh mẽ của Arabescato Antique mang đến sự ấn tượng nhưng vẫn không kém phần tinh tế, sang trọng cho không gian.",
    images: [
      "https://slabstone.vn/wp-content/uploads/2024/02/ST62D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/02/62_ST62_Arabescato-Antique.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/ST62D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/02/ST62D122-F2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/02/ST62D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    ],
    url: "https://slabstone.vn/san-pham/arabescato-antique/",
  },
  {
    id: "6",
    name: "Alpinus",
    slug: "alpinus",
    code: "SP25",
    price: "1,800,000 / m²",
    surface: "Đá hoa",
    thickness: "9mm",
    size: "1200x2400",
    finish: "Bóng kính",
    color: "Màu Be",
    catalogueUrl:
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    description:
      "Alpinus độc đáo với hoa văn giống như pha lê. Với sự bùng nổ của màu trắng, xám và be vàng, vật liệu này sẽ tạo thêm cảm giác sang trọng nhưng sắc sảo cho không gian của bạn.",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/09/SP25H122-Random-face-copy__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/sp25.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP25H122_ve_sinh__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP25H122-Random-face__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    ],
    url: "https://slabstone.vn/san-pham/alpinus/",
  },
  {
    id: "7",
    name: "Kanjini",
    slug: "kanjini",
    code: "SP07",
    price: "1,800,000 / m²",
    surface: "Đá",
    thickness: "9mm",
    size: "1200x2400",
    finish: "Bóng kính",
    color: "Xám trắng",
    description:
      "Tone màu xám với hoàn thiện bóng giúp tăng diện tích không gian của bạn nhưng vẫn giữ được sự mộc mạc tối giản",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Kanjini-SP07D122-v2_Polished_120x240cm_9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/180223_Kanjini.png",
      "https://slabstone.vn/wp-content/uploads/2023/02/SP07D122_Op-Lat__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Kanjini-SP07D122-v3_Polished_120x240cm_9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    ],
    url: "https://slabstone.vn/san-pham/kanjini/",
  },
  {
    id: "8",
    name: "Panda White",
    slug: "panda-white",
    code: "SP09",
    price: "1,800,000 / m²",
    surface: "Đá hoa",
    thickness: "9mm, 15mm",
    size: "1200x2400",
    finish: "Bóng kính",
    color: "Trắng, Đen",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Panda-White-SP09D12-v2_Polished_120x240cm_916mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/180223_Panda-1.png",
    ],
    url: "https://slabstone.vn/san-pham/panda-white/",
  },
  {
    id: "9",
    name: "Nebula",
    slug: "nebula",
    code: "SP11",
    price: "1,800,000 / m²",
    surface: "Đá hoa",
    thickness: "9mm",
    size: "1200x2400",
    finish: "Bóng kính",
    color: "Xám",
    description:
      "Cảm hứng từ những tinh vân vũ trụ đã được bao trọn trong thiết kế độc đáo của NEBULA. Phải mất nhiều năm để hình thành nên những tinh vân tuyệt đẹp trong thiên hà, nhưng chỉ mất vài giờ đồng hồ để tái hiện lại vẻ đẹp đó với SLABSTONE.\nNEBULA phù hợp cho mọi ứng dụng và thiết kế, nâng tầm đẳng cấp cho không gian sống của bạn!",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Nebula-SP11D122-v1_Polished_120x240cm_9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/180223_nebula.png",
    ],
    url: "https://slabstone.vn/san-pham/nebula/",
  },
  {
    id: "10",
    name: "Ofanto",
    slug: "ofanto",
    code: "SP12",
    price: "1,800,000 / m²",
    surface: "Đá",
    thickness: "9mm, 15mm",
    size: "1200x2400",
    finish: "Bóng kính",
    color: "Xám trắng",
    description:
      "Mạnh mẽ và táo bạo, thiết kế Ofanto phù hợp làm điểm nhấn cho khu vực bếp, mặt bàn và cả ốp lát trang trí",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Ofanto-SP12D122-v2_Polished_120x240cm_916mm-1-scaled.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/180223_ofanto.png",
    ],
    url: "https://slabstone.vn/san-pham/ofanto/",
  },
  {
    id: "11",
    name: "Blue Explosion",
    slug: "blue-explosion",
    code: "SP13 | SM13",
    price: "1,800,000 / m²",
    surface: "Đá hoa",
    thickness: "9mm, 15mm",
    size: "1200x2400",
    finish: "Bóng kính, Matt",
    color: "Xanh Dương",
    description:
      "Lấy cảm hứng từ một loại đá quý cẩm thạch màu xanh có một bề mặt độc ​​đáo, Blue explosion được các kiến ​​trúc sư và nhà thiết kế nội thất đánh giá cao, đặc biệt là trong các môi trường tinh tế.",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Blue-Explosion-SP13D122-v3_Polished_120x240cm_916mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/SP13D122_op-lat__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Blue-Explosion-SP13D122-v3_Polished_120x240cm_916mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    ],
    url: "https://slabstone.vn/san-pham/blue-explosion/",
  },
  {
    id: "12",
    name: "Sand",
    slug: "sand",
    code: "SP51",
    price: "1,100,000 – 1,970,000 / m²",
    surface: "BODYTECH",
    thickness: "9mm, 12mm, 15mm",
    size: "800x1600, 1200x2400",
    finish: "Bóng kính, Bóng mờ, Matt",
    color: "Màu Be",
    description:
      "Sản phẩm Sand là sự kết hợp của các tông màu tự nhiên truyền tải chiều sâu và chi tiết thiết kế thú vị. Phản ánh sự hòa quyện mềm mại của cồn cát với tiếng thì thầm của pha lê. Tông màu ấm áp tự nhiên của sản phẩm này tôn lên mọi khu vực xung quanh cả trong nhà lẫn ngoài trời.",
    catalogueUrl:
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Fullbody-SP51D122-Muoi-tieu_Polished_120x240cm_916mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/03/180323_sand.png",
      "https://slabstone.vn/wp-content/uploads/2023/02/TP51D122-Lat-San__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Fullbody-SP51D122-Muoi-tieu_Polished_120x240cm_916mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    ],
    url: "https://slabstone.vn/san-pham/sand/",
  },
  {
    id: "13",
    name: "Cosima Bei",
    slug: "cosima-bei",
    code: "SM05",
    price: "1,800,000 / m²",
    surface: "Màu Đặc",
    thickness: "9mm",
    size: "1200x2400",
    finish: "Matt",
    color: "Màu Be",
    description:
      "Mẫu Beige nhẹ nhàng này tạo nên một cảm giác ấm cúng cho phong cách thiết kế tối giản",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/02/05_SM05D122.png",
      "https://slabstone.vn/wp-content/uploads/2023/02/180223_Cosima-beige.png",
      "https://slabstone.vn/wp-content/uploads/2023/02/SM05D122-op-lat-scaled.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/SM05D122_ban-dai-scaled.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/05_SM05D122.png",
    ],
    url: "https://slabstone.vn/san-pham/cosima-bei/",
  },
  {
    id: "14",
    name: "Cosima Grey",
    slug: "cosima-grey",
    code: "SM04",
    price: "1,800,000 / m²",
    surface: "Màu Đặc",
    thickness: "9mm",
    size: "1200x2400",
    finish: "Matt",
    color: "Xám",
    description:
      "Với tone màu xám nhạt, không gian của bạn trở nên hiện đại và phong cách hơn. Phù hợp với khu vực bếp hay các dự án lớn",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Cosima-Grey-SM04D122_Matt_120x240cm_9mm-2-scaled.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/180223_Cosima-grey.png",
      "https://slabstone.vn/wp-content/uploads/2023/02/SM04D122-OP-NGOAI-TROI-1-scaled.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/01/SM04D122_op-lat-scaled.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Cosima-Grey-SM04D122_Matt_120x240cm_9mm-2-scaled.jpg",
    ],
    url: "https://slabstone.vn/san-pham/cosima-grey/",
  },
  {
    id: "15",
    name: "Glenveal",
    slug: "glenveal",
    code: "SM06",
    price: "1,800,000 / m²",
    surface: "Đá",
    thickness: "9mm",
    size: "1200x2400",
    finish: "Matt",
    color: "Xám",
    description:
      "Bề mặt Matt tạo nên cảm giác chân thực và có độ sâu với thiết kế đá của Glenveal. Phù hợp với không gian hiện đại và tối giản",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Glenveal-SM06D122-v1_Matt_120x240cm_9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/180223_Glenveal.png",
      "https://slabstone.vn/wp-content/uploads/2023/02/SM06D122_2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/SM06D122-op-lat-ve-sinh__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Glenveal-SM06D122-v1_Matt_120x240cm_9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Glenveal-SM06D122-v2_Matt_120x240cm_9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Glenveal-SM06D122-v3_Matt_120x240cm_9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    ],
    url: "https://slabstone.vn/san-pham/glenveal/",
  },
  {
    id: "16",
    name: "Stream",
    slug: "stream",
    code: "SM52",
    price: "3,050,000 / m²",
    surface: "Đá hoa",
    thickness: "20mm",
    size: "1200x2400",
    finish: "Matt",
    color: "Trắng",
    catalogueUrl:
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    description:
      "Gần với tự nhiên là xu hướng thẩm mỹ đang được ưa chuộng trong những năm gần đây. Ứng dụng công nghệ VEINTECH, Stream tái hiện lại vẻ đẹp tự nhiên một cách chân thật, sống động qua những đường vân xuyên thân tinh tế.\nSự độc đáo, phá cách của Stream chắc chắn sẽ đem đến những trải nghiệm thật sự khác biệt cho không gian sống của bạn!",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/03/SM52L122_VeinTeck__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/03/150323_stream.png",
      "https://slabstone.vn/wp-content/uploads/2023/03/SM52L122-ban-dao__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/03/SM52L122_ban_bep__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/03/SM52L122_VeinTeck-F2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    ],
    url: "https://slabstone.vn/san-pham/stream/",
  },
  {
    id: "17",
    name: "Crater",
    slug: "crater",
    code: "SP31",
    price: "1,800,000 / m²",
    surface: "Đá hoa",
    thickness: "9mm",
    size: "1200x2400",
    finish: "Bóng kính",
    color: "Nâu",
    catalogueUrl:
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    description:
      "Thiết kế ấn tượng bởi các tone màu mạnh mẽ, Crater phù hợp với những bị trí điểm nhấn tạo nên cá tính độc đáo cho không gian của bạn",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/04/SP31D122-v2_Crater_1200x2400x9mm-A__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/04/040423_Crater.png",
      "https://slabstone.vn/wp-content/uploads/2023/04/SP31_background__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/04/TP009D12-op-lat-SP30D122-op-backgroud-vitinh__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/04/SP31D122-v2_Crater_1200x2400x9mm-A__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    ],
    url: "https://slabstone.vn/san-pham/crater/",
  },
  {
    id: "18",
    name: "Fossil Noir",
    slug: "fossil-noir",
    code: "SP32",
    price: "1,800,000 / m²",
    surface: "Đá hoa",
    thickness: "9mm",
    size: "1200x2400",
    finish: "Bóng kính",
    color: "Đen",
    catalogueUrl:
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    description:
      "Như những dòng dung nham từ núi lửa, Fossil Noir mang vẻ đẹp huyền bí nhưng mãnh liệt cho những phong cách thiết kế ấn tượng",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/04/SP32D122-v3_Fossil-noir_Polished_1200x2400x9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/04/040423_Fossil-noir.png",
      "https://slabstone.vn/wp-content/uploads/2023/04/SP32D122-Phong-ngu-__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/04/SP32D122-Phong-Khach__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/04/SP32D122-v2_Fossil-noir_Polished_1200x2400x9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    ],
    url: "https://slabstone.vn/san-pham/fossil-noir/",
  },
  {
    id: "19",
    name: "Dark Emperador",
    slug: "dark-emperador",
    code: "SP15",
    price: "970,000 – 1,890,000 / m²",
    surface: "Đá hoa",
    thickness: "9mm, 12mm, 15mm",
    size: "800x1600, 800x2400, 1200x2400",
    finish: "Bóng kính, Bóng mờ, Matt",
    color: "Màu Be",
    catalogueUrl:
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/07/SP15F816-F3__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/07/sp15.png",
      "https://slabstone.vn/wp-content/uploads/2023/07/SP15_lat_san__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    ],
    url: "https://slabstone.vn/san-pham/dark-emperador/",
  },
  {
    id: "20",
    name: "Calatorao Gris",
    slug: "calatorao-gris",
    code: "SN54",
    price: "1,100,000 – 1,390,000 / m²",
    surface: "Đá hoa",
    thickness: "12mm, 15mm",
    size: "800x1600",
    finish: "Matt",
    color: "Đen",
    catalogueUrl:
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    description:
      "Nằm trong BST Marble, Calatorao Gris toát lên vẻ đẹp thanh lịch và sang trọng. Màu sắc chủ đạo của nó là đen, tạo nên không gian trang trí với vẻ mạnh mẽ và ấn tượng. Bề mặt của gạch Calatorao Gris  có kết cấu mịn và đồng đều, tạo cảm giác sang trọng và tinh tế.",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/07/SN54F86-F3__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/07/SN54.png",
      "https://slabstone.vn/wp-content/uploads/2023/08/sn54.png",
      "https://slabstone.vn/wp-content/uploads/2023/08/sn54.png",
      "https://slabstone.vn/wp-content/uploads/2023/07/SN54F86-F2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    ],
    url: "https://slabstone.vn/san-pham/calatorao-gris/",
  },
  {
    id: "21",
    name: "Calacatta Statuario",
    slug: "calacatta-statuario",
    code: "SH14",
    price: "970,000 / m²",
    surface: "Đá hoa",
    thickness: "15mm",
    size: "800x1600",
    finish: "Bóng mờ",
    color: "Trắng",
    catalogueUrl:
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/07/SH14F816_800x1600x12mm-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/07/SH-SP14F816_bep_an__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/07/SH14F816_800x1600x12mm-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/07/SH14F816_800x1600x12mm-F2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/07/SH14F816_800x1600x12mm-F3__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/07/SH14F816_800x1600x12mm-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    ],
    url: "https://slabstone.vn/san-pham/calacatta-statuario/",
  },
  {
    id: "22",
    name: "Marine",
    slug: "marine",
    code: "SP16",
    price: "970,000 – 1,800,000 / m²",
    surface: "Đá hoa",
    thickness: "9mm, 12mm",
    size: "800x1600, 1200x2400",
    finish: "Bóng kính",
    color: "Xanh Dương",
    catalogueUrl:
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/07/SP16F816-v1_Polished_800x1600x9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/07/SP16.png",
    ],
    url: "https://slabstone.vn/san-pham/marine/",
  },
  {
    id: "23",
    name: "Onice Nero",
    slug: "onice-nero",
    code: "SP45",
    price: "1,800,000 / m²",
    surface: "Đá hoa",
    thickness: "9mm",
    size: "1200x2400",
    finish: "Bóng kính",
    color: "Đen",
    catalogueUrl:
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    description:
      "Lấy cảm hứng từ loại đá quý màu đen truyền thống, là đồ trang sức đã được sử dụng từ thời cổ đại, mẫu đá nung kết Onice nero là sự kết hợp của những bề mặt quyến rũ có thể nắm bắt được sự hoàn hảo về màu sắc phù hợp với những trang trí độc đáo mang dấu ấn cá nhân",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/09/SP45H122-Random-3-face-copy__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/s45.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP45_phong_tam__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP45H122-Random-3-face__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    ],
    url: "https://slabstone.vn/san-pham/onice-nero/",
  },
  {
    id: "24",
    name: "Verde Karzai",
    slug: "verde-karzai",
    code: "SP48",
    price: "1,800,000 / m²",
    surface: "Đá hoa",
    thickness: "9mm",
    size: "1200x2400",
    finish: "Bóng kính",
    color: "Xanh Lá",
    catalogueUrl:
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    description:
      "Verde Kazai lấy cảm hứng từ màu xanh của cây nhiệt đới, mang đến một không gian trong lành và thư thái. Kết hợp với màu vàng rực rỡ tượng trưng cho sự giàu có, tươi sáng và sự tươi mới của mùa thu. Đây là sự kết hợp hoàn hảo tạo điểm nhấn và sự phá cách trong không gian",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/09/SP48H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/s48.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP48H122_phoi_canh__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP48H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    ],
    url: "https://slabstone.vn/san-pham/verde-karzai/",
  },
  {
    id: "25",
    name: "Carrara Bianco",
    slug: "carrara-bianco",
    code: "SP47",
    price: "1,800,000 / m²",
    surface: "Đá hoa",
    thickness: "9mm",
    size: "1200x2400",
    finish: "Bóng kính",
    color: "Trắng",
    catalogueUrl:
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    description:
      "Biến đổi không gian của bạn với sản phẩm đá Carrara Bianco tinh xảo nổi bật với những khối lớn với những đường vân màu xám nhạt đan xen trên nền trắng, tạo ra hiệu ứng tuyệt đẹp như đám mây. Thưởng thức vẻ đẹp và sự sang trọng của sản phẩm đá độc đáo này và nâng cao tính thẩm mỹ cho ngôi nhà hoặc văn phòng của bạn ngay lập tức.",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/09/SP47H122-2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/Op-Ve-Sinh-SP47D122__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP47H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    ],
    url: "https://slabstone.vn/san-pham/carrara-bianco/",
  },
  {
    id: "26",
    name: "Calacatta Macchia Vecchia",
    slug: "calacatta-macchia-vecchia",
    code: "SP43",
    price: "1,800,000 / m²",
    surface: "Đá hoa",
    thickness: "9mm",
    size: "1200x2400",
    finish: "Bóng kính",
    color: "Màu Be",
    catalogueUrl:
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    description:
      "Màu Beige trang nhã kết hợp với các đường vân độc đáo tạo nên sự hài hòa và đột phá cho không gian sử dụng thêm phần sang trọng.",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/09/SP43H122-2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/s43.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP43_background__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP43H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    ],
    url: "https://slabstone.vn/san-pham/calacatta-macchia-vecchia/",
  },
  {
    id: "27",
    name: "Orobico Gris",
    slug: "orobico-gris",
    code: "SP44",
    price: "1,800,000 / m²",
    surface: "Đá hoa",
    thickness: "9mm",
    size: "1200x2400",
    finish: "Bóng kính",
    color: "Xám",
    catalogueUrl:
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/09/SP44H122-AB-2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/s44.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP44_background__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP44H122-AB-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    ],
    url: "https://slabstone.vn/san-pham/orobico-gris/",
  },
  {
    id: "28",
    name: "Calatorao Bianco",
    slug: "calatorao-bianco",
    code: "SM41",
    price: "1,800,000 / m²",
    surface: "Đá hoa",
    thickness: "9mm",
    size: "1200x2400",
    finish: "Bóng kính",
    color: "Trắng",
    catalogueUrl:
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    images: [
      "https://slabstone.vn/wp-content/uploads/2024/02/SM41D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/s41.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/SM41D122_phong_tam__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/02/SM41D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    ],
    url: "https://slabstone.vn/san-pham/calatorao-bianco/",
  },
  {
    id: "29",
    name: "Calatorao Noir",
    slug: "calatorao-noir",
    code: "SP29",
    price: "1,800,000 / m²",
    surface: "Đá hoa",
    thickness: "9mm",
    size: "1200x2400",
    finish: "Bóng kính, Matt",
    color: "Đen",
    catalogueUrl:
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    description:
      "Calatorao Noir tự hào có những đường vân vàng lấp lánh trên màu đá đen tuyền đậm để mang đến một mẫu có khả năng xử lý mọi loại không gian.",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/09/SP29H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/s29.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP29H122_ve_sinh__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP29H122-3__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    ],
    url: "https://slabstone.vn/san-pham/calatorao-noir/",
  },
  {
    id: "30",
    name: "Ash Ebony",
    slug: "ash-ebony",
    code: "SM23",
    price: "1,800,000 / m²",
    surface: "Gỗ",
    thickness: "9mm",
    size: "1200x2400",
    finish: "Matt",
    color: "Xám",
    catalogueUrl:
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    description:
      "Với khổ lớn vượt trội, đá vân gỗ SLABSTONE đem nét đẹp thiên nhiên chân thực nhất vào không gian sống của bạn.\nKhông giới hạn khả năng thiết kế, mẫu đá vân gỗ SLABSTONE cho bạn thoả sức sáng tạo với những ý tưởng cắt ghép, tạo hình khác nhau. Những đường vân gỗ trải dài, không bị gián đoạn sẽ mở rộng không gian, tôn lên nét tinh tế và sang trọng rất riêng cho ngôi nhà.",
    images: [
      "https://slabstone.vn/wp-content/uploads/2023/09/SM23D122-Random-Face__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/s23.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SM23_op_tuong__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    ],
    url: "https://slabstone.vn/san-pham/ash-ebony/",
  },
];

// This is just the first 10 products for brevity
// You can add the rest of the products following the same pattern

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.surface === category);
}

export function getProductsByColor(color: string): Product[] {
  return products.filter((product) => product.color.includes(color));
}

export function getProductsByFinish(finish: string): Product[] {
  return products.filter((product) => product.finish.includes(finish));
}
