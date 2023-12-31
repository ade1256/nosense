"use client";

import Navbar from "@/components/Navbar";
import "./style.scss";
import ImgTshirt1Front from "@/assets/images/merch/tshirt1_front.png";
import ImgTshirt1Back from "@/assets/images/merch/tshirt1_back.png";
import ImgTshirt2Front from "@/assets/images/merch/tshirt2_front.png";
import ImgTshirt2Back from "@/assets/images/merch/tshirt2_back.png";
import ImgTshirt3Front from "@/assets/images/merch/tshirt3_front.png";
import ImgTshirt3Back from "@/assets/images/merch/tshirt3_back.png";
import ImgTshirt4Front from "@/assets/images/merch/tshirt4_front.png";
import { rupiah } from "@/utils/utils";

const MerchPage = () => {
  const products = [
    // {
    //   name: "Nosense Listen to The Defening Silence Tee Blue",
    //   price: 185000,
    //   sizes: ["X", "XL", "XXL"],
    //   imgFront: ImgTshirt1Front.src,
    //   imgBack: ImgTshirt1Back.src,
    //   link: "https://www.instagram.com/nosense_______cltv/",
    // },
    {
      name: "Nosense Tee Nosense Illogical Rhythmic Sounds Black  T- shirt",
      price: 249000,
      sizes: ["M", "L", "X-Large"],
      imgFront: ImgTshirt2Front.src,
      imgBack: ImgTshirt2Back.src,
      link: "https://order.nosensecollective.com/products/nosense-illogical-rhythmic-sounds-black-t-shirt",
    },
    {
      name: "Nosense Illogical Rhythmic Sounds White  T- shirt",
      price: 249000,
      sizes: ["M", "L", "X-Large"],
      imgFront: ImgTshirt3Front.src,
      imgBack: ImgTshirt3Back.src,
      link: "https://order.nosensecollective.com/products/nosense-illogical-rhythmic-sounds-white-t-shirt",
    },
    // {
    //   name: "Nosense Listen to The Defening Silence Long Slive White",
    //   price: 225000,
    //   sizes: ["M", "X", "XL", "XXL"],
    //   imgFront: ImgTshirt4Front.src,
    //   imgBack: ImgTshirt4Front.src,
    //   link: "https://www.instagram.com/nosense_______cltv/",
    // },
  ];
  return (
    <>
      <Navbar />
      <div className="content">
        <div className="products-merch">
          {products.map((product: any, key: number) => (
            <div
              className="product"
              key={key}
            >
              <div className="image">
                <img
                  src={product.imgFront}
                  alt={`Front-${product.name}`}
                  className="front"
                />
                <img
                  src={product.imgBack}
                  alt={`Back-${product.name}`}
                  className="back"
                />
              </div>
              <div className="details" onClick={() => (window.location.href = product.link)}>
                <div className="title">{product.name}</div>
                <div className="price">{rupiah(product.price)}</div>
                <div className="size">
                  {product.sizes.map((size: any, index: number) => (
                    <span key={index}>{size}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MerchPage;
