var spaceJet, planets, fuelCan
var asteroidsGroup, meteroidsGroup
var planet1,planet2,planet3,planet4,planet5,planet6
var score = 0
var gameState = "play"
var distance = 0

function preload (){
  spaceJet_img = loadImage("images/space jet.png")
  ufo_img = loadImage("images/ufo.png")
  asteroids_img = loadImage("images/asteroid.png")
  meteroids_img = loadImage("images/meteroid.png")
  fuel_can_img = loadImage("images/fuel can.png") 
  planet1_img = loadImage("images/planet 1.png")
  planet2_img = loadImage("images/planet 2.png")
  planet3_img = loadImage("images/planet 3.png")
  planet4_img = loadImage("images/planet 4.png")
  planet5_img = loadImage("images/planet 5.png")
  planet6_img = loadImage("images/planet 6.png")
  explosion_img = loadImage("images/explosion.png")

sound1 = loadSound("sounds/explosion1.mp3")
sound2 = loadSound("sounds/pick.mp3")
sound3 = loadSound("sounds/blast.mp3")
}

function setup() {
  createCanvas(1270,600);

gameOver = createSprite()
restart = createSprite()



spaceJet = createSprite(685, 550, 200, 200);
  spaceJet.addImage("space",spaceJet_img)
  spaceJet.addImage("explore",explosion_img)
  spaceJet.scale = 0.4

  /*
ufo = createSprite(100, 100, 100, 100);
  ufo.addImage(ufo_img)
  ufo.scale = 0.3

planet1 = createSprite(100, 150, 100, 100);
  planet1.addImage(planet1_img)
  planet1.scale = 0.6
  planet1.rotationSpeed = 0.04

planet2 = createSprite(300, 300, 100, 100);
  planet2.addImage(planet2_img)
  planet2.scale = 0.8
  planet2.rotationSpeed = 0.09

planet3 = createSprite(500, 100, 100, 100);
  planet3.addImage(planet3_img)
  planet3.scale = 1
  planet3.rotationSpeed = -0.1

planet4 = createSprite(700, 350, 100, 100);
  planet4.addImage(planet4_img)
  planet4.scale = 0.7
  planet4.rotationSpeed = -0.1
  
planet5 = createSprite(950, 500, 100, 100);
  planet5.addImage(planet5_img)
  planet5.scale = 1.5
  planet5.rotationSpeed = 0.04
  
planet6 = createSprite(1100, 250, 100, 100);
  planet6.addImage(planet6_img)
  planet6.scale = 1.2
  planet6.rotationSpeed = 0.02
  */

asteroidsGroup = new Group()
meteroidsGroup = new Group()
fuelsGroup = new Group()

}

function draw() {
  background(rgb(18,1,26));  
  if(keyDown("left_arrow")){
    spaceJet.x = spaceJet.x-20
  }

  if(keyDown("right_arrow")){
    spaceJet.x = spaceJet.x+20
  }

  if(keyDown("up_arrow")){
    spaceJet.y = spaceJet.y-20
  }

  if(keyDown("down_arrow")){
    spaceJet.y = spaceJet.y+20
  }

distance = distance+Math.round(getFrameRate()/50)


if(fuelsGroup.isTouching(spaceJet)){
  score = score+5
  fuelsGroup.destroyEach() 
  sound2.play()
}
if(asteroidsGroup.isTouching(spaceJet)){
  sound1.play()
  spaceJet.changeImage("explore",explosion_img)
  asteroidsGroup.destroyEach()
}

if(meteroidsGroup.isTouching(spaceJet)){
  sound3.play()
  spaceJet.changeImage("explore",explosion_img)
  meteroidsGroup.destroyEach()
}

  drawSprites();
  fill("lightgreen")
textSize(25)
text("SCORE:- "+score,displayWidth/2+440,displayHeight-700)
  fill("lightblue")
textSize(25)
text("DISTANCE:-"+distance,displayWidth/2+420,displayHeight-675)
  spawnAsteroids()
  spawnMeteroids()
  spawnFuel()
  spawnPlanets()
}
function spawnAsteroids(){
  if(frameCount%250===0){
var asteroids = createSprite(Math.round(random(20,1300),50,50))
asteroids.addImage(asteroids_img)
asteroids.velocityY = 15
asteroids.scale = 0.3
asteroidsGroup.add(asteroids)
}
 }
function spawnMeteroids(){
  if(frameCount%330===0){
    var meteroids = createSprite(Math.round(random(20,1300),20,20))
    meteroids.addImage(meteroids_img)
    meteroids.velocityY = 10
    meteroids.scale = 0.3
    meteroidsGroup.add(meteroids)
}
  }

  function spawnFuel(){
    if(frameCount%200===0){
      fuelCan = createSprite(Math.round(random(25,1200),40,40));
        fuelCan.addImage(fuel_can_img)
        fuelCan.scale = 0.5
        fuelCan.velocityY = 10
      fuelsGroup.add(fuelCan)
  }
    }

    function spawnPlanets(){
      if(frameCount%80===0){
        planets = createSprite(Math.round(random(25,1200),40,40));
        var rand = Math.round(random(1,6))
        switch(rand){
          case 1: planets.addImage(planet1_img)
          break

          case 2: planets.addImage(planet2_img)
          break

          case 3: planets.addImage(planet3_img)
          break

          case 4: planets.addImage(planet4_img)
          break

          case 5: planets.addImage(planet5_img)
          break

          case 6: planets.addImage(planet6_img)
          break

         // case 7: planets.addImage(ufo_img)
        //  break

          default: break
        }
          planets.scale = 0.8
          planets.velocityY = 4
    }
      }
    

  
