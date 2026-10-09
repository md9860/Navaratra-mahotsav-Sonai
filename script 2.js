const serviceSelect = document.getElementById("service");
const dakshina = document.getElementById("dakshina");
const visitNote = document.getElementById("visitNote");
const form = document.getElementById("registrationForm");

const services = {
  durga: {
    label: "दुर्गा सप्तशती पाठ — ९ दिवस",
    amount: "₹ ३,१००"
  },
  shrisukta: {
    label: "श्री सूक्त पाठ — रोज १६ आवर्तने, ९ दिवस",
    amount: "₹ ३,१००"
  },
  kumkum9: {
    label: "कुंकूमार्चन सेवा — ९ दिवस",
    amount: "₹ २,५००"
  },
  kumkum1: {
    label: "कुंकूमार्चन सेवा — १ दिवस",
    amount: "₹ ३००"
  },
  path1: {
    label: "सप्तशती / श्री सूक्त पाठ — १ दिवस",
    amount: "₹ ५०१"
  }
};

function updateServiceAmount() {
  dakshina.textContent = services[serviceSelect.value].amount;
}
serviceSelect.addEventListener("change", updateServiceAmount);

document.querySelectorAll('input[name="participation"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    visitNote.hidden = document.querySelector('input[name="participation"]:checked').value
      !== "प्रत्यक्ष मंदिरात पूजन";
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.reportValidity()) return;

  const fullName = document.getElementById("fullName").value.trim();
  const gotra = document.getElementById("gotra").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const notes = document.getElementById("notes").value.trim();
  const service = services[serviceSelect.value];
  const participation = document.querySelector('input[name="participation"]:checked').value;

  const message = [
    "🚩 श्री क्षेत्र रेणुका दरबार, सोनई 🚩",
    "शारदीय नवरात्र महोत्सव २०२६ — सेवा नोंदणी",
    "",
    "यजमानाचे संपूर्ण नाव: " + fullName,
    "गोत्र: " + gotra,
    "संपर्क क्रमांक: " + phone,
    "घराचा संपूर्ण पत्ता: " + address,
    "",
    "निवडलेली सेवा: " + service.label,
    "सुचवलेली दक्षिणा: " + service.amount,
    "पूजन पद्धत: " + participation,
    "अतिरिक्त माहिती: " + (notes || "नाही"),
    "",
    "कृपया नोंदणीची पुष्टी करावी.",
    "॥ जय जगदंब ॥"
  ].join("\n");

  // WhatsApp recipient: Renuka Darbar registration number, India country code 91.
  const whatsappUrl = "https://wa.me/919370189649?text=" + encodeURIComponent(message);
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
