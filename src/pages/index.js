import api from "@/api";

const links = await api.links.fetch();

export default function Home() {
  return (
    <main>
      <h1>Hola</h1>
      {links.map((l) => (
        <div key={l.name}>
          <p>{l.name}</p>
          <p>{l.age}</p>
          <img src={`${l.img}`} alt="" />
        </div>
      ))}
    </main>
  );
}
