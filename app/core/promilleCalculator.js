
var member = {
    m: 95, 
    drinks: 
    [{v: 12, p: 40, t: 0},
    {v: 8, p: 40, t: 15},
    {v: 8, p: 40, t: 30},
    {v: 8, p: 40, t: 75},
    {v: 4, p: 40, t: 90},
    {v: 8, p: 40, t: 105},
    {v: 4, p: 40, t: 120}
    ]};

var getPromille = function promille (member, now) {
    var alpha = 11 / 100;
    var beta = 1 / 15;
    var gamma = 1 / 33;
    var delta = .15 / 60;

    var promille = 0;
    var m = member.m;
    for (var i = 0; i < member.drinks.length; i++) {
        promille = promille + alpha * member.drinks[i].v * member.drinks[i].p / m * Math.min((beta / (gamma * member.drinks[i].v + 1 ) * Math.max(0, now - member.drinks[i].t)), 1);
    };  
    promille = Math.max(0, promille - delta * (Math.max(0, now - member.drinks[0].t)));
    console.log(promille);    

    return promille;
};

var gcps = function getCheckPoints () {
    var cps = [];
    for (var i = 0; i<16; i++) {
        cps.push(i*15);
    }
    return cps;
};

var getPromilles = function () {
  var promilles = [];
  for (var i = 0; i<checkPoints.length; i++) {
    promilles.push(getPromille(member, checkPoints[i])); 
  }  
  return promilles;
};

var checkPoints = gcps();

getPromilles();
