export default function RoutineDetailLoading() {
    return (
        <div className="flex flex-col gap-4">
            <div className="skeleton h-8 w-36" />
            <div className="flex flex-col gap-2">
                <div className="skeleton h-8 w-56" />
                <div className="skeleton h-4 w-80" />
            </div>
            <div className="flex flex-col gap-2">
                <div className="skeleton h-12 w-full" />
                <div className="skeleton h-12 w-full" />
                <div className="skeleton h-12 w-full" />
            </div>
        </div>
    );
}
