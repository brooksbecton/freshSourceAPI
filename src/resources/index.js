import { Router } from "express";
import UserController from "./controllers/UserController";
import PostController from "./controllers/PostController";

export default function() {
  var api = Router();
  api.use("/user", new UserController().route());
  api.use("/post", new PostController().route());
  return api;
}
