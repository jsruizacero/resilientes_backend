import conectarComBD from './db/database';
import { UserModel } from './models/user';
import { ProjectModel } from './models/project';
import { Enum_EstadoUsuario, Enum_Funcion, Enum_TipoObjetivo,Enum_EstadoProyecto  } from './models/enums';
import { ObjectId } from 'mongoose';

const main = async () => {

  await conectarComBD();
  // CREAR UN USUARIO
  const usuario1= await UserModel.create({
    nombres: 'Luz Helena',
    apellido: 'Camacho',
    correo: 'luxajag@gmail.com',
    identificacion: '52958032',
    funcion: Enum_Funcion.estudiante,
    estado:Enum_EstadoUsuario.autorizado,
  })
    .then((u) => {
      console.log('Usuario creado', u);
    })
    .catch((e) => {
      console.error('Error creando usuario', e);
    });

  // CREAR UN Proyecto
  await ProjectModel.create({
    nombre: 'Proyecto Resilientes',
    fechaInicio: new Date('2021/12/31'),
    fechaFin: new Date('2022/12/31'),
    presupuesto: 1000000,
    lider:'619709f56979b99485bd1f1e',
    objetivos: [
      { descripcion: 'Crear CRUD', tipo: Enum_TipoObjetivo.general },
      { descripcion: 'Aprender Mongoose', tipo: Enum_TipoObjetivo.especifico },
      { descripcion: 'Conectar database', tipo: Enum_TipoObjetivo.especifico },
    ],
  })
    .then((u) => {
      console.log('Proyecto creado', u);
    })
    .catch((e) => {
      console.error('Error creando usuario', e);
    });

//OBTENER LOS USUARIOS
  await UserModel.find()
    .then((u) => {
      console.log('usuarios', u);
    })
    .catch((e) => {
      console.error('error obteniendo los usuarios', e);
    });

//OBTENER LOS PROYECTOS
  await UserModel.find()
    .then((u) => {
      console.log('proyectos', u);
    })
    .catch((e) => {
      console.error('error obteniendo los proyectos', e);
    });

// OBTENER UN SOLO USUARIO
  await UserModel.findOne({ identificacion: '16546' })
    .then((u) => {
      console.log('usuario encontrado', u);
    })
    .catch((e) => {
      console.error(e);
    });

// EDITAR UN USUARIO
await UserModel.findOneAndUpdate(
  { correo: 'jsruizacero@gmail.com' },
  {
    nombre: 'Sebastian',
    apellido: 'Ruiz',
  }
)
  .then((u) => {
    console.log('usuario actualizado', u);
  })
  .catch((e) => {
    console.error('Error actualizando', e);
  });

// ELIMINAR UN USUARIO
await UserModel.findOneAndDelete({ correo: 'jsruizacero@ggsdds.com' })
  .then((u) => {
    console.log('usuario eliminado: ', u);
  })
  .catch((e) => {
    console.error(e);
  });


  // Eliminar un proyecto. 
  await conectarComBD();
  await ProjectModel.findOneAndDelete({_id:'619720fc5b5c1317fcf2cb5a'})
  .then((u) => {
    console.log('Proyecto eliminado 619720fc5b5c1317fcf2cb5a ', u);
  })
  .catch((e) => {
    console.error(e);
  });

  // EDITAR UN PROYECTO
await ProjectModel.findOneAndUpdate(
  { _id:'619721499daf526ad972a96f' },
  {
    nombre:"Proyecto actualizado"
  }
)
  .then((u) => {
    console.log('Proyecto actualizado', u);
  })
  .catch((e) => {
    console.error('Error actualizando', e);
  });

// EDITAR ESTADO DEL PROYECTO
await ProjectModel.findOneAndUpdate(
  { _id:'619721499daf526ad972a96f' },
  {
    estado:Enum_EstadoProyecto.inactivo,
  }
)
  .then((u) => {
    console.log('Proyecto actualizado', u);
  })
  .catch((e) => {
    console.error('Error actualizando', e);
  });
};

main();