import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="border-t border-n-6 py-6 mt-auto">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-n-4 text-sm">
          © {new Date().getFullYear()}. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <Link 
            to="/privacy" 
            className="text-n-4 hover:text-n-1 text-sm transition-colors"
          >
            Privacy Policy
          </Link>
          <Link 
            to="/terms" 
            className="text-n-4 hover:text-n-1 text-sm transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
