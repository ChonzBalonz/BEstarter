'use client';

import { Alert } from './alert';
import { Card } from './card';

export function FeedbackForm() {
    return (
        <div className="w-full md:max-w-md">
            <Card title="Leave Feedback">
                <form name="feedback" method="POST" data-netlify="true" className="flex flex-col gap-3 align-center">
                    <input type="hidden" name="form-name" value="feedback" />
                    <input name="name" type="text" placeholder="Name" required className="input" />
                    <input name="email" type="email" placeholder="Email (optional)" className="input" />
                    <textarea name="message" placeholder="Message" required className="input" rows={5} />
                    <button className="btn" type="submit">
                        Submit
                    </button>
                </form>
            </Card>
        </div>
    );
}
