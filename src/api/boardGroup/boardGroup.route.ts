import { Router } from 'express';

import { getBoardGroups } from  './boardGroup.controller'

export  const boardGroupRouter = Router();

boardGroupRouter.get('/', getBoardGroups)