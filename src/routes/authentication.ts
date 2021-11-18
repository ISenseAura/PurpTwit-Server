import express from "express";
import { UserType, PostType } from "../interfaces/types";
import { body, validationResult } from "express-validator";

const router: any = express.Router();

// REQUIRE A FEW DETAILS FOR NOW

router.post(
  "/signup",
  [
    body("username", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 8 characters long").isLength({
      min: 8
    })
  ],
  (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body);
  }
);

router.get("/test", (req: any, res: any) => {
  res.send("You got here!");
});

export = router;
