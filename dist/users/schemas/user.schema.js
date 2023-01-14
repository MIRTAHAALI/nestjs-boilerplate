"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const mongoose = require("mongoose");
exports.UserSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    type: String,
    password: String
});
//# sourceMappingURL=user.schema.js.map