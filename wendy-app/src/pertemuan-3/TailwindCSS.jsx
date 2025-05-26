export default function TailwindCSS(){
    return(
        <div>
            <h1 class="border m-4">Belajar TailWind CSS 4</h1>
            <button className="bg-blue-500 text-white px-4 py-2 mx-4 rounded shadow-lg">Click Me</button>

            <Spacing />
            <Typography />
            <BorderRadius />
        </div>
    )
}

function Spacing(){
    return (
        <div className="bg-white shadow-lg p-6 m-4 rounded-lg">
            <h2 className="text-lg font-semibold">Card Title</h2>
            <p className="mt-8 text-gray-600">Ini adalah contoh penggunaan padding dan margin 
                di Tailwind</p>
        </div>
    )
}

function Typography(){
    return (
        <div>
            <h1 className="text-5xl font-bold text-blue-600">Tailwind Typography</h1>
            <p className="text-gray-600 text-lg mt-2">Belajar Tailwind sangat menyenangkan 
                dan cepat!</p>
        </div>
    )
}

function BorderRadius(){
    return (
        <button className="border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-lg"> Klik Saya 
        </button>
    )
}

