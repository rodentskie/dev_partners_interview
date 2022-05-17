import { Request, Response } from 'express';
import { GetPopularSitesView } from '../view';

const GetPopularSitesController = async (req: Request, res: Response) => {
  await GetPopularSitesView(req);
  res.send('Get Popular');
};

export default GetPopularSitesController;
