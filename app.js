function generatePDF() {
    let doctor = document.getElementById("doctor").value;
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;
    let price = document.getElementById("price").value;

    const div = document.createElement("div");
    div.style.cssText = `
        width: 600px;
        padding: 40px;
        font-family: Arial, sans-serif;
        direction: rtl;
        background: white;
        position: fixed;
        top: -9999px;
    `;

    div.innerHTML = `
        <h2 style="text-align:center">🏥 عيادة طبيب الأطفال</h2>
        <hr>
        <p>👨‍⚕️ الطبيب: ${doctor}</p>
        <p>👶 الطفل: ${name}</p>
        <p>🎂 العمر: ${age}</p>
        <p>📞 الهاتف: ${phone}</p>
        <p>📅 التاريخ: ${date}</p>
        <p>💰 الثمن: ${price}</p>
        <hr>
        <p style="text-align:center">✔ تم تأكيد الموعد بنجاح</p>
    `;

    document.body.appendChild(div);

    html2canvas(div).then(canvas => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        const img = canvas.toDataURL("image/png");
        doc.addImage(img, "PNG", 10, 10, 190, 0);
        doc.save("appointment.pdf");
        document.body.removeChild(div);
    });
}
