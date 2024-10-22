import mongoose from 'mongoose';

const zapatillaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,  
  },
  imagen: {
    type: String,  
    required: true,  
  }
});

const Zapatilla = mongoose.models.Zapatilla || mongoose.model('Zapatilla', zapatillaSchema);

export default Zapatilla;
