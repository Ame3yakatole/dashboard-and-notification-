import React from 'react';
import NotificationSection from '../components/NotificationSection';

const Notification = () => {
  const notifications = [
    { id: 1, title: "Cybersecurity Essentials", update: "New session added on zero-trust architecture.", date: "2024-06-26" },
    { id: 2, title: "Cloud Computing Trends", update: "Added new case studies on edge computing.", date: "2024-06-23" },
    { id: 3, title: "Software Development Best Practices", update: "Updated session on microservices architecture.", date: "2024-06-28" },
    { id: 4, title: "Emerging Technologies in IT", update:  " Update session on Emerging new technologies in IT sectors.", date: "2024-06-30" },
    { id: 5, title: "Data Science & Analytics", update: "New session for Data science & analytics from basics to Pro.", date: "2024-07-16" },
  ];

  return (
    <div>
      <NotificationSection notifications={notifications} />
    </div>
  );
};

export default Notification;
