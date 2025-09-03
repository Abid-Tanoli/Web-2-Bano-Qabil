import React, { useState } from "react";
import FeedBackList from "./Components/FeedBackList";

const App = () => {
  const [feedBack, setFeedBack] = useState({
    name: "",
    email: "",
    semester: "",
    department: "",
    instructor: "",
    rating: "",
    feedBackText: "",
  });

  const [allFeedBack, setAllFeedBack] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedBack((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!feedBack.name.trim() || !feedBack.feedBackText.trim()) {
      setWarning("⚠️ Name and Feedback cannot be empty!");
      setTimeout(() => setWarning(""), 4000);
      return;
    }

    const userFeedBackCount = allFeedBack.filter(
      (fb) => fb.email === feedBack.email
    ).length;

    if (userFeedBackCount >= 5) {
      setWarning("⚠️ You cannot submit more than 5 feedbacks.");
      setTimeout(() => setWarning(""), 4000);
      return;
    }

    setAllFeedBack((prev) => [...prev, { ...feedBack, id: Date.now() }]);

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);

    setFeedBack({
      name: "",
      email: "",
      semester: "",
      department: "",
      instructor: "",
      rating: "",
      feedBackText: "",
    });
  };

  const handleDelete = (id) => {
    setAllFeedBack((prev) => prev.filter((fb) => fb.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-violet-400 via-red-100 to-lime-200 lg:bg-amber-50 ">
      <h2 className="text-4xl font-bold text-center text-blue-800 mb-6">
        Students Feedback Portal
      </h2>

      {warning && (
        <div className="max-w-2xl mx-auto mb-4 p-4 text-lg text-yellow-800 bg-yellow-100 border border-amber-400 rounded-lg shadow-md text-center transition duration-500">
          {warning}
        </div>
      )}

      {submitted && (
        <p className="text-green-600 text-center text-2xl font-semibold mb-4">
          ✅ Feedback Submitted Successfully!
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-indigo-100 rounded-lg p-6 space-y-5"
      >
        <div>
          <label htmlFor="name" className="block font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            required
            value={feedBack.name}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="email" className="block font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
            value={feedBack.email}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label htmlFor="semester" className="block font-medium text-gray-700">
            Semester
          </label>
          <select
            name="semester"
            id="semester"
            value={feedBack.semester}
            required
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select</option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="department"
            className="block font-medium text-gray-700"
          >
            Department
          </label>
          <select
            name="department"
            id="department"
            value={feedBack.department}
            required
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select</option>
            <option value="CS">Computer Science</option>
            <option value="SE">Software Engineering</option>
            <option value="AI">Artificial Intelligence</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="instructor"
            className="block font-medium text-gray-700"
          >
            Instructor
          </label>
          <input
            type="text"
            name="instructor"
            id="instructor"
            placeholder="Enter instructor name"
            required
            value={feedBack.instructor}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <p className="font-medium text-gray-800">Give Rating</p>
          <div className="flex flex-wrap justify-center gap-6 mt-1">
            {[
              { value: 1, emoji: "😡" },
              { value: 2, emoji: "🙁" },
              { value: 3, emoji: "😐" },
              { value: 4, emoji: "🙂" },
              { value: 5, emoji: "😀" },
            ].map(({ value, emoji }) => (
              <label
                key={value}
                className="flex flex-wrap items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  id={`rating-${value}`}
                  name="rating"
                  value={value}
                  checked={feedBack.rating === String(value)}
                  onChange={handleChange}
                  className="hidden"
                />
                <span
                  className={`text-4xl transition ${
                    feedBack.rating === String(value)
                      ? "scale-125"
                      : "opacity-60"
                  }`}
                >
                  {emoji}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label
            htmlFor="feedBackText"
            className="block font-medium text-gray-700"
          >
            Feedback
          </label>
          <textarea
            name="feedBackText"
            id="feedBackText"
            placeholder="Please enter your feedback here..."
            required
            rows={5}
            value={feedBack.feedBackText}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={submitted}
          className={`w-full py-2 rounded-lg font-semibold transition duration-300 ${
            submitted
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700 text-white"
          }`}
        >
          {submitted ? "Submitting..." : "Submit"}
        </button>
      </form>

      <div className="max-w-2xl mx-auto mt-8">
        <h2 className="text-3xl font-bold text-gray-900 text-center justify-center mb-4">
          Feedback List
        </h2>
        {allFeedBack.length === 0 ? (
          <p className="text-gray-800 text-2xl p-6">
            No feedback submitted yet.
          </p>
        ) : (
          <FeedBackList feedBacks={allFeedBack} onDelete={handleDelete} />
        )}
      </div>
    </div>
  );
};

export default App;
