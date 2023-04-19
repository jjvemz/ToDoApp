import MongoDBConnect from '../../utils/mongoDBConnection';
import ToDoModel from '../../Models/ToDoModel';
import JWTAuth from '../../utils/JWTAuth';


const GetToDoHandle = async (req, res) => {
    if (req.method !== 'GET') {
        res.json({ message: 'Only GET requests allowed' })
    }
    try {
        await MongoDBConnect();
        const ToDo = await ToDoModel.find({email: req.user.email});
        res.json({ message: 'Success', data: ToDo})
    }
    catch (error) {
        res.json({ message: 'Error, Please try again...'})
    }
}


export default JWTAuth(GetToDoHandle);