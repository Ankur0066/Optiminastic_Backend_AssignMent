"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDbPool = getDbPool;
exports.executeQuery = executeQuery;
exports.executeStoredProcedure = executeStoredProcedure;
exports.executeStoredProcedureMultipleResult = executeStoredProcedureMultipleResult;
const sql = __importStar(require("mssql"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
/* =====================================================
   MSSQL CONFIG
===================================================== */
const sqlConfig = {
    user: "sa",
    password: "Cimt@123",
    database: "CanteenModule",
    server: "172.16.90.30",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
    options: {
        encrypt: true, // true for Azure
        trustServerCertificate: true // true for local dev
    },
};
/* =====================================================
   CONNECTION POOL (SINGLETON)
===================================================== */
let poolPromise = null;
/**
 * Get or create MSSQL connection pool
 */
async function getDbPool() {
    if (!poolPromise) {
        poolPromise = sql
            .connect(sqlConfig)
            .then((pool) => {
            //console.log("✅ MSSQL database connected");
            return pool;
        })
            .catch((err) => {
            console.error("❌ MSSQL connection failed:", err);
            poolPromise = null;
            throw err;
        });
    }
    return poolPromise;
}
/* =====================================================
   EXECUTE RAW QUERY
===================================================== */
async function executeQuery(query, params = []) {
    const pool = await getDbPool();
    const request = pool.request();
    params.forEach((param) => {
        request.input(param.name, param.value);
    });
    const result = await request.query(query);
    return result.recordset;
}
/* =====================================================
   EXECUTE STORED PROCEDURE (SINGLE RESULT SET)
===================================================== */
async function executeStoredProcedure(spName, params = []) {
    const pool = await getDbPool();
    const request = pool.request();
    params.forEach((param) => {
        request.input(param.name, param.value);
    });
    const result = await request.execute(spName);
    return result.recordset;
}
/* =====================================================
   EXECUTE STORED PROCEDURE (MULTIPLE RESULT SETS)
===================================================== */
async function executeStoredProcedureMultipleResult(spName, params = []) {
    const pool = await getDbPool();
    const request = pool.request();
    params.forEach((param) => {
        request.input(param.name, param.value);
    });
    const result = await request.execute(spName);
    return result.recordsets;
}
