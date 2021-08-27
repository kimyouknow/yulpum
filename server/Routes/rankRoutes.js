import express from "express";
import routes from "../routes";

import {
    getRank,

} from "../Controller/rankController"

const rankRoutes = express.Router();

var rank = routes.rank;

rankRoutes.post(rank+routes.getRank, getRank);

export default rankRoutes;