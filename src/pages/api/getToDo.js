import MongoDBConnect from '../../utils/mongoDBConnection';
import ToDoModel from '../../Models/ToDoModel';
import JWTAuth from '../../utils/JWTAuth';

const oneToDo = async (req, res) => {
    const {post} = req.query;
    if (req.method !== 'GET') {
        res.json({ message: 'Only GET requests allowed' })
    }
    try {
        await MongoDBConnect();
        const ToDo = await ToDoModel.findOne({ _id: post });
        res.json({ message: 'Success', data: ToDo })
    }
    catch (error) {
        res.json({ message: 'Error, Please try again...' })
    }
}


export default JWTAuth(oneToDo);