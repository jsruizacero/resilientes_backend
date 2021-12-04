import { connect } from 'mongoose';

const conectarComBD = async () => {
   await connect (process.env.DATABASE_URL)
    .then(() => {
      console.log('Conexion exitosa');
    })
    .catch((e) => {
      console.error('Error conectando a la base de datos', e);
    });

    

};

export default conectarComBD;
