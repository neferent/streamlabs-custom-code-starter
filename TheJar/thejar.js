/*
Documentation for p2: http://schteppe.github.io/p2.js/docs/

Streamlabs provides these wrappers on `this`:
  createRectangleBody(position, width, height, angle)
  createCircleBody(position, radius)
  createWallBody(x, y, l, w, angle)

Setting this.material adds collision to an object (walls are pre-configured).

Example — custom bouncy bumper material:
  this.material.bumper = new p2.Material();
  const bumperMaterial = new p2.ContactMaterial(this.materials.cheer, this.materials.bumper, {
    restitution: 2,
    stiffness: Number.MAX_VALUE,
  });
  this.world.addContactMaterial(bumperMaterial);

ContactMaterial options:
  friction          — default 0.3
  restitution       — bounciness (0 = no bounce, 1 = full bounce back)
  stiffness         — default 1e7
  relaxation        — default 3
  frictionStiffness — default 1e7
  frictionRelaxation — default 3
  surfaceVelocity   — default 0
  Full docs: http://schteppe.github.io/p2.js/docs/classes/ContactMaterial.html

Set jarEl.src to your jar image — no default is provided for custom jars.
Available Streamlabs jar images:
  https://cdn.streamlabs.com/static/tip-jar/jars/glass-pint.png
  https://cdn.streamlabs.com/static/tip-jar/jars/glass-plinko.png
*/

// --- Glass pint jar ---
jarEl.src = `https://cdn.streamlabs.com/static/tip-jar/jars/glass-pint.png`;

cupBase[1] += 10;

// Bottom wall
boxBody = new p2.Body({ mass: 0, position: [cupBase[0], cupBase[1]] });
boxShape = new p2.Box({ width: 140, height: 30 });
boxShape.material = this.materials.wall;
boxBody.addShape(boxShape);
this.world.addBody(boxBody);

// Angled side walls
this.world.addBody(this.createRectangleBody([cupBase[0] + 68, cupBase[1] + 133], 300, 30, 85));
this.world.addBody(this.createRectangleBody([cupBase[0] - 68, cupBase[1] + 133], 300, 30, -85));


// --- Plinko board (swap jar image and uncomment to use instead) ---
/*
jarEl.src = `https://cdn.streamlabs.com/static/tip-jar/jars/glass-plinko.png`;

cupBase[1] += 10;
var plinkoHeight = 160;

// Dot grid
var dotHeight = 4;
var dotWidth = 5;

for (var i = 0; i < dotHeight; i++) {
  let numberWide = dotWidth;
  let offset = 0;
  if (i % 2 === 0) {
    numberWide = dotWidth - 1;
    offset = 30;
  }
  for (let j = 0; j < numberWide; j++) {
    this.world.addBody(
      this.createCircleBody([cupBase[0] - 120 + j * 60 + offset, plinkoHeight + 60 * i], 8)
    );
  }
}

// Outer walls
this.world.addBody(this.createRectangleBody([cupBase[0] + 170, cupBase[1] + 133], 300, 30, 85));
this.world.addBody(this.createRectangleBody([cupBase[0] - 170, cupBase[1] + 133], 300, 30, -85));

// Inner shot glass
boxBody = new p2.Body({ mass: 0, position: [cupBase[0], cupBase[1] - 10] });
boxShape = new p2.Box({ width: 100, height: 10 });
boxShape.material = this.materials.wall;
boxBody.addShape(boxShape);
this.world.addBody(boxBody);

this.world.addBody(this.createRectangleBody([cupBase[0] + 50, cupBase[1] - 10 + 30], 60, 10, 85));
this.world.addBody(this.createRectangleBody([cupBase[0] - 50, cupBase[1] - 10 + 30], 60, 10, -85));
*/
