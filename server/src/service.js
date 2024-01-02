const { saveFile } = require("./fileServise");

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


async function createUser(user, picture, pdf) {
  //console.log(picture)
  const fileName = saveFile(picture);
  const fileName1 = saveFile(pdf);
 // console.log({...user, picture: fileName})
  const data = await createUserDb({...user, picture: fileName, pdf: fileName1});
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
