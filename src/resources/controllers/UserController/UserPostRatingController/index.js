import BaseController from "./../../BaseController";
import UserPostRating from "./../../../../models/UserPostRating";

export default class UserPostRatingController extends BaseController {
    constructor() {
        super(UserPostRating, "uid");
    }
}
