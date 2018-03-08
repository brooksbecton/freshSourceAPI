import BaseController from "./../BaseController";
import Source from "./../../../models/Source";

export default class SourceController extends BaseController {
  constructor() {
    super(Source, "_id");
  }
}
