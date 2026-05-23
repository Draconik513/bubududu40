import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import vidioWishes from "../assets/videos/Wishes.mp4";
import fotoHari from "../assets/images/fotohati.jpeg";

const SpecialWishes = ({ isIOS }) => {
  const [showHeart, setShowHeart] = useState(false);

  const wishes = `
Hai sayangku Selamat ulang tahun cintaku 🥳, 
Terima kasih karena telah terlahir ke dunia ini. 
Aku sangat bersyukur karena dari sekian banyaknya orang yang kenal sama kamu, 
aku adalah salah satu orang yang paling bersyukur atas hadirnya dirimu di dunia ini.

Semoga dengan bertambahnya usiamu sekarang kamu menjadi pribadi yang lebih baik, sehat, murah rezeki, umur yang panjang dan bertanggung jawab.

Aku memang bukan perempuan pertama yang hadir dalam hidupmu, tapi aku berharap Tuhan akan menjadikan aku tujuan terakhirmu 🥰🫶🏻

Dan semoga Tuhan memberkati hubungan kita juga, melancarkan rezeki kita, menemani di setiap langkah dan rencana hidup kita ke depannya 🥰😘
`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-100 p-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl w-full"
      >
        {/* Judul */}
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Pesan Spesial Untukmu 💖
        </h1>

        {/* Video */}
        <div className="mb-8">
          <video
            autoPlay
            loop
            muted
            playsInline
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
          >
            <source src={vidioWishes} type="video/mp4" />
          </video>
        </div>

        {/* Pesan */}
        <motion.div
          whileHover={{ scale: isIOS ? 1 : 1.01 }}
          className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg mb-8"
        >
          <div className="prose max-w-none">
            {wishes.split("\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-pink-800 mb-4 text-lg leading-relaxed text-center"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Tombol */}
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: isIOS ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowHeart(!showHeart)}
            className="bg-pink-500 hover:bg-pink-600 transition-all duration-300 text-white px-8 py-3 rounded-full shadow-xl font-semibold"
          >
            {showHeart ? "Sembunyikan Cintaku 💔" : "Lihat Cintaku ❤️"}
          </motion.button>
        </div>

        {/* Popup Hati */}
        <AnimatePresence>
          {showHeart && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 p-4"
            >
              <div className="flex flex-col items-center">
                {/* Hati */}
                <motion.div
                  className="relative"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  <div className="text-[14rem] md:text-[16rem] leading-none text-center select-none">
                    ❤️
                  </div>

                  {/* Tulisan Dalam Hati */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                    <h2 className="text-white text-2xl md:text-4xl font-bold leading-tight drop-shadow-lg">
                      Anthonius <br />
                      Rival <br />
                      Ohoiwirin 💖
                    </h2>

                    <p className="text-white text-sm md:text-lg mt-3 drop-shadow-md">
                      Hatiku hanya untukmu sayang 🥹
                    </p>
                  </div>
                </motion.div>

                {/* Foto */}
                <motion.img
                  src={fotoHari}
                  alt="Foto Spesial"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-4 border-pink-300 shadow-2xl mt-6"
                />

                {/* Tombol Tutup */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowHeart(false)}
                  className="mt-6 bg-white text-pink-500 px-6 py-2 rounded-full font-semibold shadow-lg"
                >
                  Tutup 💕
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SpecialWishes;