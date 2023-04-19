import MongoDBConnect from '../../utils/mongoDBConnection';
import ToDoModel from '../../Models/ToDoModel';
import JWTAuth from '../../utils/JWTAuth';


const AddToDoHandle = async (req, res) => {
    const data = JSON.parse(req.body);
    if (req.method !== 'POST') {
        res.json({ message: 'Only POST requests allowed' })
    }
    try {
        await MongoDBConnect();
        const addNewToDo = await new ToDoModel({
            email: req.user.email,
            userId: req.user.id,
            title: data.title,
            desc: data.desc,
            lastUpdate: data.time
        })
        await addNewToDo.save();
        res.json({ message: 'Successfully Added' })
    }
    catch (error) {
        res.json({ message: 'Error, Please try again...'})
    }
}


export default JWTAuth(AddToDoHandle);