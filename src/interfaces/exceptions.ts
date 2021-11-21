class UnauthorizedException extends Error {
  constructor(msg?: string) {
    super();

    this.name = "UnauthorizedException";
    this.message = msg ? msg : "You are not authorized";
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}

class UserExistsException extends Error {
  constructor(msg?: string) {
    super();
    this.name = "UserExistsException";
    this.message = msg ? msg : "Cannot login with those credentials";
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, UserExistsException.prototype);
  }
}

class LoginException extends Error {
  constructor(msg?: string) {
    super();

    this.name = "LoginException";
    this.message = msg ? msg : "Something went wrong while logging in";
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, LoginException.prototype);
  }
}

class NotFoundException extends Error {
  constructor(msg?: string) {
    super();
    this.name = "NotFoundException";
    this.message = msg ? msg : "Not Found";
    // Set the prototype explicitly.
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}



export { UnauthorizedException, LoginException, NotFoundException,UserExistsException };