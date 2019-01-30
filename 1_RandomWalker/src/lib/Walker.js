export class Walker {
  constructor() {
    this.size = 50
    this.position = createVector(width / 2, height / 2)
    console.log(width)
    this.velocity = createVector(0,0)
    this.acceleration = createVector(0,0)
  }

  display() {
    fill(255)
    ellipse(this.position.x, this.position.y, this.size)
  }

  _getRandomAngleVector(){
    const randomAngle = Math.random() * TWO_PI
    const randomAngleVector = p5.Vector.fromAngle(randomAngle)
    return randomAngleVector.setMag(.1)
  }

  walk() {
    this.acceleration = this._getRandomAngleVector()
    this.velocity.add(this.acceleration)
    this.position.add(this.velocity)
  }
}
