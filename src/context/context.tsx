import { createContext, useState, ReactNode, useEffect } from "react";

// Define the type for a coffee item


// Define the CoffeeContextType with specific types
export interface CoffeeItem {
  id: number;
  title: string;
  image: string;
  
}

export interface CoffeeContextType {
  loading: boolean|null;
  hotCoffee: CoffeeItem[];
  icedCoffee: CoffeeItem[];
}
export const CoffeeContext = createContext<CoffeeContextType | null>(null);

interface GlobalStateProps {
  children: ReactNode;
}

function GlobalState({ children }: GlobalStateProps) {
  const [hotCoffee, setHotCoffee] = useState<CoffeeItem[]>([]);
  const [icedCoffee, setIcedCoffee] = useState<CoffeeItem[]>([]);
  const [loading, setLoading] = useState<boolean | null>(false);


  async function FetchData(): Promise<void> {
    setLoading(true);
    try {
      const responseIced = await fetch('https://api.sampleapis.com/coffee/iced');
      const dataIced: CoffeeItem[] = await responseIced.json();
      setIcedCoffee(dataIced);

      const responseHot = await fetch('https://api.sampleapis.com/coffee/hot');
      const dataHot: CoffeeItem[] = await responseHot.json();
      setHotCoffee(dataHot);

      setLoading(false);
    } catch {
      setLoading(false);
 
    }
  }

  useEffect(() => {
    FetchData();
  }, []);

  return (
    <CoffeeContext.Provider value={{ hotCoffee, icedCoffee, loading,  }}>
      {children}
    </CoffeeContext.Provider>
  );
}

export default GlobalState;
