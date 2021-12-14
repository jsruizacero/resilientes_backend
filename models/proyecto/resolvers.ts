import { ProjectModel } from "./proyecto";
import { InscriptionModel } from "../inscripcion/inscripcion";
import { UserModel } from "../usuario/usuario";

const resolversProyecto = {
  Proyecto: {
    // lider: async (parent, args, context) => {
    //   const usr = await UserModel.findOne({
    //     _id: parent.lider.toString(),
    //   });
    //   return usr;
    // },
    // inscripciones: async (parent, args, context) => {
    //   const inscripciones = await InscriptionModel.find({
    //     proyecto: parent._id,
    //   });
    //   return inscripciones;
    // },
  },
  Query: {
    Proyectos: async (parent, args) => {
      const proyectos = await ProjectModel.find();
      return proyectos;
    },
  },
  Mutation: {
    crearProyecto: async (parent, args) => {
      const proyectoCreado = await ProjectModel.create({
        nombre: args.nombre,
        // estado: args.estado,
        // fase: args.fase, 
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        presupuesto: args.presupuesto,
        lider: args.lider,
        // objetivos: args.objetivos,
      });
      return proyectoCreado;
    },

    editarProyecto: async (parent, args) => {
      const proyectoEditado = await ProjectModel.findByIdAndUpdate(args._id, {
        nombre: args.nombre,
        // estado: args.estado,
        // fase: args.fase, 
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        presupuesto: args.presupuesto,
        lider: args.lider,
        // objetivos: args.objetivos,
      },
      {
        new: true,
      }
      );
      return proyectoEditado;
    },

    eliminarProyecto: async (parent, args) => {
      if (Object.keys(args).includes('_id')) {
        const proyectoEliminado = await ProjectModel.findOneAndDelete({ _id: args._id });
        return proyectoEliminado;
      }
    },
  },
};

export { resolversProyecto };
