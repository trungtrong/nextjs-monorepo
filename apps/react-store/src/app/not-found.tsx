import Link from 'next/link'

export default function NotFound() {
  /**
   * We cannot add “redirect('/');” in NotFound component
   * because in Home page ('/') and during compilation, Home page is re-compiled repeatedly
   */
  // redirect('/');

  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}