import * as motion from "motion/react-client"
import { Button } from "./ui/button";

const Navbar = () => {
  const navItems = ["ABOUT", "SERVICES", "WORKS"];
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center mt-8">
      <motion.div
       initial={{ opacity: 0, y: 20 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.6, delay: 0.2 }}
       className="min-w-3xl gap-20 flex justify-between items-center p-3 rounded-full bg-zinc-950">
        <div className="text-white ml-2 text-lg font-bold">MAISON PIXELS</div>
        <div className="flex items-center">
          {navItems.map((item) => (
            <button
              key={item}
              className="mx-2 px-3 py-1 font-semibold text-white cursor-pointer hover:text-zinc-200 transition"
            >
              {item}
            </button>
          ))}
          <div className="">
            <Button className="ml-4 font-bold cursor-pointer rounded-full" variant="outline" size="lg">
              CONNECT WITH US
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Navbar;
