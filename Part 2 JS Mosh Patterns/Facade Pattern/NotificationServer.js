class NotificationServer {
  connect(ipAddress) {
    return new Connection();
  }

  authenticate(appID, key) {
    return new AuthToken();
  }

  send(authToken, message, target) {
    console.log("Sending a message");
  }
}
