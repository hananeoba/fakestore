import { Fragment, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import {
  MenuIcon,
  XIcon,
  HomeIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { toast } from "react-toastify";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();

  const handleLogout = async () => {
    await signOut();
    toast.success("Logout Successful!");
  };

  return (
    <nav className="bg-primary p-4">
      <div className="flex items-center">
        <div className="flex items-center flex-1 justify-between space-x-4">
          <Link href="/">
            <span className="text-white text-lg font-bold">Fake Store </span>
          </Link>
          <div className="lg:hidden self-start">
            <button
              className="text-white block lg:hidden focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="/"
            className={`flex items-center space-x-2 ${
              pathname === "/" ? "font-bold text-gray-600" : "text-white"
            }`}
          >
            <HomeIcon className="h-6 w-6" />
            <span>Home</span>
          </Link>
          {session ? (
            <Fragment>
              <Link
                href="/product"
                className={`flex items-center space-x-2 ${
                  pathname === "/product"
                    ? "font-bold text-gray-600"
                    : "text-white"
                }`}
              >
                <ShoppingBagIcon className="h-6 w-6" />
                <span>Products</span>
              </Link>
              <Link
                href="/cart"
                className={`flex items-center space-x-2 ${
                  pathname === "/cart"
                    ? "font-bold text-gray-600"
                    : "text-white"
                }`}
              >
                <ShoppingCartIcon className="cursor-pointer w-6 h-6 " />

                <span>Cart</span>
              </Link>
              <button
                onClick={handleLogout}
                className="text-white cursor-pointer"
              >
                Logout
              </button>
            </Fragment>
          ) : (
            <Fragment>
              <Link href="/login">
                <span
                  className={` ${
                    pathname === "/login"
                      ? "font-bold text-gray-600"
                      : "text-white"
                  }`}
                >
                  Login
                </span>
              </Link>
              <Link href="/register">
                <span
                  className={` ${
                    pathname === "/register"
                      ? "font-bold text-gray-600"
                      : "text-white"
                  }`}
                >
                  Register
                </span>
              </Link>
            </Fragment>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden mt-4 ">
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className={`flex items-center space-x-2 ${
                pathname === "/" ? "font-bold text-gray-600" : "text-white"
              }`}
            >
              <HomeIcon className="h-6 w-6 " />
              <span>Home</span>
            </Link>
            {session ? (
              <>
                <Link
                  href="/product"
                  className={`flex items-center space-x-2 ${
                    pathname === "/product"
                      ? "font-bold text-gray-600"
                      : "text-white"
                  }`}
                >
                  <ShoppingBagIcon className="h-6 w-6" />
                  <span>Products</span>
                </Link>
                <Link
                  href="/cart"
                  className={`flex items-center space-x-2 ${
                    pathname === "/cart"
                      ? "font-bold text-gray-600"
                      : "text-white"
                  }`}
                >
                  <ShoppingCartIcon className="cursor-pointer w-6 h-6 " />

                  <span>Cart</span>
                </Link>
                <button onClick={handleLogout} className="text-white">
                  Logout
                </button>
              </>
            ) : (
              <Fragment>
                <Link href="/login">
                  <span
                    className={` ${
                      pathname === "/login"
                        ? "font-bold text-gray-600"
                        : "text-white"
                    }`}
                  >
                    Login
                  </span>
                </Link>
                <Link href="/register">
                  <span
                    className={` ${
                      pathname === "/register"
                        ? "font-bold text-gray-600"
                        : "text-white"
                    }`}
                  >
                    Register
                  </span>
                </Link>
              </Fragment>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
