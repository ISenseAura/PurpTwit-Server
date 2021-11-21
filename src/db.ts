import fs = require("fs");
import { UserType, UserInstance, PostType, DbType } from "./interfaces/types";

class Db {

    static data: DbType | any = { users: [] }

    static users: Array<UserType> = []

    public static importDatabase(roomid: string): void {
        let file: string = "{}";
        try {
            file = fs.readFileSync("./databases/" + roomid + ".json").toString();
        } catch (e: any) {
            console.log(e.message);
        }
        this.data[roomid] = JSON.parse(file);
    }

    public static importDatabases(): void {
        let databases = fs.readdirSync("./databases");
        for (let i = 0, len = databases.length; i < len; i++) {
            let file = databases[i];
            if (!file.endsWith(".json")) continue;
            this.importDatabase(file.substr(0, file.indexOf(".json")));
        }
    }

    public static exportDatabase(name: string): boolean {
        if (!(name in this.data)) return false;
        fs.writeFileSync(
            "./databases/" + name + ".json",
            JSON.stringify(this.data[name])
                .split("},")
                .join("},\n")
        );
        return true;
    }

    public static importUsers(): boolean {
        if (!this.data["users"]) {
            console.log("No users registered");
            return false;
        }
        let users: Array<string> = Object.keys(this.data["users"]);
        for (let i = 0; i < users.length; i++) {
            this.users.push(this.data["users"][users[i]]);
        }
        return true;
    }

    public static getUser(email: string): UserInstance | boolean {
        if (!this.data["users"] || !this.users.length) {
            console.log("No users registered");
            return false;
        }

        let foundUser: UserInstance | boolean = false;
        try {
            this.data.users.forEach((user: UserType) => {
                if (user.email == email) {
                    foundUser = user;
                    delete foundUser.password;
                }
            })
            if (!foundUser) {
                console.log("No user found with this email");
                return false;
            }

            return foundUser;


        }
        catch (e: any) {
            throw new e();
        }

    }

    public static emailAlreadyExists(email: string): boolean {
        if (!this.data["users"]) {
            console.log("No users registered");
            return false;
        }
        let output: boolean = false;
        this.data.users.forEach((user: UserType) => {
            if (user.email === email) output = true;
        })
        if (output) return true;
        console.log("No user found with this email");
        return false;
    }


    public static toId(str: String): String {
        return str.replace(/[^A-Z0-9]/gi, "").toLowerCase();
    }
};

export default Db;