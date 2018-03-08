import { Router } from "express";
import UserController from "./controllers/UserController";
import PostController from "./controllers/PostController";
import SourceController from "./controllers/SourceController";

export default function() {
  var api = Router();
  api.use("/user", new UserController().route());
  api.use("/post", new PostController().route());
  api.use("/source", new SourceController().route());
  return api;
}
