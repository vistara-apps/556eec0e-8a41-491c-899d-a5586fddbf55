'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl mb-4">🐾</div>
        <h2 className="text-2xl font-bold text-neutral-900 mb-4">
          Oops! Something went wrong
        </h2>
        <p className="text-neutral-500 mb-6">
          We're having trouble connecting you with pet care providers right now.
        </p>
        <button
          onClick={reset}
          className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity duration-200"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
