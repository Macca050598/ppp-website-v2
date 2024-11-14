import { useState } from 'react';
import Button from './Button';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScfVQpSLa4f9IiduVU5MmaFIvmrstPYFsUU3FNAlrWdhfKDjw/formResponse';
    
    try {
      // Create a hidden iframe
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      // Create a form inside the iframe
      const form = iframe.contentWindow.document.createElement('form');
      form.method = 'POST';
      form.action = FORM_URL;

      // Add the email input
      const emailInput = iframe.contentWindow.document.createElement('input');
      emailInput.type = 'hidden';
      emailInput.name = 'entry.960151798'; // Replace with your entry ID
      emailInput.value = email;
      form.appendChild(emailInput);

      // Add form to iframe and submit
      iframe.contentWindow.document.body.appendChild(form);
      form.submit();

      // Clean up
      setTimeout(() => {
        document.body.removeChild(iframe);
      }, 1000);

      setStatus('success');
      setEmail('');
    } catch (err) {
      setStatus('error');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
        className="flex-1 h-11 px-4 bg-n-17 border border-n-6 rounded-lg focus:outline-none focus:border-n-1"
      />
      <Button type="submit" white disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Joining...' : 'Join Waitlist'}
      </Button>
      
      {status === 'success' && (
        <p className="text-green-500 mt-2">Thanks for joining our waitlist!</p>
      )}
      {status === 'error' && (
        <p className="text-red-500 mt-2">Something went wrong. Please try again.</p>
      )}
    </form>
  );
};

export default WaitlistForm; 