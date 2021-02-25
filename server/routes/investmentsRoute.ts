import express from "express";

import { createInvestmentSavings } from "../controllers/investmentsController"
const router = express.Router();

router.route('/').post(createInvestmentSavings)

export default router;