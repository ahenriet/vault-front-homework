export const NoResult = () => {
    return (
        <div className="h-[380px]">
            <div className="flex justify-center mt-16">
                <img src={'./not-found.png'} alt="Not Found" />
            </div>
            <div className="flex justify-center">No result found...</div>
        </div>
    );
};

export default NoResult;
