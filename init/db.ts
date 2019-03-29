import * as mongoose from 'mongoose';

const connectToBackend = (dataBaseUri: string) => mongoose.connect(dataBaseUri, (error: any) => {
    if (error) console.log('Mongo failed'); else console.log('Mongo success')
});

export default connectToBackend; 