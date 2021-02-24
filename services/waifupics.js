const axios = require("axios");
const uri = "https://waifu.pics/api/sfw/";
module.exports = {
  getAnimePic: async (type) => {
    var response = await getAnimePic(type).catch();
    return response;
  },
  mensajePersonal: (name, type) => {
    var response = mensajePersonal(name, type);
    return response;
  },
  mensajeCompartido: (from, to, type) => {
    var response = mensajeCompartido(from, to, type);
    return response;
  },
};

async function getAnimePic(type) {
  var response = await axios.get(`${uri}${type}`).catch((err) => err.response);
  let url = response.data.url;
  return url;
}

function mensajePersonal(name, type) {
  switch (type) {
    case "happy":
      return `${name} está feliz`;
      break;
    case "blush":
      return `${name} se sonrojó`;
      break;
    case "dance":
      return `${name} está bailando`;
      break;
    case "slap":
      return `${name} lanzó un golpe`;
      break;
    case "kill":
      return `Bot Kun asesinó a ${name}`;
      break;
    case "bite":
      return `${name} está mordiendo a alguien :o`;
    case "smile":
      return `${name} recibe una sonrisa uwu`;
      break;
    case "kiss":
      return `${name} besó a una monita china porque no tiene con quién en la vida real`;
      break;
    case "hug":
      return `Tranqui ${name} yo te abrazo <3 `;
      break;
    case "cry":
      return `${name} deja de llorar pofavo :c`;
      break;
    case "wink":
      return `${name} anda guiñando el ojito`;
      break;
    case "lick":
      return `A ${name} le gusta lamer cosas`;
      break;
    case "shinobu":
      return `Deja de buscar a Shinobu, morboso`;
      break;
    case "megumin":
      return `Toma una Megumin c: `;
      break;
    case "bully":
      return `${name} ya deja de hacerle bullying a la gente porfa`;
      break;
    case "cuddle":
      return `${name} recibe un abrazo de parte de este bot inutil`;
      break;
    case "pat":
      return `Pórtate bien ${name}`;
      break;
    case "cringe":
      return `¿Esto da cringe?`;
      break;
    case "smug":
      return `Eres un presumidx .-.`;
      break;
    case "handhold":
      return `Seguro lo de la imagen a ti no te pasa :p`;
      break;
    case "highfive":
      return `Choca esos 5 ctm`;
      break;
    case "bonk":
      return `${name}, te lo mereces por gil`;
      break;
    case "wave":
      return `Alamos`;
      break;
    default:
      return `${type}`;
      break;
  }
}

function mensajeCompartido(from, to, type) {
  switch (type) {
    case "happy":
      return `${from} está feliz con ${to}`;
      break;
    case "blush":
      return `${from} se sonrojó por la cagada de ${to}`;
      break;
    case "dance":
      return `${from} y ${to} están bailando`;
      break;
    case "slap":
      return `${from} le lanzó un merecido golpe a la cagada de ${to}`;
      break;
    case "kill":
      return `${from} asesinó cruelmenete a ${to}`;
      break;
    case "bite":
      return `${from} está mordiendo a alguien ${to} iugh`;
    case "smile":
      return `${from} le anda sonriendo a ${to}`;
      break;
    case "kiss":
      return `${from} y ${to} se besaron :o`;
      break;
    case "hug":
      return `${from} le mandó un abrazito a ${to}`;
      break;
    case "cry":
      return `${to} hizo llorar a ${from}`;
      break;
    case "wink":
      return `${from} le anda guiñando el ojito a ${to}`;
      break;
    case "lick":
      return `${from} empezó a lamer a ${to}, qué asco`;
      break;
    case "shinobu":
      return `Deja de buscar a Shinobu, morboso`;
      break;
    case "megumin":
      return `Toma una Megumin c: `;
      break;
    case "bully":
      return `${from} ya deja de hacerle bullying a la ${to} porfa`;
      break;
    case "cuddle":
      return `${from} le dió un abrazo a ${to} <3`;
      break;
    case "pat":
      return `${to} recibe palmaditas de ${from}`;
      break;
    case "cringe":
      return `¿Esto da cringe?`;
      break;
    case "smug":
      return `${from} presume en la cara de ${to}`;
      break;
    case "handhold":
      return `${from} y ${to} se agarraron de la manito`;
      break;
    case "highfive":
      return `Choca esos 5 ctm`;
      break;
    case "bonk":
      return `${to}, te lo mereces por gil`;
      break;
    case "wave":
      return `Alamos`;
      break;
    default:
      return `${type}`;
      break;
  }
}
