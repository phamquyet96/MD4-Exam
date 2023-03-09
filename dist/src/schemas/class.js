"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ClassSchema = new mongoose_1.Schema({
    name: String
});
const Class = (0, mongoose_1.model)('Class', ClassSchema);
exports.default = Class;
//# sourceMappingURL=class.js.map