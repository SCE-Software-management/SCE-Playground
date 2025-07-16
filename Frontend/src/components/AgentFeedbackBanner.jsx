import React, { useEffect, useState } from 'react';

export default function AgentFeedbackBanner() {
  const [feedbackNotifications, setFeedbackNotifications] = useState([]);
  const baseUrl = import.meta.env.VITE_GATEWAY_URL;

  useEffect(() => {
    fetch(`${baseUrl}/feedback/notifications`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch feedback notifications');
        return res.json();
      })
      .then(data => setFeedbackNotifications(data))
      .catch(err => {
        console.error('❌ Failed to load feedback notifications:', err);
      });
  }, [baseUrl]);

  const markAsRead = async (notificationId) => {
    try {
      await fetch(`${baseUrl}/feedback/notifications/${notificationId}/mark-read`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' }
      });
      setFeedbackNotifications(prev => prev.filter(n => n.id !== notificationId));
    } catch (err) {
      console.error('❌ Failed to mark as read:', err);
    }
  };

  const handleView = (n) => {
    const ratingText = typeof n.rating === 'number' ? `${n.rating} / 5` : 'N/A / 5';
    let msg = `⭐ Feedback for request #${n.supportRequestId}\n\nRating: ${ratingText}`;
    if (n.comment) msg += `\nComment: ${n.comment}`;
    window.alert(msg);
    markAsRead(n.id);
  };

  if (!feedbackNotifications.length) return null;

  return (
    <div style={{ backgroundColor: '#fff3cd', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
      <strong>🌟 New customer feedback received!</strong>
      {feedbackNotifications.map(n => (
        <div key={n.id} style={{ marginTop: '0.5rem' }}>
          Request #{n.supportRequestId}
          <button
            onClick={() => handleView(n)}
            style={{
              marginLeft: '10px',
              backgroundColor: '#ffc107',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '6px',
              color: 'black',
              cursor: 'pointer'
            }}
          >
            View Feedback
          </button>
        </div>
      ))}
    </div>
  );
}
