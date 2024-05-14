import { Router } from "express";
import { check } from "express-validator";
const router = Router();

import {CommentPost, CommentGet, proyectByName} from './comment.controls.js'
import { validarCampos } from "../middlewares/validar-campos.js"

router.post(
    '/',
    [
        check('name','This name is void').not().isEmpty(),
        check('comment','This comment is void').not().isEmpty(),
        validarCampos,
    ],CommentPost
)

router.get(
    '/',CommentGet
)

router.get("/proyect", proyectByName);


export default router;