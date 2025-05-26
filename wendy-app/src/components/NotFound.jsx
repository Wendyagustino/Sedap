export default function NotFound({ image, code, title, message }) {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-16">
            <img src={image} alt="404 image" className="max-w-xs md:max-w-md mb-8" />
            <h1 className="text-9xl font-extrabold text-gray-400 tracking-widest">{code}</h1>
            <div className="bg-red-500 px-4 py-2 text-sm rounded-xl absolute text-white mt-[-3rem] transform rotate-12 shadow-lg">
                {title}
            </div>
            <p className="text-gray-600 text-lg mt-6 mb-8 text-center max-w-md px-4">
                {message}
            </p>
        </div>
    );
}
