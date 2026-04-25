function generatePDF() {
    try {

        // التحقق من تحميل مكتبة PDF
        if (!window.jspdf) {
            alert("PDF library not loaded!");
            return;
        }

        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // جلب القيم
        let doctor = document.getElementById("doctor").value;
        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let phone = document.getElementById("phone").value;
        let date = document.getElementById("date").value;
        let price = document.getElementById("price").value;

        // التحقق من الإدخال
        if (!name || !phone || !date) {
            alert("Please fill all required fields");
            return;
        }

        // خلفية بسيطة
        doc.setFillColor(245, 250, 255);
        doc.rect(0, 0, 210, 297, "F");

        // العنوان
        doc.setFontSize(18);
        doc.setTextColor(0, 102, 204);
        doc.text("Pediatric Clinic", 105, 20, { align: "center" });

        doc.setFontSize(14);
        doc.text("Appointment Confirmation", 105, 30, { align: "center" });

        // خط فاصل
        doc.setDrawColor(0, 102, 204);
        doc.line(20, 38, 190, 38);

        // المحتوى
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);

        doc.text("Doctor: " + doctor, 20, 55);
        doc.text("Patient: " + name, 20, 70);
        doc.text("Age: " + age, 20, 85);
        doc.text("Phone: " + phone, 20, 100);
        doc.text("Date: " + date, 20, 115);
        doc.text("Price: " + price, 20, 130);

        // خط
        doc.line(20, 140, 190, 140);

        // تأكيد
        doc.setTextColor(0, 150, 0);
        doc.setFontSize(14);
        doc.text("Appointment Confirmed ✔", 105, 155, { align: "center" });

        // حفظ الملف
        doc.save("appointment.pdf");

    } catch (error) {
        console.error(error);
        alert("Something went wrong!");
    }
}
