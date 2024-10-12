import { Component } from '@angular/core';
import { Chart } from 'chart.js/auto';

interface Transaction {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  sold: boolean;
  dateOfSale: string;
  month: string;
}

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  month: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  selectedMonth: string = '';
  transactions: Transaction[]=[
    {
        "id": 1,
        "title": "Fjallraven  Foldsack No 1 Backpack Fits 15 Laptops",
        "price": 329.85,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop up to 15 inches in the padded sleeve your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "sold": false,
        "dateOfSale": "2021-11-27T20:29:54+05:30",
        "month": "Feb"
    },
    {
        "id": 2,
        "title": "Mens Casual Premium Slim Fit TShirts ",
        "price": 44.6,
        "description": "Slimfitting style contrast raglan long sleeve threebutton henley placket light weight  soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a threebutton placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "sold": false,
        "dateOfSale": "2021-10-27T20:29:54+05:30",
        "month": "May"
    },
    {
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 615.89,
        "description": "great outerwear jackets for SpringAutumnWinter suitable for many occasions such as working hiking camping mountainrock climbing cycling traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "sold": true,
        "dateOfSale": "2022-07-27T20:29:54+05:30",
        "month": "jun"
    },
    {
        "id": 4,
        "title": "Mens Casual Slim Fit",
        "price": 31.98,
        "description": "The color could be slightly different between on the screen and in practice.  Please note that body builds vary by person therefore detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "sold": false,
        "dateOfSale": "2021-10-27T20:29:54+05:30",
        "month": "May"
    },
    {
        "id": 5,
        "title": "John Hardy Womens Legends Naga Gold  Silver Dragon Station Chain Bracelet",
        "price": 6950,
        "description": "From our Legends Collection the Naga was inspired by the mythical water dragon that protects the oceans pearl. Wear facing inward to be bestowed with love and abundance or outward for protection.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "sold": false,
        "dateOfSale": "2022-06-27T20:29:54+05:30",
        "month": "jun"
    },
    {
        "id": 6,
        "title": "Solid Gold Petite Micropave ",
        "price": 168,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "sold": true,
        "dateOfSale": "2021-09-27T20:29:54+05:30",
        "month": "May"
    },
    {
        "id": 7,
        "title": "White Gold Plated Princess",
        "price": 99.9,
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement Wedding Anniversary Valentines Day...",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "sold": true,
        "dateOfSale": "2022-06-27T20:29:54+05:30",
        "month": "jun"
    },
    {
        "id": 8,
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 32.97,
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        "sold": false,
        "dateOfSale": "2021-11-27T20:29:54+05:30",
        "month": "May"
    },
    {
        "id": 9,
        "title": "WD 2TB Elements Portable External Hard Drive  USB 30 ",
        "price": 704,
        "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity Compatibility Formatted NTFS for Windows 10 Windows 8.1 Windows 7 Reformatting may be required for other operating systems Compatibility may vary depending on users hardware configuration and operating system",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "sold": true,
        "dateOfSale": "2022-07-27T20:29:54+05:30",
        "month": "jun"
    },
    {
        "id": 10,
        "title": "SanDisk SSD PLUS 1TB Internal SSD  SATA III 6 Gbs",
        "price": 763,
        "description": "Easy upgrade for faster boot up shutdown application load and response As compared to 5400 RPM SATA 2.5 hard drive Based on published specifications and internal benchmarking tests using PCMark vantage scores Boosts burst write performance making it ideal for typical PC workloads The perfect balance of performance and reliability Readwrite speeds of up to 535MBs450MBs Based on internal testing Performance may vary depending upon drive capacity host device OS and application.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "sold": false,
        "dateOfSale": "2022-03-27T20:29:54+05:30",
        "month": "apr"
    },
    {
        "id": 11,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 25",
        "price": 109,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultraslim notebooks. Supports TRIM command Garbage Collection technology RAID and ECC Error Checking  Correction to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "sold": false,
        "dateOfSale": "2021-09-27T20:29:54+05:30",
        "month": "jun"
    },
    {
        "id": 12,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 798,
        "description": "Expand your PS4 gaming experience Play anywhere Fast and easy setup Sleek design with high capacity 3year manufacturers limited warranty",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "sold": true,
        "dateOfSale": "2022-03-27T20:29:54+05:30",
        "month": "feb"
    },
    {
        "id": 13,
        "title": "Acer SB220Q bi 215 inches Full HD 1920 x 1080 IPS UltraThin",
        "price": 4792,
        "description": "21. 5 inches Full HD 1920 x 1080 widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate 75Hz  Using HDMI port Zeroframe design  ultrathin  4ms response time  IPS panel Aspect ratio  16 9. Color Supported  16. 7 million colors. Brightness  250 nit Tilt angle 5 degree to 15 degree. Horizontal viewing angle178 degree. Vertical viewing angle178 degree 75 hertz",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "sold": false,
        "dateOfSale": "2022-04-27T20:29:54+05:30",
        "month": "feb"
    },
    {
        "id": 14,
        "title": "Samsung 49Inch CHG90 144Hz Curved Gaming Monitor LC49HG90DMNXZA  Super Ultrawide Screen QLED ",
        "price": 4999.95,
        "description": "49 INCH SUPER ULTRAWIDE 329 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT QLED TECHNOLOGY HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur ghosting and reduce input lag",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "sold": true,
        "dateOfSale": "2022-01-27T20:29:54+05:30",
        "month": "May"
    },
    {
        "id": 15,
        "title": "BIYLACLESEN Womens 3in1 Snowboard Jacket Winter Coats",
        "price": 284.95,
        "description": "NoteThe Jackets is US standard size Please choose size as your usual wear Material 100 Polyester Detachable Liner Fabric Warm Fleece. Detachable Functional Liner Skin Friendly Lightweigt and Warm.Stand Collar Liner jacket keep you warm in cold weather. Zippered Pockets 2 Zippered Hand Pockets 2 Zippered Pockets on Chest enough to keep cards or keysand 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and waterfor a comfortable fit. 3 in 1 Detachable Design provide more convenience you can separate the coat and inner as needed or wear it together. It is suitable for different season and help you adapt to different climates",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "sold": true,
        "dateOfSale": "2022-01-27T20:29:54+05:30",
        "month": "dec"
    },
    {
        "id": 16,
        "title": "Lock and Love Womens Removable Hooded Faux Leather Moto Biker Jacket",
        "price": 59.9,
        "description": "100 POLYURETHANEshell 100 POLYESTERlining 75 POLYESTER 25 COTTON SWEATER Faux leather material for style and comfort  2 pockets of front 2ForOne Hooded denim style faux leather jacket Button detail on waist  Detail stitching at sides HAND WASH ONLY  DO NOT BLEACH  LINE DRY  DO NOT IRON",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        "sold": false,
        "dateOfSale": "2021-10-27T20:29:54+05:30",
        "month": "dec"
    },
    {
        "id": 17,
        "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "price": 359.91,
        "description": "Lightweight perfet for trip or casual wearLong sleeve with hooded adjustable drawstring waist design. Button and zipper front closure raincoat fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things it covers the hips and the hood is generous but doesnt overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "sold": false,
        "dateOfSale": "2022-05-27T20:29:54+05:30",
        "month": "dec"
    },
    {
        "id": 18,
        "title": "MBJ Womens Solid Short Sleeve Boat Neck V ",
        "price": 29.549999999999997,
        "description": "95 RAYON 5 SPANDEX Made in USA or Imported Do Not Bleach Lightweight fabric with great stretch for comfort Ribbed on sleeves and neckline  Double stitching on bottom hem",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "sold": true,
        "dateOfSale": "2021-11-27T20:29:54+05:30",
        "month":"dec"
    },
    {
        "id": 19,
        "title": "Opna Womens Short Sleeve Moisture",
        "price": 39.75,
        "description": "100 Polyester Machine wash 100 cationic polyester interlock Machine Wash  Pre Shrunk for a Great Fit Lightweight roomy and highly breathable with moisture wicking fabric which helps to keep moisture away Soft Lightweight Fabric with comfortable Vneck collar and a slimmer fit delivers a sleek more feminine silhouette and Added Comfort",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        "sold": false,
        "dateOfSale": "2022-01-27T20:29:54+05:30",
        "month":"dec"
    },
    {
        "id": 20,
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        "price": 77.94,
        "description": "95Cotton5Spandex Features Casual Short Sleeve Letter PrintVNeckFashion Tees The fabric is soft and has some stretch. Occasion CasualOfficeBeachSchoolHomeStreet. Season SpringSummerAutumnWinter.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "sold": false,
        "dateOfSale": "2022-02-27T20:29:54+05:30",
        "month":"dec"
    },
    {
        "id": 21,
        "title": "Fjallraven  Foldsack No 1 Backpack Fits 15 Laptops",
        "price": 439.8,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop up to 15 inches in the padded sleeve your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "sold": true,
        "dateOfSale": "2021-12-27T20:29:54+05:30",
        "month":"mar"
    },
    {
        "id": 22,
        "title": "Mens Casual Premium Slim Fit TShirts ",
        "price": 111.5,
        "description": "Slimfitting style contrast raglan long sleeve threebutton henley placket light weight  soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a threebutton placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "sold": false,
        "dateOfSale": "2022-01-27T20:29:54+05:30",
        "month":"dec"
    },
    {
        "id": 23,
        "title": "Mens Cotton Jacket",
        "price": 559.9,
        "description": "great outerwear jackets for SpringAutumnWinter suitable for many occasions such as working hiking camping mountainrock climbing cycling traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "sold": false,
        "dateOfSale": "2022-06-27T20:29:54+05:30",
        "month":"jun"
    },
    {
        "id": 24,
        "title": "Mens Casual Slim Fit",
        "price": 31.98,
        "description": "The color could be slightly different between on the screen and in practice.  Please note that body builds vary by person therefore detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "sold": true,
        "dateOfSale": "2021-10-27T20:29:54+05:30",
        "month":"dec"
    },
    {
        "id": 25,
        "title": "John Hardy Womens Legends Naga Gold  Silver Dragon Station Chain Bracelet",
        "price": 695,
        "description": "From our Legends Collection the Naga was inspired by the mythical water dragon that protects the oceans pearl. Wear facing inward to be bestowed with love and abundance or outward for protection.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "sold": false,
        "dateOfSale": "2021-09-27T20:29:54+05:30",
        "month":"dec"
    },
    {
        "id": 26,
        "title": "Solid Gold Petite Micropave ",
        "price": 504,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "sold": false,
        "dateOfSale": "2021-11-27T20:29:54+05:30",
        "month":"dec"
    },
    {
        "id": 27,
        "title": "White Gold Plated Princess",
        "price": 79.92,
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement Wedding Anniversary Valentines Day...",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "sold": true,
        "dateOfSale": "2022-04-27T20:29:54+05:30",
        "month":"dec"
    },
    {
        "id": 28,
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 131.88,
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        "sold": true,
        "dateOfSale": "2022-08-27T20:29:54+05:30",
        "month":"apr"
    },
    {
        "id": 29,
        "title": "WD 2TB Elements Portable External Hard Drive  USB 30 ",
        "price": 640,
        "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity Compatibility Formatted NTFS for Windows 10 Windows 8.1 Windows 7 Reformatting may be required for other operating systems Compatibility may vary depending on users hardware configuration and operating system",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "sold": false,
        "dateOfSale": "2022-06-27T20:29:54+05:30",
        "month":"dec"
    },
    {
        "id": 30,
        "title": "SanDisk SSD PLUS 1TB Internal SSD  SATA III 6 Gbs",
        "price": 218,
        "description": "Easy upgrade for faster boot up shutdown application load and response As compared to 5400 RPM SATA 2.5 hard drive Based on published specifications and internal benchmarking tests using PCMark vantage scores Boosts burst write performance making it ideal for typical PC workloads The perfect balance of performance and reliability Readwrite speeds of up to 535MBs450MBs Based on internal testing Performance may vary depending upon drive capacity host device OS and application.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "sold": true,
        "dateOfSale": "2021-10-27T20:29:54+05:30",
        "month":"dec"
    },
    {
        "id": 31,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 25",
        "price": 545,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultraslim notebooks. Supports TRIM command Garbage Collection technology RAID and ECC Error Checking  Correction to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "sold": false,
        "dateOfSale": "2022-01-27T20:29:54+05:30",
        "month":"mar"
    },
    {
        "id": 32,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 1026,
        "description": "Expand your PS4 gaming experience Play anywhere Fast and easy setup Sleek design with high capacity 3year manufacturers limited warranty",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "sold": false,
        "dateOfSale": "2022-05-27T20:29:54+05:30",
        "month":"mar"
    },
    {
        "id": 33,
        "title": "Acer SB220Q bi 215 inches Full HD 1920 x 1080 IPS UltraThin",
        "price": 1198,
        "description": "21. 5 inches Full HD 1920 x 1080 widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate 75Hz  Using HDMI port Zeroframe design  ultrathin  4ms response time  IPS panel Aspect ratio  16 9. Color Supported  16. 7 million colors. Brightness  250 nit Tilt angle 5 degree to 15 degree. Horizontal viewing angle178 degree. Vertical viewing angle178 degree 75 hertz",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "sold": true,
        "dateOfSale": "2021-10-27T20:29:54+05:30",
        "month":"mar"
    },
    {
        "id": 34,
        "title": "Samsung 49Inch CHG90 144Hz Curved Gaming Monitor LC49HG90DMNXZA  Super Ultrawide Screen QLED ",
        "price": 999.99,
        "description": "49 INCH SUPER ULTRAWIDE 329 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT QLED TECHNOLOGY HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur ghosting and reduce input lag",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "sold": false,
        "dateOfSale": "2021-09-27T20:29:54+05:30",
        "month":"mar"
    },
    {
        "id": 35,
        "title": "BIYLACLESEN Womens 3in1 Snowboard Jacket Winter Coats",
        "price": 569.9,
        "description": "NoteThe Jackets is US standard size Please choose size as your usual wear Material 100 Polyester Detachable Liner Fabric Warm Fleece. Detachable Functional Liner Skin Friendly Lightweigt and Warm.Stand Collar Liner jacket keep you warm in cold weather. Zippered Pockets 2 Zippered Hand Pockets 2 Zippered Pockets on Chest enough to keep cards or keysand 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and waterfor a comfortable fit. 3 in 1 Detachable Design provide more convenience you can separate the coat and inner as needed or wear it together. It is suitable for different season and help you adapt to different climates",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "sold": true,
        "dateOfSale": "2022-06-27T20:29:54+05:30",
        "month":"jun"
    },
    {
        "id": 36,
        "title": "Lock and Love Womens Removable Hooded Faux Leather Moto Biker Jacket",
        "price": 269.55,
        "description": "100 POLYURETHANEshell 100 POLYESTERlining 75 POLYESTER 25 COTTON SWEATER Faux leather material for style and comfort  2 pockets of front 2ForOne Hooded denim style faux leather jacket Button detail on waist  Detail stitching at sides HAND WASH ONLY  DO NOT BLEACH  LINE DRY  DO NOT IRON",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        "sold": true,
        "dateOfSale": "2022-05-27T20:29:54+05:30",
        "month":"jun"
    },
    {
        "id": 37,
        "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "price": 279.93,
        "description": "Lightweight perfet for trip or casual wearLong sleeve with hooded adjustable drawstring waist design. Button and zipper front closure raincoat fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things it covers the hips and the hood is generous but doesnt overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "sold": false,
        "dateOfSale": "2022-03-27T20:29:54+05:30",
        "month":"jun"
    },
    {
        "id": 38,
        "title": "MBJ Womens Solid Short Sleeve Boat Neck V ",
        "price": 29.549999999999997,
        "description": "95 RAYON 5 SPANDEX Made in USA or Imported Do Not Bleach Lightweight fabric with great stretch for comfort Ribbed on sleeves and neckline  Double stitching on bottom hem",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "sold": false,
        "dateOfSale": "2021-11-27T20:29:54+05:30",
        "month":"jun"
    },
    {
        "id": 39,
        "title": "Opna Womens Short Sleeve Moisture",
        "price": 79.5,
        "description": "100 Polyester Machine wash 100 cationic polyester interlock Machine Wash  Pre Shrunk for a Great Fit Lightweight roomy and highly breathable with moisture wicking fabric which helps to keep moisture away Soft Lightweight Fabric with comfortable Vneck collar and a slimmer fit delivers a sleek more feminine silhouette and Added Comfort",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        "sold": true,
        "dateOfSale": "2022-06-27T20:29:54+05:30",
        "month":"jun"
    },
    {
        "id": 40,
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        "price": 129.9,
        "description": "95Cotton5Spandex Features Casual Short Sleeve Letter PrintVNeckFashion Tees The fabric is soft and has some stretch. Occasion CasualOfficeBeachSchoolHomeStreet. Season SpringSummerAutumnWinter.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "sold": false,
        "dateOfSale": "2022-06-27T20:29:54+05:30",
        "month":"jun"
    },
    {
        "id": 41,
        "title": "Fjallraven  Foldsack No 1 Backpack Fits 15 Laptops",
        "price": 549.75,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop up to 15 inches in the padded sleeve your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "sold": false,
        "dateOfSale": "2022-01-27T20:29:54+05:30",
        "month":"jun"
    },
    {
        "id": 42,
        "title": "Mens Casual Premium Slim Fit TShirts ",
        "price": 89.2,
        "description": "Slimfitting style contrast raglan long sleeve threebutton henley placket light weight  soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a threebutton placket.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "sold": true,
        "dateOfSale": "2021-12-27T20:29:54+05:30",
        "month":"jun"
    },
    {
        "id": 43,
        "title": "Mens Cotton Jacket",
        "price": 503.91,
        "description": "great outerwear jackets for SpringAutumnWinter suitable for many occasions such as working hiking camping mountainrock climbing cycling traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "sold": false,
        "dateOfSale": "2022-05-27T20:29:54+05:30",
        "month":"jun"
    },
    {
        "id": 44,
        "title": "Mens Casual Slim Fit",
        "price": 63.96,
        "description": "The color could be slightly different between on the screen and in practice.  Please note that body builds vary by person therefore detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
        "sold": false,
        "dateOfSale": "2021-12-27T20:29:54+05:30",
        "month":"jun"
    },
    {
        "id": 45,
        "title": "John Hardy Womens Legends Naga Gold  Silver Dragon Station Chain Bracelet",
        "price": 6950,
        "description": "From our Legends Collection the Naga was inspired by the mythical water dragon that protects the oceans pearl. Wear facing inward to be bestowed with love and abundance or outward for protection.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
        "sold": true,
        "dateOfSale": "2022-06-27T20:29:54+05:30",
        "month":"jun"
    },
    {
        "id": 46,
        "title": "Solid Gold Petite Micropave ",
        "price": 1512,
        "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        "sold": false,
        "dateOfSale": "2022-05-27T20:29:54+05:30",
        "month":"Oct"
    },
    {
        "id": 47,
        "title": "White Gold Plated Princess",
        "price": 109.89,
        "description": "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement Wedding Anniversary Valentines Day...",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
        "sold": false,
        "dateOfSale": "2022-07-27T20:29:54+05:30",
        "month":"Oct"
    },
    {
        "id": 48,
        "title": "Pierced Owl Rose Gold Plated Stainless Steel Double",
        "price": 87.92,
        "description": "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
        "category": "jewelery",
        "image": "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
        "sold": true,
        "dateOfSale": "2022-04-27T20:29:54+05:30",
        "month":"Oct"
    },
    {
        "id": 49,
        "title": "WD 2TB Elements Portable External Hard Drive  USB 30 ",
        "price": 768,
        "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity Compatibility Formatted NTFS for Windows 10 Windows 8.1 Windows 7 Reformatting may be required for other operating systems Compatibility may vary depending on users hardware configuration and operating system",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
        "sold": true,
        "dateOfSale": "2022-08-27T20:29:54+05:30",
        "month":"Oct"
    },
    {
        "id": 50,
        "title": "SanDisk SSD PLUS 1TB Internal SSD  SATA III 6 Gbs",
        "price": 1090,
        "description": "Easy upgrade for faster boot up shutdown application load and response As compared to 5400 RPM SATA 2.5 hard drive Based on published specifications and internal benchmarking tests using PCMark vantage scores Boosts burst write performance making it ideal for typical PC workloads The perfect balance of performance and reliability Readwrite speeds of up to 535MBs450MBs Based on internal testing Performance may vary depending upon drive capacity host device OS and application.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        "sold": false,
        "dateOfSale": "2022-06-27T20:29:54+05:30",
        "month":"Oct"
    },
    {
        "id": 51,
        "title": "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 25",
        "price": 981,
        "description": "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultraslim notebooks. Supports TRIM command Garbage Collection technology RAID and ECC Error Checking  Correction to provide the optimized performance and enhanced reliability.",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
        "sold": true,
        "dateOfSale": "2022-05-27T20:29:54+05:30",
        "month":"Oct"
    },
    {
        "id": 52,
        "title": "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
        "price": 1254,
        "description": "Expand your PS4 gaming experience Play anywhere Fast and easy setup Sleek design with high capacity 3year manufacturers limited warranty",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
        "sold": false,
        "dateOfSale": "2022-07-27T20:29:54+05:30",
        "month":"Oct"
    },
    {
        "id": 53,
        "title": "Acer SB220Q bi 215 inches Full HD 1920 x 1080 IPS UltraThin",
        "price": 6589,
        "description": "21. 5 inches Full HD 1920 x 1080 widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate 75Hz  Using HDMI port Zeroframe design  ultrathin  4ms response time  IPS panel Aspect ratio  16 9. Color Supported  16. 7 million colors. Brightness  250 nit Tilt angle 5 degree to 15 degree. Horizontal viewing angle178 degree. Vertical viewing angle178 degree 75 hertz",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
        "sold": false,
        "dateOfSale": "2022-07-27T20:29:54+05:30",
        "month":"Oct"
    },
    {
        "id": 54,
        "title": "Samsung 49Inch CHG90 144Hz Curved Gaming Monitor LC49HG90DMNXZA  Super Ultrawide Screen QLED ",
        "price": 999.99,
        "description": "49 INCH SUPER ULTRAWIDE 329 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT QLED TECHNOLOGY HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur ghosting and reduce input lag",
        "category": "electronics",
        "image": "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
        "sold": true,
        "dateOfSale": "2021-09-27T20:29:54+05:30",
        "month":"Oct"
    },
    {
        "id": 55,
        "title": "BIYLACLESEN Womens 3in1 Snowboard Jacket Winter Coats",
        "price": 626.89,
        "description": "NoteThe Jackets is US standard size Please choose size as your usual wear Material 100 Polyester Detachable Liner Fabric Warm Fleece. Detachable Functional Liner Skin Friendly Lightweigt and Warm.Stand Collar Liner jacket keep you warm in cold weather. Zippered Pockets 2 Zippered Hand Pockets 2 Zippered Pockets on Chest enough to keep cards or keysand 1 Hidden Pocket Inside.Zippered Hand Pockets and Hidden Pocket keep your things secure. Humanized Design Adjustable and Detachable Hood and Adjustable cuff to prevent the wind and waterfor a comfortable fit. 3 in 1 Detachable Design provide more convenience you can separate the coat and inner as needed or wear it together. It is suitable for different season and help you adapt to different climates",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
        "sold": false,
        "dateOfSale": "2022-07-27T20:29:54+05:30",
        "month":"Oct"
    },
    {
        "id": 56,
        "title": "Lock and Love Womens Removable Hooded Faux Leather Moto Biker Jacket",
        "price": 179.7,
        "description": "100 POLYURETHANEshell 100 POLYESTERlining 75 POLYESTER 25 COTTON SWEATER Faux leather material for style and comfort  2 pockets of front 2ForOne Hooded denim style faux leather jacket Button detail on waist  Detail stitching at sides HAND WASH ONLY  DO NOT BLEACH  LINE DRY  DO NOT IRON",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
        "sold": true,
        "dateOfSale": "2022-02-27T20:29:54+05:30",
        "month":"Oct"
    },
    {
        "id": 57,
        "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        "price": 339.99,
        "description": "Lightweight perfet for trip or casual wearLong sleeve with hooded adjustable drawstring waist design. Button and zipper front closure raincoat fully stripes Lined and The Raincoat has 2 side pockets are a good size to hold all kinds of things it covers the hips and the hood is generous but doesnt overdo it.Attached Cotton Lined Hood with Adjustable Drawstrings give it a real styled look.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        "sold": true,
        "dateOfSale": "2021-09-27T20:29:54+05:30",
        "month":"Oct"
    },
    {
        "id": 58,
        "title": "MBJ Womens Solid Short Sleeve Boat Neck V ",
        "price": 59.099999999999994,
        "description": "95 RAYON 5 SPANDEX Made in USA or Imported Do Not Bleach Lightweight fabric with great stretch for comfort Ribbed on sleeves and neckline  Double stitching on bottom hem",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
        "sold": false,
        "dateOfSale": "2022-02-27T20:29:54+05:30",
        "month":"Oct"
    },
    {
        "id": 59,
        "title": "Opna Womens Short Sleeve Moisture",
        "price": 79.5,
        "description": "100 Polyester Machine wash 100 cationic polyester interlock Machine Wash  Pre Shrunk for a Great Fit Lightweight roomy and highly breathable with moisture wicking fabric which helps to keep moisture away Soft Lightweight Fabric with comfortable Vneck collar and a slimmer fit delivers a sleek more feminine silhouette and Added Comfort",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
        "sold": false,
        "dateOfSale": "2022-06-27T20:29:54+05:30",
        "month":"Oct"
    },
    {
        "id": 60,
        "title": "DANVOUY Womens T Shirt Casual Cotton Short",
        "price": 412.99,
        "description": "95Cotton5Spandex Features Casual Short Sleeve Letter PrintVNeckFashion Tees The fabric is soft and has some stretch. Occasion CasualOfficeBeachSchoolHomeStreet. Season SpringSummerAutumnWinter.",
        "category": "women's clothing",
        "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
        "sold": true,
        "dateOfSale": "2021-09-27T20:29:54+05:30",
        "month":"Oct"
    }
];

