let tasks = [{id:1, name:'Task 1', done:false}, {id:2, name:'Task 2', done:true}];

exports.getTasks = async (req, res) => {
    try {
        if(tasks.length === 0)  return res.status(200).json({message: 'No tasks found'});
        if(tasks.length > 0)  return res.status(200).json({tasks});
    } catch (error) {
        return res.status(500).json({message: 'Internal server error', errorMessage: error.message});
    }
}

exports.getTask = async (req, res) => {
    const task = tasks.filter(task => task.id == Number(req.params.id));
    try {
        if(task.length === 0)  return res.status(200).json({message: 'No task found'});
        if(task.length > 0)  return res.status(200).json({task: task});
    } catch (error) {
        return res.status(500).json({message: 'Internal server error', errorMessage: error.message});
    }
}

exports.deleteTask = async (req, res) => {
    const taskIndex = Number(req.params.id) - 1;
    if (taskIndex > -1 && taskIndex < tasks.length) {
        tasks.splice(taskIndex, 1);
      }

    try {
        if(tasks.length === 0)  return res.status(200).json({message: 'No task found'});
        if(tasks.length > 0)  return res.status(200).json({task: tasks});
    } catch (error) {
        return res.status(500).json({message: 'Internal server error', errorMessage: error.message});
    }
}