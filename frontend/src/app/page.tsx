type Pepper = {
  id: number;
  name: string;
  type: string;
  color: string;
  height: string;
  yield: string;
};
export default async function Home() {
  const response = await fetch("http://localhost:8000/peppers");
  const data = (await response.json()) as Pepper[];

  console.log("data:", data);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      hello next app
      {data.map((pepper) => (
        <div key={pepper.id}>{pepper.name}</div>
      ))}
    </div>
  );
}
