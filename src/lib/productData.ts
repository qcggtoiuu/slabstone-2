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
    "id": "1",
    "url": ""
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
    "id": "2",
    "url": ""
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
    "id": "3",
    "url": ""
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
    "description": "Công nghệ xuyên sáng cùng khổ lớn vượt giới hạn giúp các sản phẩm trong BST Luce Tech đạt được vẻ đẹp chân thực của tự nhiên.",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2024/02/TE61D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "4",
    "url": ""
  },
  {
    "name": "Những đường vân tròn mềm mại của Honey Onyx đem lại sự thư thái",
    "slug": "nhẹ nhàng nhưng vẫn không kém phần tinh tế",
    "subtitle": "sang trọng cho không gian.",
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
    "images": [
      "https://slabstone.vn/wp-content/uploads/2024/02/TE61D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "5",
    "url": ""
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
    "description": "Công nghệ xuyên sáng cùng khổ lớn vượt giới hạn giúp các sản phẩm trong BST Luce Tech đạt được vẻ đẹp chân thực của tự nhiên.",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2024/02/ST62D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "6",
    "url": ""
  },
  {
    "name": "Những đường vân cá tính",
    "slug": "mạnh mẽ của Arabescato Antique mang đến sự ấn tượng nhưng vẫn không kém phần tinh tế",
    "subtitle": "sang trọng cho không gian.",
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
    "images": [
      "https://slabstone.vn/wp-content/uploads/2024/02/ST62D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "7",
    "url": ""
  },
  {
    "name": "Alpinus",
    "slug": "alpinus",
    "subtitle": "",
    "code": "SP25",
    "price": "1,800,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Màu Be",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Màu Be",
    "catalogueUrl": "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    "description": "Alpinus độc đáo với hoa văn giống như pha lê. Với sự bùng nổ của màu trắng, xám và be vàng, vật liệu này sẽ tạo thêm cảm giác sang trọng nhưng sắc sảo cho không gian của bạn.",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/09/SP25H122-Random-face-copy__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/sp25.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP25H122_ve_sinh__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "8",
    "url": ""
  },
  {
    "name": "Kanjini",
    "slug": "kanjini",
    "subtitle": "",
    "code": "SP07",
    "price": "1,800,000 / m²",
    "surface": "Đá",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Xám trắng",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Xám trắng",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Kanjini-SP07D122-v2_Polished_120x240cm_9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/180223_Kanjini.png",
      "https://slabstone.vn/wp-content/uploads/2023/02/SP07D122_Op-Lat__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Kanjini-SP07D122-v3_Polished_120x240cm_9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "9",
    "url": ""
  },
  {
    "name": "Panda White",
    "slug": "panda-white",
    "subtitle": "",
    "code": "SP09",
    "price": "1,800,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm, 15mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Trắng, Đen",
    "applications": [
      "1200x2400"
    ],
    "collection": "Bóng kính",
    "catalogueUrl": "Trắng, Đen",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Panda-White-SP09D12-v2_Polished_120x240cm_916mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/180223_Panda-1.png"
    ],
    "id": "10",
    "url": ""
  },
  {
    "name": "Nebula",
    "slug": "nebula",
    "subtitle": "",
    "code": "SP11",
    "price": "1,800,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Xám",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Xám",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Nebula-SP11D122-v1_Polished_120x240cm_9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "11",
    "url": ""
  },
  {
    "name": "NEBULA phù hợp cho mọi ứng dụng và thiết kế",
    "slug": "nâng tầm đẳng cấp cho không gian sống của bạn!",
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
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Nebula-SP11D122-v1_Polished_120x240cm_9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "12",
    "url": ""
  },
  {
    "name": "Ofanto",
    "slug": "ofanto",
    "subtitle": "",
    "code": "SP12",
    "price": "1,800,000 / m²",
    "surface": "Đá",
    "thickness": "9mm, 15mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Xám trắng",
    "applications": [
      "1200x2400"
    ],
    "collection": "Bóng kính",
    "catalogueUrl": "Xám trắng",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Ofanto-SP12D122-v2_Polished_120x240cm_916mm-1-scaled.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/180223_ofanto.png"
    ],
    "id": "13",
    "url": ""
  },
  {
    "name": "Blue Explosion",
    "slug": "blue-explosion",
    "subtitle": "",
    "code": "SP13 | SM13",
    "price": "1,800,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm, 15mm",
    "size": "1200x2400",
    "finish": "Bóng kính, Matt",
    "color": "Xanh Dương",
    "applications": [
      "1200x2400"
    ],
    "collection": "Bóng kính, Matt",
    "catalogueUrl": "Xanh Dương",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Blue-Explosion-SP13D122-v3_Polished_120x240cm_916mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "14",
    "url": ""
  },
  {
    "name": "Sand",
    "slug": "sand",
    "subtitle": "",
    "code": "SP51",
    "price": "1,100,000 – 1,970,000 / m²",
    "surface": "BODYTECH",
    "thickness": "9mm, 12mm, 15mm",
    "size": "800x1600, 1200x2400",
    "finish": "Bóng kính, Bóng mờ, Matt",
    "color": "Màu Be",
    "applications": [
      "9mm"
    ],
    "collection": "12mm, 15mm",
    "catalogueUrl": "800x1600, 1200x2400",
    "description": "Bóng kính, Bóng mờ, Matt",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Sand-SP51D122_Polished_120x240cm_916mm.jpg"
    ],
    "id": "15",
    "url": ""
  },
  {
    "name": "Cosima Bei",
    "slug": "cosima-bei",
    "subtitle": "",
    "code": "SM05",
    "price": "1,800,000 / m²",
    "surface": "Màu Đặc",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Matt",
    "color": "Màu Be",
    "applications": [
      "Matt"
    ],
    "collection": "Màu Be",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/02/05_SM05D122.png",
      "https://slabstone.vn/wp-content/uploads/2023/02/180223_Cosima-beige.png",
      "https://slabstone.vn/wp-content/uploads/2023/02/SM05D122-op-lat-scaled.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/SM05D122_ban-dai-scaled.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/05_SM05D122.png"
    ],
    "id": "16",
    "url": ""
  },
  {
    "name": "Cosima Grey",
    "slug": "cosima-grey",
    "subtitle": "",
    "code": "SM04",
    "price": "1,800,000 / m²",
    "surface": "Màu Đặc",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Matt",
    "color": "Xám",
    "applications": [
      "Matt"
    ],
    "collection": "Xám",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Cosima-Grey-SM04D122_Matt_120x240cm_9mm-2-scaled.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/180223_Cosima-grey.png",
      "https://slabstone.vn/wp-content/uploads/2023/02/SM04D122-OP-NGOAI-TROI-1-scaled.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/01/SM04D122_op-lat-scaled.jpg"
    ],
    "id": "17",
    "url": ""
  },
  {
    "name": "Glenveal",
    "slug": "glenveal",
    "subtitle": "",
    "code": "SM06",
    "price": "1,800,000 / m²",
    "surface": "Đá",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Matt",
    "color": "Xám",
    "applications": [
      "Matt"
    ],
    "collection": "Xám",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Glenveal-SM06D122-v1_Matt_120x240cm_9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/180223_Glenveal.png",
      "https://slabstone.vn/wp-content/uploads/2023/02/SM06D122_2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/SM06D122-op-lat-ve-sinh__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Glenveal-SM06D122-v1_Matt_120x240cm_9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "18",
    "url": ""
  },
  {
    "name": "Stream",
    "slug": "stream",
    "subtitle": "",
    "code": "SM52",
    "price": "3,050,000 / m²",
    "surface": "Đá hoa",
    "thickness": "20mm",
    "size": "1200x2400",
    "finish": "Matt",
    "color": "Trắng",
    "applications": [
      "Matt"
    ],
    "collection": "Trắng",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/03/SM52L122_VeinTeck__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "19",
    "url": ""
  },
  {
    "name": "Sự độc đáo",
    "slug": "phá cách của Stream chắc chắn sẽ đem đến những trải nghiệm thật sự khác biệt cho không gian sống của bạn!",
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
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/03/SM52L122_VeinTeck__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "20",
    "url": ""
  },
  {
    "name": "Crater",
    "slug": "crater",
    "subtitle": "",
    "code": "SP31",
    "price": "1,800,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Nâu",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Nâu",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/04/SP31D122-v2_Crater_1200x2400x9mm-A__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/04/040423_Crater.png",
      "https://slabstone.vn/wp-content/uploads/2023/04/SP31_background__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/04/TP009D12-op-lat-SP30D122-op-backgroud-vitinh__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "21",
    "url": ""
  },
  {
    "name": "Fossil Noir",
    "slug": "fossil-noir",
    "subtitle": "",
    "code": "SP32",
    "price": "1,800,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Đen",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Đen",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/04/SP32D122-v3_Fossil-noir_Polished_1200x2400x9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/04/040423_Fossil-noir.png",
      "https://slabstone.vn/wp-content/uploads/2023/04/SP32D122-Phong-ngu-__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/04/SP32D122-Phong-Khach__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "22",
    "url": ""
  },
  {
    "name": "Dark Emperador",
    "slug": "dark-emperador",
    "subtitle": "",
    "code": "SP15",
    "price": "970,000 – 1,890,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm, 12mm, 15mm",
    "size": "800x1600, 800x2400, 1200x2400",
    "finish": "Bóng kính, Bóng mờ, Matt",
    "color": "Màu Be",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Màu Be",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/02/Slabstone_Dark-Emperador-SP15D122-v1_Polished_120x240cm_916mm.jpg"
    ],
    "id": "23",
    "url": ""
  },
  {
    "name": "Calatorao Gris",
    "slug": "calatorao-gris",
    "subtitle": "",
    "code": "SN54",
    "price": "1,100,000 – 1,390,000 / m²",
    "surface": "Đá hoa",
    "thickness": "12mm, 15mm",
    "size": "800x1600",
    "finish": "Matt",
    "color": "Đen",
    "applications": [
      "12mm, 15mm"
    ],
    "collection": "800x1600",
    "catalogueUrl": "Matt",
    "description": "Đen",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/07/SN55H86_Body-tech-F2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "24",
    "url": ""
  },
  {
    "name": "Calacatta Statuario",
    "slug": "calacatta-statuario",
    "subtitle": "",
    "code": "SH14",
    "price": "970,000 / m²",
    "surface": "Đá hoa",
    "thickness": "15mm",
    "size": "800x1600",
    "finish": "Bóng mờ",
    "color": "Trắng",
    "applications": [
      "Bóng mờ"
    ],
    "collection": "Trắng",
    "catalogueUrl": "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/07/SH14F816_800x1600x12mm-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/07/SH-SP14F816_bep_an__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/07/SH14F816_800x1600x12mm-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/07/SH14F816_800x1600x12mm-F2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/07/SH14F816_800x1600x12mm-F3__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/07/SH14F816_800x1600x12mm-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "25",
    "url": ""
  },
  {
    "name": "Marine",
    "slug": "marine",
    "subtitle": "",
    "code": "SP16",
    "price": "970,000 – 1,800,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm, 12mm",
    "size": "800x1600, 1200x2400",
    "finish": "Bóng kính",
    "color": "Xanh Dương",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Xanh Dương",
    "catalogueUrl": "https://drive.google.com/uc?id=1tuT2pTEdj7GsRGCitbG4klqCr8DgwD4n",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/07/SP16F816-v1_Polished_800x1600x9mm__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/07/SP16.png"
    ],
    "id": "26",
    "url": ""
  },
  {
    "name": "Onice Nero",
    "slug": "onice-nero",
    "subtitle": "",
    "code": "SP45",
    "price": "1,800,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Đen",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Đen",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/09/SP45H122-Random-3-face-copy__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/s45.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP45_phong_tam__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "27",
    "url": ""
  },
  {
    "name": "Verde Karzai",
    "slug": "verde-karzai",
    "subtitle": "",
    "code": "SP48",
    "price": "1,800,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Xanh Lá",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Xanh Lá",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/09/SP48H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/s48.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP48H122_phoi_canh__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "28",
    "url": ""
  },
  {
    "name": "Carrara Bianco",
    "slug": "carrara-bianco",
    "subtitle": "",
    "code": "SP47",
    "price": "1,800,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Trắng",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Trắng",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/09/SP47H122-2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/Op-Ve-Sinh-SP47D122__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP47H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "29",
    "url": ""
  },
  {
    "name": "Calacatta Macchia Vecchia",
    "slug": "calacatta-macchia-vecchia",
    "subtitle": "",
    "code": "SP43",
    "price": "1,800,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Màu Be",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Màu Be",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/09/SP43H122-2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/s43.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP43_background__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP43H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "30",
    "url": ""
  },
  {
    "name": "Orobico Gris",
    "slug": "orobico-gris",
    "subtitle": "",
    "code": "SP44",
    "price": "1,800,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Xám",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Xám",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/09/SP44H122-AB-2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/s44.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP44_background__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP44H122-AB-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "31",
    "url": ""
  },
  {
    "name": "Calatorao Bianco",
    "slug": "calatorao-bianco",
    "subtitle": "",
    "code": "SM41",
    "price": "1,800,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Trắng",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Trắng",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2024/02/SM41D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/s41.png",
      "https://slabstone.vn/wp-content/uploads/2024/02/SM41D122_phong_tam__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/02/SM41D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "32",
    "url": ""
  },
  {
    "name": "Calatorao Noir",
    "slug": "calatorao-noir",
    "subtitle": "",
    "code": "SP29",
    "price": "1,800,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính, Matt",
    "color": "Đen",
    "applications": [
      "Bóng kính, Matt"
    ],
    "collection": "Đen",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/09/SP29H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/s29.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP29H122_ve_sinh__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP29H122-3__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "33",
    "url": ""
  },
  {
    "name": "Ash Maple",
    "slug": "ash-maple",
    "subtitle": "",
    "code": "SM19",
    "price": "1,800,000 / m²",
    "surface": "Gỗ",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Matt",
    "color": "Nâu",
    "applications": [
      "Matt"
    ],
    "collection": "Nâu",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/09/SM19D122-Random-face__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "34",
    "url": ""
  },
  {
    "name": "Không giới hạn khả năng thiết kế",
    "slug": "mẫu đá vân gỗ SLABSTONE cho bạn thoả sức sáng tạo với những ý tưởng cắt ghép",
    "subtitle": "tạo hình khác nhau. Những đường vân gỗ trải dài",
    "code": "không bị gián đoạn sẽ mở rộng không gian",
    "price": "tôn lên nét tinh tế và sang trọng rất riêng cho ngôi nhà.",
    "surface": "https://slabstone.vn/wp-content/uploads/2023/09/SM19D122-Random-face__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "thickness": "https://slabstone.vn/wp-content/uploads/2023/09/s19.png",
    "size": "https://slabstone.vn/wp-content/uploads/2023/09/SM19D12_phong_ngu__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "finish": "",
    "color": "",
    "applications": "",
    "collection": "",
    "catalogueUrl": "https://slabstone.vn/san-pham/ash-maple/",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/09/SM19D122-Random-face__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "35",
    "url": ""
  },
  {
    "name": "Venus Blue",
    "slug": "venus-blue",
    "subtitle": "",
    "code": "SP34",
    "price": "1,800,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Xanh Dương",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Xanh Dương",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/09/SP34H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/sp34.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP34H122-Bon-Tam__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "36",
    "url": ""
  },
  {
    "name": "Blue Apatite",
    "slug": "blue-apatite",
    "subtitle": "",
    "code": "SP46",
    "price": "1,800,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Xanh Dương",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Xanh Dương",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/09/SP46H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "37",
    "url": ""
  },
  {
    "name": "Orbico Noir",
    "slug": "orbico-noir",
    "subtitle": "",
    "code": "SP30",
    "price": "1,800,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Đen",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Đen",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/09/SP30D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/sp30.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP30_bep_an__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP30D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "38",
    "url": ""
  },
  {
    "name": "Dark Onyx",
    "slug": "dark-onyx",
    "subtitle": "",
    "code": "SP28",
    "price": "1,800,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Đen",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Đen",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/09/SP28H122-2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/sp28.png"
    ],
    "id": "39",
    "url": ""
  },
  {
    "name": "Calacatta Gold",
    "slug": "calacatta-gold",
    "subtitle": "",
    "code": "SP26",
    "price": "1,800,000 – 2,100,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2700, 1200x2400",
    "finish": "Bóng kính",
    "color": "Trắng",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Trắng",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/09/SP26H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "40",
    "url": ""
  },
  {
    "name": "Blue Indigo",
    "slug": "blue-indigo",
    "subtitle": "",
    "code": "SP24",
    "price": "1,800,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Xanh Dương",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Xanh Dương",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/09/SP24H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/sp24.png"
    ],
    "id": "41",
    "url": ""
  },
  {
    "name": "Calacatta Bianco",
    "slug": "calacatta-bianco",
    "subtitle": "",
    "code": "SP38",
    "price": "1,800,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Trắng",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Trắng",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/09/SP38H122-1__Q-100__LimitedFileSize-300kb__resized-800-px-1.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/sp38.png",
      "https://slabstone.vn/wp-content/uploads/2023/09/SP38_bep_an__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "42",
    "url": ""
  },
  {
    "name": "Venus Crema",
    "slug": "venus-crema",
    "subtitle": "",
    "code": "SP37",
    "price": "1,800,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Màu Be",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Màu Be",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/09/SP37H122-Random-3-face__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/sp37.png"
    ],
    "id": "43",
    "url": ""
  },
  {
    "name": "Monarch",
    "slug": "monarch",
    "subtitle": "",
    "code": "SP35",
    "price": "1,800,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Đen",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Đen",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2023/09/SP35H122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2023/09/sp35.png"
    ],
    "id": "44",
    "url": ""
  },
  {
    "name": "Laurent",
    "slug": "laurent",
    "subtitle": "",
    "code": "SP82 - SM82",
    "price": "4,500,000 / m²",
    "surface": "Đá",
    "thickness": "15mm",
    "size": "1200x2700",
    "finish": "Bóng kính, Matt",
    "color": "Ivory",
    "applications": [
      "Bóng kính, Matt"
    ],
    "collection": "Ivory",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SP82H127__Laurent-VEINTECH__120x270cm__15mm__Face1.png"
    ],
    "id": "45",
    "url": ""
  },
  {
    "name": "Công nghệ Veintech tái hiện hoàn hảo vè đẹp tự nhiên",
    "slug": "thồi hồn sức sống vào không gia",
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
    "images": [
      "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SP82H127__Laurent-VEINTECH__120x270cm__15mm__Face1.png"
    ],
    "id": "46",
    "url": ""
  },
  {
    "name": "Tide",
    "slug": "tide",
    "subtitle": "",
    "code": "SP81 - SM81",
    "price": "4,500,000 / m²",
    "surface": "Đá",
    "thickness": "15mm",
    "size": "1200x2700",
    "finish": "Bóng kính, Matt",
    "color": "Ivory",
    "applications": [
      "Bóng kính, Matt"
    ],
    "collection": "Ivory",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SP81H127__Tide__120x270cm__15mm__Face2.png"
    ],
    "id": "47",
    "url": ""
  },
  {
    "name": "Công nghệ Veintech tái hiện hoàn hảo vè đẹp tự nhiên",
    "slug": "thồi hồn sức sống vào không gian.",
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
    "images": [
      "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SP81H127__Tide__120x270cm__15mm__Face2.png"
    ],
    "id": "48",
    "url": ""
  },
  {
    "name": "Lagoon",
    "slug": "lagoon",
    "subtitle": "",
    "code": "SP80 - SM80",
    "price": "4,500,000 / m²",
    "surface": "Đá",
    "thickness": "15mm",
    "size": "1200x2700",
    "finish": "Bóng kính, Matt",
    "color": "Màu Be",
    "applications": [
      "Bóng kính, Matt"
    ],
    "collection": "Màu Be",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM80H127__Lagoon__120x270cm__15mm__Face1.png",
      "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM80H127__Lagoon__120x270cm__15mm__Face3.png",
      "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM80H127__Lagoon__120x270cm__15mm__Face1.png",
      "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM80H127__Lagoon__120x270cm__15mm__Face2.png"
    ],
    "id": "49",
    "url": ""
  },
  {
    "name": "Avory",
    "slug": "avory",
    "subtitle": "",
    "code": "SM69",
    "price": "2,100,000 / m²",
    "surface": "Đá",
    "thickness": "9mm",
    "size": "1200x2700",
    "finish": "Matt",
    "color": "Ivory",
    "applications": [
      "Matt"
    ],
    "collection": "Ivory",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM69D127__Avory__120x270cm__9mm__Face1.png",
      "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM69D127__Avory__120x270cm__9mm__Face2.png",
      "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM69D127__Avory__120x270cm__9mm__Face1.png",
      "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM69D127__Avory__120x270cm__9mm__Face2.png"
    ],
    "id": "50",
    "url": ""
  },
  {
    "name": "Andes",
    "slug": "andes",
    "subtitle": "",
    "code": "SM70",
    "price": "2,100,000 / m²",
    "surface": "Đá",
    "thickness": "9mm",
    "size": "1200x2700",
    "finish": "Matt",
    "color": "Xám",
    "applications": [
      "Matt"
    ],
    "collection": "Xám",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM70D127__Andes__120x270cm__9mm__Face3.png"
    ],
    "id": "51",
    "url": ""
  },
  {
    "name": "Sắc xám thanh lịch thổi hồn sự tinh tế cho không gian thiết kế.",
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
    "images": [
      "https://slabstone.vn/wp-content/uploads/2025/01/SLABSTONE__SM70D127__Andes__120x270cm__9mm__Face3.png"
    ],
    "id": "52",
    "url": ""
  },
  {
    "name": "Lava",
    "slug": "lava",
    "subtitle": "",
    "code": "SM21",
    "price": "1,800,000 / m²",
    "surface": "Xi măng",
    "thickness": "9mm",
    "size": "1200x2400",
    "finish": "Bóng kính",
    "color": "Đen",
    "applications": [
      "Bóng kính"
    ],
    "collection": "Đen",
    "catalogueUrl": "",
    "description": "",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2024/04/SM21D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/04/Floor-SM21D122__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/04/SM21D122-F1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/04/SM21D122-F2__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
      "https://slabstone.vn/wp-content/uploads/2024/04/SM21D122-F3__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "53",
    "url": ""
  },
  {
    "name": "Calacatta Cream",
    "slug": "calacatta-cream",
    "subtitle": "",
    "code": "SM17",
    "price": "1,800,000 – 2,100,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm, 12mm",
    "size": "1200x2700, 1200x2400",
    "finish": "Matt",
    "color": "Màu Be",
    "applications": [
      "9mm, 12mm"
    ],
    "collection": "1200x2700, 1200x2400",
    "catalogueUrl": "Matt",
    "description": "Màu Be",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2024/03/SM17F122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "54",
    "url": ""
  },
  {
    "name": "Tone màu kem thời thượng cùng kích thước lớn giúp mở rộng không gian của sáng tạo",
    "slug": "sự tiện nghi và đẳng cấp.",
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
    "images": [
      "https://slabstone.vn/wp-content/uploads/2024/03/SM17F122-1__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "55",
    "url": ""
  },
  {
    "name": "Crema Marfil",
    "slug": "crema-marfil",
    "subtitle": "",
    "code": "SM60",
    "price": "1,970,000 – 2,370,000 / m²",
    "surface": "Đá hoa",
    "thickness": "9mm, 12mm",
    "size": "1200x2400",
    "finish": "Matt",
    "color": "Màu Be",
    "applications": [
      "9mm, 12mm"
    ],
    "collection": "1200x2400",
    "catalogueUrl": "Matt",
    "description": "Màu Be",
    "images": [
      "https://slabstone.vn/wp-content/uploads/2024/02/SM60D122-F1-A-copy__Q-100__LimitedFileSize-300kb__resized-800-px.jpg"
    ],
    "id": "56",
    "url": ""
  },
  {
    "name": "Tone màu kem thời thượng cùng kích thước lớn giúp mở rộng không gian của sáng tạo",
    "slug": "sự tiện nghi và đẳng cấp.",
    "subtitle": "https://slabstone.vn/wp-content/uploads/2024/02/SM60D122-F1-A-copy__Q-100__LimitedFileSize-300kb__resized-800-px.jpg",
    "code": "https://slabstone.vn/wp-content/uploads/2024/02/SM60.png",
    "price": "https://slabstone.vn/wp-content/uploads/2024/02/floor-2_SM60F122__Q-100__LimitedFileSize-300kb__resize