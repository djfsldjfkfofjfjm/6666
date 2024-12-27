import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackButton = () => {
  return (
    <Link
      to="/"
      className="inline-flex items-center text-gray-600 hover:text-gray-900 absolute top-4 left-4"
    >
      <ArrowLeft className="w-5 h-5 mr-1" />
      <span>На главную</span>
    </Link>
  );
};

export default BackButton;
