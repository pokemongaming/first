<script>
const effectiveness = {
  Fire: { Grass: 2, Ice: 2, Bug: 2, Steel: 2, Water: 0.5, Rock: 0.5, Fire: 0.5, Dragon: 0.5 },
  Water: { Fire: 2, Rock: 2, Ground: 2, Water: 0.5, Grass: 0.5, Dragon: 0.5 },
  Grass: { Water: 2, Rock: 2, Ground: 2, Fire: 0.5, Grass: 0.5, Bug: 0.5, Dragon: 0.5 },
  Electric: { Water: 2, Flying: 2, Electric: 0.5, Grass: 0.5, Dragon: 0.5, Ground: 0 },
  Fighting: { Normal: 2, Rock: 2, Steel: 2, Ice: 2, Dark: 2, Poison: 0.5, Flying: 0.5, Psychic: 0.5, Fairy: 0.5, Ghost: 0 },
  Ghost: { Psychic: 2, Ghost: 2, Dark: 0.5, Normal: 0 },
  Fairy: { Fighting: 2, Dragon: 2, Dark: 2, Fire: 0.5, Poison: 0.5, Steel: 0.5 }
};

function calculateEffect() {
  const atk = document.getElementById("attackType").value;
  const def = document.getElementById("defenseType").value;
  const result = document.getElementById("result");

  if (!atk || !def) {
    result.innerHTML = "Please select both types.";
    return;
  }

  let multiplier = 1;

  if (effectiveness[atk] && effectiveness[atk][def] !== undefined) {
    multiplier = effectiveness[atk][def];
  }

  if (multiplier === 2) {
    result.innerHTML = "🔥 Super Effective (2× damage)";
  } else if (multiplier === 0.5) {
    result.innerHTML = "⚠️ Not Very Effective (0.5× damage)";
  } else if (multiplier === 0) {
    result.innerHTML = "❌ No Effect (0× damage)";
  } else {
    result.innerHTML = "➖ Normal Effectiveness (1× damage)";
  }
}
</script>
