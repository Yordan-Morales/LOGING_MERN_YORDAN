import { Router } from "express";
import { register, login , logout, profile} from "../controllers/auth.controller.js";
import { requiredAuth } from "../middlewares/tokenValidation.js";
import { registerSchema , loginSchema} from "../schemas/auth.schema.js";
import { validateschema } from "../middlewares/validator.middewares.js";
import {} from `../schemas/task.schema.js`;
import { createTaskSchema } from "../schemas/task.schema.js";



const router = Router();


router.post('/register',validateschema(registerSchema),register);
router.post('/login',validateschema(loginSchema), login);
router.post('/logout', logout);
router.get('/profile',requiredAuth, profile);

export default router;