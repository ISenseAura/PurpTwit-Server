/* 
interface User {
username : String;
email : String;
password : String;
avatar : String;
follower_count : Number;
following_count : Number;
}
*/

//UPDATE LATER 

interface UserType {
  username: String;
  email: String;
  password: String;
}

interface UserInstance extends Omit<UserType,"password"> {
  username: String;
  email: String;
  password? : String;
}

export { UserType, UserInstance };


