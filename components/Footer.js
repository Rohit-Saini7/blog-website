import Link from 'next/link';

function Footer() {
  return (
    <footer>
      <p className='promotion'>
        <Link href='/'> Next.JS </Link>
        and<Link href='/'> GraphCMS </Link> powered Blog made with ❤️ by
        <Link href='https://rohitsaini.tech/'> Rohit</Link>
      </p>
    </footer>
  );
}

export default Footer;

//  <Link href='/'>statistichecrazytime</Link>;
