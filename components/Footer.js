import Link from 'next/link';

function Footer() {
  return (
    <footer>
      <p className='promotion'>
        <Link href='https://nextjs.org/'> Next.JS </Link>
        and<Link href='https://hygraph.com/'> GraphCMS </Link> powered Blog made
        with ❤️ by
        <Link href='https://www.fiverr.com/rohit_saini_7/get-your-website-built-reactjs'>
          {' '}
          Rohit
        </Link>
      </p>
    </footer>
  );
}

export default Footer;

//  <Link href='/'>statistichecrazytime</Link>;
