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
    "name": "Corchia",
    "slug": "corchia",
    "subtitle": "",
    "code": "ST65",
    "price": "",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Màu Be",
    "applications": "",
    "collection": "",
    "catalogueUrl": "https://drive.google.com/uc?id=1QonkfbgSmO_I78ziRXBq_HkkspkUDRHP",
    "description": "Công nghệ xuyên sáng cùng khổ lớn vượt giới hạn giúp các sản phẩm trong BST Luce Tech đạt được vẻ đẹp chân thực của tự nhiên.",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2024/02/ST65D122-F1-Polished-1200x2400x9mm.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/ST65.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/65_ST65_.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/ST65D122-F1-Polished-1200x2400x9mm.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/ST65D122-F2-Polished-1200x2400x9mm.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/ST65D122-F1-Polished-1200x2400x9mm.png"
    ],
    "id": "1"
  },
  {
    "name": "Venato",
    "slug": "venato",
    "subtitle": "",
    "code": "ST64",
    "price": "",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Bóng kính",
    "applications": "",
    "collection": "",
    "catalogueUrl": "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    "description": "Công nghệ xuyên sáng cùng khổ lớn vượt giới hạn giúp các sản phẩm trong BST Luce Tech đạt được vẻ đẹp chân thực của tự nhiên.",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2024/02/ST64D122-F1-Polished-1200x2400x9mm.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/ST64.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/64_ST64_Venato.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/ST64D122-F1-Polished-1200x2400x9mm.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/ST64D122F2-Polished-1200x2400x9mm.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/ST64D122-F1-Polished-1200x2400x9mm.png"
    ],
    "id": "2"
  },
  {
    "name": "Wavy",
    "slug": "wavy",
    "subtitle": "",
    "code": "ST66",
    "price": "",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Màu Be",
    "applications": "",
    "collection": "",
    "catalogueUrl": "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    "description": "Công nghệ xuyên sáng cùng khổ lớn vượt giới hạn giúp các sản phẩm trong BST Luce Tech đạt được vẻ đẹp chân thực của tự nhiên.",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2024/02/TE66D122-F1-copy-2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/02/ST66.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/ST66_Wavy.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/TE66D122-F1-copy-2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/02/TE66D122-F2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/02/TE66D122-F1-copy-2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "3"
  },
  {
    "name": "Honey Onyx",
    "slug": "honey-onyx",
    "subtitle": "",
    "code": "ST61",
    "price": "",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Màu Be",
    "applications": "",
    "collection": "",
    "catalogueUrl": "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    "description": "\"Công nghệ xuyên sáng cùng khổ lớn vượt giới hạn giúp các sản phẩm trong BST Luce Tech đạt được vẻ đẹp chân thực của tự nhiên.",
    "images": [],
    "id": "4"
  },
  {
    "name": "Những đường vân tròn mềm mại của Honey Onyx đem lại sự thư thái",
    "slug": "nhẹ nhàng nhưng vẫn không kém phần tinh tế",
    "subtitle": "sang trọng cho không gian.\"",
    "code": "https://slabstone.vn/wp-content/uploads/2024/02/TE61D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "price": "https://slabstone.vn/wp-content/uploads/2024/02/sm61.png",
    "surface": "https://slabstone.vn/wp-content/uploads/2024/02/61_ST61_Honey-Onyx-1.png",
    "thickness": "https://slabstone.vn/wp-content/uploads/2024/02/TE61D122-F2-copy__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "size": "https://slabstone.vn/wp-content/uploads/2024/02/TE61D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "finish": "",
    "color": "",
    "applications": [
      "https://slabstone.vn/san-pham/honey-onyx/"
    ],
    "collection": "",
    "catalogueUrl": "",
    "description": "",
    "images": [],
    "id": "5"
  },
  {
    "name": "Arabescato Antique",
    "slug": "arabescato-antique",
    "subtitle": "",
    "code": "ST62",
    "price": "",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Trắng",
    "applications": "",
    "collection": "",
    "catalogueUrl": "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    "description": "\"Công nghệ xuyên sáng cùng khổ lớn vượt giới hạn giúp các sản phẩm trong BST Luce Tech đạt được vẻ đẹp chân thực của tự nhiên.",
    "images": [],
    "id": "6"
  },
  {
    "name": "Những đường vân cá tính",
    "slug": "mạnh mẽ của Arabescato Antique mang đến sự ấn tượng nhưng vẫn không kém phần tinh tế",
    "subtitle": "sang trọng cho không gian.\"",
    "code": "https://slabstone.vn/wp-content/uploads/2024/02/ST62D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "price": "https://slabstone.vn/wp-content/uploads/2024/02/62_ST62_Arabescato-Antique.png",
    "surface": "https://slabstone.vn/wp-content/uploads/2024/02/ST62D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "thickness": "https://slabstone.vn/wp-content/uploads/2024/02/ST62D122-F2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "size": "https://slabstone.vn/wp-content/uploads/2024/02/ST62D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "finish": "",
    "color": "",
    "applications": [
      "https://slabstone.vn/san-pham/arabescato-antique/"
    ],
    "collection": "",
    "catalogueUrl": "",
    "description": "",
    "images": [],
    "id": "7"
  },
  {
    "name": "Alpinus",
    "slug": "alpinus",
    "subtitle": "",
    "code": "SP25",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Màu Be",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Alpinus độc đáo với hoa văn giống như pha lê. Với sự bùng nổ của màu trắng",
      "xám và be vàng",
      "vật liệu này sẽ tạo thêm cảm giác sang trọng nhưng sắc sảo cho không gian của bạn.\"",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP25H122-Random-face-copy__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/sp25.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP25H122_ve_sinh__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "8"
  },
  {
    "name": "Kanjini",
    "slug": "kanjini",
    "subtitle": "",
    "code": "SP07",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Xám trắng",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "Tone màu xám với hoàn thiện bóng giúp tăng diện tích không gian của bạn nhưng vẫn giữ được sự mộc mạc tối giản",
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Kanjini-SP07D122-v2_Polished_120x240cm_9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/180223_Kanjini.png",
      "https://slabstone.vn/wp-content/uploads/2023/02/SP07D122_Op-Lat__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Kanjini-SP07D122-v3_Polished_120x240cm_9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "9"
  },
  {
    "name": "Panda White",
    "slug": "panda-white",
    "subtitle": "",
    "code": "SP09",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "\"9mm",
    "color": "15mm\"",
    "applications": [
      "1200x2400"
    ],
    "collection": "Bóng kính",
    "catalogueUrl": "\"Trắng",
    "description": "Đen\"",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Panda-White-SP09D12-v2_Polished_120x240cm_916mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/180223_Panda-1.png"
    ],
    "id": "10"
  },
  {
    "name": "Nebula",
    "slug": "nebula",
    "subtitle": "",
    "code": "SP11",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Xám",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "\"Cảm hứng từ những tinh vân vũ trụ đã được bao trọn trong thiết kế độc đáo của NEBULA. Phải mất nhiều năm để hình thành nên những tinh vân tuyệt đẹp trong thiên hà",
      "nhưng chỉ mất vài giờ đồng hồ để tái hiện lại vẻ đẹp đó với SLABSTONE."
    ],
    "id": "11"
  },
  {
    "name": "NEBULA phù hợp cho mọi ứng dụng và thiết kế",
    "slug": "nâng tầm đẳng cấp cho không gian sống của bạn!\"",
    "subtitle": "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Nebula-SP11D122-v1_Polished_120x240cm_9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "code": "https://slabstone.vn/wp-content/uploads/2023/02/180223_nebula.png",
    "price": "",
    "surface": "",
    "thickness": "",
    "size": "",
    "finish": "",
    "color": "https://slabstone.vn/san-pham/nebula/",
    "applications": "",
    "collection": "",
    "catalogueUrl": "",
    "description": "",
    "images": [],
    "id": "12"
  },
  {
    "name": "Ofanto",
    "slug": "ofanto",
    "subtitle": "",
    "code": "SP12",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá",
    "finish": "\"9mm",
    "color": "15mm\"",
    "applications": [
      "1200x2400"
    ],
    "collection": "Bóng kính",
    "catalogueUrl": "Xám trắng",
    "description": "",
    "images": [
      "\"Mạnh mẽ và táo bạo",
      "thiết kế Ofanto phù hợp làm điểm nhấn cho khu vực bếp",
      "mặt bàn và cả ốp lát trang trí\"",
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Ofanto-SP12D122-v2_Polished_120x240cm_916mm-1-scaled.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/180223_ofanto.png"
    ],
    "id": "13"
  },
  {
    "name": "Blue Explosion",
    "slug": "blue-explosion",
    "subtitle": "",
    "code": "SP13 | SM13",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "\"9mm",
    "color": "15mm\"",
    "applications": [
      "1200x2400"
    ],
    "collection": "\"Bóng kính",
    "catalogueUrl": "Matt\"",
    "description": "Xanh Dương",
    "images": [
      "\"Lấy cảm hứng từ một loại đá quý cẩm thạch màu xanh có một bề mặt độc ​​đáo",
      "Blue explosion được các kiến ​​trúc sư và nhà thiết kế nội thất đánh giá cao",
      "đặc biệt là trong các môi trường tinh tế.\"",
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Blue-Explosion-SP13D122-v3_Polished_120x240cm_916mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "14"
  },
  {
    "name": "Sand",
    "slug": "sand",
    "subtitle": "",
    "code": "SP51",
    "price": "\"1",
    "surface": "100",
    "thickness": "000 – 1",
    "size": "970",
    "finish": "000 / m²\"",
    "color": "BODYTECH",
    "applications": [
      "\"9mm"
    ],
    "collection": "12mm",
    "catalogueUrl": "15mm\"",
    "description": "\"800x1600",
    "images": [
      "1200x2400\"",
      "\"Bóng kính",
      "Bóng mờ",
      "Matt\"",
      "Màu Be"
    ],
    "id": "15"
  },
  {
    "name": "Cosima Bei",
    "slug": "cosima-bei",
    "subtitle": "",
    "code": "SM05",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Màu Đặc",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Matt"
    ],
    "collection": "Màu Be",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "Mẫu Beige nhẹ nhàng này tạo nên một cảm giác ấm cúng cho phong cách thiết kế tối giản",
      "https://slabstone.vn/wp-content/uploads/2023/02/05_SM05D122.png",
      "https://slabstone.vn/wp-content/uploads/2023/02/180223_Cosima-beige.png",
      "https://slabstone.vn/wp-content/uploads/2023/02/SM05D122-op-lat-scaled.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/SM05D122_ban-dai-scaled.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/05_SM05D122.png"
    ],
    "id": "16"
  },
  {
    "name": "Cosima Grey",
    "slug": "cosima-grey",
    "subtitle": "",
    "code": "SM04",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Màu Đặc",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Matt"
    ],
    "collection": "Xám",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "\"Với tone màu xám nhạt",
      "không gian của bạn trở nên hiện đại và phong cách hơn. Phù hợp với khu vực bếp hay các dự án lớn\"",
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Cosima-Grey-SM04D122_Matt_120x240cm_9mm-2-scaled.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/180223_Cosima-grey.png",
      "https://slabstone.vn/wp-content/uploads/2023/02/SM04D122-OP-NGOAI-TROI-1-scaled.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/01/SM04D122_op-lat-scaled.jpg"
    ],
    "id": "17"
  },
  {
    "name": "Glenveal",
    "slug": "glenveal",
    "subtitle": "",
    "code": "SM06",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Matt"
    ],
    "collection": "Xám",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "Bề mặt Matt tạo nên cảm giác chân thực và có độ sâu với thiết kế đá của Glenveal. Phù hợp với không gian hiện đại và tối giản",
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Glenveal-SM06D122-v1_Matt_120x240cm_9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/180223_Glenveal.png",
      "https://slabstone.vn/wp-content/uploads/2023/02/SM06D122_2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/SM06D122-op-lat-ve-sinh__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Glenveal-SM06D122-v1_Matt_120x240cm_9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "18"
  },
  {
    "name": "Stream",
    "slug": "stream",
    "subtitle": "",
    "code": "SM52",
    "price": "\"3",
    "surface": "050",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "20mm",
    "color": "1200x2400",
    "applications": [
      "Matt"
    ],
    "collection": "Trắng",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "\"Gần với tự nhiên là xu hướng thẩm mỹ đang được ưa chuộng trong những năm gần đây. Ứng dụng công nghệ VEINTECH",
      "Stream tái hiện lại vẻ đẹp tự nhiên một cách chân thật",
      "sống động qua những đường vân xuyên thân tinh tế."
    ],
    "id": "19"
  },
  {
    "name": "Sự độc đáo",
    "slug": "phá cách của Stream chắc chắn sẽ đem đến những trải nghiệm thật sự khác biệt cho không gian sống của bạn!\"",
    "subtitle": "https://slabstone.vn/wp-content/uploads/2023/03/SM52L122_VeinTeck__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "code": "https://slabstone.vn/wp-content/uploads/2023/03/150323_stream.png",
    "price": "https://slabstone.vn/wp-content/uploads/2023/03/SM52L122-ban-dao__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "surface": "https://slabstone.vn/wp-content/uploads/2023/03/SM52L122_ban_bep__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "thickness": "https://slabstone.vn/wp-content/uploads/2023/03/SM52L122_VeinTeck-F2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "size": "",
    "finish": "",
    "color": "https://slabstone.vn/san-pham/stream/",
    "applications": "",
    "collection": "",
    "catalogueUrl": "",
    "description": "",
    "images": [],
    "id": "20"
  },
  {
    "name": "Crater",
    "slug": "crater",
    "subtitle": "",
    "code": "SP31",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Nâu",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "\"Thiết kế ấn tượng bởi các tone màu mạnh mẽ",
      "Crater phù hợp với những bị trí điểm nhấn tạo nên cá tính độc đáo cho không gian của bạn\"",
      "https://slabstone.vn/wp-content/uploads/2023/04/SP31D122-v2_Crater_1200x2400x9mm-A__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/04/040423_Crater.png",
      "https://slabstone.vn/wp-content/uploads/2023/04/SP31_background__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/04/TP009D12-op-lat-SP30D122-op-backgroud-vitinh__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "21"
  },
  {
    "name": "Fossil Noir",
    "slug": "fossil-noir",
    "subtitle": "",
    "code": "SP32",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Đen",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "\"Như những dòng dung nham từ núi lửa",
      "Fossil Noir mang vẻ đẹp huyền bí nhưng mãnh liệt cho những phong cách thiết kế ấn tượng\"",
      "https://slabstone.vn/wp-content/uploads/2023/04/SP32D122-v3_Fossil-noir_Polished_1200x2400x9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/04/040423_Fossil-noir.png",
      "https://slabstone.vn/wp-content/uploads/2023/04/SP32D122-Phong-ngu-__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/04/SP32D122-Phong-Khach__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "22"
  },
  {
    "name": "Dark Emperador",
    "slug": "dark-emperador",
    "subtitle": "",
    "code": "SP15",
    "price": "\"970",
    "surface": "000 – 1",
    "thickness": "890",
    "size": "000 / m²\"",
    "finish": "Đá hoa",
    "color": "\"9mm",
    "applications": [
      "12mm"
    ],
    "collection": "15mm\"",
    "catalogueUrl": "\"800x1600",
    "description": "800x2400",
    "images": [
      "1200x2400\"",
      "\"Bóng kính",
      "Bóng mờ",
      "Matt\"",
      "Màu Be"
    ],
    "id": "23"
  },
  {
    "name": "Calatorao Gris",
    "slug": "calatorao-gris",
    "subtitle": "",
    "code": "SN54",
    "price": "\"1",
    "surface": "100",
    "thickness": "000 – 1",
    "size": "390",
    "finish": "000 / m²\"",
    "color": "Đá hoa",
    "applications": [
      "\"12mm"
    ],
    "collection": "15mm\"",
    "catalogueUrl": "800x1600",
    "description": "Matt",
    "images": [
      "Đen",
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Nằm trong BST Marble",
      "Calatorao Gris toát lên vẻ đẹp thanh lịch và sang trọng. Màu sắc chủ đạo của nó là đen",
      "tạo nên không gian trang trí với vẻ mạnh mẽ và ấn tượng. Bề mặt của gạch Calatorao Gris  có kết cấu mịn và đồng đều"
    ],
    "id": "24"
  },
  {
    "name": "Calacatta Statuario",
    "slug": "calacatta-statuario",
    "subtitle": "",
    "code": "SH14",
    "price": "\"970",
    "surface": "000 / m²\"",
    "thickness": "Đá hoa",
    "size": "15mm",
    "finish": "800x1600",
    "color": "Bóng mờ",
    "applications": [
      "Trắng"
    ],
    "collection": "",
    "catalogueUrl": "",
    "description": "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/07/SH14F816_800x1600x12mm-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/07/SH-SP14F816_bep_an__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/07/SH14F816_800x1600x12mm-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/07/SH14F816_800x1600x12mm-F2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/07/SH14F816_800x1600x12mm-F3__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/07/SH14F816_800x1600x12mm-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "25"
  },
  {
    "name": "Marine",
    "slug": "marine",
    "subtitle": "",
    "code": "SP16",
    "price": "\"970",
    "surface": "000 – 1",
    "thickness": "800",
    "size": "000 / m²\"",
    "finish": "Đá hoa",
    "color": "\"9mm",
    "applications": [
      "12mm\""
    ],
    "collection": "\"800x1600",
    "catalogueUrl": "1200x2400\"",
    "description": "Bóng kính",
    "images": [
      "Xanh Dương",
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "https://slabstone.vn/wp-content/uploads/2023/07/SP16F816-v1_Polished_800x1600x9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/07/SP16.png"
    ],
    "id": "26"
  },
  {
    "name": "Onice Nero",
    "slug": "onice-nero",
    "subtitle": "",
    "code": "SP45",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Đen",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Lấy cảm hứng từ loại đá quý màu đen truyền thống",
      "là đồ trang sức đã được sử dụng từ thời cổ đại",
      "mẫu đá nung kết Onice nero là sự kết hợp của những bề mặt quyến rũ có thể nắm bắt được sự hoàn hảo về màu sắc phù hợp với những trang trí độc đáo mang dấu ấn cá nhân\"",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP45H122-Random-3-face-copy__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/s45.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP45_phong_tam__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "27"
  },
  {
    "name": "Verde Karzai",
    "slug": "verde-karzai",
    "subtitle": "",
    "code": "SP48",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Xanh Lá",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Verde Kazai lấy cảm hứng từ màu xanh của cây nhiệt đới",
      "mang đến một không gian trong lành và thư thái. Kết hợp với màu vàng rực rỡ tượng trưng cho sự giàu có",
      "tươi sáng và sự tươi mới của mùa thu. Đây là sự kết hợp hoàn hảo tạo điểm nhấn và sự phá cách trong không gian\"",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP48H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/s48.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP48H122_phoi_canh__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "28"
  },
  {
    "name": "Carrara Bianco",
    "slug": "carrara-bianco",
    "subtitle": "",
    "code": "SP47",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Trắng",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Biến đổi không gian của bạn với sản phẩm đá Carrara Bianco tinh xảo nổi bật với những khối lớn với những đường vân màu xám nhạt đan xen trên nền trắng",
      "tạo ra hiệu ứng tuyệt đẹp như đám mây. Thưởng thức vẻ đẹp và sự sang trọng của sản phẩm đá độc đáo này và nâng cao tính thẩm mỹ cho ngôi nhà hoặc văn phòng của bạn ngay lập tức.\"",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP47H122-2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/Op-Ve-Sinh-SP47D122__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP47H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "29"
  },
  {
    "name": "Calacatta Macchia Vecchia",
    "slug": "calacatta-macchia-vecchia",
    "subtitle": "",
    "code": "SP43",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Màu Be",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "Màu Beige trang nhã kết hợp với các đường vân độc đáo tạo nên sự hài hòa và đột phá cho không gian sử dụng thêm phần sang trọng.",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP43H122-2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/s43.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP43_background__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP43H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "30"
  },
  {
    "name": "Orobico Gris",
    "slug": "orobico-gris",
    "subtitle": "",
    "code": "SP44",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Xám",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP44H122-AB-2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/s44.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP44_background__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP44H122-AB-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "31"
  },
  {
    "name": "Calatorao Bianco",
    "slug": "calatorao-bianco",
    "subtitle": "",
    "code": "SM41",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Trắng",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "https://slabstone.vn/wp-content/uploads/2024/02/SM41D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/s41.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/SM41D122_phong_tam__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/02/SM41D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "32"
  },
  {
    "name": "Calatorao Noir",
    "slug": "calatorao-noir",
    "subtitle": "",
    "code": "SP29",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "\"Bóng kính"
    ],
    "collection": "Matt\"",
    "catalogueUrl": "Đen",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "Calatorao Noir tự hào có những đường vân vàng lấp lánh trên màu đá đen tuyền đậm để mang đến một mẫu có khả năng xử lý mọi loại không gian.",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP29H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/s29.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP29H122_ve_sinh__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP29H122-3__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "33"
  },
  {
    "name": "Ash Maple",
    "slug": "ash-maple",
    "subtitle": "",
    "code": "SM19",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Gỗ",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Matt"
    ],
    "collection": "Nâu",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Với khổ lớn vượt trội",
      "đá vân gỗ SLABSTONE đem nét đẹp thiên nhiên chân thực nhất vào không gian sống của bạn."
    ],
    "id": "34"
  },
  {
    "name": "Không giới hạn khả năng thiết kế",
    "slug": "mẫu đá vân gỗ SLABSTONE cho bạn thoả sức sáng tạo với những ý tưởng cắt ghép",
    "subtitle": "tạo hình khác nhau. Những đường vân gỗ trải dài",
    "code": "không bị gián đoạn sẽ mở rộng không gian",
    "price": "tôn lên nét tinh tế và sang trọng rất riêng cho ngôi nhà.\"",
    "surface": "https://slabstone.vn/wp-content/uploads/2023/09/SM19D122-Random-face__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "thickness": "https://slabstone.vn/wp-content/uploads/2023/09/s19.png",
    "size": "https://slabstone.vn/wp-content/uploads/2023/09/SM19D12_phong_ngu__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "finish": "",
    "color": "",
    "applications": "",
    "collection": "",
    "catalogueUrl": "https://slabstone.vn/san-pham/ash-maple/",
    "description": "",
    "images": [],
    "id": "35"
  },
  {
    "name": "Venus Blue",
    "slug": "venus-blue",
    "subtitle": "",
    "code": "SP34",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Xanh Dương",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Khám phá sản phẩm Venus Blue độc đáo",
      "nơi nghệ thuật và thiên nhiên hòa quyện thành một. Những tấm đá mang đậm sắc màu của biển cả với sóng biển cuồn cuộn",
      "tạo nên không gian yên bình và hòa quyện trong không gian của bạn.\"",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP34H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/sp34.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP34H122-Bon-Tam__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "36"
  },
  {
    "name": "Blue Apatite",
    "slug": "blue-apatite",
    "subtitle": "",
    "code": "SP46",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Xanh Dương",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Tựa như dòng sông Amazon xanh biếc với những nhánh dày toả khắp",
      "Blue Apatite đem đến cảm nhận về một miền đất hoang sơ đầy bí ẩn",
      "tràn đầy sức sống. Thiết kế tone màu xanh dễ chịu",
      "dù đặt ở không gian nào cũng tạo nên cảm giác thư thái",
      "nhẹ nhàng.\"",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP46H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "37"
  },
  {
    "name": "Orbico Noir",
    "slug": "orbico-noir",
    "subtitle": "",
    "code": "SP30",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Đen",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Orobico Noir là một loại đá với thiết kế độc đáo . Nền màu xám đậm của nó được trang trí bằng các sợi màu be và caramel",
      "tạo ra sự kết hợp màu sắc rất phong cách và độc đáo. Cảm giác chuyển động mạnh mẽ của Orobico Noir theo cả bốn hướng mang đến sự sang trọng cho mọi loại không gian sống.\"",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP30D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/sp30.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP30_bep_an__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP30D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "38"
  },
  {
    "name": "Dark Onyx",
    "slug": "dark-onyx",
    "subtitle": "",
    "code": "SP28",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Đen",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP28H122-2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/sp28.png"
    ],
    "id": "39"
  },
  {
    "name": "Calacatta Gold",
    "slug": "calacatta-gold",
    "subtitle": "",
    "code": "SP26",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 – 2",
    "size": "100",
    "finish": "000 / m²\"",
    "color": "Đá hoa",
    "applications": [
      "9mm"
    ],
    "collection": "\"1200x2700",
    "catalogueUrl": "1200x2400\"",
    "description": "Bóng kính",
    "images": [
      "Trắng",
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Calacatta Gold với nền trắng có tính thẩm mỹ vượt thời gian. Các kỹ sư Slabstone thể hiện một lớp nền trắng nhạt tuyệt vời với những đường viền màu vàng và xám có độ dày khác nhau. Như thể đó là những nét vẽ",
      "những đường vân màu vàng và làn khói mềm mại chạy dọc theo toàn bộ bề mặt",
      "tạo thêm nét cá tính và khác biệt ở những phần bằng nhau.\""
    ],
    "id": "40"
  },
  {
    "name": "Blue Indigo",
    "slug": "blue-indigo",
    "subtitle": "",
    "code": "SP24",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Xanh Dương",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Sự kết hợp hoàn hảo giữa vẻ đẹp tự nhiên của thiên nhiên và sự tinh tế trong từng chi tiết. Được lấy cảm hứng từ những dòng suối lớn với màu nước xanh uốn lượn",
      "“Blue Indigo” mang đến cho bạn một trả nghiệm vượt thời gian và không gian.\"",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP24H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/sp24.png"
    ],
    "id": "41"
  },
  {
    "name": "Calacatta Bianco",
    "slug": "calacatta-bianco",
    "subtitle": "",
    "code": "SP38",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Trắng",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Sản phẩm đá Slabstone Calacatta Bianco là sự là một sự sáng tạo độc đáo từ dòng đá cẩm thạch nổi tiếng cùng tên của Ý",
      "các kỹ sư đã tinh tế chỉ giữ lại những đường vân mỏng nhẹ thay vì những cây vân lớn",
      "để chúng xuất hiện trên nền màu cẩm thạch trắng sáng hơn so với dòng đá tự nhiên vốn có.\"",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP38H122-1__Q-100__LimitedFileSize-300kb__resized-800-px-1.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/sp38.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP38_bep_an__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "42"
  },
  {
    "name": "Venus Crema",
    "slug": "venus-crema",
    "subtitle": "",
    "code": "SP37",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Màu Be",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Venus Cerema là sự kết hợp hoàn hảo giữa thiết kế tinh tế và chất lượng xuất sắc. Như một bức tranh sống động thể hiện vẻ đẹp của các dãy núi cao vút",
      "màu sắc của biển trời bao la tựa như bản giao hưởng của tự nhiên.\"",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP37H122-Random-3-face__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/sp37.png"
    ],
    "id": "43"
  },
  {
    "name": "Monarch",
    "slug": "monarch",
    "subtitle": "",
    "code": "SP35",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Đen",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP35H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/sp35.png"
    ],
    "id": "44"
  },
  {
    "name": "Laurent",
    "slug": "laurent",
    "subtitle": "",
    "code": "SP82 - SM82",
    "price": "\"4",
    "surface": "500",
    "thickness": "000 / m²\"",
    "size": "Đá",
    "finish": "15mm",
    "color": "1200x2700",
    "applications": [
      "\"Bóng kính"
    ],
    "collection": "Matt\"",
    "catalogueUrl": "Ivory",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Laurent nổi bật với sắc đen đầy quyến rũ cùng những đường vân mạnh mẽ."
    ],
    "id": "45"
  },
  {
    "name": "Công nghệ Veintech tái hiện hoàn hảo vè đẹp tự nhiên",
    "slug": "thồi hồn sức sống vào không gia\"",
    "subtitle": "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SP82H127__Laurent-VEINTECH__120x270cm__15mm__Face1.png",
    "code": "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SP82H127__Laurent-VEINTECH__120x270cm__15mm__Face3.png",
    "price": "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SP82H127__Laurent-VEINTECH__120x270cm__15mm__Face3.png",
    "surface": "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SP82H127__Laurent-VEINTECH__120x270cm__15mm__Face2.png",
    "thickness": "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SP82H127__Laurent-VEINTECH__120x270cm__15mm__Face1.png",
    "size": "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SP82H127__Laurent-VEINTECH__120x270cm__15mm__Face2.png",
    "finish": "",
    "color": "https://slabstone.vn/san-pham/laurent/",
    "applications": "",
    "collection": "",
    "catalogueUrl": "",
    "description": "",
    "images": [],
    "id": "46"
  },
  {
    "name": "Tide",
    "slug": "tide",
    "subtitle": "",
    "code": "SP81 - SM81",
    "price": "\"4",
    "surface": "500",
    "thickness": "000 / m²\"",
    "size": "Đá",
    "finish": "15mm",
    "color": "1200x2700",
    "applications": [
      "\"Bóng kính"
    ],
    "collection": "Matt\"",
    "catalogueUrl": "Ivory",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Tide nổi bật với những đường vân tinh tế đầy tự nhiên trong tông màu trắng."
    ],
    "id": "47"
  },
  {
    "name": "Công nghệ Veintech tái hiện hoàn hảo vè đẹp tự nhiên",
    "slug": "thồi hồn sức sống vào không gian.\"",
    "subtitle": "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SP81H127__Tide__120x270cm__15mm__Face2.png",
    "code": "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SP81H127__Tide__120x270cm__15mm__Face2.png",
    "price": "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SP81H127__Tide__120x270cm__15mm__Face1.png",
    "surface": "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SP81H127__Tide__120x270cm__15mm__Face3.png",
    "thickness": "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SP81H127__Tide__120x270cm__15mm__Face2.png",
    "size": "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SP81H127__Tide__120x270cm__15mm__Face3.png",
    "finish": "",
    "color": "https://slabstone.vn/san-pham/tide/",
    "applications": "",
    "collection": "",
    "catalogueUrl": "",
    "description": "",
    "images": [],
    "id": "48"
  },
  {
    "name": "Lagoon",
    "slug": "lagoon",
    "subtitle": "",
    "code": "SP80 - SM80",
    "price": "\"4",
    "surface": "500",
    "thickness": "000 / m²\"",
    "size": "Đá",
    "finish": "15mm",
    "color": "1200x2700",
    "applications": [
      "\"Bóng kính"
    ],
    "collection": "Matt\"",
    "catalogueUrl": "Màu Be",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "Công nghệ vân xuyên xương giúp Lagoon tái hiện vẻ đẹp chân thực của tự nhiên.",
      "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM80H127__Lagoon__120x270cm__15mm__Face1.png",
      "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM80H127__Lagoon__120x270cm__15mm__Face3.png",
      "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM80H127__Lagoon__120x270cm__15mm__Face1.png",
      "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM80H127__Lagoon__120x270cm__15mm__Face2.png"
    ],
    "id": "49"
  },
  {
    "name": "Avory",
    "slug": "avory",
    "subtitle": "",
    "code": "SM69",
    "price": "\"2",
    "surface": "100",
    "thickness": "000 / m²\"",
    "size": "Đá",
    "finish": "9mm",
    "color": "1200x2700",
    "applications": [
      "Matt"
    ],
    "collection": "Ivory",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Avory như dải lụa trắng mềm mại được điểm xuyến đường vân tinh tế",
      "mang cảm giác thanh bình và yên tĩnh cho không gian.\"",
      "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM69D127__Avory__120x270cm__9mm__Face1.png",
      "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM69D127__Avory__120x270cm__9mm__Face2.png",
      "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM69D127__Avory__120x270cm__9mm__Face1.png",
      "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM69D127__Avory__120x270cm__9mm__Face2.png"
    ],
    "id": "50"
  },
  {
    "name": "Andes",
    "slug": "andes",
    "subtitle": "",
    "code": "SM70",
    "price": "\"2",
    "surface": "100",
    "thickness": "000 / m²\"",
    "size": "Đá",
    "finish": "9mm",
    "color": "1200x2700",
    "applications": [
      "Matt"
    ],
    "collection": "Xám",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Andes",
      "màn đêm tĩnh mịch không kém phần mơ mộng."
    ],
    "id": "51"
  },
  {
    "name": "Sắc xám thanh lịch thổi hồn sự tinh tế cho không gian thiết kế.\"",
    "slug": "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM70D127__Andes__120x270cm__9mm__Face3.png",
    "subtitle": "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM70D127__Andes__120x270cm__9mm__Face1.png",
    "code": "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM70D127__Andes__120x270cm__9mm__Face1.png",
    "price": "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM70D127__Andes__120x270cm__9mm__Face2.png",
    "surface": "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM70D127__Andes__120x270cm__9mm__Face3.png",
    "thickness": "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM70D127__Andes__120x270cm__9mm__Face3.png",
    "size": "",
    "finish": "https://slabstone.vn/san-pham/andes/",
    "color": "",
    "applications": "",
    "collection": "",
    "catalogueUrl": "",
    "description": "",
    "images": [],
    "id": "52"
  },
  {
    "name": "Lava",
    "slug": "lava",
    "subtitle": "",
    "code": "SM21",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Xi măng",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Đen",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "Lava độc đáo và mạnh mẽ với đường vân cam như những tia sét trên nền trời đêm.",
      "https://slabstone.vn/wp-content/uploads/2024/04/SM21D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/04/Floor-SM21D122__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/04/SM21D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/04/SM21D122-F2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/04/SM21D122-F3__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "53"
  },
  {
    "name": "Calacatta Cream",
    "slug": "calacatta-cream",
    "subtitle": "",
    "code": "SM17",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 – 2",
    "size": "100",
    "finish": "000 / m²\"",
    "color": "Đá hoa",
    "applications": [
      "\"9mm"
    ],
    "collection": "12mm\"",
    "catalogueUrl": "\"1200x2700",
    "description": "1200x2400\"",
    "images": [
      "Matt",
      "Màu Be",
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Calacatta Cream",
      "mẫu thiết kế đem lại sự sang trọng hoàn hảo cho không gian sống."
    ],
    "id": "54"
  },
  {
    "name": "Tone màu kem thời thượng cùng kích thước lớn giúp mở rộng không gian của sáng tạo",
    "slug": "sự tiện nghi và đẳng cấp.\"",
    "subtitle": "https://slabstone.vn/wp-content/uploads/2024/03/SM17F122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "code": "https://slabstone.vn/wp-content/uploads/2024/03/Ban-02_SM17F122__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "price": "https://slabstone.vn/wp-content/uploads/2024/03/Ban-01_SM17F122__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "surface": "https://slabstone.vn/wp-content/uploads/2024/03/SM17F122-3__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "thickness": "https://slabstone.vn/wp-content/uploads/2024/03/SM17F122-2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "size": "https://slabstone.vn/wp-content/uploads/2024/03/SM17F122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "finish": "https://slabstone.vn/wp-content/uploads/2024/03/SM17F122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "color": "https://slabstone.vn/san-pham/calacatta-cream/",
    "applications": "",
    "collection": "",
    "catalogueUrl": "",
    "description": "",
    "images": [],
    "id": "55"
  },
  {
    "name": "Crema Marfil",
    "slug": "crema-marfil",
    "subtitle": "",
    "code": "SM60",
    "price": "\"1",
    "surface": "970",
    "thickness": "000 – 2",
    "size": "370",
    "finish": "000 / m²\"",
    "color": "Đá hoa",
    "applications": [
      "\"9mm"
    ],
    "collection": "12mm\"",
    "catalogueUrl": "1200x2400",
    "description": "Matt",
    "images": [
      "Màu Be",
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Crema Marfil",
      "mẫu thiết kế đem lại sự sang trọng hoàn hảo cho không gian sống."
    ],
    "id": "56"
  },
  {
    "name": "Tone màu kem thời thượng cùng kích thước lớn giúp mở rộng không gian của sáng tạo",
    "slug": "sự tiện nghi và đẳng cấp.\"",
    "subtitle": "https://slabstone.vn/wp-content/uploads/2024/02/SM60D122-F1-A-copy__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "code": "https://slabstone.vn/wp-content/uploads/2024/02/SM60.png",
    "price": "https://slabstone.vn/wp-content/uploads/2024/02/floor-2_SM60F122__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "surface": "https://slabstone.vn/wp-content/uploads/2024/02/SM60D122-F1-A-copy__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "thickness": "https://slabstone.vn/wp-content/uploads/2024/02/SM60D122-F2-A-copy__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "size": "https://slabstone.vn/wp-content/uploads/2024/02/SM60D122-F3-A-copy__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "finish": "https://slabstone.vn/wp-content/uploads/2024/02/SM60D122-F1-A-copy__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "color": "https://slabstone.vn/san-pham/crema-marfil/",
    "applications": "",
    "collection": "",
    "catalogueUrl": "",
    "description": "",
    "images": [],
    "id": "57"
  },
  {
    "name": "Ash Carbon",
    "slug": "ash-carbon",
    "subtitle": "",
    "code": "SM40",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Gỗ",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Matt"
    ],
    "collection": "Xám",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Với khổ lớn vượt trội",
      "đá vân gỗ SLABSTONE đem nét đẹp thiên nhiên chân thực nhất vào không gian sống của bạn."
    ],
    "id": "58"
  },
  {
    "name": "Không giới hạn khả năng thiết kế",
    "slug": "mẫu đá vân gỗ SLABSTONE cho bạn thoả sức sáng tạo với những ý tưởng cắt ghép",
    "subtitle": "tạo hình khác nhau. Những đường vân gỗ trải dài",
    "code": "không bị gián đoạn sẽ mở rộng không gian",
    "price": "tôn lên nét tinh tế và sang trọng rất riêng cho ngôi nhà.\"",
    "surface": "https://slabstone.vn/wp-content/uploads/2023/10/SM40D122-Random-Face-copy-2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "thickness": "https://slabstone.vn/wp-content/uploads/2024/01/SM40D122_op_tuong__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "size": "https://slabstone.vn/wp-content/uploads/2023/10/SM40D122-Random-Face-copy__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "finish": "",
    "color": "",
    "applications": "",
    "collection": "",
    "catalogueUrl": "https://slabstone.vn/san-pham/ash-carbon/",
    "description": "",
    "images": [],
    "id": "59"
  },
  {
    "name": "Ash Drift",
    "slug": "ash-drift",
    "subtitle": "",
    "code": "SM49",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Gỗ",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Nâu",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Với khổ lớn vượt trội",
      "đá vân gỗ SLABSTONE đem nét đẹp thiên nhiên chân thực nhất vào không gian sống của bạn."
    ],
    "id": "60"
  },
  {
    "name": "Không giới hạn khả năng thiết kế",
    "slug": "mẫu đá vân gỗ SLABSTONE cho bạn thoả sức sáng tạo với những ý tưởng cắt ghép",
    "subtitle": "tạo hình khác nhau. Những đường vân gỗ trải dài",
    "code": "không bị gián đoạn sẽ mở rộng không gian",
    "price": "tôn lên nét tinh tế và sang trọng rất riêng cho ngôi nhà.\"",
    "surface": "https://slabstone.vn/wp-content/uploads/2023/10/SM49D122__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "thickness": "https://slabstone.vn/wp-content/uploads/2024/02/SM49.png",
    "size": "https://slabstone.vn/wp-content/uploads/2023/10/SP30-49D122-Bep-__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "finish": "https://slabstone.vn/wp-content/uploads/2023/10/SM49D122__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "color": "",
    "applications": "",
    "collection": "",
    "catalogueUrl": "https://slabstone.vn/san-pham/ash-drift/",
    "description": "",
    "images": [],
    "id": "61"
  },
  {
    "name": "Pietra Dark",
    "slug": "pietra-dark",
    "subtitle": "",
    "code": "SM18",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Matt"
    ],
    "collection": "Đen",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Với thiết kế độc đáo khác biệt hoàn toàn với những sản phẩm đang có mặt trên thị trường",
      "từng tấm đá Pietra Dark với hoạ tiết và bề mặt mô phỏng gần như trọn vẹn những thân gỗ lớn trong các khu rừng",
      "độc đáo hơn với bề mặt màu đen",
      "có chiều sâu đem đến vẻ đẹp sang trọng",
      "làm cho nó trở thành một sự lựa chọn đặc biệt cho bất kỳ không gian tinh tế nào.\"",
      "https://slabstone.vn/wp-content/uploads/2023/10/SM18D122-F2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "62"
  },
  {
    "name": "Rosso Statuario",
    "slug": "rosso-statuario",
    "subtitle": "",
    "code": "SM39",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Matt"
    ],
    "collection": "Rose",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Rosso Statuario",
      "một biến thể cao cấp của dòng Statuario Marble",
      "được biết đến với vẻ đẹp tinh tế và sự hùng vĩ tuyệt vời. Nổi bật với kết cấu màu vàng hồng",
      "các hoa văn và đường vân hòa quyện một cách tự nhiên trên nền màu kem",
      "tạo thành một sức hấp dẫn tuyệt vời nhưng vẫn thanh lịch.\"",
      "https://slabstone.vn/wp-content/uploads/2023/09/SM39D122-F3-copy__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "63"
  },
  {
    "name": "Raw Dark",
    "slug": "raw-dark",
    "subtitle": "",
    "code": "SM22",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Xi măng",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Matt"
    ],
    "collection": "Xám trắng",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Raw Dark Stone là sự pha trộn hoàn hảo giữa bề mặt đen mịn và đường vân trắng mềm mại",
      "giống như hiệu ứng sương mù. Nó tạo hiệu ứng 3D trong suốt độc đáo",
      "mô phỏng bầu trời đêm và phù hợp với những thiết kế có cá tính mạnh mẽ.\"",
      "https://slabstone.vn/wp-content/uploads/2023/09/SM22D122-2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/s22.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SM22D122-Phong-Tam.png"
    ],
    "id": "64"
  },
  {
    "name": "Ash Ebony",
    "slug": "ash-ebony",
    "subtitle": "",
    "code": "SM23",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Gỗ",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Matt"
    ],
    "collection": "Xám",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Với khổ lớn vượt trội",
      "đá vân gỗ SLABSTONE đem nét đẹp thiên nhiên chân thực nhất vào không gian sống của bạn."
    ],
    "id": "65"
  },
  {
    "name": "Không giới hạn khả năng thiết kế",
    "slug": "mẫu đá vân gỗ SLABSTONE cho bạn thoả sức sáng tạo với những ý tưởng cắt ghép",
    "subtitle": "tạo hình khác nhau. Những đường vân gỗ trải dài",
    "code": "không bị gián đoạn sẽ mở rộng không gian",
    "price": "tôn lên nét tinh tế và sang trọng rất riêng cho ngôi nhà.\"",
    "surface": "https://slabstone.vn/wp-content/uploads/2023/09/SM23D122-Random-Face__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "thickness": "https://slabstone.vn/wp-content/uploads/2023/09/s23.png",
    "size": "https://slabstone.vn/wp-content/uploads/2023/09/SM23_op_tuong__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "finish": "",
    "color": "",
    "applications": "",
    "collection": "",
    "catalogueUrl": "https://slabstone.vn/san-pham/ash-ebony/",
    "description": "",
    "images": [],
    "id": "66"
  },
  {
    "name": "Marquina",
    "slug": "marquina",
    "subtitle": "",
    "code": "SM20",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "9mm",
    "color": "1200x2400",
    "applications": [
      "Matt"
    ],
    "collection": "Đen",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Hồ Maracaibo ở Venezuela được mệnh danh là “thiên đường của những vũ điệu sấm sét” với xấp xỉ 3 triệu cú sét mỗi năm",
      "lấy cảm hứng từ những vũ điệu đó",
      "chúng tôi đã truyền tải sức mạnh của những tia sét rực sáng tràn đầy năng lượng vào sản phẩm. Những đường vân rạn như tia sét màu trắng hoàn toàn nổi bật trên nền đen huyền bí.\"",
      "https://slabstone.vn/wp-content/uploads/2023/09/SM20D122-Random-face-copy-2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/S20.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SM20D122-v1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "67"
  },
  {
    "name": "Calatorao Cafe",
    "slug": "calatorao-cafe",
    "subtitle": "",
    "code": "SN55",
    "price": "\"2",
    "surface": "820",
    "thickness": "000 / m²\"",
    "size": "Đá hoa",
    "finish": "15mm",
    "color": "1200x2400",
    "applications": [
      "Matt"
    ],
    "collection": "",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "https://slabstone.vn/wp-content/uploads/2023/07/SN55H86_Body-tech-F2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/07/TN55.png"
    ],
    "id": "68"
  },
  {
    "name": "Thunder",
    "slug": "thunder",
    "subtitle": "",
    "code": "SP08",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 – 2",
    "size": "500",
    "finish": "000 / m²\"",
    "color": "Đá",
    "applications": [
      "\"9mm"
    ],
    "collection": "15mm\"",
    "catalogueUrl": "1200x2400",
    "description": "Bóng kính",
    "images": [
      "\"Màu Be",
      "Trắng\"",
      "Thiết kế marble ấn tượng với những đường oxy hoá màu vàng thể hiện chân thực nhất vẻ đẹp của đá tự nhiên",
      "https://slabstone.vn/wp-content/uploads/2024/01/Slabstone_Thunder-SP08D122-v2_Polished_120x240cm_916mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "69"
  },
  {
    "name": "Summer Fog",
    "slug": "summer-fog",
    "subtitle": "",
    "code": "SP10 | SM10",
    "price": "\"1",
    "surface": "220",
    "thickness": "000 – 2",
    "size": "500",
    "finish": "000 / m²\"",
    "color": "Đá hoa",
    "applications": [
      "\"9mm"
    ],
    "collection": "15mm",
    "catalogueUrl": "20mm\"",
    "description": "\"800x1600",
    "images": [
      "800x2400",
      "1200x2400",
      "1600x2400\"",
      "\"Bóng kính",
      "Bóng mờ\"",
      "Trắng"
    ],
    "id": "70"
  },
  {
    "name": "Serpentine",
    "slug": "serpentine",
    "subtitle": "",
    "code": "SP27",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 – 2",
    "size": "500",
    "finish": "000 / m²\"",
    "color": "Đá hoa",
    "applications": [
      "\"9mm"
    ],
    "collection": "15mm\"",
    "catalogueUrl": "1200x2400",
    "description": "Bóng kính",
    "images": [
      "Xanh Lá",
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Sự tươi mới và độc đáo của sắc xanh đã tạo nên điểm nhấn khác biệt cho thiết kế."
    ],
    "id": "71"
  },
  {
    "name": "Serpentine gợi cảm giác phóng khoáng nhưng tinh tế",
    "slug": "nổi bật nhưng không quá phô trương. Tất cả hài hoà và vừa vặn để ứng dụng được ở mọi không gian.\"",
    "subtitle": "https://slabstone.vn/wp-content/uploads/2023/09/SP27H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "code": "https://slabstone.vn/wp-content/uploads/2023/09/sp27.png",
    "price": "https://slabstone.vn/wp-content/uploads/2023/09/Sp27_phoi_canh__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "surface": "https://slabstone.vn/wp-content/uploads/2023/09/SP27H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "thickness": "",
    "size": "",
    "finish": "",
    "color": "https://slabstone.vn/san-pham/serpentine/",
    "applications": "",
    "collection": "",
    "catalogueUrl": "",
    "description": "",
    "images": [],
    "id": "72"
  },
  {
    "name": "Patagonia",
    "slug": "patagonia",
    "subtitle": "",
    "code": "SP36",
    "price": "\"1",
    "surface": "800",
    "thickness": "000 – 2",
    "size": "500",
    "finish": "000 / m²\"",
    "color": "Đá hoa",
    "applications": [
      "\"9mm"
    ],
    "collection": "15mm\"",
    "catalogueUrl": "1200x2400",
    "description": "Bóng kính",
    "images": [
      "Màu Be",
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Lấy cảm hứng từ những viên đá tự nhiên",
      "Patagoinia mang đến cho không gian sống của bạn vẻ đẹp chân thực và sống động nhất.\"",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP36D122-F2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "73"
  },
  {
    "name": "Feathers",
    "slug": "feathers",
    "subtitle": "",
    "code": "\"SP42",
    "price": "SM42\"",
    "surface": "\"1",
    "thickness": "800",
    "size": "000 – 2",
    "finish": "500",
    "color": "000 / m²\"",
    "applications": [
      "Đá hoa"
    ],
    "collection": "\"9mm",
    "catalogueUrl": "15mm\"",
    "description": "1200x2400",
    "images": [
      "\"Bóng kính",
      "Matt\"",
      "Xanh Dương",
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n"
    ],
    "id": "74"
  },
  {
    "name": "Desert",
    "slug": "desert",
    "subtitle": "",
    "code": "SP50",
    "price": "\"1",
    "surface": "970",
    "thickness": "000 – 2",
    "size": "820",
    "finish": "000 / m²\"",
    "color": "BODYTECH",
    "applications": [
      "\"9mm"
    ],
    "collection": "15mm\"",
    "catalogueUrl": "1200x2400",
    "description": "\"Bóng kính",
    "images": [
      "Bóng mờ\"",
      "Màu Be",
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Fullbody-SP50D122_Polished_120x240cm_916mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "75"
  },
  {
    "name": "Helix Nero",
    "slug": "helix-nero",
    "subtitle": "",
    "code": "SP53",
    "price": "\"1",
    "surface": "100",
    "thickness": "000 – 2",
    "size": "820",
    "finish": "000 / m²\"",
    "color": "BODYTECH",
    "applications": [
      "\"9mm"
    ],
    "collection": "12mm",
    "catalogueUrl": "15mm\"",
    "description": "\"800x1600",
    "images": [
      "1200x2400\"",
      "Bóng kính",
      "Đen",
      "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
      "\"Tone màu đen huyền bí dẫn dụ sự tìm tòi"
    ],
    "id": "76"
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.surface === category);
}

export function getProductsByColor(color: string): Product[] {
  return products.filter(product => product.color.includes(color));
}

export function getProductsByFinish(finish: string): Product[] {
  return products.filter(product => product.finish.includes(finish));
}
