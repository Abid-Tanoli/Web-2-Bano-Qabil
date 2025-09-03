import React, { useState } from "react";

const FeedBackList = ({ feedBacks, onDelete }) => {
  const [sortOrder, setSortOrder] = useState("");

  const getEmoji = (rating) => {
    const emojiMap = {
      1: "😡",
      2: "🙁",
      3: "😐",
      4: "🙂",
      5: "😀",
    };
    return emojiMap[rating];
  };

  const sortedFeedBacks = [...feedBacks].sort((a, b) => {
    if (!sortOrder) return 0;
    return sortOrder === "desc" ? b.rating - a.rating : a.rating - b.rating;
  });

  return (
    <div className="bg-blue-500 p-4 rounded-lg">
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setSortOrder("desc")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          High → Low
        </button>
        <button
          onClick={() => setSortOrder("asc")}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Low → High
        </button>
      </div>

      {sortedFeedBacks.length === 0 ? (
        <p className="text-gray-600">No feedback available</p>
      ) : (
        sortedFeedBacks.map((fb) => (
          <div
            key={fb.id}
            className="border rounded-lg p-4 mb-4 shadow-sm bg-white"
          >
            <p>
              <strong>Name:</strong> {fb.name}
            </p>
            <p>
              <strong>Email:</strong> {fb.email}
            </p>
            <p>
              <strong>Semester:</strong> {fb.semester}
            </p>
            <p>
              <strong>Department:</strong> {fb.department}
            </p>
            <p>
              <strong>Instructor:</strong> {fb.instructor}
            </p>
            <p className="text-xl">
              <strong>Rating:</strong> {getEmoji(Number(fb.rating))}
            </p>
            <p>
              <strong>Feedback:</strong> {fb.feedBackText}
            </p>
            <button
              onClick={() => onDelete(fb.id)}
              className="mt-3 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default FeedBackList;
