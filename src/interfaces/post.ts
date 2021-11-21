import  { UserType } from "./user";

interface PostType {
  id: String;
  author: UserType;
  created_at : Date;
  text : String;
  img? : String;
}

export default PostType;
