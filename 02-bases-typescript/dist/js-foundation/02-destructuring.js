"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.characters = exports.USERDOMAIN = exports.npm_package_version = void 0;
console.log(process.env);
_a = process.env, exports.npm_package_version = _a.npm_package_version, exports.USERDOMAIN = _a.USERDOMAIN;
// console.log({ npm_package_version, USERDOMAIN });
// console.table({ npm_package_version, USERDOMAIN });
exports.characters = ['Flash', 'Batman', 'Superman', 'Wonder'];
const [, batman] = exports.characters;
console.log('Batman: ', batman);
