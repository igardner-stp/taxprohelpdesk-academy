// Posts to the sign-out route handler (server clears the session cookie).
export function SignOutButton({ className = "" }: { className?: string }) {
  return (
    <form action="/auth/signout" method="post">
      <button
        type="submit"
        className={`text-sm font-medium text-navy-500 transition hover:text-navy-800 ${className}`}
      >
        Sign out
      </button>
    </form>
  );
}
