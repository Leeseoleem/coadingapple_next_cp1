export default function Layout({ children }) {
  return (
    <div>
      <p className="flex flex-col p-3 bg-cyan-500">현대카드 무이자이벤트중</p>
      {children}
    </div>
  );
}
