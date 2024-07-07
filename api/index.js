// Import library Express
import express from "express";
const app = express();
const port = 3000; // Port yang digunakan, bisa disesuaikan

// Data mobil dalam bentuk JSON (simpan di variabel)
const cars = [
  {
    id: 1,
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "Silver",
    image: "https://example.com/images/toyota_camry.jpg",
  },
  {
    id: 2,
    brand: "Honda",
    model: "Accord",
    year: 2023,
    color: "Black",
    image: "https://example.com/images/honda_accord.jpg",
  },
  {
    id: 3,
    brand: "Ford",
    model: "Mustang",
    year: 2021,
    color: "Red",
    image: "https://example.com/images/ford_mustang.jpg",
  },
  {
    id: 4,
    brand: "BMW",
    model: "X5",
    year: 2023,
    color: "White",
    image: "https://example.com/images/bmw_x5.jpg",
  },
  {
    id: 5,
    brand: "Mercedes-Benz",
    model: "E-Class",
    year: 2022,
    color: "Blue",
    image: "https://example.com/images/mercedes_e_class.jpg",
  },
  {
    id: 6,
    brand: "Audi",
    model: "A4",
    year: 2024,
    color: "Gray",
    image: "https://example.com/images/audi_a4.jpg",
  },
  {
    id: 7,
    brand: "Lexus",
    model: "RX",
    year: 2023,
    color: "Silver",
    image: "https://example.com/images/lexus_rx.jpg",
  },
  {
    id: 8,
    brand: "Tesla",
    model: "Model S",
    year: 2022,
    color: "Red",
    image: "https://example.com/images/tesla_model_s.jpg",
  },
  {
    id: 9,
    brand: "Volvo",
    model: "XC90",
    year: 2021,
    color: "Black",
    image: "https://example.com/images/volvo_xc90.jpg",
  },
  {
    id: 10,
    brand: "Subaru",
    model: "Outback",
    year: 2023,
    color: "Green",
    image: "https://example.com/images/subaru_outback.jpg",
  },
  {
    id: 11,
    brand: "Chevrolet",
    model: "Camaro",
    year: 2022,
    color: "Yellow",
    image: "https://example.com/images/chevrolet_camaro.jpg",
  },
  {
    id: 12,
    brand: "Hyundai",
    model: "Tucson",
    year: 2024,
    color: "White",
    image: "https://example.com/images/hyundai_tucson.jpg",
  },
  {
    id: 13,
    brand: "Kia",
    model: "Sorento",
    year: 2021,
    color: "Blue",
    image: "https://example.com/images/kia_sorento.jpg",
  },
  {
    id: 14,
    brand: "Mazda",
    model: "CX-5",
    year: 2023,
    color: "Red",
    image: "https://example.com/images/mazda_cx5.jpg",
  },
  {
    id: 15,
    brand: "Nissan",
    model: "Altima",
    year: 2022,
    color: "Silver",
    image: "https://example.com/images/nissan_altima.jpg",
  },
  {
    id: 16,
    brand: "Porsche",
    model: "911",
    year: 2021,
    color: "Black",
    image: "https://example.com/images/porsche_911.jpg",
  },
  {
    id: 17,
    brand: "Infiniti",
    model: "QX60",
    year: 2023,
    color: "Gray",
    image: "https://example.com/images/infiniti_qx60.jpg",
  },
  {
    id: 18,
    brand: "Jaguar",
    model: "F-Type",
    year: 2022,
    color: "Red",
    image: "https://example.com/images/jaguar_ftype.jpg",
  },
  {
    id: 19,
    brand: "Land Rover",
    model: "Discovery",
    year: 2024,
    color: "Green",
    image: "https://example.com/images/landrover_discovery.jpg",
  },
  {
    id: 20,
    brand: "Lincoln",
    model: "Navigator",
    year: 2021,
    color: "Blue",
    image: "https://example.com/images/lincoln_navigator.jpg",
  },
  {
    id: 21,
    brand: "Mini",
    model: "Cooper",
    year: 2023,
    color: "Yellow",
    image: "https://example.com/images/mini_cooper.jpg",
  },
  {
    id: 22,
    brand: "Ram",
    model: "1500",
    year: 2022,
    color: "White",
    image: "https://example.com/images/ram_1500.jpg",
  },
  {
    id: 23,
    brand: "Volkswagen",
    model: "Golf",
    year: 2021,
    color: "Silver",
    image: "https://example.com/images/volkswagen_golf.jpg",
  },
  {
    id: 24,
    brand: "Acura",
    model: "MDX",
    year: 2023,
    color: "Black",
    image: "https://example.com/images/acura_mdx.jpg",
  },
  {
    id: 25,
    brand: "Buick",
    model: "Enclave",
    year: 2022,
    color: "Gray",
    image: "https://example.com/images/buick_enclave.jpg",
  },
  {
    id: 26,
    brand: "Cadillac",
    model: "Escalade",
    year: 2024,
    color: "Red",
    image: "https://example.com/images/cadillac_escalade.jpg",
  },
  {
    id: 27,
    brand: "Chrysler",
    model: "Pacifica",
    year: 2021,
    color: "Blue",
    image: "https://example.com/images/chrysler_pacifica.jpg",
  },
  {
    id: 28,
    brand: "Dodge",
    model: "Charger",
    year: 2023,
    color: "Yellow",
    image: "https://example.com/images/dodge_charger.jpg",
  },
  {
    id: 29,
    brand: "GMC",
    model: "Sierra",
    year: 2022,
    color: "White",
    image: "https://example.com/images/gmc_sierra.jpg",
  },
  {
    id: 30,
    brand: "Jeep",
    model: "Grand Cherokee",
    year: 2021,
    color: "Silver",
    image: "https://example.com/images/jeep_grandcherokee.jpg",
  },
  {
    id: 31,
    brand: "Maserati",
    model: "Ghibli",
    year: 2023,
    color: "Black",
    image: "https://example.com/images/maserati_ghibli.jpg",
  },
  {
    id: 32,
    brand: "Mitsubishi",
    model: "Outlander",
    year: 2022,
    color: "Gray",
    image: "https://example.com/images/mitsubishi_outlander.jpg",
  },
  {
    id: 33,
    brand: "Pontiac",
    model: "Firebird",
    year: 2024,
    color: "Red",
    image: "https://example.com/images/pontiac_firebird.jpg",
  },
  {
    id: 34,
    brand: "Saturn",
    model: "Aura",
    year: 2021,
    color: "Blue",
    image: "https://example.com/images/saturn_aura.jpg",
  },
  {
    id: 35,
    brand: "Scion",
    model: "tC",
    year: 2023,
    color: "Yellow",
    image: "https://example.com/images/scion_tc.jpg",
  },
  {
    id: 36,
    brand: "Suzuki",
    model: "SX4",
    year: 2022,
    color: "White",
    image: "https://example.com/images/suzuki_sx4.jpg",
  },
  {
    id: 37,
    brand: "Toyota",
    model: "Highlander",
    year: 2021,
    color: "Silver",
    image: "https://example.com/images/toyota_highlander.jpg",
  },
  {
    id: 38,
    brand: "Volkswagen",
    model: "Passat",
    year: 2023,
    color: "Black",
    image: "https://example.com/images/volkswagen_passat.jpg",
  },
  {
    id: 39,
    brand: "Volvo",
    model: "S60",
    year: 2022,
    color: "Gray",
    image: "https://example.com/images/volvo_s60.jpg",
  },
  {
    id: 40,
    brand: "Subaru",
    model: "Forester",
    year: 2024,
    color: "Red",
    image: "https://example.com/images/subaru_forester.jpg",
  },
];

// Route untuk menampilkan semua mobil
app.get("/api/cars", (req, res) => {
  res.json(cars);
});

// Jalankan server dan tampilkan pesan saat server berjalan
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
