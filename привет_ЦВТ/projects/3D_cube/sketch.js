
var sC = 200; //size cube
var nodeSize = 8;
var nodeColor = 'rgb(255, 0, 21)';
var edgeColor = 'rgb(25, 60, 255)';
var faceColor = 'rgb(207, 227, 166, 128)';

// NODES
var node0 = [-sC / 2, -sC / 2, -sC / 2];
var node1 = [-sC / 2, -sC / 2, sC / 2];
var node2 = [-sC / 2, sC / 2, -sC / 2];
var node3 = [-sC / 2, sC / 2, sC / 2];
var node4 = [sC / 2, -sC / 2, -sC / 2];
var node5 = [sC / 2, -sC / 2, sC / 2];
var node6 = [sC / 2, sC / 2, -sC / 2];
var node7 = [sC / 2, sC / 2, sC / 2];
var nodes = [node0, node1, node2, node3, node4, node5, node6, node7];

// EDGES
var edge0 = [0, 1];
var edge1 = [1, 3];
var edge2 = [3, 2];
var edge3 = [2, 0];
var edge4 = [4, 5];
var edge5 = [5, 7];
var edge6 = [7, 6];
var edge7 = [6, 4];
var edge8 = [0, 4];
var edge9 = [1, 5];
var edge10 = [2, 6];
var edge11 = [3, 7];
var edges = [edge0, edge1, edge2, edge3, edge4, edge5, edge6, edge7, edge8, edge9, edge10, edge11];

//FACES
var face0 = [0, 1, 3, 2];
var face1 = [2, 3, 7, 6];
var face2 = [4, 5, 7, 6];
var face3 = [0, 1, 5, 4];
var face4 = [0, 4, 6, 2];
var face5 = [1, 5, 4, 0];
var faces = [face0, face1, face2, face3, face4, face5];

//ROTATE AROUND Z AXIS FUNCTION
var rotateZ3D = function (alpha) {
	let deg = alpha * Math.PI / 180;
	for (var n = 0; n < nodes.length; n++) {
		var x = nodes[n][0];
		var y = nodes[n][1];
		nodes[n][0] = x * Math.cos(deg) - y * Math.sin(deg);
		nodes[n][1] = x * Math.sin(deg) + y * Math.cos(deg);
	}
};

//ROTATE AROUND Y AXIS FUNCTION
var rotateY3D = function (alpha) {
	let deg = alpha * Math.PI / 180;
	for (var n = 0; n < nodes.length; n++) {
		var x = nodes[n][0];
		var z = nodes[n][2];
		nodes[n][0] = x * Math.cos(deg) - z * Math.sin(deg);
		nodes[n][2] = x * Math.sin(deg) + z * Math.cos(deg);
	}
};

//ROTATE AROUND X AXIS FUNCTION
var rotateX3D = function (alpha) {
	let deg = alpha * Math.PI / 180;
	for (var n = 0; n < nodes.length; n++) {
		var y = nodes[n][1];
		var z = nodes[n][2];
		nodes[n][1] = y * Math.cos(deg) - z * Math.sin(deg);
		nodes[n][2] = y * Math.sin(deg) + z * Math.cos(deg);
	}
};

rotateZ3D(30);
rotateY3D(30);
rotateX3D(30);

function setup() {
	createCanvas(400, 400);
}

var draw = function () {
	background(255, 255, 255);
	translate(width / 2, height / 2);
	//DRAWING NODES
	noStroke();
	fill(nodeColor);

	for (var n = 0; n < nodes.length; n++) {
		ellipse(nodes[n][0], nodes[n][1], nodeSize, nodeSize);
	}

	//DRAWING EDGES
	/*stroke (edgeColor);
	for (var e=0; e<edges.length; e++) {
	  var cedge = edges[e];
	  var node1 = nodes[cedge[0]];
	  var node2 = nodes[cedge[1]];
	  line (node1[0], node1[1], node2[0], node2[1]);
	}*/

	//DRAWING FACES
	stroke(edgeColor);
	strokeWeight(0.5);
	fill(faceColor);
	for (var n = 0; n < faces.length; n++) {
		var cface = faces[n];
		var p1 = nodes[cface[0]];
		var p2 = nodes[cface[1]];
		var p3 = nodes[cface[2]];
		var p4 = nodes[cface[3]];
		quad(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1], p4[0], p4[1]);
	}

	mouseDragged = function () {
		rotateY3D(mouseX - pmouseX);
		rotateX3D(mouseY - pmouseY);
	};

};

