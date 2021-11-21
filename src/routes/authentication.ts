import express from "express";
import hash = require("bcryptjs");
import Db from "../db";
import { UserType, PostType } from "../interfaces/types";
import { UserExistsException } from "../interfaces/exceptions";
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
  async (req: any, res: any) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const salt = await hash.genSalt(10);
      const passwordHash = await hash.hash(req.body.password.trim(), salt);
      let user = req.body;

      if(Db.emailAlreadyExists(user.email)) {
        return res.send(new UserExistsException(" That email is already registered"))
      }

      user.password = passwordHash;
      Db.data.users.push(user)
      Db.exportDatabase("users");
      Db.importUsers();
      res.send(Db.getUser(user.email));
    } catch (e) {
      console.log(e);
    }



    console.log(req.body);
  }
);

router.get("/test", (req: any, res: any) => {
  res.send("You got here!");
});

export = router;
