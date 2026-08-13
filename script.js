// กำหนดวันที่เริ่มต้นความสัมพันธ์ (วันที่ 1 มกราคม 2024)
const startDate = new Date("2024-01-01T00:00:00");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// อัปเดตทุกๆ 1 วินาที
setInterval(updateTimer, 1000);
updateTimer();

// ลูกเล่นปุ่มกด
const btn = document.getElementById("heartBtn");
const msg = document.getElementById("msg");

btn.addEventListener("click", () => {
    msg.classList.toggle("hidden");
});