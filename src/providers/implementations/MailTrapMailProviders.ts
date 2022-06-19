import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import { env } from "process";

import { IMailProvider, IMessage } from "../IMailProvider";

export class MailTrapMailProviders implements IMailProvider {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: env.MAIL_HOST,
            port: Number(env.MAIL_PORT),
            auth: {
                user: env.MAIL_AUTH_USER,
                pass: env.MAIL_AUTH_PASS,
            },
        });
    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email,
            },
            from: {
                name: message.to.name,
                address: message.to.email,
            },
            subject: message.subject,
            html: message.body,
        });
    }
}
