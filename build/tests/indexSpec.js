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
const supertest_1 = __importDefault(require('supertest'));
const index_1 = __importDefault(require('../index'));
const resizeImage_1 = __importDefault(require('../utils/resizeImage'));
const request = (0, supertest_1.default)(index_1.default);
describe(' Image Not Found', () => {
  const image_name = 'image_ten';
  const width = '500';
  const height = '500';
  it('Test if Image name is not exsit  ', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const response = yield request.get(
        `/resize?image_name=${image_name}&width=${width}&height=${height}`
      );
      expect(response.status).toBe(404);
    }));
});
describe(' Width test ', () => {
  const image_name = 'image_one';
  const height = '500';
  it('Test if not enter the width ', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const response = yield request.get(
        `/resize?image_name=${image_name}&width=&height=${height}`
      );
      expect(response.text).toBe('Please provide image_name, width and height');
    }));
});
describe(' Height test ', () => {
  const image_name = 'image_one';
  const width = '500';
  it('Test if not enter the height ', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const response = yield request.get(
        `/resize?image_name=${image_name}&width=${width}&height=`
      );
      expect(response.text).toBe('Please provide image_name, width and height');
    }));
});
describe(' Image test ', () => {
  const width = '500';
  const height = '500';
  it('Test if not enter the image name ', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const response = yield request.get(
        `/resize?image_name=&width=${width}&height=${height}`
      );
      expect(response.text).toBe('Please provide image_name, width and height');
    }));
});
describe(' Image and width and height test ', () => {
  it(' Test if not enter the image name and width and height  ', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const response = yield request.get('/resize');
      expect(response.status).toBe(400);
    }));
});
describe('Test Function ', () => {
  it('Testing if Function is true ', () => {
    return expectAsync(
      (0, resizeImage_1.default)('image_one', '500', '500')
    ).toBeResolved();
  });
});
