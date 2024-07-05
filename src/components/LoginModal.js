import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaApple } from "react-icons/fa";
import { MdOutlineVpnKey } from "react-icons/md";

const LoginModal = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white py-14 px-24 rounded-lg shadow-lg w-2/5">
        <h2 className="text-2xl font-bold text-black mb-4 text-center">Sign In</h2>
        <p className="text-center text-gray-500 mb-8">Please enter your detail</p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
              <input
                type="email"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg text-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <div className="relative">
              <MdOutlineVpnKey className="absolute left-3 top-4 text-gray-400" />
              <input
                type="password"
                className="w-full p-3 pl-10 border border-gray-300 rounded-lg text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-right mt-2">
              <a href="#" className="text-red-600 text-sm">Forgot password</a>
            </div>
          </div>
          <button type="submit" className="bg-red-600 text-white w-full py-2 rounded-lg mb-6">Sign In</button>
        </form>
        <div className="flex items-center mb-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-2 text-gray-500">Or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4 mb-6">
          <button className="bg-white border border-gray-300 p-2 rounded-full">
            <FcGoogle className="text-2xl" />
          </button>
          <button className="bg-white text-black border border-gray-300 p-2 rounded-full">
            <FaApple className="text-2xl" />
          </button>
        </div>
        <p className="text-center text-gray-500">Don't have an account? <a href="#" className="text-red-600">Sign Up for free</a></p>
        <button onClick={onClose} className="mt-4 text-gray-500 block mx-auto">Cancel</button>
      </div>
    </div>
  );
};

export default LoginModal;
