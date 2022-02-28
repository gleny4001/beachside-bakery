import applePie from "../../images/products/Apple pie.jpg";
import kumquatBundtCake from "../../images/products/Kumquat Bundt Cake.jpg";
import peanutButterChocolate from "../../images/products/peanut cookies 2.jpg";
import candyCake from "../../images/products/Candy Cake.jpg";
import traditionalCheesecake from "../../images/products/Traditional Cheesecake.jpg";
import fruitToppedCheescake from "../../images/products/Fruit Topped Cheesecake .jpg";
import cupcakes from "../../images/products/cupcakes 3.jpg";
import muffins from "../../images/products/Muffins.jpg";
import coconutMacaroons from "../../images/products/Coconut Macaroons.jpg";
import blossomCookies from "../../images/products/Blossom Cookies.jpg";
import traditionalChocolateChipCookies from "../../images/products/Traditional Chocolate Chip Cookies 2.jpg";
import hotCocoBombs from "../../images/products/Hot Coco Bombs.jpg";
import pumpkinBread from "../../images/products/Pumpkin Bread.jpg";
import brownies from "../../images/products/brownies 2.jpg";
import cakePops from "../../images/products/cake pops.jpg";
import pretzelRods from "../../images/products/pretzels 2.jpg";
import chocolateCoveredStrawberries from "../../images/products/chocolate covered strawberries .jpg";
import chocolateCoveredCherries from "../../images/products/cherries.jpg";
import miniRaspberyyCheesecakes from "../../images/products/mini raspberry cheesecakes.jpg";
import heartCake from "../../images/products/heart cake 3.jpg";
import riceKrispyTreats from "../../images/products/rice krispy treats 2.jpg";
import peppermintBark from "../../images/products/peppermintBark.jpg";
import raspberryCreamCheesecake from "../../images/products/raspberry cream cheesecake .jpg";

