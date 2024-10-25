import React from "react";

const ChatConversation = () => {
  const conversations = [
    {
      id: 1,
      role: "buyer",
      name: "John Doe",
      message: "Hai, saya tertarik dengan produk Anda. Apakah masih tersedia?",
      time: "10:00",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 2,
      role: "seller",
      name: "Store Admin",
      message: "Halo! Iya, produk masih tersedia. Ada yang bisa saya bantu?",
      time: "10:02",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 3,
      role: "buyer",
      name: "John Doe",
      message: "Saya ingin tanya, apakah tersedia warna lain?",
      time: "10:05",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 4,
      role: "seller",
      name: "Store Admin",
      message: "Untuk saat ini kami memiliki warna merah, biru, dan hitam. Warna mana yang Anda minati?",
      time: "10:07",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 5,
      role: "buyer",
      name: "John Doe",
      message: "Saya tertarik dengan warna hitam. Berapa harganya dan berapa lama pengirimannya?",
      time: "10:10",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 6,
      role: "seller",
      name: "Store Admin",
      message: "Untuk warna hitam harganya Rp 299.000. Pengiriman biasanya memakan waktu 2-3 hari kerja. Anda berminat untuk order?",
      time: "10:12",
      avatar: "/api/placeholder/40/40",
    },
  ];

  return (
    <div className="max-w-2xl p-4 mx-auto bg-gray-50 dark:bg-gray-900 rounded-xl">
      <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        {/* Header */}
        <div className="flex items-center justify-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Percakapan Penjual dan Pembeli</h2>
        </div>

        {/* Chat Container */}
        <div className="space-y-4">
          {conversations.map((chat) => (
            <div key={chat.id} className={`flex ${chat.role === "buyer" ? "justify-end" : "justify-start"}`}>
              <div className={`flex ${chat.role === "buyer" ? "flex-row-reverse" : "flex-row"} items-start max-w-[80%]`}>
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <img src={chat.avatar} alt={chat.name} className="w-8 h-8 rounded-full" />
                </div>

                {/* Message Bubble */}
                <div
                  className={`mx-3 ${
                    chat.role === "buyer"
                      ? "bg-blue-500 text-white rounded-l-xl rounded-br-xl"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-r-xl rounded-bl-xl"
                  } p-4 shadow-sm`}
                >
                  {/* Name */}
                  <div className="mb-1 text-sm font-medium">{chat.name}</div>

                  {/* Message */}
                  <div className="text-sm">{chat.message}</div>

                  {/* Time */}
                  <div className={`text-xs mt-1 ${chat.role === "buyer" ? "text-blue-100" : "text-gray-500 dark:text-gray-400"}`}>{chat.time}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="pt-4 mt-6 border-t dark:border-gray-700">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Ketik pesan..."
              className="flex-1 p-2 text-gray-800 bg-white border rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="px-4 py-2 text-white transition-colors bg-blue-500 rounded-lg hover:bg-blue-600">Kirim</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatConversation;
