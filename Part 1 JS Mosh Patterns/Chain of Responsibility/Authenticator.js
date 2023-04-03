class Authenticator extends Handler {
  constructor(next) {
    super(next);
  }

  doHandle(request) {
    const isValid =
      request.getUsername() === "admin" && request.getPassword() === "1234";
    console.log("Authentication");
    return !isValid;
  }
}
