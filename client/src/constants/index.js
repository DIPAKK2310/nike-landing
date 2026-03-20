import icons from '../assets/icons'
const { facebook, instagram, shieldTick, support, truckFast, twitter} = icons;

import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, customer3, customer4, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3} from "../assets/images";

export const navLinks = [
    {href: "#home", label: "Home"},
    {href: "#about-us", label: "About Us"},
    {href: "#products", label: "Products"},
    {href: "#contact-us", label: "Contact Us"},
];

export const shoes = [
   {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
   },
   {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
   },
   {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
   },
];

export const statistics = [
    {value: '1k+', label: 'Brands' },
    {value: '500+', label: 'Shops' },
    {value: '250k+', label: 'Customers' },
];

export const products = [
  {
   imgURL: shoe4,
   name: "Nike Air Jordan-01",
   price: "$200.20"
  },
  {
   imgURL: shoe5,
   name: "Nike Air Jordan-10",
   price: "$210.20"
  },
  {
   imgURL: shoe6,
   name: "Nike Air Jordan-100",
   price: "$220.20"
  },
  {
   imgURL: shoe7,
   name: "Nike Air Jordan-001",
   price: "$250.40"
  },
];

export const services = [
 {imgURL: truckFast,
 label: "Free Shiping",
 subtext: "Enjoy seamless shopping with our complimentry shoping services."
 },
 {imgURL: shieldTick,
 label: "Secure Payments",
 subtext: "Experience worry-free transactions with our secure payment options."
 },
 {imgURL: support,
 label: "Love to help you",
 subtext: "Our dedicatet team is here to assist you every step of the way."
 },

];

export const reviews = [
    {
        imgURL: customer1,
        customerName: 'Dawid stalin',
        rating: '4.8',
        feedback:"The attention to details and quality of the product exceeded highly recomended!"
    },
    {
        imgURL: customer2,
        customerName: 'Maria Paul',
        rating: '4.5',
        feedback:"The product not only met but exceeded my expectations. I'll definitely be a returning  customer!"

    },
      {
    imgURL: customer3,
    customerName: 'Lucas Kim',
    rating: '4.7',
    feedback: 'Great grip and design. Perfect for both casual wear and light workouts. Very satisfied!'
  },
  {
    imgURL: customer4,
    customerName: 'Saanvi Desai',
    rating: '5.0',
    feedback: 'Absolutely love the build and cushioning. These shoes turn heads wherever I go!'
  }
];

export const footerLinks = [
    {
        title: "Products",
        links: [
            {name: "Air force 1", links: "/"},
            {name: "Air Max 1", links: "/"},
            {name: "Air Jordan 1", link: "/"},
            {name: "Air Force 2", link: "/"},
            {name: "Nike Waffle", link: "/"},
            {name: "Nike Cortez", link: "/"}
        ],
    },
     {
        title: "Help",
        links: [
            {name:"About Us", link:"/"},
            {name:"FAQs", link:"/"},
            {name:"How it works", link:"/"},
            {name:"Privacy policy", link:"/"},
            {name:"Payment Policy", link:"/"},
        ],
    },
      {
        title: "Get in touch",
        links: [
            {name: "customer@nike.com", link:"mailto:customer@nike.com"},
            {name: "+92554862235", link: "tel:+92554862235"}
        ],
    },
];

export const socialMedia = [
    {src: facebook, alt:"facebook logo"},
    {src: twitter, alt:"twitter logo"},
    {src: instagram, alt:"instagram logo"},
];