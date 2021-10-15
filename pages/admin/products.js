import { css } from '@emotion/react';
// import Image from 'next/image';
// import Link from 'next/link';
import Main from '../../components/Main';

// import { getProductss } from '../../util/database';

export default function Products({ products }) {
  return (
    <Main>
      <ul
        css={css`
          list-style: none;
        `}
      >
        {products &&
          products.map((product) => (
            <li
              css={css`
                padding: 30px;
              `}
              key={`prod-li-${product.id}`}
            >
              {product.name}
            </li>
          ))}
      </ul>
    </Main>
  );
}

export async function getServerSideProps() {
  // const { products } = await import('../../util/database');
  // const products = await getProductss();
  const productsResponse = await fetch('http://localhost:3000/api/products');
  const products = await productsResponse.json();
  console.log(products);
  // console.log(context.req.cookies.someCookie);
  // console.log(context.req.headers.cookie);
  return {
    props: { products: products || null },
  };
}
