
import Footer from "./Footer";
import Navigation from "./Navigation";


interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        {children}
      </main>
<Footer/>
    </div>
  );
};

export default Layout;