get filteredData() {
    return this.selectedMonth ? this.transactions.filter( transactions=> transactions.month === this.selectedMonth) : this.transactions;
  }

  currentPage: number = 1;
  itemsPerPage: number = 5;

  get filteredTransactions() {
    const filtered = this.selectedMonth
      ? this.transactions.filter(transaction => transaction.month.toLowerCase() === this.selectedMonth.toLowerCase())
      : this.transactions;
    return filtered.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }

  get totalPages() {
    const filtered = this.selectedMonth
      ? this.transactions.filter(transaction => transaction.month.toLowerCase() === this.selectedMonth.toLowerCase())
      : this.transactions;
    return Math.ceil(filtered.length / this.itemsPerPage);
  }

  get monthStatistics() {
    if (!this.selectedMonth) {
      return null;
    }

    const monthTransactions = this.transactions.filter(
      transaction => transaction.month.toLowerCase() === this.selectedMonth.toLowerCase()
    );

    if (monthTransactions.length === 0) {
      return null;
    }

    const totalSales = monthTransactions.filter(t => t.sold).reduce((sum, t) => sum + t.price, 0);
    const totalSold = monthTransactions.filter(t => t.sold).length;
    const totalUnsold = monthTransactions.filter(t => !t.sold).length;

    return {
      month: this.selectedMonth,
      totalSales,
      totalSold,
      totalUnsold
    };
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }



  getPriceRangeDistribution() {
    const priceRanges = {
      '0-100': 0,
      '101-200': 0,
      '201-300': 0,
      '301-400': 0,
      '401-500': 0,
      '501-600': 0,
      '601-700': 0,
      '701-800': 0,
      '801-900': 0,
      '901-above': 0
    };

    this.filteredTransactions.forEach(transaction => {
      const price = transaction.price;
      if (price <= 100) priceRanges['0-100']++;
      else if (price <= 200) priceRanges['101-200']++;
      else if (price <= 300) priceRanges['201-300']++;
      else if (price <= 400) priceRanges['301-400']++;
      else if (price <= 500) priceRanges['401-500']++;
      else if (price <= 600) priceRanges['501-600']++;
      else if (price <= 700) priceRanges['601-700']++;
      else if (price <= 800) priceRanges['701-800']++;
      else if (price <= 900) priceRanges['801-900']++;
      else priceRanges['901-above']++;
    });

    return priceRanges;
  }

  // Pie chart data for unique categories
  getCategoryDistribution() {
    const categoryCounts: { [key: string]: number } = {};

    this.filteredTransactions.forEach(transaction => {
      if (categoryCounts[transaction.category]) {
        categoryCounts[transaction.category]++;
      } else {
        categoryCounts[transaction.category] = 1;
      }
    });

    return categoryCounts;
  }

  // Initialize Bar Chart
  createBarChart() {
    const priceRangeData = this.getPriceRangeDistribution();
    const barCanvas = document.getElementById('barChart') as HTMLCanvasElement;
    new Chart(barCanvas, {
      type: 'bar',
      data: {
        labels: Object.keys(priceRangeData),
        datasets: [
          {
            label: 'Number of Items',
            data: Object.values(priceRangeData),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  // Initialize Pie Chart
  createPieChart() {
    const categoryData = this.getCategoryDistribution();
    const pieCanvas = document.getElementById('pieChart') as HTMLCanvasElement;
    new Chart(pieCanvas, {
      type: 'pie',
      data: {
        labels: Object.keys(categoryData),
        datasets: [
          {
            label: 'Number of Items',
            data: Object.values(categoryData),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }
        ]
      }
    });
  }

  // Update charts when month changes
  updateCharts() {
    this.createBarChart();
    this.createPieChart();
  }

  // Initialize charts on component load
  ngOnInit() {
    this.updateCharts();
  }
}