// Composant pour afficher les nombres correctement en mode RTL
export function NumberDisplay({ children }: { children: React.ReactNode }) {
  return (
    <span className="ltr-number" dir="ltr">
      {children}
    </span>
  );
}
