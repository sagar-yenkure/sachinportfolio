export const ContactUsEmail = ({ email, message }: {
    email: string,
    message: string,
}) => {

    return (
        <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-xl p-6 font-sans">
            <h1 className="text-2xl font-bold text-gray-800">Thanks for Reaching Out!</h1>

            <p className="text-base text-gray-700 mt-4">Hi {email},</p>

            <p className="text-base text-gray-700 mt-2">
                Thank you for contacting <strong>Sachin — Graphic Designer</strong>. I truly appreciate your interest in my work!
                I've received your message and will get back to you as soon as possible to discuss your design needs.
            </p>

            <div className="mt-4 text-sm text-gray-800 border rounded-md bg-gray-50 p-4">
                <p><strong>Your Message:</strong><br />{message}</p>
            </div>

            <p className="text-sm text-gray-500 mt-6">Looking forward to creating something awesome together!<br />— Sachin Yenkure</p>
        </div>
    );
};
