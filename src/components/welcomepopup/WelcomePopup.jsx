// src/components/WelcomePopup.jsx
export default function WelcomePopup({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-sm w-full">
        <h2 className="text-2xl font-bold text-yellow-500">🎉 Welcome!</h2>
        <p className="mt-2 text-gray-700">
          This is your first login. We're glad to have you here!
        </p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
