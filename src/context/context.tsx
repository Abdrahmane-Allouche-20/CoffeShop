import { createContext, useState, ReactNode, useEffect } from "react";

interface CoffeeContextType {
  hotCoffee: any; // Ideally replace `any` with the correct type structure
  icedCoffee: any;
  loading: boolean;
  error: string | null;
  FetchData: () => Promise<void>;
}

export const CoffeeContext = createContext<CoffeeContextType | null>(null);

interface GlobalStateProps {
  children: ReactNode;
}

function GlobalState({ children }: GlobalStateProps) {
  const [hotCoffee, setHotCoffee] = useState<any>({});
  const [icedCoffee, setIcedCoffee] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  async function FetchData() {
    setLoading(true);
    try {
      const responseIced = await fetch('https://api.sampleapis.com/coffee/iced');
      const dataIced = await responseIced.json();
      if (dataIced) {
        setIcedCoffee(dataIced);
      }
      const responseHot = await fetch('https://api.sampleapis.com/coffee/hot');
      const dataHot = await responseHot.json();
      if (dataHot) {
        setHotCoffee(dataHot);
      }
      setLoading(false);
    } catch (e: any) {
      setLoading(false);
      setError(e.message);
    }
  }

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <CoffeeContext.Provider value={{ hotCoffee, icedCoffee, error, loading, FetchData }}>
       {children}
      
    </CoffeeContext.Provider>
  );
}

export default GlobalState;
