import type { Role } from "@/lib/types";

// Client-safe (no server imports) so both client and server can use it.
export function roleHome(role: Role | null | undefined): string {
  switch (role) {
    case "admin":
      return "/admin";
    case "bureau_supervisor":
      return "/bureau";
    case "learner":
      return "/learn";
    default:
      return "/login";
  }
}

export const ROLE_LABEL: Record<Role, string> = {
  admin: "Admin",
  bureau_supervisor: "Bureau Supervisor",
  learner: "Learner",
};
