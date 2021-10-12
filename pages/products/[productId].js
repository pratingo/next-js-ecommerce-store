import { css } from '@emotion/react';
import Image from 'next/image';
import { useState } from 'react';
import Main from '../../components/Main';
import { getParsedCookie, setParsedCookie } from '../../util/cookies';
import { getProduct } from '../../util/database';

export default function Product({ product }) {
  const [cart, setCart] = useState(getParsedCookie('cart') || []);
  const [productAmount, setProductAmount] = useState(0);

  function handleAddToCartClick() {
    if (productAmount > 0) {
      setParsedCookie('cart', [
        ...cart,
        {
          productId: product.id,
          productAmount,
        },
      ]);
    }
    setProductAmount(0);
  }

  function handleDeleteFromCartClick() {
    setCart([
      ...cart.filter((item) => {
        return item.productId !== product.id;
      }),
    ]);
    setParsedCookie('cart', [...cart]);
  }

  if (!product) {
    return (
      <div>
        <Main />
        product not found
      </div>
    );
  }
  return (
    <div>
      <Main>
        <h2>{product.name}</h2>
        <Image src={product.url} width="300px" height="300px" css={css``} />
        <p>{`${product.price} €`}</p>
        <button
          value={productAmount}
          onClick={() => {
            setProductAmount(productAmount + 1);
          }}
        >
          +
        </button>
        <button
          value={productAmount}
          onClick={() => {
            if (productAmount > 0) {
              setProductAmount(productAmount - 1);
            }
          }}
        >
          -
        </button>
        <span>{productAmount}</span>
        <button onClick={handleAddToCartClick}>Add to cart</button>
        <button onClick={handleDeleteFromCartClick}>Delete from cart</button>
      </Main>
    </div>
  );
}

export async function getServerSideProps(context) {
  console.log('context', context.query.productId);
  const product = await getProduct(context.query.productId);
  console.log(product);
  // const { products } = await import('../../util/database');
  // await getUsers();
  // const products = await getProductss();
  // console.log(products);
  // console.log(context.query.productId);
  // const productId = context.query.productId;

  // const product = products.find((productItem) => {
  //   return productItem.id === Number.parseInt(productId);
  // });
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
