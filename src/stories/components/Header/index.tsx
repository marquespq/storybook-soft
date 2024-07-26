import { Button } from "../Button";

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
  imageUrl?: string;
  ariaLabel?: string;
  role?: string;
}

export const Header = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  imageUrl = "https://cdn-icons-png.flaticon.com/512/74/74472.png",
  ariaLabel,
  role,
}: HeaderProps) => (
  <header
    className="text-black py-4 px-4 md:px-6 lg:px-8 border-b-2"
    aria-label={ariaLabel}
    role={role}
  >
    <div className="container mx-auto flex flex-wrap justify-between items-center">
      <div className="flex items-center space-x-4">
        <img
          src={imageUrl}
          alt="Logo"
          className="h-10 w-10 rounded-full object-cover"
          aria-hidden="true"
        />
      </div>
      <div className="flex-shrink-0">
        {user ? (
          <div className="flex gap-4 items-center">
            <span className="text-base">
              <b>{user.name}</b>!
            </span>
            <Button
              size="small"
              onClick={onLogout}
              label="Log out"
              aria-label="Log out"
            />
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <Button
              size="small"
              onClick={onLogin}
              label="Log in"
              aria-label="Log in"
            />
            <Button
              variant="primary"
              size="small"
              onClick={onCreateAccount}
              label="Sign up"
              aria-label="Sign up"
            />
          </div>
        )}
      </div>
    </div>
  </header>
);
