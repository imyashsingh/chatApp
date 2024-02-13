const Conversation = () => {
    return (
        <>
            <div className="flex gap-2 items-center hover:bg-violet-400 rounded p-2 py-3 cursor-pointer border-gray-600 border-b-2 ">
                <div className="w-12 rounded-full">
                    <img
                        src="https://avatar.iran.liara.run/public/boy"
                        alt="user avatar"
                    />
                </div>
                <div>
                    <p className="font-semibold text-gray-800">Test Male</p>
                </div>
            </div>
        </>
    );
};

export default Conversation;
