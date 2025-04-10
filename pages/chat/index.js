import { useState, useEffect } from "react";

export default function Home() {
  const initialMessages = [
    {
      text: "Xin chào! Tên tôi Nguyễn Hồng Hải, Tôi là Tiến sĩ Khoa Học Y tế. Chào mừng bạn đến với trang web chính thức của tui.",
      delay: 2000,
    },
    {
      text: "Tại đây, tui cung cấp các chuẩn đoán miễn phí và các khuyến nghị dành riêng cho từng căn bệnh giúp hàng ngàn người ở Việt Nam giảm đau đầu gối, lưng, cổ và hông.",
      delay: 3000,
    },
    {
      text: "Để nhận được kết quả của tui, vui lòng trả lời một số câu hỏi.",
      delay: 2000,
    },
  ];

  const questions = [
    {
      text: "Bạn có thường xuyên bị đau ở đầu gối, lưng, xương chậu hoặc cổ không?",
      delay: 2000,
    },
    {
      text: "Bạn đã bao giờ cảm thấy yếu cơ và khó chịu?",
      delay: 2000,
    },
    {
      text: "Bạn đang bị sưng và đỏ ở khớp?",
      delay: 2000,
    },
    {
      text: "Bạn có hút thuốc và không theo chế độ ăn kiêng?",
      delay: 2000,
    },
  ];

  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Chỉ số cho tin nhắn ban đầu
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Chỉ số cho câu hỏi
  const [isInitialPhase, setIsInitialPhase] = useState(true); // Giai đoạn tin nhắn ban đầu

  // Hiển thị các tin nhắn ban đầu
  useEffect(() => {
    if (isInitialPhase && currentIndex < initialMessages.length) {
      setIsTyping(true);

      const typingTimeout = setTimeout(() => {
        setIsTyping(false);
        setDisplayedMessages((prev) => [...prev, { text: initialMessages[currentIndex].text, isDoctor: true }]);
        setCurrentIndex((prev) => prev + 1);
      }, 1500);

      return () => clearTimeout(typingTimeout);
    } else if (isInitialPhase && currentIndex >= initialMessages.length) {
      // Sau khi hiển thị hết tin nhắn ban đầu, chuyển sang câu hỏi đầu tiên
      setIsTyping(true);
      const typingTimeout = setTimeout(() => {
        setIsTyping(false);
        setDisplayedMessages((prev) => [...prev, { text: questions[0].text, isDoctor: true }]);
        setCurrentQuestionIndex(1); // Chuyển sang câu hỏi tiếp theo
        setIsInitialPhase(false); // Kết thúc giai đoạn ban đầu
        setShowButtons(true); // Hiển thị nút ngay sau câu hỏi đầu tiên
      }, 1500);

      return () => clearTimeout(typingTimeout);
    }
  }, [currentIndex, isInitialPhase]);

  // Tự động chạy lại useEffect sau mỗi tin nhắn ban đầu
  useEffect(() => {
    if (isInitialPhase && currentIndex > 0 && currentIndex < initialMessages.length) {
      const delayTimeout = setTimeout(() => {
        setCurrentIndex((prev) => prev);
      }, initialMessages[currentIndex].delay || 2000);

      return () => clearTimeout(delayTimeout);
    }
  }, [currentIndex, isInitialPhase]);

  // Xử lý khi người dùng nhấn nút
  const handleButtonClick = (answer) => {
    // Thêm câu trả lời của người dùng vào danh sách tin nhắn
    setDisplayedMessages((prev) => [...prev, { text: answer, isDoctor: false }]);
    setShowButtons(false);

    // Hiển thị câu hỏi tiếp theo nếu còn
    if (currentQuestionIndex < questions.length) {
      setIsTyping(true);
      const typingTimeout = setTimeout(() => {
        setIsTyping(false);
        setDisplayedMessages((prev) => [...prev, { text: questions[currentQuestionIndex].text, isDoctor: true }]);
        setCurrentQuestionIndex((prev) => prev + 1);
        setShowButtons(true); // Hiển thị nút ngay sau mỗi câu hỏi
      }, 1500);

      return () => clearTimeout(typingTimeout);
    } else {
      // Nếu đã hết câu hỏi, hiển thị thông báo kết thúc
      setIsTyping(true);
      const typingTimeout = setTimeout(() => {
        setIsTyping(false);
        setDisplayedMessages((prev) => [...prev, { text: "Cảm ơn bạn đã trả lời! Tui sẽ phân tích và đưa ra kết quả ngay.", isDoctor: true }]);
      }, 1500);

      return () => clearTimeout(typingTimeout);
    }
  };

  // Hàm xác định màu sắc dựa trên câu trả lời
  const getAnswerColor = (answer) => {
    switch (answer) {
      case "Có":
        return "bg-green-100";
      case "Không":
        return "bg-red-100";
      case "Luôn Luôn":
        return "bg-yellow-100";
      case "Hiếm Khi":
        return "bg-blue-100";
      default:
        return "bg-gray-200";
    }
  };

  return (
    <div className="h-screen w-full bg-gray-100 flex flex-col items-center p-4 overflow-hidden">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg flex flex-col h-full">
        <h1 className="text-center text-lg font-bold p-4">
          Thoát khỏi cơn đau khớp. Một lần và mãi mãi.
        </h1>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {displayedMessages.map((message, index) => {
            const isDoctorMessage = message.isDoctor;
            const showAvatar =
              isDoctorMessage &&
              (index === 0 || !displayedMessages[index - 1].isDoctor); // Chỉ hiển thị avatar ở dòng đầu tiên của bác sĩ

            return (
              <div key={index} className="space-y-2">
                <div
                  className={`flex space-x-2 animate-fadeIn ${
                    isDoctorMessage ? "justify-start" : "justify-end"
                  }`}
                >
                  {isDoctorMessage && showAvatar && (
                    <img
                      src="bac-sy.jpg"
                      alt="Avatar"
                      className="w-10 h-10 rounded-full"
                    />
                  )}
                  {isDoctorMessage && !showAvatar && <div className="w-10 h-10" />} {/* Placeholder để căn chỉnh */}
                  <div
                    className={`p-3 rounded-lg max-w-xs ${
                      isDoctorMessage
                        ? "bg-gray-200"
                        : getAnswerColor(message.text)
                    }`}
                  >
                    <p>{message.text}</p>
                  </div>
                </div>
                {/* Hiển thị nút ngay bên dưới câu hỏi của bác sĩ */}
                {isDoctorMessage &&
                  index === displayedMessages.length - 1 &&
                  showButtons && (
                    <div className="flex justify-center space-x-2 animate-fadeIn">
                      <button
                        onClick={() => handleButtonClick("Có")}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                      >
                        Có
                      </button>
                      <button
                        onClick={() => handleButtonClick("Không")}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                      >
                        Không
                      </button>
                      <button
                        onClick={() => handleButtonClick("Luôn Luôn")}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                      >
                        Luôn Luôn
                      </button>
                      <button
                        onClick={() => handleButtonClick("Hiếm Khi")}
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                      >
                        Hiếm Khi
                      </button>
                    </div>
                  )}
              </div>
            );
          })}
          {isTyping && (
            <div className="flex items-start space-x-2">
              <img
                src="https://via.placeholder.com/40"
                alt="Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="bg-gray-200 p-3 rounded-lg max-w-xs flex items-center space-x-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce1"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce2"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce3"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}