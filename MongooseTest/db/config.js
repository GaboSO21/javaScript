import mongoose from 'mongoose';

// Editar esto segun url y db a usar
const url = 'mongodb://127.0.0.1:27017/test';

// Connects to local database
export const connectDB = async () => {

    await mongoose.connect(url);

}

export const disconnectDB = async () => {

    await mongoose.disconnect();

}

