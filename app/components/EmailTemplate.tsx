import * as React from 'react';

interface EmailTemplateProps {
    subject: string;
    message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ subject, message}) => (
    <div>
        <h1>{subject}</h1>
        <p>
            Your message was received! I will get back to you as soon as possible.
        </p>
        <p>{message}</p>
    </div>
);

