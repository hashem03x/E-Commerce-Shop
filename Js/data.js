let productsDB = [
  {
    id: 1,
    name: "Gaming PC",
    Price: 24000,
    Desc: "A Powerful Gaming PC",
    Specifications: `Nvidia GeForce RTX 4090 GPU.
        13th gen Intel Core i9 CPU.
        Liquid cooling.
        Dual storage drives.`,
    imgUrl: "../assets/pc.jpg",
    liked: false,
    qty: 1,
  },
  {
    id: 9,
    name: "GIGABYTE B450M DS3H V2 (AMD Ryzen AM4/Micro ATX/M.2/HMDI/DVI/USB 3.1/DDR4/Motherboard)",
    Price: 4550,
    Desc: "Supports AMD 3rd Gen Ryzen/ 2nd Gen Ryzen/ 1st Gen Ryzen/ 2nd Gen Ryzen with Radeon Vega Graphics/ 1st Gen Ryzen with Radeon Vega Graphics/ Athlon with Radeon Vega Graphics Processors",
    Specifications: `RAM Memory Technology	DDR4
    Compatible Processors	AMD 3rd Generation Ryzen, AMD 2nd Gerenration Ryzen, AMD Athlon
    Chipset Type	AMD B450
    Memory Clock Speed	3600 MHz
    Platform	Windows 10
    Memory Storage Capacity	128 GB.`,
    imgUrl: "./assets/motherboard.jpg",
    liked: false,
    qty: 1,
  },
  {
    id: 10,
    name: `
    MSI A520M-A PRO Gaming Motherboard (AMD AM4, DDR4, PCIe 4.0, SATA 6Gb/s, Dual M.2, USB 3.2 Gen 1, DVI/HDMI, Micro-ATX)`,
    Price: 4200,
    Desc: `Support 3rd Gen AMD Ryzen Desktop Processors and AMD Ryzen 4000 G-Series Desktop Processors`,
    Specifications: `RAM Memory Technology	DDR4
    Compatible Processors	AMD 3rd Generation Ryzen
    Chipset Type	AMD A520
    Memory Clock Speed	1866 MHz
    Platform	Windows 10
    Memory Storage Capacity	4 GB`,
    imgUrl: "./assets/motherboard2.jpg",
    liked: false,
    qty: 1,
  },
  {
    id: 2,
    name: "Headphones",
    Price: 1200,
    Desc: "Headphones For Great Listening Experience",
    Specifications: `Bluetooth , Wireless , Microphone , Lightweight`,
    imgUrl: "./assets/headphone.webp",
    liked: false,
    qty: 1,
  },
  {
    id: 3,
    name: "Monitor",
    Price: 12000,
    Desc: "A Powerful Gaming Monitor For PC",
    Specifications: `OLED , HDMI , Smart , 3440 x 1440 Pixels`,
    imgUrl: "./assets/screen 3.jpg",
    liked: false,
    qty: 1,
  },
  {
    id: 4,
    name: "Dell Monitor",
    Price: 16000,
    Desc: "A Powerful Gaming Monitor For PC",
    Specifications: `OLED , HDMI , Smart , 3440 x 1440 Pixels`,
    imgUrl: "./assets/screen 1.jpg",
    liked: false,
    qty: 1,
  },
  {
    id: 5,
    name: "Dell Monitor",
    Price: 18500,
    Desc: "A Powerful Gaming Monitor For PC",
    Specifications: `OLED , HDMI , Smart , 3440 x 1440 Pixels`,
    imgUrl: "./assets/screen 2.jpg",
    liked: false,
    qty: 1,
  },
  {
    id: 6,
    name: "Headphones",
    Price: 800,
    Desc: "Headphones For Great Listening Experience",
    Specifications: `Bluetooth , Wireless , Microphone , Lightweight`,
    imgUrl: "./assets/headphone2.webp",
    liked: false,
    qty: 1,
  },
  {
    id: 7,
    name: "Headphones",
    Price: 2300,
    Desc: "Headphones For Great Listening Experience",
    Specifications: `Bluetooth , Wireless , Microphone , Lightweight`,
    imgUrl: "./assets/headphone3.webp",
    liked: false,
    qty: 1,
  },
  {
    id: 8,
    name: "Headphones",
    Price: 999,
    Desc: "Headphones For Great Listening Experience",
    Specifications: `Bluetooth , Wireless , Microphone , Lightweight`,
    imgUrl: "./assets/headphone4.jpg",
    liked: false,
    qty: 1,
  },
];

if (localStorage.getItem("products")) {
  console.log("Products Didn't Change");
} else {
  localStorage.setItem("products", JSON.stringify(productsDB));
}
