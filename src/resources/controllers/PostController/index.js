import BaseController from "./../BaseController";
import Post from "./../../../models/Post";

export default class UserController extends BaseController {
  constructor() {
    super(Post, "_id");
  }
}
