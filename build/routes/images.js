'use strict';
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ('get' in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, 'default', { enumerable: true, value: v });
      }
    : function (o, v) {
        o['default'] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== 'default' && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
const express = __importStar(require('express'));
const memory_cache_1 = __importDefault(require('memory-cache'));
const resizeImage_1 = __importDefault(require('../utils/resizeImage'));
const imageRouter = express.Router();
imageRouter.get('/', (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const image_name = req.query.image_name;
    const width = req.query.width;
    const height = req.query.height;
    const resizedImageName = image_name + '_' + width + '_' + height + '.jpg';
    const cached = memory_cache_1.default.get(resizedImageName);
    let resizedImage;
    if (cached != null) resizedImage = cached;
    else
      resizedImage = yield (0, resizeImage_1.default)(
        image_name,
        width,
        height
      );
    if (resizedImage == null)
      return res
        .status(400)
        .send('Image resizing failed, please try again later');
    const html = `<img src="http://localhost:3000/${resizedImage}" >`;
    res.writeHead(200, {
      'Content-Type': 'text/html',
      'Content-Length': html.length,
    });
    res.write(html);
    res.end();
  })
);
exports.default = imageRouter;
