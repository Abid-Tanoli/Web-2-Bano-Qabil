import React, { useState } from "react";
import FeedBackList from "../components/FeedBackList";

const Feedback = () => {
  const [feedBack, setFeedBack] = useState({
    name: "",
    email: "",
    country: "",
    rating: "",
    feedBackText: "",
  });
  const [allFeedBack, setAllFeedBack] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedBack((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedBack.name.trim() || !feedBack.feedBackText.trim()) {
      setWarning("⚠️ Name and Feedback cannot be empty!");
      setTimeout(() => setWarning(""), 4000);
      return;
    }
    setAllFeedBack((prev) => [...prev, { ...feedBack, id: Date.now() }]);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
    setFeedBack({ name: "", email: "", country: "", rating: "", feedBackText: "" });
  };

  const handleDelete = (id) => setAllFeedBack((prev) => prev.filter((fb) => fb.id !== id));

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-800 text-center">Tourist Feedback</h1>

      {warning && <div className="mb-4 p-3 text-yellow-800 bg-yellow-100 border border-yellow-400 rounded-md text-center">{warning}</div>}
      {submitted && <p className="text-green-600 text-center text-lg font-semibold mb-4">✅ Feedback Submitted Successfully!</p>}

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-5 border">
        <div>
          <label className="block font-medium text-gray-700">Name</label>
          <input name="name" value={feedBack.name} onChange={handleChange} className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Email</label>
          <input name="email" value={feedBack.email} onChange={handleChange} type="email" className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Country</label>
          <input name="country" value={feedBack.country} onChange={handleChange} className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <p className="font-medium text-gray-800">Your Experience</p>
          <div className="flex gap-5 mt-2">
            {[1, 2, 3, 4, 5].map((v) => (
              <label key={v} className="cursor-pointer">
                <input type="radio" name="rating" value={v} checked={feedBack.rating === String(v)} onChange={handleChange} className="hidden" />
                <span className={`text-3xl ${feedBack.rating === String(v) ? "opacity-100 scale-125" : "opacity-50"}`}>{["😡","🙁","😐","🙂","😀"][v-1]}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-medium text-gray-700">Feedback</label>
          <textarea name="feedBackText" value={feedBack.feedBackText} onChange={handleChange} rows={4} className="w-full border rounded-lg px-3 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <button type="submit" disabled={submitted} className={`w-full py-2 rounded-lg font-semibold transition ${submitted ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"}`}>{submitted ? "Submitting..." : "Submit"}</button>
      </form>

      <div className="mt-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Previous Feedback</h2>
        {allFeedBack.length === 0 ? <p className="text-gray-600 text-center">No feedback submitted yet.</p> : <FeedBackList feedBacks={allFeedBack} onDelete={handleDelete} />}
      </div>
    </div>
  );
};

export default Feedback;
