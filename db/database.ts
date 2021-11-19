import { connect } from 'mongoose';

const conectarComBD = async () => {
   await connect (
    'mongodb+srv://resilientes:resilientes123@gestionproyectosresilie.m3llm.mongodb.net/ProyectosResilientes?retryWrites=true&w=majority'
    )
    .then(() => {
      console.log('Conexion exitosa');
    })
    .catch((e) => {
      console.error('Error conectando a la base de datos', e);
    });

    

};

export default conectarComBD;
