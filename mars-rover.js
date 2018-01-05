//Creamos el Rover (objeto) con X atributos
var rover = {
  direction : "N",
  x : 0,
  y : 0,
  travelLog: []
};

//función para girar el Rover a la izquierda
function turnLeft(rover){
  switch (rover.direction) {
  case "N":
    rover.direction = "W";
    console.log("El rover está ahora mirando en " + rover.direction);
    break;
  case "W":
  rover.direction = "S";
  console.log("El rover está mirando en " + rover.direction);
    break;
  case "S":
  rover.direction = "E";
  console.log("El rover está mirando en " + rover.direction);
    break;
  case "E":
  rover.direction = "N";
  console.log("El rover está mirando en " + rover.direction);
    break;
  default:
  console.log("El rover sigue en la misma posición");
}
}

//función para girar el Rover a la derecha
function turnRight(rover){
  switch (rover.direction) {
  case "N":
    rover.direction = "E";
    console.log("El rover está mirando en " + rover.direction);
    break;
  case "E":
  rover.direction = "S";
  console.log("El rover está mirando en " + rover.direction);
    break;
  case "S":
  rover.direction = "W";
  console.log("El rover está mirando en " + rover.direction);
    break;
  case "W":
  rover.direction = "N";
  console.log("El rover está mirando en " + rover.direction);
    break;
  default:
  console.log("");
}
}
// Función para mover hacia adelante el rover
function moverseForward(rover){ //ejecuto una funcion que me recoge el parametro rover
	switch(rover.direction){ // ejecuto un bucle switch con parametro del objeto rover con atributo direction
		case 'S': // en el caso de que sea S
		rover.y += 1; // a Y le sumo 1
		break; // finalizo
		case 'N':
		rover.y -= 1;
		break;
    case 'W':
    rover.x -= 1;
    break;
    case 'E':
    rover.x += 1;
    break;
		default:
		console.log('Posicion' + rover.direction);
	}
}

function ordenes(order){
  for (i = 0; i < order.length; i++){
    console.log(order[i]);
    switch (order[i]){
      case "f" : moverseForward(rover);
      rover.travelLog.push({ x : rover.x, y : rover.y});
      console.log(rover);
      break;
      case "l" : turnLeft(rover);
      rover.travelLog.push({ x : rover.x, y : rover.y});
      console.log(rover);
      break;
      case "r" : turnRight(rover);
      rover.travelLog.push({ x : rover.x, y : rover.y});
      console.log(rover);
      break;
    }
  }
}

ordenes("rfffrffrrf");
console.log(rover);

console.log("MI TRAVEL LOG ES: ", rover.travelLog);
