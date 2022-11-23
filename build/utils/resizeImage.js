'use strict';
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
const sharp_1 = __importDefault(require('sharp'));
const memory_cache_1 = __importDefault(require('memory-cache'));
const resizeImage = (image_name, width, height) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const resizedImageName = image_name + '_' + width + '_' + height + '.jpg';
    try {
      yield (0, sharp_1.default)('../images/' + image_name + '.jpg')
        .resize({
          width: parseInt(width),
          height: parseInt(height),
        })
        .toFile('../public/' + resizedImageName);
      memory_cache_1.default.put(resizedImageName, resizedImageName);
      return resizedImageName;
    } catch (error) {
      return null;
    }
  });
exports.default = resizeImage;
