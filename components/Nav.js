import Link from 'next/link';

function Nav() {
  return (
    <nav>
      <h1 className='heading'>statistichecrazytime</h1>
      <div className='navLinks'>
        <Link href='/'>Home</Link>
      </div>
    </nav>
  );
}

export default Nav;
