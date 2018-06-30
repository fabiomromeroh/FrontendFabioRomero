
import { InjectionToken  } from "@angular/core";
export let MESSAGES = new InjectionToken ("messages.ts");

export const Messages = {    
    Error: "Há ocurrido un error, comuniquese con el administrador.",
    SessionExpired: "La sesión ha expirado.",
    ConectionProblem: "Ocurrió un problema de conexión.",
    UpdateCorrect: "El registro se actualizó correctamente",
    CreateCorrect: "El registro se creó correctamente",
    DeleteCorrect: "El registro fué borrado correctamente",
    DesactivateCorrect: "El registro fué desactivado correctamente",
    ActivateCorrect: "El registro fué activado correctamente",
    SaveCorrect: "El registro fué guardado correctamente",
    Required: "El campo es requerido",
    MaxLength: "El campo debe tener un máximo de caracteres de ",
    MinLength: "El campo debe tener un mínimo de caracteres de ",
    InvalidFormat: "El formato es inválido"
};