import { Router } from "express";
import PostController from "./controllers/PostController";
import SourceController from "./controllers/SourceController";
import UserController from "./controllers/UserController";
import UserPostRatingController from "./controllers/UserController/UserPostRatingController";

export default function () {
  var api = Router();
  api.use("/post", new PostController().route());
  api.use("/source", new SourceController().route());
  api.use("/user", new UserController().route());
  api.use("/user/post/rating", new UserPostRatingController().route());
  return api;
}
