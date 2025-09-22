export default function Loading() {
  return (
    <div className="min-h-screen bg-bg flex items-center justify-center">
      <div className="animate-pulse space-y-4 w-full max-w-sm px-4">
        <div className="h-8 bg-neutral-100 rounded-lg w-3/4 mx-auto"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-24 bg-neutral-100 rounded-lg"></div>
          <div className="h-24 bg-neutral-100 rounded-lg"></div>
          <div className="h-24 bg-neutral-100 rounded-lg"></div>
          <div className="h-24 bg-neutral-100 rounded-lg"></div>
        </div>
        <div className="space-y-3">
          <div className="h-4 bg-neutral-100 rounded w-full"></div>
          <div className="h-4 bg-neutral-100 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );
}
