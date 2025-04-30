import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-primary text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">MySite</h1>
      <div className="hidden md:flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
      <button className="md:hidden" onClick={() => setOpen(!open)}>
        {open ? "Close" : "Menu"}
      </button>
      {open && (
        <div className="md:hidden flex flex-col gap-2 mt-2">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;