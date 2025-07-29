import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const reactions = [
  { name: 'Like', emoji: '👍' },
  { name: 'Love', emoji: '❤️' },
  { name: 'Angry', emoji: '😠' },
  { name: 'Sad', emoji: '😢' },
];

const guitarPosts = [
  {
    id: 1,
    model: 'Jackson Soloist SL2Q',
    author: 'Tamjid Ahmed',
    date: '28 July 2025',
    description: 'My custom finish Jackson Soloist! Absolutely shreds.',
  },
  {
    id: 2,
    model: 'Jackson Rhoads RRX24',
    author: 'Oni Hasan',
    date: '27 July 2025',
    description: 'Just picked this beast up. Tone is killer!',
  },
  {
    id: 3,
    model: 'Jackson Dinky DK2',
    author: 'Marty Friedman',
    date: '26 July 2025',
    description: 'Can’t stop riffing with this one!',
  },
  {
    id: 4,
    model: 'Jackson King V KVXMG',
    author: 'Alice Cooper',
    date: '25 July 2025',
    description: 'V-shaped goodness for metal solos.',
  },
  {
    id: 5,
    model: 'Jackson Kelly KEXMG',
    author: 'Alexi Laiho',
    date: '24 July 2025',
    description: 'Sharp looks and a punchy sound.',
  },
  {
    id: 6,
    model: 'Jackson Warrior WRXMG',
    author: 'Steve Vai',
    date: '23 July 2025',
    description: 'Perfect for heavy riffs and stage presence.',
  },
];

const commentData = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  author: `User ${i + 1}`,
  date: `29 July 2025`,
  content: `Great guitar! Love that finish.`,
}));

const POSTS_PER_PAGE = 2;
const COMMENTS_PER_PAGE = 2;

function LandingPage() {
  const [postReactions, setPostReactions] = useState({});
  const [commentReactions, setCommentReactions] = useState({});
  const [currentPage, setCurrentPage] = useState(1);

  const paginatedPosts = guitarPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const paginatedComments = commentData.slice(
    (currentPage - 1) * COMMENTS_PER_PAGE,
    currentPage * COMMENTS_PER_PAGE
  );

  const totalPages = Math.max(
    Math.ceil(guitarPosts.length / POSTS_PER_PAGE),
    Math.ceil(commentData.length / COMMENTS_PER_PAGE)
  );

  const handleReactionClick = (postId, reactionName) => {
    setPostReactions((prev) => ({
      ...prev,
      [postId]: prev[postId] === reactionName ? null : reactionName,
    }));
  };

  const handleCommentReactionClick = (commentId, reactionName) => {
    setCommentReactions((prev) => ({
      ...prev,
      [commentId]: prev[commentId] === reactionName ? null : reactionName,
    }));
  };

  return (
    <div className="page-container">
      <p className="breadcrumb">
        <Link to="/guitars">Guitars</Link> &gt;{' '}
        <Link to="/guitars/jackson" target="_blank">Jackson Showcase</Link>
      </p>

      <h2 className="page-title">🎸 Jackson Guitars Community Showcase</h2>
      <p className="page-subtitle">
        Share your Jackson guitars with the community and get feedback!
      </p>

      {paginatedPosts.map((post) => (
        <div key={post.id} className="guitar-post">
          <h3>{post.model}</h3>
          <p className="guitar-meta">
            <Link to="/profile">{post.author}</Link> — {post.date}
          </p>
          <p>{post.description}</p>
          <div className="reactions">
            {reactions.map(({ name, emoji }) => (
              <button
                key={name}
                onClick={() => handleReactionClick(post.id, name)}
                className={postReactions[post.id] === name ? 'selected' : ''}
              >
                {emoji} {name}
              </button>
            ))}
          </div>
        </div>
      ))}

      <div className="comments-section">
        <h4>{commentData.length} Comments</h4>
        <input type="text" placeholder="Write your comment..." />
        <button className="send">➡️</button>

        {paginatedComments.map((comment) => (
          <div key={comment.id} className="comment">
            <div className="comment-meta">
              <strong>{comment.author}</strong> — {comment.date}{' '}
              <span className="report">Report</span>
            </div>
            <p>{comment.content}</p>
            <div className="comment-reactions">
              {reactions.map(({ name, emoji }) => (
                <button
                  key={name}
                  onClick={() => handleCommentReactionClick(comment.id, name)}
                  className={commentReactions[comment.id] === name ? 'selected' : ''}
                >
                  {emoji} {name}
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
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
