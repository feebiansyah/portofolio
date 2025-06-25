const HeroImage = "./assets/hero-img.png";

const Image = {
  HeroImage,
};

export default Image;

const Tools1 = "./assets/tools/vscode.png";
const Tools2 = "./assets/tools/reactjs.png";
const Tools4 = "./assets/tools/tailwind.png";
const Tools5 = "./assets/tools/bootstrap.png";
const Tools6 = "./assets/tools/js.png";
const Tools7 = "./assets/tools/nodejs.png";
const Tools8 = "./assets/tools/github.png";
const Tools12 = "./assets/tools/php.png";
const Tools13 = "./assets/tools/laravel.png";
const Tools14 = "./assets/tools/mysql.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "500",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "600",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "700",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "PHP",
    ket: "Language",
    dad: "800",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Laravel",
    ket: "Framework",
    dad: "900",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "MySQL",
    ket: "Database",
    dad: "1000",
  },
];

const Proyek1 = "./assets/proyek/proyek1.png";
const Proyek2 = "./assets/proyek/proyek2.png";
const Proyek3 = "./assets/proyek/proyek3.png";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Warehouse Management System",
    desk: "Sistem manajemen stok dan transaksi gudang dengan fitur dashboard dan laporan.",
    tools: ["PHP", "LARAVEL", "BOOTSTRAP", "jQuery", "MYSQL"],
    dad: "200",
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "GYM MANAGEMENT SYSTEM",
    desk: "Sistem manajemen gym untuk mengelola member, langganan, kunjungan harian, dan transaksi kasir (POS).",
    tools: ["PHP", "JAVASCRIPT", "REACTJS", "LARAVEL", "BOOTSTRAP", "MYSQL"],
    dad: "300",
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Web Booking Online",
    desk: "Aplikasi pemesanan lapangan secara online dengan fitur jadwal, konfirmasi otomatis, dan manajemen booking.",
    tools: ["PHP", "JAVASCRIPT", "REACTJS", "LARAVEL", "BOOTSTRAP", "MYSQL"],
    dad: "400",
  },
];
