(function(){
  // =========================
  // AUTO-DETECT RAID BOSS FROM URL
  // =========================
  const path = window.location.pathname; // e.g. /raids/gigantamax_grimmsnarl.html
  const bossSlug = path.split("/").pop().replace(".html","").toLowerCase();

  // =========================
  // RAID DATA (ADD NEW BOSSES HERE)
  // =========================
  const RAID_DATA={
    mewtwo:{tier:5,players:5,name:"Mewtwo"},
    rayquaza:{tier:5,players:5,name:"Rayquaza"},
    giratina:{tier:5,players:5,name:"Giratina"},
    charizard_mega:{tier:"mega",players:4,name:"Mega Charizard"},
    grimmsnarl_gmax:{tier:"gigantamax",players:6,name:"Gigantamax Grimmsnarl"}
  };

  const raid = RAID_DATA[bossSlug] || {tier:3,players:4,name:"Unknown Boss"};

  // =========================
  // CALCULATE DIFFICULTY
  // =========================
  let score=0;
  if(raid.tier===3) score=25;
  if(raid.tier===5) score=55;
  if(raid.tier==="mega") score=65;
  if(raid.tier==="gigantamax") score=80;
  score += (6-raid.players)*10;
  if(score<10) score=10;
  if(score>100) score=100;

  let diff="Easy", desc="This raid is manageable for most trainers.";
  if(score>=40){diff="Medium";desc="Requires decent counters and coordination.";}
  if(score>=60){diff="Hard";desc="Strong counters and experienced players recommended.";}
  if(score>=80){diff="Extreme";desc="Only top counters and teamwork can succeed.";}

  // =========================
  // CREATE HTML DYNAMICALLY
  // =========================
  const container = document.createElement("div");
  container.style.maxWidth = "720px";
  container.style.margin = "16px auto";
  container.style.padding = "16px";
  container.style.background = "#151515";
  container.style.borderRadius = "16px";
  container.style.boxShadow = "0 0 14px rgba(0,0,0,0.5)";
  container.innerHTML = `
    <h2 style="font-size:20px;margin-bottom:10px;color:#fff">${raid.name} Raid Difficulty</h2>
    <div style="height:18px;background:#333;border-radius:14px;overflow:hidden;">
      <div style="height:100%;width:${score}%;background:linear-gradient(90deg,#00ff6a,#ffee58,#ff3b3b);transition:width .6s ease;"></div>
    </div>
    <div style="margin-top:10px;font-size:18px;font-weight:800;color:#fff">Difficulty: ${diff}</div>
    <div style="margin-top:6px;font-size:14px;opacity:.85;color:#fff">${desc}</div>
  `;

  // =========================
  // APPEND TO BODY OR SPECIFIC CONTAINER
  // =========================
  document.body.appendChild(container);
})();
