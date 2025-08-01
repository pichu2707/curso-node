"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckServices = void 0;
class CheckServices {
    constructor(successCallback, errorCallback) {
        this.successCallback = successCallback;
        this.errorCallback = errorCallback;
    }
    execute(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const req = yield fetch(url);
                // Verifica si la respuesta es correcta
                if (!req.ok) {
                    throw new Error(`Error on check service: ${url}`);
                }
                // Si la respuesta es correcta, puedes hacer algo con los datos
                this.successCallback();
                return true;
            }
            catch (error) {
                console.log(`Error on check service: ${error}`);
                this.errorCallback(`Error on check service: ${error}`);
                return false;
            }
        });
    }
}
exports.CheckServices = CheckServices;
