
import React from 'react';
import ChatWidget from '../components/ChatWidget';

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md h-[600px]">
        <ChatWidget />
      </div>
    </div>
  );
};

export default Index;
