import { query } from './boardGroup.service'
import { Response, Request } from 'express';


export async function getBoardGroups(req: Request, res: Response) {
  const { params } = req
  try {
    const groupBoards = await query(params);
    res.json(groupBoards);
  } catch (err) {
    
  }

}

