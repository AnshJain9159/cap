import React, { useState } from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useToast } from './ui/use-toast';
import { useNavigate } from 'react-router-dom';


const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const {toast} = useToast();
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/user/signOut', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        // Show the toast notification
        toast({
          title: "LogOut Successfully",
          description: "Logout Successful",
        });
        
        setTimeout(() => {
          navigate('/'); // Redirect to home page
        }, 2000);
      } else {
        console.error('Failed to sign out');
      }
    } catch (error) {
      console.error('An error occurred during sign out:', error);
    }
  };
  
  return (
    <>
      <nav className="bg-black text-white flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-yellow-500">
          <img src="/logoofnavbar.jpg" className="w-[150px] md:w-[250px]" alt="LOGO" />
        </div>

        <div className="hidden mr-44 md:flex space-x-8">
          <a href="/Home" className="text-yellow-500 text-2xl font-medium">HOME</a>
          <a href="/buildteam" className="hover:text-yellow-500 text-2xl font-medium">TEAM</a>
          <a href="/hackathons" className="hover:text-yellow-500 text-2xl font-medium">HACKATHONS</a>
          <a href="/about" className="hover:text-yellow-500 text-2xl font-medium">ABOUT</a>
        </div>

        <div className="w-10 h-10 hidden rounded-full overflow-hidden md:flex justify-center items-center border-2 border-green-500">
          <Button
            className="w-full h-full"
            onClick={toggleDropdown}
          >
            <PersonOutlineIcon />
          </Button>

          {dropdownOpen && (
            <div className="absolute right-0 mt-40 px-4 space-y-2 py-2 w-48 bg-black text-white rounded-lg shadow-lg flex-col justify-center items-center">
              <div>
                <a href="/edit-profile" className="text-black rounded-xl font-semibold block px-4 py-2 text-center text-lg bg-white">Edit Profile</a>
              </div>
              <div>
                <a href="/" className="text-black rounded-xl font-semibold block px-4 py-2 text-center text-lg bg-white"
                  onClick={() => {
                  handleLogout();
                  }}
                >
                  Log Out
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleSidebar}>
            {isOpen ? <CloseIcon className="text-yellow-500" /> : <MenuIcon className="text-yellow-500" />}
          </button>
        </div>
      </nav>

      <div className={`fixed top-0 left-0 w-64 h-full bg-black transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} z-50`}>
        <div className="flex flex-col items-center space-y-8 mt-20">
          <a href="/Home" className="text-yellow-500 text-xl font-medium" onClick={closeSidebar}>HOME</a>
          <a href="/buildteam" className="text-white text-xl font-medium hover:text-yellow-500" onClick={closeSidebar}>TEAM</a>
          <a href="/hackathons" className="text-white text-xl font-medium hover:text-yellow-500" onClick={closeSidebar}>HACKATHONS</a>
          <a href="/about" className="text-white text-xl font-medium hover:text-yellow-500" onClick={closeSidebar}>ABOUT</a>
          <a href="/edit-profile" className="text-white text-xl font-medium hover:text-yellow-500" onClick={closeSidebar}>EDIT PROFILE</a>
          <a href="#" className="text-white text-xl font-medium hover:text-yellow-500" onClick={closeSidebar}>STATUS</a>
          <a
            href="/"
            className="text-white text-xl font-medium hover:text-yellow-500"
            onClick={() => {
              // Prevent default link behavior
              handleLogout(); // Handle logout
            }}
          >
            LOG OUT
          </a>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={closeSidebar}></div>
      )}
    </>
  );
};

export default Navbar;
