import express from "express";
import { UserType, PostType } from "../interfaces/types";
import { body, validationResult } from "express-validator";
import getuser from '../middleware/getuser';

const router: any = express.Router();


router.get(
    "/:id", getuser, (req: any, res: any) => {
        //implement get user details from database
        console.log(req.params.id);
    }
);

router.get("/test", (req: any, res: any) => {
    res.send("This is get user endpoint!");
});

export = router;
