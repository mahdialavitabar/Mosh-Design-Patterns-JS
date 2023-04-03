class GenerateReportTask {
  constructor(auditTrail) {
    this.auditTrail = auditTrail;
  }

  execute() {
    this.auditTrail.record();

    console.log("Generate Report");
  }
}
