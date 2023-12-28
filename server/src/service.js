const uuid = require('uuid');
const path = require('path');

const {
    createUserDb,
    geteAllUserDb,
    updateUserDb,
    deleteUserDb,
  } = require("./repository");
  
  async function geteAllUser() {
    const data = await geteAllUserDb();
    return data;
  }
  
  async function createUser(user, picture) {
    const fileService = (file)=>{
      saveFile(file) {
       
            const fileName = uuid.v4();
            const filePath = path.resolve('static', fileName);
            file.mv(filePath);
            return fileName;
       
    }
    }
    const data = await createUserDb(user, picture);
    return data;
  }
  
  async function updateUser(_id, user) {
    const data = await updateUserDb(_id, user);
    return data;
  }
  
  async function deleteUser(_id) {
    const data = await deleteUserDb(_id);
    return data;
  }
  module.exports = {
    createUser,
    geteAllUser,
    updateUser,
    deleteUser,
  };