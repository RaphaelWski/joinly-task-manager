const  { v4: uuidv4 } = require('uuid');

const fs = require('fs');
const path = require ('path');
const dirPath = path.join(__dirname, '../../data/tasks.json');

async function getTasks() {
    try {
        let rawdata = fs.readFileSync(dirPath);
        const tasks = JSON.parse(rawdata);
          
        return await tasks
    } catch (err) {
        console.log(err);
    }
}

async function getTask(id) {
    try {
        let rawdata = fs.readFileSync(dirPath);
        const tasks = JSON.parse(rawdata);
        
        let task = tasks.find(task => task.id == id);
        if(task) return await tasks;
    } catch (err) {
        console.log(err);
    }
}

async function createTask(task) {
    try {
        let forbiden_id = {code: 403, msg: 'Forbiden: id must be unique'};
        let forbiden_nullOrEmpty = {code: 403, msg: 'Forbiden: invalid name'};

        let createdTask = {id: uuidv4(), name: task.name };
        let rawdata = fs.readFileSync(dirPath);
        const tasks = JSON.parse(rawdata);

        let doublon = tasks.filter(item => item.id === task.id);

        if(doublon.length) {
            // console.log("forbiden_id", forbiden_id);
            return forbiden_id;
        } else {
            if(task.name === null || task.name === ""){
                // console.log("forbiden_nullOrEmpty", forbiden_nullOrEmpty);
                return forbiden_nullOrEmpty;
            } else {
                tasks.push(createdTask);
                // console.log("createdTask", createdTask);
            }
        }
        
        const updatedList = JSON.stringify(tasks);
        fs.writeFileSync(dirPath, updatedList);
        return await createdTask;
    } catch (err) {
        console.log(err);
        ctx.status = 400;
        ctx.body = `400 - Bad Request: ${err}`;
        return await ctx.body
    }
}

async function updateTask(id, updatedTask) {
    try {
        let not_found = {code: 404, msg: `Task with ${id} wasn't found`};
        let forbiden_nullOrEmpty = {code: 403, msg: 'Forbiden: invalid name'};
        let forbiden_sameValue = {code: 403, msg: 'Forbiden: nothing has changed'};

        let rawdata = fs.readFileSync(dirPath);
        const tasks = JSON.parse(rawdata);

        let task = tasks.find(task => task.id == id);
        if(task) {
            if(updatedTask.name === null || updatedTask.name === "") {
                // console.log("forbiden_nullOrEmpty", forbiden_nullOrEmpty);
                return await forbiden_nullOrEmpty;
            } else {
                console.log("task.name != updatedTask.name", task.name != updatedTask.name);
                if(task.name === updatedTask.name) {
                    // console.log("forbiden_sameValue", forbiden_sameValue);
                    return await forbiden_sameValue;
                } else {
                    task.name = updatedTask.name
                    // console.log("task", task);
                }
            }
        } else {
            return await not_found;
        }

        const updatedList = JSON.stringify(tasks);
        fs.writeFileSync(dirPath, updatedList);
        return await task.name;
    } catch (err) {
        console.log(err);
    }
}

async function deleteTask(id) {
    try {
        let filtered;
        let not_found = {code: 404, msg: `Task with ${id} wasn't found`};

        let rawdata = fs.readFileSync(dirPath);
        const tasks = JSON.parse(rawdata);
        let task = tasks.find(task => task.id == id);
        
        if(task) {
            filtered = tasks.filter(task => task.id != id);
            // console.log("filtered", filtered);
        } else {
            // console.log("not_found", not_found);
            return await not_found;
        }

        const updatedList = JSON.stringify(filtered);
        fs.writeFileSync(dirPath, updatedList);
        return await task.name;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
};