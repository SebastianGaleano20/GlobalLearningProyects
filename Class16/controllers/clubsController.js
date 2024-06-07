import { getClubs } from "../models/clubModels.js";
import { responseClubs } from "../views/clubsViews.js";

//try catch para obtener la base de datos y mostrandolo como respuesta
export const getAllClubs = (_request, response) => {
  try {
    const clubs = getClubs(); //Leemos la base de datos
    responseClubs(response, 200, clubs); //Enviamos como respuesta la base de datos
  } catch (error) {
    responseClubs(response, 404, {
      message: 'ERROR_TO_GET_DATA',
    });
  }
};
