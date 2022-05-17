import { Request } from 'express';

import { getPopularSites } from '../functions';

const GetPopularSitesView = async (data: Request) => {
  const { page } = data.query as {
    page: string;
  };

  const res = await getPopularSites(parseInt(page, 10));
  console.log(res);
};

export { GetPopularSitesView };
