import Image from 'next/image';

const ProductDetailMain = () => {
  return (
    <div className="product-detail-main-container">
      <div className="image-wrapper">
        <Image
          src="/img/productdetail/productdetailmain1.jpg"
          alt="img"
          width={800}
          height={1000}
          style={{ objectFit: 'cover' }}
        />
        <Image
          src="/img/productdetail/productdetailmain1-2.jpg"
          alt="img"
          width={800}
          height={1000}
          style={{ objectFit: 'cover' }}
        />
        <Image
          src="/img/productdetail/productdetailmain1-3.jpg"
          alt="img"
          width={800}
          height={1000}
          style={{ objectFit: 'cover' }}
        />
        <Image
          src="/img/productdetail/productdetailmain1-4.jpg"
          alt="img"
          width={800}
          height={1000}
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};

export default ProductDetailMain;
