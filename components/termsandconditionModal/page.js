import { useState } from 'react';
import Link from 'next/link';

const TermsAndConditionsModal = ({ isOpen, onClose, onAccept }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleAccept = () => {
    if (isChecked) {
      onAccept();
    } else {
      alert('Please accept the terms and conditions');
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
          
          {/* Close button at top-right */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600 focus:outline-none"
          >
            X
          </button>

          <h2 className="text-2xl font-bold mb-4">Terms and Conditions</h2>
          <p className="mb-4">
            Please read and accept the terms and conditions and privacy policy before continuing.
            {/* Add actual terms here or link to a separate terms page */}
          </p>
          <Link href="/terms-and-conditions" className="text-blue-500 underline mb-4 block"  target='_blank'>
            Read Full Terms and Conditions
          </Link>
          <Link href="/privacy-policy" className="text-blue-500 underline mb-4 block" target='_blank'>
            Read Privacy Policy
          </Link>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="accept-terms"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className="mr-2"
            />
            <label htmlFor="accept-terms">I accept the terms and conditions</label>
          </div>

          <button
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
            onClick={handleAccept}
          >
            Accept and Continue
          </button>
        </div>
      </div>
    )
  );
};

export default TermsAndConditionsModal;
