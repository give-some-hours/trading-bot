"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.subscriptions = exports.resolvers = exports.typeDefs = void 0;

var _path = _interopRequireDefault(require("path"));

var _loadFiles = require("@graphql-tools/load-files");

var _merge = require("@graphql-tools/merge");

var typesArray = (0, _loadFiles.loadFilesSync)(_path["default"].join(__dirname, './**/*.graphql'));
var resolversArray = (0, _loadFiles.loadFilesSync)(_path["default"].join(__dirname, './**/resolvers.js'));
var typeDefs = (0, _merge.mergeTypeDefs)(typesArray, {
  all: true
});
exports.typeDefs = typeDefs;
var resolvers = (0, _merge.mergeResolvers)(resolversArray);
exports.resolvers = resolvers;
var subscriptions = {
  path: '/ws',
  port: 4040
};
exports.subscriptions = subscriptions;