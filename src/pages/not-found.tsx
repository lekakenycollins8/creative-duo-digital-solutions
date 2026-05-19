import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-8xl font-black gradient-text font-['Playfair_Display']">404</h1>
        <h2 className="text-2xl font-bold text-foreground font-['Inter']">Page Not Found</h2>
        <p className="text-muted-foreground font-['Inter']">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="custom-gradient text-white">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
