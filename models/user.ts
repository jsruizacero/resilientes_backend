import { Schema, model } from 'mongoose';
import { Enum_Funcion, Enum_EstadoUsuario } from './enums';

interface User {
  correo: string;
  identificacion: string;
  nombres: string;
  apellido: string;
  funcion: Enum_Funcion;
  estado: Enum_EstadoUsuario;
}

const userSchema = new Schema<User>({
  correo: {
    type: String,
    required: true,
    validate: {
      validator: (email) => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);//validador encontrado en stackoverflow paa valira formate de e-mail
      },
      message: 'El texto escrito no corresponde a un formato de correo electrónico.',
    },
  },
  identificacion: {
    type: String,
    required: true,
  },
  nombres: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  funcion: {
    type: String,
    required: true,
    enum: Enum_Funcion,
  },
  estado: {
    type: String,
    enum: Enum_EstadoUsuario,
    default: Enum_EstadoUsuario.pendiente,
  },
});

const UserModel = model('User', userSchema);

export { UserModel };
