import {UserType, PostType} from "./types";

interface DbType {
    users? : Array<UserType>;
    posts? : Array<PostType>;
/*
    importDatabase : void;
    importDatabases : void;
    exportDatabase : boolean;
    importUsers : boolean;
    getUser : UserType | boolean;
    emailAlreadyExists : boolean;
    */
}

export default DbType;