const productData = [
  {
    id: 1,
    img: applePie,
    alt: "Apple pie",
    name: "Apple pie",
    desc:
      "Made with homegrown apples, cinnamon, and nutmeg. Can customize top crust design in message section of order.",
    price: "12",
    type: "pie",
    button: "Add to Cart"
  },
  {
    id: 2,
    img: peanutButterChocolate,
    alt: "Peanut Butter Chocolate Cookies",
    name: "Peanut Butter Chocolate Cookies",
    desc:
      "One dozen chocolate chip peanut butter cookies made with your choice of smooth or crunchy peanut butter. Gluten free.",
    price: "10",
    type: "cookie",
    button: "Add to Cart"
  },
  {
    id: 3,
    img: kumquatBundtCake,
    alt: "Kumquat Bundt Cake",
    name: "Kumquat Bundt Cake",
    desc: "Made with homegrown kumquats and topped with sweet kumquat syrup.",
    price: "15",
    type: "cake",
    button: "Add to Cart"
  },
  {
    id: 4,
    img: candyCake,
    alt: "Candy Cake",
    name: "Candy Cake",
    desc: "Any flavor cake decorated with your choice of candy.",
    price: "28",
    type: "cake",
    button: "Add to Cart"
  },
  {
    id: 5,
    img: traditionalCheesecake,
    alt: "Traditional Cheesecake",
    name: "Traditional Cheesecake",
    desc: "Baked in a spring form pan with a graham cracker crust.",
    price: "15",
    type: "cake",
    button: "Add to Cart"
  },
  {
    id: 6,
    img: chocolateCoveredCherries,
    alt: "Chocolate Covered Cherries",
    name: "Chocolate Covered Cherries",
    desc:
      "ADD ON item only. Maraschino Cherries covered in your choice of dark or milk chocolate.",
    price: "2",
    type: "etc",
    button: "Add to Cart"
  },
  {
    id: 7,
    img: fruitToppedCheescake,
    alt: "Fruit Topped Cheesecake",
    name: "Fruit Topped Cheesecake",
    desc:
      "Traditional cheesecake with your choice of fruit toppings, such as strawberries, cherries, berries, syrups and more.",
    price: "18",
    type: "cake",
    button: "Add to Cart"
  },
  {
    id: 8,
    img: cupcakes,
    alt: "Cupcakes",
    name: "Cupcakes",
    desc: "One dozen fully customizable for flavor, color, and decorations.",
    price: "15",
    type: "cake",
    button: "Add to Cart"
  },
  {
    id: 9,
    img: muffins,
    alt: "Muffins",
    name: "Muffins",
    desc:
      "One dozen muffins. Varieties include Blueberry, banana, orange, chocolate, lemon",
    price: "10",
    type: "cake",
    button: "Add to Cart"
  },
  {
    id: 10,
    img: coconutMacaroons,
    alt: "Coconut Macaroons",
    name: "Coconut Macaroons",
    desc: "One dozen chocolate dipped coconut macaroons.",
    price: "15",
    type: "pastry",
    button: "Add to Cart"
  },
  {
    id: 11,
    img: blossomCookies,
    alt: "Blossom Cookies",
    name: "Blossom Cookies",
    desc:
      "One dozen peanut butter cookies topped with a chocolate kiss. Subsite sugar cookies for peanut butter in the message section of order.",
    price: "15",
    type: "cookie",
    button: "Add to Cart"
  },
  {
    id: 12,
    img: traditionalChocolateChipCookies,
    alt: "Traditional Chocolate Chip Cookies",
    name: "Traditional Chocolate Chip Cookies",
    desc:
      "One dozen chocolate chip cookies made with a mix of dark and milk chocolate.",
    price: "10",
    type: "cookie",
    button: "Add to Cart"
  },
  {
    id: 13,
    img: hotCocoBombs,
    alt: "Hot Coco Bombs",
    name: "Hot Coco Bombs",
    desc:
      "One hot coco bomb, color, and fillings customizable. Typically ordered with marshmallows and peppermint inside.",
    price: "4",
    type: "etc",
    button: "Add to Cart"
  },
  {
    id: 14,
    img: pumpkinBread,
    alt: "Pumpkin Bread",
    name: "Pumpkin Bread",
    desc:
      "One loaf of freshly baked pumpkin bread. Can add chocolate chips to the loaf.",
    price: "8",
    type: "pastry",
    button: "Add to Cart"
  },
  {
    id: 15,
    img: brownies,
    alt: "Brownies",
    name: "Brownies",
    desc: "One dozen of chocolate chunk brownies. Vegan alterative available.",
    price: "15",
    type: "pastry",
    button: "Add to Cart"
  },
  {
    id: 16,
    img: cakePops,
    alt: "Cake Pops",
    name: "Cake Pops",
    desc: "One dozen cake pops, customized flavor, colors, and decorations.",
    price: "16",
    type: "pastry",
    button: "Add to Cart"
  },
  {
    id: 17,
    img: pretzelRods,
    alt: "Pretzel Rods",
    name: "Pretzel Rods",
    desc:
      "One dozen chocolate covered pretzel rods. Fully customizable decorations.",
    price: "16",
    type: "pastry",
    button: "Add to Cart"
  },
  {
    id: 18,
    img: chocolateCoveredStrawberries,
    alt: "Chocolate Covered Strawberries",
    name: "Chocolate Covered Strawberries",
    desc:
      "One dozen chocolate covered strawberries. Decorations and colors fully customizable.",
    price: "20",
    type: "etc",
    button: "Add to Cart"
  },
  {
    id: 19,
    img: miniRaspberyyCheesecakes,
    alt: "Mini Raspberry Cheescakes",
    name: "Mini Raspberry Cheescakes",
    desc:
      "One dozen cupcake sized cheesecakes with a swirl of raspberry syrup.",
    price: "28",
    type: "cake",
    button: "Add to Cart"
  },
  {
    id: 20,
    img: heartCake,
    alt: "Heart Cake",
    name: "Heart Cake",
    desc: "Any flavor cake, fully customizable for flavor and design.",
    price: "15",
    type: "cake",
    button: "Add to Cart"
  },
  {
    id: 21,
    img: riceKrispyTreats,
    alt: "Rice Krispy Treats",
    name: "Rice Krispy Treats",
    desc:
      "One dozen chocolate dipped rice Krispy treats. Customize the dipping color and decorations.",
    price: "10",
    type: "etc",
    button: "Add to Cart"
  },
  {
    id: 22,
    img: peppermintBark,
    alt: "Peppermint Bark",
    name: "Peppermint Bark",
    desc: "One dozen chunks of peppermint bark.",
    price: "10",
    type: "etc",
    button: "Add to Cart"
  },
  {
    id: 23,
    img: raspberryCreamCheesecake,
    alt: "Raspberry Cream Cheescake",
    name: "Raspberry Cream Cheescake",
    desc:
      "Raspberry cheesecake made with raspberry syrup and topped with raspberries.",
    price: "15",
    type: "cake",
    button: "Add to Cart"
  }
];

export default productData;
