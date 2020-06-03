import { Router } from 'express';

import { getBoardGroups } from  './boardGroup.controller'

const router = Router();

router.get('/', getBoardGroups)
