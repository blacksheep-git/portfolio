import {NextResponse, NextRequest} from "next/server";
import { Resend } from "resend";
import {EmailTemplate} from "@/app/components/EmailTemplate";
import React from "react";


const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: NextRequest) {
    const { email, subject, message } = await req.json();

    try {
        const data = await resend.emails.send({
            from: fromEmail,
            to: [fromEmail, email],
            subject: subject,
            react: EmailTemplate({subject: subject, message: message }) as React.ReactElement,
        });

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}


