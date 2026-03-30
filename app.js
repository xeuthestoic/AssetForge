const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const bgColor = document.getElementById("bgColor");
const borderColor = document.getElementById("borderColor");
const glow = document.getElementById("glow");

const generateBtn = document.getElementById("generate");
const downloadBtn = document.getElementById("download");

function drawButton() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const width = 400;
  const height = 120;
  const x = 56;
  const y = 196;
  const radius = 20;

  // glow
  ctx.shadowColor = borderColor.value;
  ctx.shadowBlur = glow.value;

  // background
  ctx.fillStyle = bgColor.value;
  roundRect(ctx, x, y, width, height, radius, true, false);

  // border
  ctx.shadowBlur = 0;
  ctx.lineWidth = 4;
  ctx.strokeStyle = borderColor.value;
  roundRect(ctx, x, y, width, height, radius, false, true);

  // text
  ctx.fillStyle = "white";
  ctx.font = "30px Arial";
  ctx.textAlign = "center";
  ctx.fillText("CLICK", canvas.width / 2, canvas.height / 2 + 10);
}

function roundRect(ctx, x, y, w, h, r, fill, stroke) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.quadraticCurveTo(x + w, y, x + w, y + r);
  ctx.lineTo(x + w, y + h - r);
  ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();

  if (fill) ctx.fill();
  if (stroke) ctx.stroke();
}

generateBtn.onclick = drawButton;

downloadBtn.onclick = () => {
  const link = document.createElement("a");
  link.download = "asset.png";
  link.href = canvas.toDataURL();
  link.click();
};

// auto generate au lancement
drawButton();
