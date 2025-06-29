'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton({ text = 'Submit' }) {
    const { pending } = useFormStatus();
    return (
        <button
            className="px-6 py-2 rounded bg-pink-600 hover:bg-pink-700 text-white font-semibold shadow transition-colors duration-200 mt-2 w-full disabled:opacity-60 disabled:cursor-not-allowed"
            type="submit"
            disabled={pending}
        >
            {text}
        </button>
    );
}
