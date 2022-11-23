'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const images_1 = __importDefault(require('./routes/images'));
const validation_middleware_1 = __importDefault(
  require('./utils/validation-middleware')
);
const myapp = (0, express_1.default)();
const port = 3000;
const publicPath = __dirname.replace('src', 'public');
myapp.use(express_1.default.static(publicPath));
myapp.use('/resize', validation_middleware_1.default, images_1.default);
myapp.use('/public', express_1.default.static('public'));
myapp.listen(port, () => {
  console.log('SERVER IS RUN');
});
exports.default = myapp;
