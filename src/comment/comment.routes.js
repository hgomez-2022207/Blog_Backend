import { Router } from "express";
import { check } from "express-validator";
const router = Router();

import {CommentPost} from './comment.controls.js'
import { validarCampos } from "../middlewares/validar-campos.js"

router.post(
    '/',
    [
        check('comment','This comment is void').not().isEmpty(),
        validarCampos,
    ],CommentPost
)

export default router;