class ReportProcessorExample {
    process(reportType: string) {
        if (reportType === "PDF") {
            console.log("Processing PDF report...");
        } else if (reportType === "CSV") {
            console.log("Processing CSV report...");
        } else {
            console.log("Unknown report type!");
        }
    }
}

const processorExample = new ReportProcessorExample();
processorExample.process('PDF');
processorExample.process('CSV');
