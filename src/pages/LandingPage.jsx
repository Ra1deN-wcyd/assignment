import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const reactions = ['Like', 'Love', 'Angry', 'Sad'];
const commentData = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  author: `Author Name`,
  date: `10 February 2025`,
  content: `Lorem Ipsum Dolor Lorem Ipsum Dolor`,
}));

const COMMENTS_PER_PAGE = 2;

function LandingPage() {
  const [selectedReaction, setSelectedReaction] = useState('');
  const [commentReactions, setCommentReactions] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const handleReactionClick = (reaction) => {
    setSelectedReaction(reaction);
  };

  const handleCommentReactionClick = (commentId, reaction) => {
    setCommentReactions({ ...commentReactions, [commentId]: reaction });
  };

  const paginatedComments = commentData.slice(
    (currentPage - 1) * COMMENTS_PER_PAGE,
    currentPage * COMMENTS_PER_PAGE
  );

  const totalPages = Math.ceil(commentData.length / COMMENTS_PER_PAGE);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {/* ✅ Fixed line 38 */}
      <p>
        <Link to="/section">Section</Link> &gt; <Link to="/section/sub-section">Sub-section</Link>
      </p>

      <h2><strong>Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor</strong></h2>
      <p>Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor...</p>
      <div style={{ backgroundColor: 'darkred', height: '150px', margin: '20px 0' }}></div>

      <p>
        <Link to="/profile">
          <span style={{ color: 'blue', fontWeight: 'bold' }}>Author Name</span>
        </Link> — 7 January 2025
      </p>

      <p>Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor...</p>

      <div style={{ borderTop: '1px solid #ccc', marginTop: 20, paddingTop: 10 }}>
        {reactions.map((reaction) => (
          <button
            key={reaction}
            onClick={() => handleReactionClick(reaction)}
            style={{
              marginRight: 10,
              backgroundColor: selectedReaction === reaction ? '#007bff' : '#eee',
              color: selectedReaction === reaction ? 'white' : 'black',
              padding: '5px 10px',
              border: 'none',
              borderRadius: 5,
            }}
          >
            {reaction}
          </button>
        ))}
      </div>

      <h4 style={{ marginTop: 30 }}>{commentData.length} Comments</h4>
      <div style={{ backgroundColor: '#f0f0f5', padding: 15, borderRadius: 8 }}>
        <input
          type="text"
          placeholder="Write your comment..."
          style={{ width: '80%', padding: 8, borderRadius: 4, marginRight: 10 }}
        />
        <button>➡️</button>

        {paginatedComments.map((comment) => (
          <div key={comment.id} style={{ marginTop: 20 }}>
            <strong>{comment.author}</strong> — {comment.date} &nbsp;
            <span style={{ color: 'blue', cursor: 'pointer' }}>Report</span>
            <p>{comment.content}</p>
            {reactions.map((reaction) => (
              <button
                key={reaction}
                onClick={() => handleCommentReactionClick(comment.id, reaction)}
                style={{
                  marginRight: 8,
                  backgroundColor: commentReactions[comment.id] === reaction ? '#007bff' : '#ddd',
                  color: commentReactions[comment.id] === reaction ? '#fff' : '#000',
                  border: 'none',
                  borderRadius: 5,
                  padding: '3px 7px',
                }}
              >
                {reaction}
              </button>
            ))}
          </div>
        ))}

        <div style={{ marginTop: 20 }}>
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              style={{
                margin: '0 5px',
                padding: '5px 10px',
                backgroundColor: currentPage === index + 1 ? '#333' : '#eee',
                color: currentPage === index + 1 ? '#fff' : '#000',
                border: 'none',
                borderRadius: 4,
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
