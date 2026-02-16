"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const dbconfig_1 = require("./config/dbconfig");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = require("./config/swagger");
const globalRoute_1 = __importDefault(require("./globalRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
/* -------------------- MIDDLEWARE (ORDER MATTERS) -------------------- */
// parse JSON bodies
app.use(express_1.default.json());
// parse urlencoded bodies (for form submissions)
app.use(express_1.default.urlencoded({ extended: true }));
// optional but recommended
app.use((0, cors_1.default)());
/* -------------------- DEBUG LOGGER (TEMPORARY) -------------------- */
app.use((req, _res, next) => {
    console.log("📦 Body:", req.body);
    next();
});
/* -------------------- ROUTES -------------------- */
// health check
app.get("/health", (_req, res) => {
    console.log("hey");
    res.send("Server is running 🚀");
});
//  routes
app.use("/api", globalRoute_1.default);
/* ---------- SWAGGER ROUTE ---------- */
app.use("/apiDocs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
/* -------------------- SERVER START -------------------- */
async function startServer() {
    try {
        await (0, dbconfig_1.getDbPool)();
        app.listen(PORT, () => {
            console.log(`Database and sever running 🚀`);
        });
    }
    catch (error) {
        console.error("❌ Failed to connect to database ", error);
        process.exit(1);
    }
}
startServer();
