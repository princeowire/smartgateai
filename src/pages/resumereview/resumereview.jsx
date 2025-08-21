import React, { useState } from "react";
import { Upload, FileText, Wand2, Loader2 } from "lucide-react";

export default function ResumeReview() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [review, setReview] = useState("");
  const [suggestedJobs, setSuggestedJobs] = useState([]);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  const handleUpload = () => {
    if (!file) return;
    setLoading(true);

    // Simulate AI review
    setTimeout(() => {
      setReview(
        "Your resume highlights strong frontend development skills. " +
          "We suggest you apply for React/Next.js frontend roles, UI engineer, and design-focused developer positions."
      );

      setSuggestedJobs([
        "Frontend Developer (React/Next.js)",
        "UI Engineer",
        "Creative Web Developer",
        "Junior Fullstack Developer",
      ]);

      setLoading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-[#FFD700] p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6" style={{ color: "#C9A646" }}>
        Upload Your Resume
      </h1>

      {/* Upload Section */}
      <div
        className="border-2 border-dashed rounded-xl p-8 w-full max-w-xl flex flex-col items-center justify-center cursor-pointer"
        style={{ borderColor: "#C9A646" }}
      >
        <Upload className="w-10 h-10 mb-2" style={{ color: "#FFD700" }} />
        <p className="mb-2 text-[#E6C77C]">
          Drag & drop your resume here, or click to browse
        </p>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="hidden"
          id="resume-upload"
        />
        <label
          htmlFor="resume-upload"
          className="px-4 py-2 mt-2 rounded-lg font-medium cursor-pointer"
          style={{ backgroundColor: "#C9A646", color: "#000000" }}
        >
          Choose File
        </label>
      </div>

      {file && (
        <p className="mt-3 text-[#FFD700] flex items-center gap-2">
          <FileText className="w-5 h-5" /> {file.name}
        </p>
      )}

      {/* Upload Button */}
      {file && !loading && (
        <button
          onClick={handleUpload}
          className="px-6 py-3 mt-6 rounded-lg font-semibold flex items-center gap-2 transition-all"
          style={{ backgroundColor: "#FFD700", color: "#000" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#C9A646")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#FFD700")
          }
        >
          <Wand2 className="w-5 h-5" /> Review My Resume
        </button>
      )}

      {/* Loading State */}
      {loading && (
        <div className="mt-6 flex items-center gap-2 text-[#FFD700]">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Analyzing your resume...</span>
        </div>
      )}

      {/* Results */}
      {review && !loading && (
        <div
          className="mt-8 p-6 rounded-xl w-full max-w-2xl shadow-lg"
          style={{ backgroundColor: "#111", border: "1px solid #C9A646" }}
        >
          <h2 className="text-2xl font-bold mb-3" style={{ color: "#FFD700" }}>
            AI Review
          </h2>
          <p className="text-[#E6C77C] mb-4">{review}</p>

          <h3 className="text-xl font-semibold mb-2" style={{ color: "#FFD700" }}>
            Suggested Jobs
          </h3>
          <ul className="list-disc list-inside text-[#E6C77C]">
            {suggestedJobs.map((job, index) => (
              <li key={index}>{job}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
