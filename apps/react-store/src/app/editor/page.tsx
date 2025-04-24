import axios from 'axios';

const EditorPage = async () => {
    return (
        <div className="max-w-96 mx-5 md:mx-auto flex flex-col gap-3">
            <h1 className="text-5xl mx-auto w-fit h-fit button-red">Editor</h1>
        </div>
    );

    try {
        // Step 1: Get User Settings API based on page
    } catch (err) {
        return (
            <h1 className="text-rose-500 w-fit mx-auto">
                Internal server Error
            </h1>
        );
    }
};

export default EditorPage;
