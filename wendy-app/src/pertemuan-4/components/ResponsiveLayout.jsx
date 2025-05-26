export default function ResponsiveLayout(){
    return (
        <div>
             <p class="mt-4">
                Kotak-kotak di bawah ini menggunakan <strong>Grid Layout</strong> dari Tailwind CSS. Jumlah kolom akan menyesuaikan dengan ukuran layar:
            </p>
            <p>
                - <strong>grid-cols-1</strong> → Pada layar kecil (default), semua box tersusun dalam <strong>1 kolom</strong>.<br/>
                - <strong>sm:grid-cols-2</strong> → Saat ukuran layar mencapai <strong>sm (≥640px)</strong>, grid berubah menjadi <strong>2 kolom</strong>.<br/>
                - <strong>md:grid-cols-3</strong> → Pada ukuran <strong>md (≥768px)</strong>, grid berubah menjadi <strong>3 kolom</strong>.<br/>
                - <strong>lg:grid-cols-4</strong> → Saat ukuran layar <strong>lg (≥1024px)</strong> atau lebih besar, grid akan memiliki <strong>4 kolom</strong>.<br/>
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
                <div class="bg-blue-500 p-4">Box 1</div>
                <div class="bg-blue-500 p-4">Box 2</div>
                <div class="bg-blue-500 p-4">Box 3</div>
                <div class="bg-blue-500 p-4">Box 4</div>
            </div>
        </div>
    )
}