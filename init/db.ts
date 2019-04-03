import * as mongoose from 'mongoose';

const connectToBackend = (dataBaseUri: string) => mongoose.connect('mongodb://' + dataBaseUri, {useNewUrlParser: true}, (error: any) => {
    if (error) console.log('Mongo failed'); else console.log('Mongo success')
});

export default connectToBackend; 