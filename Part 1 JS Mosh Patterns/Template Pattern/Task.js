class Task {
  constructor(auditTrail = new AuditTrail()) {
    this.auditTrail = auditTrail;
  }

  execute() {
    this.auditTrail.record();
    this.doExecute();
  }

  doExecute() {
    // Implementation left to derived classes
  }
}

class AuditTrail {
  record() {
    // Implementation of recording audit trail
  }
}
