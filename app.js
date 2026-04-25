function generatePDF() {

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let doctor = document.getElementById("doctor").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let price = document.getElementById("price").value;

    doc.setFontSize(18);
    doc.text("🏥 عيادة طبيب الأطفال", 20, 20);

    doc.setFontSize(12);
    doc.text("📄 تأكيد موعد طبي", 20, 35);

    doc.text("────────────────────", 20, 40);

    doc.text("👨‍⚕️ الطبيب: " + doctor, 20, 55);
    doc.text("👶 الطفل: " + name, 20, 65);
    doc.text("🎂 العمر: " + age, 20, 75);
    doc.text("📞 الهاتف: " + phone, 20, 85);
    doc.text("📅 التاريخ: " + date, 20, 95);
    doc.text("💰 الثمن: " + price, 20, 105);

    doc.text("📍 العنوان: عيادة الأطفال - المركز الطبي", 20, 120);

    doc.text("✔ تم تأكيد الموعد بنجاح", 20, 140);

    doc.save("appointment.pdf");
}
