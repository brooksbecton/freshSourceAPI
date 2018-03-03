import BaseController from './../BaseController';
import User from './../../../models/User'

export default class UserController extends BaseController {
    constructor() {
        super(User, 'uid');
    }
}
