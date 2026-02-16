"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const email = "support@canimagemediatech.com";
/**
 * Create transporter
 */
const transporter = nodemailer_1.default.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // STARTTLS
    auth: {
        user: email,
        pass: "qwbywkmmrfzxqwsm", // ⚠️ move this to env in production
    },
    tls: {
        rejectUnauthorized: true,
    },
});
/**
 * Generic Send Email Function
 */
const sendEmail = async (options) => {
    try {
        const info = await transporter.sendMail({
            from: options.from ?? `CanImage Support <${email}>`,
            to: options.to,
            subject: options.subject,
            html: options.html,
            cc: options.cc,
        });
        return {
            success: true,
            message: "Email sent successfully",
            data: {
                messageId: info.messageId,
                accepted: info.accepted,
                rejected: info.rejected,
                response: info.response,
            },
        };
    }
    catch (error) {
        return {
            success: false,
            message: "Email sending failed",
            error: error.message,
            stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
        };
    }
};
exports.sendEmail = sendEmail;
