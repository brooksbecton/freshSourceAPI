import { Router } from "express";
import UserController from "./controllers/UserController";

export default function() {
  var api = Router();
  api.use("/user", new UserController().route());
  return api;
}
