import { css } from '@emotion/react';
import Image from 'next/image';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Main from '../../components/Main';

export default function Product({ product }) {
  if (!product) {
    return (
      <div>
        <Header />
        <Main>product site unknown</Main>
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <Header />
      <Main>
        <h2>{product.name}</h2>
        <Image src={product.url} width="300px" height="300px" css={css``} />
        <p>{`${product.price} €`}</p>
        <button>Add to cart</button>
      </Main>
      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { products } = await import('../../util/database');
  console.log(context.query.productId);
  const productId = context.query.productId;

  const product = products.find((productItem) => {
    return productItem.id === Number.parseInt(productId);
  });
  if (!product) {
    return {
      props: {},
    };
  } else {
    return {
      props: { product },
    };
  }
}
