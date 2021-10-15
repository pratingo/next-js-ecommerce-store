// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import { products } from '../../util/database';

export default async function handler(req, res) {
  const { getProduct } = await import('../../../util/database.js');
  console.log('query', req.query);
  console.log('body', req.body);
  console.log('method', req.method);

  const product = await getProduct(req.query.id);

  res.status(200).json(product);
}
