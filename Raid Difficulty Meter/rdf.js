<script>
function showDifficulty() {
  const tier = document.getElementById("raidTier").value;
  const fill = document.getElementById("difficultyFill");
  const text = document.getElementById("difficultyText");

  if (!tier) {
    fill.style.width = "0%";
    text.innerHTML = "";
    return;
  }

  if (tier == 3) {
    fill.style.width = "35%";
    text.innerHTML = "Easy – Solo possible with good counters";
  } else if (tier == 5) {
    fill.style.width = "65%";
    text.innerHTML = "Medium – 3–5 trainers recommended";
  } else {
    fill.style.width = "90%";
    text.innerHTML = "Hard – 6+ trainers required (Gigantamax)";
  }
}
</script>
