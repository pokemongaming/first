<script>
const raidCounters = {
  Grimmsnarl: [
    { name: "Gardevoir", moves: "Charm + Dazzling Gleam", weather: "Cloudy" },
    { name: "Togekiss", moves: "Charm + Dazzling Gleam", weather: "Cloudy" },
    { name: "Machamp", moves: "Counter + Dynamic Punch", weather: "Cloudy" }
  ],
  Charizard: [
    { name: "Rampardos", moves: "Smack Down + Rock Slide", weather: "Partly Cloudy" },
    { name: "Rhyperior", moves: "Smack Down + Rock Wrecker", weather: "Partly Cloudy" }
  ]
};

function showCounters() {
  const boss = document.getElementById("raidBoss").value;
  const weather = document.getElementById("weather").value;
  const output = document.getElementById("counterResult");

  if (!boss) {
    output.innerHTML = "";
    return;
  }

  let html = `<h3>Best Counters</h3>`;

  raidCounters[boss].forEach(p => {
    let boost = (weather && p.weather === weather)
      ? " 🌦️ Weather Boosted"
      : "";

    html += `
      <div class="counter-card">
        <strong>${p.name}</strong><br>
        Moveset: ${p.moves}<br>
        Recommended Weather: ${p.weather}${boost}
      </div>
    `;
  });

  output.innerHTML = html;
}
</script>
