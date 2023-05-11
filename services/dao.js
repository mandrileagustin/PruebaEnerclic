import user_queries from "./sqlite_queries/user_queries.js";
import object_queries from "./sqlite_queries/object_queries.js";

const dao = {};
///Users
dao.createUser = async (userData) => await user_queries.createUser(userData);

dao.getUserByEmail = async (email) => await user_queries.getUserByEmail(email);

///Objects
dao.addObject = async (objectData) =>
  await object_queries.addObject(objectData);

dao.getAllObjects = async (objectData) =>
  await object_queries.getAllObjects(objectData);
export default dao;
