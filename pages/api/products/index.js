// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// import { products } from '../../util/database';

export default async function handler(req, res) {
  const { getProductss } = await import('../../../util/database.js');
  console.log('query', req.query);
  console.log('body', req.body);
  console.log('method', req.method);

  if (req.method === 'GET') {
    const products = await getProductss();

    return res.status(200).json(products);
  } else if (req.method === 'POST') {
  }

  return res.status(405);
}
