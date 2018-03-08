// @flow

import { Router } from "express";
import type { MongooseModel } from 'mongoose';
import pluralize from "pluralize";
import { ok, fail } from "./utils";

const MAX_RESULTS = 10;

export default class BaseController {
  model: MongooseModel;
  modelName: string;
  key: string | [string];

  constructor(model: MongooseModel, key: string | [string]) {
    this.model = model;
    this.modelName = model.modelName.toLowerCase();
    this.key = key;
  }

  create(data: {}) {
    return this.model.create(data).then(modelInstance => {
      var response = {};
      response[this.modelName] = modelInstance;
      return response;
    });
  }

  read(id: string) {
    var filter = {};
    filter[this.key] = id;

    return this.model.findOne(filter).then(modelInstance => {
      var response = {};
      response[this.modelName] = modelInstance;
      return response;
    });
  }

  update(id: string, data: {}) {
    var filter = {};
    filter[this.key] = id;

    return this.model
      .findOne(filter)
      .then(modelInstance => {
        for (var attribute in data) {
          if (
            attribute in data &&
            attribute !== this.key &&
            attribute !== "_id"
          ) {
            modelInstance[attribute] = data[attribute];
          }
        }

        return modelInstance.save();
      })
      .then(modelInstance => {
        var response = {};
        response[this.modelName] = modelInstance;
        return response;
      });
  }

  delete(id: string) {
    const filter = {};
    filter[this.key] = id;

    return this.model.remove(filter).then(() => {
      return {};
    });
  }

  list() {
    return this.model
      .find({})
      .limit(MAX_RESULTS)
      .then(modelInstances => {
        var response = {};
        response[pluralize(this.modelName)] = modelInstances;
        return response;
      });
  }
  route() {
    const router = new Router();

    router.get("/", (req, res) => {
      this.list()
        .then(ok(res))
        .then(null, fail(res));
    });

    router.post("/", (req, res) => {
      this.create(req.body)
        .then(ok(res))
        .then(null, fail(res));
    });

    router.get("/:key", (req, res) => {
      this.read(req.params.key)
        .then(ok(res))
        .then(null, fail(res));
    });

    router.put("/:key", (req, res) => {
      this.update(req.params.key, req.body)
        .then(ok(res))
        .then(null, fail(res));
    });

    router.delete("/:key", (req, res) => {
      this.delete(req.params.key)
        .then(ok(res))
        .then(null, fail(res));
    });
    return router;
  }
}
