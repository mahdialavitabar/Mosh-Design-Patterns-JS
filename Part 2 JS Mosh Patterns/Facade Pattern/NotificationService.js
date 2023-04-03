class NotificationService {
  send(message, target) {
    const server = new NotificationServer();
    const connection = server.connect("ip");
    const authToken = server.authenticate("appID", "key");
    server.send(authToken, new Message(message), target);
    connection.disconnect();
  }
}
