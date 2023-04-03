class AddCustomerCommand {
  constructor(service) {
    this.service = service;
  }

  execute() {
    this.service.addCustomer();
  }
}
