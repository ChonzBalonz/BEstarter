'use client';

import { Alert } from './alert';
import { Card } from './card';

export function FeedbackForm() {
    return (
        <div className="w-full md:max-w-md">
            <Card title="Leave Feedback">
                <form name="feedback" method="POST" data-netlify="true" className="flex flex-col gap-3 items-center">
                    <input type="hidden" name="form-name" value="feedback" />
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        required
                        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email (optional)"
                        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        required
                        rows={5}
                        className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 w-full"
                    />
                    <button
                        className="px-6 py-2 rounded bg-pink-600 hover:bg-pink-700 text-white font-semibold shadow transition-colors duration-200 mt-2 w-full"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </Card>
        </div>
    );
}
