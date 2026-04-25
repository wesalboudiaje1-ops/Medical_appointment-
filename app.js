emailjs.init("eL2noBotQSgvujuwi");

function generatePDF() {
    let doctor = document.getElementById("doctor").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let price = document.getElementById("price").value;

    // إرسال الإيميل
    emailjs.send("service_g7bt3xn", "template_fweidpp", {
        doctor: doctor,
        patient_name: name,
        age: age,
        phone: phone,
        date: date,
        price: price
    }).then(function() {
        alert("Appointment confirmed! Email sent to doctor.");
    }, function(error) {
        alert("Error: " + error.text);
    });

    // توليد PDF
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.setTextColor(0, 102, 204);
    doc.text("Pediatric Clinic", 105, 20, { align: "center" });
    doc.text("Appointment Confirmation", 105, 32, { align: "center" });

    doc.setDrawColor(0, 102, 204);
    doc.line(20, 38, 190, 38);

    doc.setFontSize(13);
    doc.setTextColor(0, 0, 0);
    doc.text("Doctor: " + doctor, 20, 55);
    doc.text("Patient: " + name, 20, 70);
    doc.text("Age: " + age, 20, 85);
    doc.text("Phone: " + phone, 20, 100);
    doc.text("Date: " + date, 20, 115);
    doc.text("Price: " + price, 20, 130);

    doc.line(20, 140, 190, 140);
    doc.setTextColor(0, 150, 0);
    doc.setFontSize(14);
    doc.text("Appointment Confirmed!", 105, 155, { align: "center" });

    doc.save("appointment.pdf");
}
