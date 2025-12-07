function changeSize(size) {
  ctx.lineWidth = size;
}

function changeColor(color) {
  ctx.strokeStyle = color;
}

function changeTool(tool) {
  handleToolChange(tool);
}

function triggerHamburger() {
  handleHamburger();
}

function startDrawing(point) {
  const { x, y, color, width } = point;
  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  undoStack.push(point);
}

function drawLine(point) {
  const { x, y, color, width } = point;
  ctx.lineWidth = width;
  ctx.strokeStyle = color;
  ctx.lineTo(x, y);
  ctx.stroke();
  undoStack.push(point);
}

function undo() {
  undoMaker();
}

function redo() {
  redoMaker();
}